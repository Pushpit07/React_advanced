import React, { useState, Fragment } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "peter",
		age: 24,
		message: "random message",
	});

	const changeMessage = () => {
		setPerson({ ...person, message: "hello world" });
	};

	return (
		<Fragment>
			<h2>useState object example</h2>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h4>{person.message}</h4>
			<button className="btn" onClick={changeMessage}>
				change message
			</button>
		</Fragment>
	);
};

export default UseStateObject;
