export default function Example(props) {
  return (
    <div className="flex-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div
        className={"bg-[url(' h-[10em] w-[100%] bg-cover" + props.image + "')]"}
      ></div>
      <div className="h-[20em] w-[100%]">
        {props.children}
        {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
      </div>
    </div>
  );
}
