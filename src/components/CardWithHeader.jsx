export default function Example(props) {
  return (
    <div className="flex-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div
        className={"w-[100%] h-[10em] bg-cover bg-[url('" + props.image + "')]"}
      ></div>
      <div className="w-[100%] h-[20em]">
        {props.children}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  );
}
