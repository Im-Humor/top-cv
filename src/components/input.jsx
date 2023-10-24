export default function Input({ sectionClass, questionsList, submitState }) {
	if (submitState === true) {
		return (
			<div className={sectionClass + " input"}>
				<h1 className={sectionClass + " heading"}>
					{sectionClass + " section"}
				</h1>
				<ul className={sectionClass + " input-list"}>
					{questionsList.map((question) => {
						return (
							<li
								className={sectionClass + " input-question"}
								key={question.id}
							>
								<label htmlFor={question.name}>
									{question.question}
								</label>
								<input
									className="hide-input"
									id={question.name}
									name={question.name}
								></input>
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return (
			<div className={sectionClass + " input"}>
				<h1 className={sectionClass + " heading"}>
					{sectionClass + " section"}
				</h1>
				<ul className={sectionClass + " input-list"}>
					{questionsList.map((question) => {
						return (
							<li
								className={sectionClass + " input-question"}
								key={question.id}
							>
								<label htmlFor={question.name}>
									{question.question}
								</label>
								<input
									id={question.name}
									name={question.name}
								></input>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}
