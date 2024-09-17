export default function Example(props) {
  return (
    <div className="mb-2 mt-6 flex">
      <div className="mr-4 shrink-0">{props.photo}</div>
      <div>
        <p className="text-lg font-bold text-emerald-500">{props.authorName}</p>
        <p className="mt-0.5">{props.time}</p>
        {props.minutesRead && (
          <p className="mt-0.5 inline-flex items-center text-gray-600">
            <span className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-1 size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {`${props.minutesRead} min read`}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
