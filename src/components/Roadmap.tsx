import {
  addEdge,
  Controls,
  MiniMap,
  ReactFlow,
  useEdgesState,
  useNodesState,
  type Connection,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  {
    id: "kotlin-essentials",
    position: { x: 0, y: 0 },
    data: { label: "kotlin-essentials" },
  },
  {
    id: "kotlin-coroutines-and-concurrency",
    position: { x: 0, y: 100 },
    data: { label: "kotlin-coroutines-and-concurrency" },
  },
  {
    id: "advanced-kotlin",
    position: { x: 0, y: 200 },
    data: { label: "advanced-kotlin" },
  },
];
// const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

interface Props {
  initialEdges: Connection[];
}

export default function App(props: Props) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}
