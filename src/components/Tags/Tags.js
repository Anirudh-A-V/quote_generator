import React, { useEffect, useMemo, useState } from "react";
import './Tags.css';

export default function Tags() {
	const [data, setData] = useState(null);
	
	async function Tags() {
		try {
			const response = await fetch("https://api.quotable.io/tags");
			const { statusCode, statusMessage, ...data } = await response.json();
			if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
			setData(data);
			// console.log(data);
		} catch (error) {
			// If the API request failed, log the error to console and update state
			// so that the error will be reflected in the UI.
			console.error(error);
			setData({ content: "Opps... Something went wrong" });
		}
	}

	const options = [];
	
	// useMemo(() => {
	// 	for (let i = 0; i <= 45; i++) {
	// 		options.push(data[i]['name']);
	// 	}
	// }, [options], [data], []);

	// const emptyArray = (option) => {
	// 	option.length = 0;
	// }
	useEffect(() => {
		Tags();
	}, []);

	// useEffect(() => {
	// 	emptyArray(options);

	// }, [options], []);

	for (let i = 0; i <= 45; i++) {
		// options.push(data[i]['name']);
	}

	const [value, setValue] = useState(options[0]);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<section className='Options'>
			<select value={value} onChange={handleChange} className='Tags' placeholder=''>
				{options.map((option) => (
					<option value={option[0]} className='Tags'>{option[0]}</option>
				))}
			</select>
			{/* <DropdownButton id="dropdown-item-button" title="" className="Tags">
					<Dropdown.ItemText> </Dropdown.ItemText>
					<Dropdown.Item as="button">Action</Dropdown.Item>
					<Dropdown.Item as="button">Another action</Dropdown.Item>
					<Dropdown.Item as="button">Something else</Dropdown.Item>
				</DropdownButton> */}
			<br></br>
			<button className="next-quote" onClick={console.log(options)}>
				<span>Next Quote</span>
			</button>
		</section>
	)
}
