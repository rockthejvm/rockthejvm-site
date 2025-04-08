export default function Example(props) {
  return (
    <div className="mb-2 mt-6 flex">
      {/* <a href={`/authors/${props.authorId}`} className="mt-auto"> */}
      <div className="mr-4 shrink-0">{props.photo}</div>
      {/* </a> */}
      <div className="text-content-1">
        <a href={`/authors/${props.authorId}`} className="mt-auto">
          <p className="text-lg font-bold text-content-1 hover:text-accent-2 sm:text-xl">
            {props.authorName}
          </p>
        </a>
        <p className="mt-0.5">{props.time}</p>
      </div>
    </div>
  );
}
