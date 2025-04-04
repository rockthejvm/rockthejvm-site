"use client";

import { Maximize, Minus, Plus } from "lucide-react";
import * as React from "react";

import { Panel, useReactFlow, useStore, useViewport } from "@xyflow/react";

import { Button } from "@/assets/components/ui/button";
import { Slider } from "@/assets/components/ui/slider";
import { cn } from "@/assets/lib/utils";

const ZoomSlider = React.forwardRef<
  HTMLDivElement,
  Omit<React.HTMLProps<HTMLDivElement>, "children">
>(({ className, ...props }, ref) => {
  const { zoom } = useViewport(),
    { zoomTo, zoomIn, zoomOut, fitView } = useReactFlow(),
    { minZoom, maxZoom } = useStore(
      (state) => ({
        minZoom: state.minZoom,
        maxZoom: state.maxZoom,
      }),
      (a, b) => a.minZoom !== b.minZoom || a.maxZoom !== b.maxZoom,
    );

  return (
    <Panel
      className={cn(
        "flex gap-1 rounded-md bg-neutral-50 p-1 text-neutral-950 dark:bg-neutral-900 dark:text-neutral-50",
        className,
      )}
      {...props}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={async () => zoomOut({ duration: 300 })}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Slider
        className="w-[140px]"
        value={[zoom]}
        min={minZoom}
        max={maxZoom}
        step={0.01}
        onValueChange={async (values) => zoomTo(values[0])}
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={async () => zoomIn({ duration: 300 })}
      >
        <Plus className="h-4 w-4" />
      </Button>
      <Button
        className="min-w-20 tabular-nums"
        variant="ghost"
        onClick={async () => zoomTo(1, { duration: 300 })}
      >
        {(100 * zoom).toFixed(0)}%
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={async () => fitView({ duration: 300 })}
      >
        <Maximize className="h-4 w-4" />
      </Button>
    </Panel>
  );
});

ZoomSlider.displayName = "ZoomSlider";

export { ZoomSlider };
