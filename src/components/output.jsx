export default function Output({
	sectionClass,
	formData,
	sectionStartNum,
	sectionEndNum,
}) {
	if (!formData) {
		return <p></p>;
	} else {
		return (
			<ul className={sectionClass + " output"}>
				<h2 className={sectionClass + " output-section"}>
					{sectionClass}
				</h2>
				{Object.values(formData).map((answer, index) => {
					if (index >= sectionStartNum && index <= sectionEndNum) {
						return (
							<li
								className="answer"
								id={"answer-" + index}
								key={index}
							>
								{answer}
							</li>
						);
					}
				})}
			</ul>
		);
	}
}
