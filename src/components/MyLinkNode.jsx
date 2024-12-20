import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

export default memo(({ data, isConnectable }) => {
  const handleClick = () => {
    window.open(data.href, "_blank");
  };

  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "#d4edda"; // light green
      case "intermediate":
        return "#fff3cd"; // light yellow
      case "advanced":
        return "#f8d7da"; // light red
      default:
        return "#fff"; // default white
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: getBackgroundColor(data.difficulty),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={handleClick}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      {data.label || "Clickable Node"}
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
});
