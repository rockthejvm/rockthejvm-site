import { Handle, Position } from "@xyflow/react";
import { memo } from "react";

export default memo(({ data, isConnectable }) => {
  const handleClick = () => {
    window.open(data.href, "_blank");
  };

  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#fff",
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
