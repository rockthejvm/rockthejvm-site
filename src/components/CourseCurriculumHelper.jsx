import { useState, useEffect } from "react";

export default function Example(props) {
  const localData = [
    {
      name: "Welcome",
      lectures: [
        {
          name: "Welcome!",
        },
        {
          name: "Kotlin Essentials Recap",
        },
      ],
    },
    {
      name: "Mastering the Type System",
      lectures: [
        {
          name: "Lambdas with Receivers and DSLs",
        },
        {
          name: "DSLs: Exercise",
        },
        {
          name: "Advanced Generics and Variance",
        },
        {
          name: "Variance Positions",
        },
        {
          name: "Type Aliases",
        },
        {
          name: "Delegated Properties",
        },
        {
          name: "Delegated Properties in the Standard Library",
        },
      ],
    },
    {
      name: "Kotlin Internals",
      lectures: [
        {
          name: "Contracts",
        },
        {
          name: "Inline Functions",
        },
        {
          name: "Reified Types",
        },
        {
          name: "Reflection: Basics",
        },
        {
          name: "Reflection: Types",
        },
        {
          name: "Reflection: Annotations",
        },
        {
          name: "Reflection: Exercise",
        },
        {
          name: "Reflection: Recap",
        },
        {
          name: "Kotlin Symbol Processing (KSP)",
        },
      ],
    },
    {
      name: "Epilogue",
      lectures: [
        {
          name: "Congratulations!",
        },
      ],
    },
  ];

  const [lectureSections, setLectureSections] = useState(localData);

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

      // setLectureSections(course.updatedLectureSections);
    } catch (error) {
      console.error("Failed to fetch course price:", error);
    }
  };

  useEffect(() => {
    const fetchPrice = async () => {
      await getCourseCurriculum(props.pricingPlanId);
    };

    fetchPrice();
  }, []);

  return (
    <div class="mx-auto max-w-3xl">
      {lectureSections.map((section) => (
        <ul role="list" class="divide-y divide-gray-100 mx-auto">
          <li class="flex justify-between gap-x-6 py-5">
            <div class="w-full">
              <div class="bg-secondary min-w-0 flex-auto pl-4 mb-4">
                <h3 class="py-4 pl-4">{section.name}</h3>
              </div>
              <div>
                <ul role="list" class="">
                  {section.lectures.map((lecture) => (
                    <li class="flex justify-between gap-x-6 py-2">
                      <div class="flex min-w-0 gap-x-4">
                        <p>{lecture.name}</p>
                      </div>
                      <a
                        href="#"
                        class="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-gray-100 hover:text-gray-100 hover:no-underline shadow-sm hover:bg-accent-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </div>
  );
}
