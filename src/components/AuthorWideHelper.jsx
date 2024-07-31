export default function Example(props) {
  return (
    <div className="sm:flex">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{props.photo}</div>
      <div>
        <h4 className="text-lg font-bold">{props.name}</h4>
        {props.biography && <p className="mt-1">{props.biography}</p>}
      </div>
    </div>
  );
}
