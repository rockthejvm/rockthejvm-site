export interface ReactFlowNode {
  id: string;
  position: {
    x: number;
    y: number;
  };
  data: {
    label: string;
  };
}

export interface ReactFlowEdge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}
