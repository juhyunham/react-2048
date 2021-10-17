import React from 'react';

const Game = (props) => {
	return(
		<div className="game-container">
			<div className="grid-container">
				<div className="grid-row">
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
				<div className="grid-row">
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
				<div className="grid-row">
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
				<div className="grid-row">
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
					<div className="grid-cell"></div>
				</div>
			</div>
			<div className="tile-container">
				<div className="tile tile-4 tile-position-1-3"><div className="tile-inner">4</div></div>
				<div className="tile tile-8 tile-position-1-4"><div className="tile-inner">8</div></div>
				<div className="tile tile-2 tile-position-2-4"><div className="tile-inner">2</div></div>
				<div className="tile tile-2 tile-position-3-1 tile-new"><div className="tile-inner">2</div></div>
				<div className="tile tile-2 tile-position-3-4"><div className="tile-inner">2</div></div>
			</div>
		</div>
	)
};

export default Game;