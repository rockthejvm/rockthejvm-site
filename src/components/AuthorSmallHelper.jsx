export default function Example(props) {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
        >
          <path
            d="M0 0l200 200M0 200L200 0"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div>
        <a href={props.authorURL} className="text-blue-500">
          <h4 className="text-lg font-bold text-green-500">
            {props.authorName}
          </h4>
        </a>
      </div>
    </div>
  );
}
