import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<h1>Counter App</h1>
			<div>
				<button>+</button>
				<p>{counter}</p>
				<button>-</button>
			</div>
		</div>
	);
};
export default Counter;
