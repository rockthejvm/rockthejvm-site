// import dagre from "@dagrejs/dagre";
// import {
//   addEdge,
//   Background,
//   ConnectionLineType,
//   Panel,
//   ReactFlow,
//   useEdgesState,
//   useNodesState,
// } from "@xyflow/react";
// import { useCallback } from "react";

// import type { ReactFlowEdge, ReactFlowNode } from "@types/ReactFlow";
// import "@xyflow/react/dist/style.css";

// const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

// const nodeWidth = 172;
// const nodeHeight = 36;

// interface Props {
//   nodes: ReactFlowNode[];
//   edges: ReactFlowEdge[];
// }

// const getLayoutedElements = (nodes, edges, direction = "TB") => {
//   const isHorizontal = direction === "LR";
//   dagreGraph.setGraph({ rankdir: direction });

//   nodes.forEach((node) => {
//     dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
//   });

//   edges.forEach((edge) => {
//     dagreGraph.setEdge(edge.source, edge.target);
//   });

//   dagre.layout(dagreGraph);

//   const newNodes = nodes.map((node) => {
//     const nodeWithPosition = dagreGraph.node(node.id);
//     const newNode = {
//       ...node,
//       targetPosition: isHorizontal ? "left" : "top",
//       sourcePosition: isHorizontal ? "right" : "bottom",
//       // We are shifting the dagre node position (anchor=center center) to the top left
//       // so it matches the React Flow node anchor point (top left).
//       position: {
//         x: nodeWithPosition.x - nodeWidth / 2,
//         y: nodeWithPosition.y - nodeHeight / 2,
//       },
//     };

//     return newNode;
//   });

//   return { nodes: newNodes, edges };
// };

// export default function App(props: Props) {
//   const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
//     props.nodes,
//     props.edges,
//   );
//   const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) =>
//         addEdge(
//           { ...params, type: ConnectionLineType.SmoothStep, animated: true },
//           eds,
//         ),
//       ),
//     [],
//   );
//   const onLayout = useCallback(
//     (direction) => {
//       const { nodes: layoutedNodes, edges: layoutedEdges } =
//         getLayoutedElements(nodes, edges, direction);

//       setNodes([...layoutedNodes]);
//       setEdges([...layoutedEdges]);
//     },
//     [nodes, edges],
//   );

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       connectionLineType={ConnectionLineType.SmoothStep}
//       fitView
//       style={{ backgroundColor: "#F7F9FB" }}
//     >
//       <Panel position="top-right">
//         <button onClick={() => onLayout("TB")}>vertical layout</button>
//         <button onClick={() => onLayout("LR")}>horizontal layout</button>
//       </Panel>
//       <Background />
//     </ReactFlow>
//   );
// }

import {
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";
import { type ReactFlowEdge, type ReactFlowNode } from "../types/ReactFlow.ts";

interface Props {
  initialNodes: ReactFlowNode[];
  initialEdges: ReactFlowEdge[];
}

const getLayoutedElements = (
  nodes: ReactFlowNode[],
  edges: ReactFlowEdge[],
) => {
  return { nodes, edges };
};

const LayoutFlow = ({ initialNodes, initialEdges }: Props) => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onLayout = useCallback(() => {
    const layouted = getLayoutedElements(nodes, edges);

    setNodes([...layouted.nodes]);
    setEdges([...layouted.edges]);

    window.requestAnimationFrame(() => {
      fitView();
    });
  }, [nodes, edges]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
    />
  );
};

export default function (props: Props) {
  return (
    <ReactFlowProvider>
      <LayoutFlow {...props} />
    </ReactFlowProvider>
  );
}
