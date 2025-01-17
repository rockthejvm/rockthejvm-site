"use client";

import Dagre from "@dagrejs/dagre";
import {
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect } from "react";

import "@xyflow/react/dist/style.css";
import MyLinkNode from "./MyLinkNode";

const getLayoutedElements = (nodes, edges, options) => {
  const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: options.direction });

  edges.forEach((edge) => g.setEdge(edge.source, edge.target));
  nodes.forEach((node) =>
    g.setNode(node.id, {
      ...node,
      width: node.measured?.width ?? 0,
      height: node.measured?.height ?? 0,
    }),
  );

  Dagre.layout(g);

  return {
    nodes: nodes.map((node) => {
      const position = g.node(node.id);
      const x = position.x - (node.measured?.width ?? 0) / 2;
      const y = position.y - (node.measured?.height ?? 0) / 2;

      return { ...node, position: { x, y } };
    }),
    edges,
  };
};

const LayoutFlow = ({ initialNodes, initialEdges }) => {
  const { fitView } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  var doit;

  const onLayout = useCallback(
    (direction) => {
      console.log(nodes);
      const layouted = getLayoutedElements(nodes, edges, { direction });

      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);

      window.requestAnimationFrame(() => {
        fitView();
      });
    },
    [nodes, edges],
  );

  const handleResize = () => {
    if (window.innerWidth < 1060) {
      setTimeout(() => onLayout("LR"), 0);
    } else {
      setTimeout(() => onLayout("TB"), 0);
    }
  };

  const clickButton = () => {
    document.getElementById("layoutButton").click();
  };

  useEffect(() => {
    window.onresize = function () {
      clearTimeout(doit);
      doit = setTimeout(clickButton, 100);
    };

    setTimeout(clickButton, 200);
  }, []);

  const nodeTypes = {
    linkNode: MyLinkNode,
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      fitView
      nodeTypes={nodeTypes}
    >
      <Panel position="top-right">
        <button id="layoutButton" hidden onClick={() => handleResize()}>
          vertical layout
        </button>
      </Panel>
    </ReactFlow>
  );
};

export default function (props) {
  return (
    <ReactFlowProvider>
      <LayoutFlow {...props} />
    </ReactFlowProvider>
  );
}
