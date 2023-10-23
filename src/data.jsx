import { v4 as uuidv4 } from "uuid";

export const personalQuestionsList = [
	{
		question: "First name",
		name: "first_name",
		id: uuidv4(),
	},
	{
		question: "Last name",
		name: "last_name",
		id: uuidv4(),
	},
];

export const eduQuestionsList = [
	{
		question: "School name",
		name: "school_name",
		id: uuidv4(),
	},
	{
		question: "Years attended [ex: 2012-2016]",
		name: "years_attended",
		id: uuidv4(),
	},
	{
		question: "Degree",
		name: "degree",
		id: uuidv4(),
	},
];

export const workQuestionsList = [
	{
		question: "Employer",
		name: "employer",
		id: uuidv4(),
	},
	{
		question: "Title/Position",
		name: "title",
		id: uuidv4(),
	},
	{
		question: "Time in position",
		name: "position_length",
		id: uuidv4(),
	},
];
