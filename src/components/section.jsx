import Input from "./input";

export default function Section({
	sectionClass,
	questionsList,
	formData,
	submitState,
}) {
	return (
		<div className={sectionClass + " section"}>
			<Input
				sectionClass={sectionClass}
				questionsList={questionsList}
				submitState={submitState}
			/>
		</div>
	);
}
