export default function Example(props) {
	return (
		<div className="sm:flex py-4">
			<div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">{props.photo}</div>
			<div>
				<p className="text-lg font-bold">{props.name}</p>
				{props.biography && <p className="mt-1">{props.biography}</p>}
				{props.socials && (
					<ul role="list" className="mt-6 flex justify-left gap-x-6">
						{props.socials.facebook && (
							<li>
								<a
									href={`https://www.facebook.com/${props.socials.facebook}`}
									className="text-gray-400 hover:text-gray-500"
									target="_blank"
									rel="noreferrer"
								>
									{props.facebook}
								</a>
							</li>
						)}
						{props.socials.github && (
							<li>
								<a
									href={`https://www.github.com/${props.socials.github}`}
									className="text-gray-400 hover:text-gray-500"
									target="_blank"
									rel="noreferrer"
								>
									{props.github}
								</a>
							</li>
						)}
						{props.socials.linkedin && (
							<li>
								<a
									href={`https://www.linkedin.com/${props.socials.linkedin}`}
									className="text-gray-400 hover:text-gray-500"
									target="_blank"
									rel="noreferrer"
								>
									{props.linkedin}
								</a>
							</li>
						)}
						{props.socials.twitter && (
							<li>
								<a
									href={`https://www.x.com/${props.socials.twitter}`}
									className="text-gray-400 hover:text-gray-500"
									target="_blank"
									rel="noreferrer"
								>
									{props.twitter}
								</a>
							</li>
						)}
						{props.socials.youtube && (
							<li>
								<a
									href={`https://www.youtube.com/${props.socials.youtube}`}
									className="text-gray-400 hover:text-gray-500"
									target="_blank"
									rel="noreferrer"
								>
									{props.youtube}
								</a>
							</li>
						)}
					</ul>
				)}
			</div>
		</div>
	);
}
