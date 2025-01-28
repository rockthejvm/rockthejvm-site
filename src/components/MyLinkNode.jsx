import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

export default memo(({ data, isConnectable }) => {
  const handleClick = () => {
    window.open(data.href, "_blank");
  };

  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-difficulty-beginner"; // light green
      case "intermediate":
        return "bg-difficulty-intermediate"; // light yellow
      case "advanced":
        return "bg-difficulty-advanced"; // light red
      default:
        return "bg-white"; // default white
    }
  };

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={handleClick}
      className={`${getBackgroundColor(data.difficulty)}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <span className="text-content">{data.label || "Clickable Node"}</span>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
});
