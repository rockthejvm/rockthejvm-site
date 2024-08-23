import type { ReactNode } from "react";

// export default function Example({ children }: { children: ReactNode }) {
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
//       <div className="mx-auto max-w-3xl">{children}</div>
//     </div>
//   );
// }

// export default function Example({ children }: { children: ReactNode }) {
//   return (
//     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
//   );
// }
export default function Example(props: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-0 z-10">
      {props.children}
    </div>
  );
}
