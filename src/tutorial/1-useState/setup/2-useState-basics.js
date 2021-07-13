import React, { useState, Fragment } from "react";

const UseStateBasics = () => {
	const [text, setText] = useState("random title");

	const handleClick = () => {
		if (text === "random title") {
			setText("hello world");
		} else {
			setText("random title");
		}
	};

	return (
		<Fragment>
			<h2>{text}</h2>
			<button type="button" className="btn" onClick={handleClick}>
				change title
			</button>
		</Fragment>
	);
};

export default UseStateBasics;
