"use client";

import {
  Background,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import ELK from "elkjs/lib/elk.bundled.js";
import { useCallback, useEffect, useState } from "react";
import { ZoomSlider } from "../assets/components/zoom-slider";

import "@xyflow/react/dist/style.css";
import MyLinkNode from "./MyLinkNode";

const elk = new ELK();

const elkOptions = {
  "elk.algorithm": "layered",
  "elk.layered.spacing.nodeNodeBetweenLayers": "100",
  "elk.spacing.nodeNode": "80",
};

const getLayoutedElements = (nodes, edges, options = {}) => {
  const isHorizontal = options?.["elk.direction"] === "RIGHT";
  const graph = {
    id: "root",
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition: isHorizontal ? "left" : "top",
      sourcePosition: isHorizontal ? "right" : "bottom",

      width:
        node.data.label.length > 30
          ? 400
          : node.data.label.length > 20
            ? 300
            : 150,
      height: 50,
    })),
    edges: edges,
  };

  return elk
    .layout(graph)
    .then((layoutedGraph) => ({
      nodes: layoutedGraph.children.map((node) => ({
        ...node,
        position: { x: node.x, y: node.y },
      })),

      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};

const nodeTypes = {
  linkNode: MyLinkNode,
};

function Legend({ open }) {
  const [detailsOpen, setDetailsOpen] = useState(open);

  const handleClick = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <div className="mt-24 w-36 rounded-md bg-secondary p-2">
      <details open={open} onClick={handleClick}>
        <summary className="cursor-pointer list-none px-4 text-content-1 sm:px-6">
          <div className="flex flex-row items-center justify-start">
            <h2 className="inline max-w-full text-xl">Legend</h2>&nbsp;
            <span className="text-xl">{detailsOpen ? "⮛" : "➣"}</span>
          </div>
        </summary>

        <div className="legend mt-4 text-content-1">
          <div className="legend-item">
            <span className="legend-color beginner"></span> Beginner
          </div>
          <div className="legend-item">
            <span className="legend-color intermediate"></span> Intermediate
          </div>
          <div className="legend-item">
            <span className="legend-color advanced"></span> Advanced
          </div>

          <div className="legend-item">
            <span className="legend-line"></span> Required
          </div>
          <div className="legend-item">
            <span className="legend-line dashed"></span> Optional
          </div>
        </div>
      </details>
    </div>
  );
}

function LayoutFlow({ initialNodes, initialEdges }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { fitView } = useReactFlow();

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  const onLayout = useCallback(
    ({ direction, useInitialNodes = false }) => {
      const opts = { "elk.direction": direction, ...elkOptions };
      const ns = useInitialNodes ? initialNodes : nodes;
      const es = useInitialNodes ? initialEdges : edges;

      getLayoutedElements(ns, es, opts).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);

          window.requestAnimationFrame(() => fitView());
        },
      );
    },
    [nodes, edges],
  );

  useEffect(() => {
    onLayout({ direction: "RIGHT", useInitialNodes: true });
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      edges={edges}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      // fitView
      style={{ backgroundColor: "#F7F9FB" }}
    >
      <Panel position="top-right" className="pr-16">
        <ZoomSlider />
        <Legend open={false} />
      </Panel>
      <Background />
    </ReactFlow>
  );
}

export default function (props) {
  return (
    <ReactFlowProvider>
      <LayoutFlow
        initialNodes={props.initialNodes}
        initialEdges={props.initialEdges}
      />
    </ReactFlowProvider>
  );
}
