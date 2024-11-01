import { sendTeachableRequest } from "@utils/sendTeachableRequest";

interface Env {
  TEACHABLE_API_KEY: string;
}

enum AttachmentKind {
  TEXT = "text",
  NATIVE_COMMENTS = "native comments",
  VIDEO = "video",
  IMAGE = "image",
  PDF = "pdf",
  QUIZ = "quiz",
  CODE_DISPLAY = "code display",
  CODE_EMBED = "code embed",
  UPSELL = "upsell",
}

interface PricingPlan {
  price: number;
  course_id: number;
}

interface Attachment {
  id: number;
  name?: string;
  kind: AttachmentKind;
  url?: string;
  text?: string;
  position: number;
  file_size?: number;
  file_extension?: string;
  quiz?: unknown;
}

interface Lecture {
  id: number;
  position: number;
  is_published: boolean;
  name?: string;
  lecture_section_id?: number;
  attachments?: Attachment[];
}

interface LectureSection {
  id: number;
  name: string;
  is_published: boolean;
  position: number;
  lectures: Lecture[];
}

interface Course {
  name: string;
  heading: string;
  is_published: boolean;
  image_url?: string;
  lecture_sections: LectureSection[];
}

const getPricingPlan = async (
  pricingPlanId: number,
  apiKey: string,
): Promise<Response> =>
  await sendTeachableRequest(
    new URL(
      `https://developers.teachable.com/v1/pricing_plans/${pricingPlanId}`,
    ),
    apiKey,
  );

const getCourse = async (courseId: number, apiKey: string): Promise<Response> =>
  await sendTeachableRequest(
    new URL(`https://developers.teachable.com/v1/courses/${courseId}`),
    apiKey,
  );

const getLecture = async (
  courseId: number,
  lectureId: number,
  apiKey: string,
): Promise<Response> =>
  await sendTeachableRequest(
    new URL(
      `https://developers.teachable.com/v1/courses/${courseId}/lectures/${lectureId}`,
    ),
    apiKey,
  );

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function onRequestGet(context: EventContext): PagesFunction<Env> {
  const { env, params } = context;
  const apiKey = env.TEACHABLE_API_KEY;
  const pricingPlanId = Number(params.id);

  if (!pricingPlanId) {
    return new Response("No pricingPlanId found", { status: 404 });
  }

  const pricingPlanResponse = await getPricingPlan(pricingPlanId, apiKey);

  if (!pricingPlanResponse.ok) {
    return new Response(
      JSON.stringify({
        error: `Teachable request failed. Couldn't find pricing plan.`,
      }),
      {
        status: pricingPlanResponse.status,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { pricing_plan: pricingPlan }: { pricing_plan: PricingPlan } =
    await pricingPlanResponse.json();
  const { price, course_id: courseId } = pricingPlan;
  const courseResponse = await getCourse(courseId, apiKey);
  const { course }: { course: Course } = await courseResponse.json();
  const { name, heading, lecture_sections: lectureSections } = course;
  const updatedLectureSections = await Promise.all(
    lectureSections
      .filter((lectureSection) => lectureSection.is_published)
      .sort((a, b) => (a.position < b.position ? -1 : 1))
      .map(async (lectureSection) => ({
        name: lectureSection.name,
        lectures: await Promise.all(
          lectureSection.lectures
            .filter((lecture) => lecture.is_published)
            .sort((a, b) => (a.position < b.position ? -1 : 1))
            .map(async (lecture, index) => {
              await delay(index * 1000); // Delay each request by 1 second multiplied by the index
              const lectureData = await getLecture(
                courseId,
                lecture.id,
                context.env.TEACHABLE_API_KEY,
              );
              const lectureJson = await lectureData.json();
              return {
                id: lecture.id,
                name: (lectureJson["lecture"] as Lecture).name,
              };
            }),
        ),
      })),
  );

  return new Response(
    JSON.stringify({
      heading,
      name,
      price,
      updatedLectureSections,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
    },
  );
}
