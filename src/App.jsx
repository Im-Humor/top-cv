import { useState } from "react";
import "./style.css";

import Form from "./components/form";
import Output from "./components/output";

export default function App() {
	const [formData, setFormData] = useState(null);
	const [submitState, setSubmitState] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const newFormData = new FormData(form);
		setFormData(Object.fromEntries(newFormData.entries()));
		setSubmitState(!submitState);
	};

	return (
		<div className="app-container">
			<Form
				formData={formData}
				handleSubmit={handleSubmit}
				submitState={submitState}
			/>
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
