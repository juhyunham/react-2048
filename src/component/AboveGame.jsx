import React from 'react';

const AboveGame = (props) => {
	return (
		<div className="game-intro">
			<button className="restart-button">New Game</button>
			<h2 className="subtitle">Play <strong>2048 Game</strong> Online</h2>
			<div className="above-game">
				<p>Join the numbers and get to the <strong>2048 tile!</strong></p>
			</div>
		</div>
	)
};

export default AboveGame;