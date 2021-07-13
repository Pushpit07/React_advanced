import React, { useState, Fragment } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);

	const removeItem = (id) => {
		let newPeople = people.filter((person) => person.id !== id);
		setPeople(newPeople);
	};

	return (
		<Fragment>
			<h2>useState array example</h2>
			<div>
				{people.map((person) => {
					const { id, name } = person;
					return (
						<div key={id} className="item">
							<h4>{name}</h4>
							<button onClick={() => removeItem(id)}>remove</button>
						</div>
					);
				})}
				<button className="btn" onClick={() => setPeople([])}>
					clear items
				</button>
			</div>
		</Fragment>
	);
};

export default UseStateArray;
