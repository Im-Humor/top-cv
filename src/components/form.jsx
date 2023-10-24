import Section from "./section";
import Button from "./button";
import {
	eduQuestionsList,
	personalQuestionsList,
	workQuestionsList,
} from "../data";

export default function Form({ formData, handleSubmit, submitState }) {
	return (
		<form method="post" onSubmit={handleSubmit}>
			<Section
				sectionClass="Personal"
				questionsList={personalQuestionsList}
				formData={formData}
				submitState={submitState}
			/>
			<Section
				sectionClass="Education"
				questionsList={eduQuestionsList}
				formData={formData}
				submitState={submitState}
			/>
			<Section
				sectionClass="Work Experience"
				questionsList={workQuestionsList}
				formData={formData}
				submitState={submitState}
			/>
			<Button submitState={submitState} />
		</form>
	);
}
