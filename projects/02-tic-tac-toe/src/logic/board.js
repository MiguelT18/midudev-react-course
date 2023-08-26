import { WINNER_COMBOS } from '../components/constants';

export const checkWinnerFrom = (boardToCheck) => {
	for (const combo of WINNER_COMBOS) {
		const [a, b, c] = combo;
		if (
			boardToCheck[a] &&
			boardToCheck[a] === boardToCheck[b] &&
			boardToCheck[a] === boardToCheck[c]
		) {
			return boardToCheck[a];
		}
	}
	return null;
};

export const checkEndGame = (newBoard) => {
	// Revisamos si hay un empate, si no hay más espacios vacíos en el tablero
	return newBoard.every((square) => square !== null);
};
