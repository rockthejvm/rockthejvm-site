import { sendRequest } from "@utils/sendRequest";

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
  quiz?: any;
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

const getLecture = async (
  courseId: number,
  lecture: Lecture,
  apiKey: string,
): Promise<Lecture> => {
  const res = await fetch(
    `https://developers.teachable.com/v1/courses/${courseId}/lectures/${lecture.id}`,
    {
      method: "GET",
      headers: {
        apiKey: apiKey,
        accept: "application/json",
      },
    },
  );

  return await res.json();
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const { params } = context;
  const pricingPlanId = params.id;
  const apiUrl = `https://developers.teachable.com/v1/pricing_plans/${pricingPlanId}`;
  const res = await sendRequest(apiUrl, {
    method: "GET",
    headers: {
      apiKey: `${context.env.TEACHABLE_API_KEY}`,
      accept: "application/json",
    },
  });

  const pricingPlan: PricingPlan = (await res.json())["pricing_plan"];
  const { price, course_id: courseId } = pricingPlan;

  const courseRes = await fetch(
    `https://developers.teachable.com/v1/courses/${courseId}`,
    {
      method: "GET",
      headers: {
        apiKey: `${context.env.TEACHABLE_API_KEY}`,
        accept: "application/json",
      },
    },
  );

  const course: Course = (await courseRes.json())["pricing_plan"];
  const { name, heading, lecture_sections: lectureSections } = course;

  for (var i = 0; i < lectureSections.length; i++) {
    const lectureSection = lectureSections[i];
    const lectures: Lecture[] = await Promise.all(
      lectureSection!.lectures.map(
        async (lecturePreview) =>
          await getLecture(
            courseId,
            lecturePreview,
            context.env.TEACHABLE_API_KEY,
          ),
      ),
    );

    lectureSections[i]!.lectures = lectures;
  }

  return new Response(
    JSON.stringify({
      heading,
      name,
      price,
      lectureSections,
    }),
  );
};
