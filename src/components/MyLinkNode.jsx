import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

export default memo(({ data, isConnectable }) => {
  const handleClick = () => {
    window.open(data.href, "_blank");
  };

  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "bg-difficulty-beginner";
      case "intermediate":
        return "bg-difficulty-intermediate";
      case "advanced":
        return "bg-difficulty-advanced";
      default:
        return "bg-white";
    }
  };

  const getShadowColor = (difficulty) => {
    switch (difficulty) {
      case "beginner":
        return "shadow-difficulty-beginner";
      case "intermediate":
        return "shadow-difficulty-intermediate";
      case "advanced":
        return "shadow-difficulty-advanced";
      default:
        return "shadow-white";
    }
  };

  return (
    <div className={`${data.isCurrent ? "roadmap-node-border card" : ""}`}>
      <div
        style={{
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={handleClick}
        className={`${getBackgroundColor(data.difficulty)} inner`}
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
    </div>
  );
});
