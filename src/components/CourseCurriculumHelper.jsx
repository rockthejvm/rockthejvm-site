import { useEffect, useState } from "react";

let lectureSectionData = [];

export default function Example(props) {
  // For local testing

  // const localData = [
  //   {
  //     name: "Welcome",
  //     lectures: [
  //       {
  //         name: "Welcome!",
  //       },
  //       {
  //         name: "Kotlin Essentials Recap",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Mastering the Type System",
  //     lectures: [
  //       {
  //         name: "Lambdas with Receivers and DSLs",
  //       },
  //       {
  //         name: "DSLs: Exercise",
  //       },
  //       {
  //         name: "Advanced Generics and Variance",
  //       },
  //       {
  //         name: "Variance Positions",
  //       },
  //       {
  //         name: "Type Aliases",
  //       },
  //       {
  //         name: "Delegated Properties",
  //       },
  //       {
  //         name: "Delegated Properties in the Standard Library",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Kotlin Internals",
  //     lectures: [
  //       {
  //         name: "Contracts",
  //       },
  //       {
  //         name: "Inline Functions",
  //       },
  //       {
  //         name: "Reified Types",
  //       },
  //       {
  //         name: "Reflection: Basics",
  //       },
  //       {
  //         name: "Reflection: Types",
  //       },
  //       {
  //         name: "Reflection: Annotations",
  //       },
  //       {
  //         name: "Reflection: Exercise",
  //       },
  //       {
  //         name: "Reflection: Recap",
  //       },
  //       {
  //         name: "Kotlin Symbol Processing (KSP)",
  //       },
  //     ],
  //   },
  //   {
  //     name: "Epilogue",
  //     lectures: [
  //       {
  //         name: "Congratulations!",
  //       },
  //     ],
  //   },
  // ];
  // const [lectureSections, setLectureSections] = useState(localData);

  const [lectureSections, setLectureSections] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const getCourseCurriculum = async (pricingPlanId) => {
    try {
      const response = await fetch(`/api/purchase/${pricingPlanId}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const course = await response.json();

      lectureSectionData = course.updatedLectureSections;
      setLectureSections(course.updatedLectureSections);
    } catch (error) {
      console.error("Failed to fetch course price:", error);
    }
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
    const fetchPrice = async () => {
      await getCourseCurriculum(props.pricingPlanId);
    };

    // For local testing
    // lectureSectionData = localData;

    collapse();
    fetchPrice();
  }, []);

  return (
    <div className="mx-auto max-w-3xl">
      {lectureSections.map((section) => (
        <ul role="list" className="mx-auto divide-y divide-gray-100">
          <li className="flex justify-between gap-x-6 py-5">
            <div className="w-full">
              <div className="mb-4 min-w-0 flex-auto bg-secondary pl-4">
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
                        href={`/courses/${props.courseSlug}/lectures/${lecture.id}`}
                        className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm hover:bg-accent-1 hover:text-gray-100 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </div>
  );
}
