import { Handle, Position } from "@xyflow/react";
import { Match } from "effect";
import { memo } from "react";

export default memo(({ data, isConnectable }) => {
  const handleClick = () => {
    window.open(data.href, "_blank");
  };

  const getBackgroundColor = (difficulty) =>
    Match.value(difficulty).pipe(
      Match.when("beginner", () => "bg-difficulty-beginner"),
      Match.when("intermediate", () => "bg-difficulty-intermediate"),
      Match.when("advanced", () => "bg-difficulty-advanced"),
      Match.orElse(() => "bg-white"),
    );

  const getShadowColor = (difficulty) =>
    Match.value(difficulty).pipe(
      Match.when("beginner", () => "shadow-difficulty-beginner"),
      Match.when("intermediate", () => "shadow-difficulty-intermediate"),
      Match.when("advanced", () => "shadow-difficulty-advanced"),
      Match.orElse(() => "shadow-white"),
    );

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
