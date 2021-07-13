import React, { Fragment } from "react";

const ErrorExample = () => {
	let title = "random title";

	const handleClick = () => {
		title = "hello people";
	};

	return (
		<Fragment>
			<h2>{title}</h2>
			<button type="button" className="btn" onClick={handleClick}>
				Change title
			</button>
		</Fragment>
	);
};

export default ErrorExample;
