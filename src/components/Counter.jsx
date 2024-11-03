import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1);
	};
	const decrementCounter = () => {
		setCounter(counter - 1);
	};
	return (
		<div className="container">
			<h1>Counter App</h1>
			<div className="flex">
				<button onClick={incrementCounter}>+</button>
				<p>{counter}</p>
				<button onClick={decrementCounter}>-</button>
			</div>
		</div>
	);
};
export default Counter;
