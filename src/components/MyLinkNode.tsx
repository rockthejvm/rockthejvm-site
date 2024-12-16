import { Handle, NodeProps } from "@xyflow/react";
import { FC } from "react";

const MyLinkNode: FC<NodeProps> = ({ data }) => {
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
        background: "#fff",
      }}
    >
      <a
        href={data.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077cc", textDecoration: "none" }}
      >
        {data.label}
      </a>
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

export default MyLinkNode;
