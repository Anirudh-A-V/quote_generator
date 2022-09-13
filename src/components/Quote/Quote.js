import React, { useEffect, useRef, useState } from "react";
import './Quote.css';
import Bookmark_Inactive from '../../icons/Bookmark_Inactive.svg';
import Bookmark_Active from '../../icons/Bookmark_Active.svg';

const Quote = () => {
	const [data, setData] = useState(null);

	async function updateQuote() {
		try {
			const response = await fetch("https://api.quotable.io/random");
			const { statusCode, statusMessage, ...data } = await response.json();
			if (!response.ok) throw new Error(`${statusCode} ${statusMessage}` + '\nNetwork response was not OK');
			setData(data);
		} catch (error) {
			// If the API request failed, log the error to console and update state
			// so that the error will be reflected in the UI.
			console.error("Anirudh A V"+error);
			setData({ content: "Opps... Something went wrong" });
		}
	}

	const [bookmark, setBookmark] = useState(false);
	const [bookmarkClass, setBookmarkClass] = useState("Bookmark_Inactive");

	const handleBookmark = () => {
		setBookmark(!bookmark);
		if (bookmarkClass === "Bookmark_Inactive") {
			setBookmarkClass("Bookmark_Active");
		} else {
			setBookmarkClass("Bookmark_Inactive");
		}
	}

	// Run `updateQuote` once when component mounts
	useEffect(() => {
		updateQuote();
	}, []);

	// Do not render until the first quote is loaded
	if (!data) return null;

	return (
		<div className="Box">
			<div className="Quote">
				<div className="quote">
					<span>{data.content}</span>
					{/* <span>Don't Quit, you made it this far</span> */}
				</div>
				<div className='Author-box'>
					<div className="author">
						<p>- {data.author}</p>
						{/* <p className="author-name">- author</p> */}
					</div>
				</div>
				<div className="Bookmark-Box">
					<div className="bookmark-logo">
						<img src={Bookmark_Inactive} onClick={handleBookmark} alt="Bookmark" className="Bookmark-icon" style={{ display: 'end' }} />
					</div>
				</div>
			</div>
		</div>

	);
}

export default Quote;
