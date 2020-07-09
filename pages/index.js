import { generateSudoku, checkSolution, shareUrl } from "../lib/SudokuHelpers";
import SudokuBoard from "../components/SudokuBoard";
import { useState } from "react";

export default function Home() {
  const [sudoku, setSudoku] = useState(generateSudoku());

  function handleChange(e) {
    let updatedSudoku = Object.assign({}, sudoku);
    updatedSudoku.rows[e.row].cols[e.col].value = e.value;
    if (updatedSudoku.solvedTime !== null) {
      const solution = checkSolution(updatedSudoku);
      if (solution) {
        updatedSudoku.solveTime = new Date();
        updatedSudoku.shareUrl = shareUrl(updatedSudoku);
      }
    }
    setSudoku(updatedSudoku);
  }

  const solveSudoku = (e) => {
    let updatedSudoku = Object.assign({}, sudoku);
    updatedSudoku.rows.forEach((row) =>
      row.cols.forEach((col) => {
        col.value = updatedSudoku.solution[col.row * 9 + col.col];
      })
    );
    setSudoku(updatedSudoku);
  };

  console.log(sudoku);

  return (
    <div>
      <SudokuBoard sudoku={sudoku} onChange={handleChange} />
      <button onClick={solveSudoku}>Solve it Magically!</button>
    </div>
  );
}
