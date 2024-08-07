import React from "react";
import Card from "./card.jsx";



//create your first component
const Home = ({ seconds }) => {

	let digits = seconds.toString().padStart(6, '0').split('');

	return (
		<div className="container-fluid d-flex justify-content justify-content-center gap-2 bg-dark">
			<Card number={<i class="fa-regular fa-clock"></i>} />
			<Card number={digits[0]} />
			<Card number={digits[1]} />
			<Card number={digits[2]} />
			<Card number={digits[3]} />
			<Card number={digits[4]} />
			<Card number={digits[5]} />
		</div>
	);
};

export default Home;
