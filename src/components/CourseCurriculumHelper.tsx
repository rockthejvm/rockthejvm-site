import { sendTeachableRequest } from "@utils/sendTeachableRequest";
import { useEffect, useState } from "react";

interface Props {
  pricingPlanId: number;
  courseSlug: string;
  color: string;
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

interface CourseResponse {
  updatedLectureSections: LectureSection[];
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

let lectureSectionData: LectureSection[] = [];

export default function Example(props: Props) {
  const [lectureSections, setLectureSections] = useState<LectureSection[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);

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

  const getCourse = async (
    courseId: number,
    apiKey: string,
  ): Promise<Response> =>
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

  const getTeachableCurriculum = async (pricingPlanId: number) => {
    setLoading(true);
    const apiKey = import.meta.env.PUBLIC_REACT_APP_API_KEY || "";
    const pricingPlanResponse = await getPricingPlan(pricingPlanId, apiKey);

    const { pricing_plan: pricingPlan }: { pricing_plan: PricingPlan } =
      await pricingPlanResponse.json();
    const { course_id: courseId } = pricingPlan;
    const courseResponse = await getCourse(courseId, apiKey);
    const { course }: { course: Course } = await courseResponse.json();
    const { lecture_sections: lectureSections } = course;
    const updatedLectureSections: LectureSection[] = await Promise.all(
      lectureSections
        .filter((lectureSection) => lectureSection.is_published)
        .sort((a, b) => (a.position < b.position ? -1 : 1))
        .map(
          async (lectureSection) =>
            ({
              name: lectureSection.name,
              lectures: await Promise.all(
                lectureSection.lectures
                  .filter((lecture) => lecture.is_published)
                  .sort((a, b) => (a.position < b.position ? -1 : 1))
                  .map(async (lecture) => ({
                    id: lecture.id,
                    name: (
                      (
                        await (
                          await getLecture(courseId, lecture.id, apiKey)
                        ).json()
                      )["lecture"] as Lecture
                    ).name,
                  })),
              ),
            }) as LectureSection,
        ),
    );

    // lectureSectionData = course.updatedLectureSections;
    lectureSectionData = updatedLectureSections;
    if (lectureSectionData.length === 1) {
      setLectureSections(lectureSectionData);
      setLoading(false);
    } else if (lectureSectionData.length >= 2) {
      setLectureSections([lectureSectionData[0], lectureSectionData[1]]);
      setLoading(false);
    }
    // setLectureSections(updatedLectureSections);
    setExpanded(false);
  };

  // Show all lecture sections when expanded
  const expand = () => {
    setLectureSections(lectureSectionData);
    setExpanded(true);
  };

  // Only show first two lecture sections when collapsed
  const collapse = () => {
    setExpanded(false);
    if (lectureSectionData.length === 1) {
      setLectureSections(lectureSectionData);
    } else if (lectureSectionData.length >= 2) {
      setLectureSections([lectureSectionData[0], lectureSectionData[1]]);
    }
  };

  useEffect(() => {
    // const fetchPrice = async () => {
    //   await getTeachableCurriculum(props.pricingPlanId);
    // };
    const call = async () => {
      const response = await fetch(`/api/purchase/${props.pricingPlanId}`);
      const course: CourseResponse = (await response.json()) as CourseResponse;
      lectureSectionData = course.updatedLectureSections;
      if (lectureSectionData.length === 1) {
        setLectureSections(lectureSectionData);
        setLoading(false);
      } else if (lectureSectionData.length >= 2) {
        setLectureSections([lectureSectionData[0], lectureSectionData[1]]);
        setLoading(false);
      }
      // setLectureSections(updatedLect`ureSections);
      setExpanded(false);
    };

    // For local testing
    // lectureSectionData = localData;

    collapse();
    // fetchPrice();
    call();
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      {lectureSections.map((section) => (
        <ul role="list" className="mx-auto divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="w-full">
              <div
                className="mb-4 min-w-0 flex-auto pl-4"
                style={{ background: props.color }}
              >
                <h3 className="py-4 pl-4">{section.name}</h3>
              </div>
              <div>
                <ul role="list" className="">
                  {section.lectures.map((lecture) => (
                    <li className="flex justify-between gap-x-6 py-2">
                      <div className="flex min-w-0 gap-x-4">
                        <p>{lecture.name}</p>
                      </div>
                      <a
                        href={`https://rockthejvm.com/courses/${props.courseSlug}/lectures/${lecture.id}`}
                        style={{ background: props.color }}
                        className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-content-1 shadow-sm hover:bg-accent-1 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Start
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        </ul>
      ))}
      {loading && <h3 className="text-center text-content-2">Loading...</h3>}
      {!loading && (
        <div className="mx-auto my-4 flex justify-center text-5xl">
          {!expanded && (
            <button
              className="px-2 text-content-2 ring-1 ring-content-2"
              onClick={expand}
            >
              ↓
            </button>
          )}
          {expanded && (
            <button
              className="px-2 text-content-2 ring-1 ring-content-2"
              onClick={collapse}
            >
              ↑
            </button>
          )}
        </div>
      )}
    </div>
  );
}
