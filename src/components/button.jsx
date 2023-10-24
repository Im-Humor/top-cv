export default function Button({ submitState }) {
	if (submitState === false) {
		return <button type="submit">Submit</button>;
	} else {
		return <button type="submit">Edit</button>;
	}
}
