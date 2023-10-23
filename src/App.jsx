import { useState } from "react";
import "./style.css";
import {
	eduQuestionsList,
	personalQuestionsList,
	workQuestionsList,
} from "./data";

const Input = ({ sectionClass, questionsList }) => {
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
};

const Output = ({ sectionClass, formData, sectionStartNum, sectionEndNum }) => {
	if (!formData) {
		return <p>Nothing</p>;
	} else {
		return (
			<ul className={sectionClass + " output"}>
				<h2>{sectionClass}</h2>
				{Object.values(formData).map((answer, index) => {
					if (index >= sectionStartNum && index <= sectionEndNum) {
						return <li key={index}>{answer}</li>;
					}
				})}
			</ul>
		);
	}
};

const Section = ({ sectionClass, questionsList, formData }) => {
	return (
		<div className={sectionClass + " section"}>
			<Input sectionClass={sectionClass} questionsList={questionsList} />
		</div>
	);
};

const Form = ({ formData, handleSubmit }) => {
	return (
		<form method="post" onSubmit={handleSubmit}>
			<Section
				sectionClass="Personal"
				questionsList={personalQuestionsList}
				formData={formData}
			/>
			<Section
				sectionClass="Education"
				questionsList={eduQuestionsList}
				formData={formData}
			/>
			<Section
				sectionClass="Work Experience"
				questionsList={workQuestionsList}
				formData={formData}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default function App() {
	const [formData, setFormData] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const newFormData = new FormData(form);
		setFormData(Object.fromEntries(newFormData.entries()));
	};

	return (
		<div>
			<Form formData={formData} handleSubmit={handleSubmit} />
			<div className="output">
				<Output
					sectionClass="Personal"
					formData={formData}
					sectionStartNum={0}
					sectionEndNum={1}
				/>
				<Output
					sectionClass="Education"
					formData={formData}
					sectionStartNum={2}
					sectionEndNum={4}
				/>
				<Output
					sectionClass="Work Experience"
					formData={formData}
					sectionStartNum={5}
					sectionEndNum={7}
				/>
			</div>
		</div>
	);
}
