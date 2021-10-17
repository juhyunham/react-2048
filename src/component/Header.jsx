import React from 'react';

const Header = (props) => {
	return (
		<div className="heading">
			<h1 className="title"><a href="/">2048</a></h1>
			<div className="scores-container">
				<div className="score-container">20</div>
				<div className="best-container">1116</div>
			</div>
		</div>
	)
};

export default Header;