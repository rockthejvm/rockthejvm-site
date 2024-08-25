import { useState, useEffect } from "react";

export default function Example(props) {
  const [lectureSections, setLectureSections] = useState([]);

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

      setLectureSections(course.updatedLectureSections);
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
    <div>
      {lectureSections.map((section) => (
        <div>
          <h3>{section.name}</h3>
          {section.lectures.map((lecture) => {
            <p>{lecture.name}</p>;
          })}
        </div>
      ))}
    </div>
  );
}
