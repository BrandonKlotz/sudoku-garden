import { checkSolution, shareUrl } from "../lib/SudokuHelpers";
import { useState } from "react";
import { generateSudoku } from "../lib/SudokuHelpers";
import SudokuBoard from "../components/SudokuBoard";

export default function Home() {
  const [sudoku, setSudoku] = useState(generateSudoku());

  function handleChange(e) {
    let updatedSudoku = { ...sudoku };
    updatedSudoku.rows[e.row].cols[e.col].value = e.value;
    if (updatedSudoku.solvedTime !== null) {
      const solution = checkSolution(updatedSudoku);
      if (solution) {
        updatedSudoku.solveTime = new Date();
      }
    }
    setSudoku(updatedSudoku);
  }

  function solveSudoku(e) {
    let updatedSudoku = { ...sudoku };
    updatedSudoku.rows.forEach((row) =>
      row.cols.forEach((col) => {
        col.value = updatedSudoku.solution[col.row * 9 + col.col];
      })
    );
    setSudoku(updatedSudoku);
  }

  return (
    <div>
      <SudokuBoard sudoku={sudoku} onChange={handleChange} />
      <button onClick={solveSudoku}>Solve it Magically!</button>
    </div>
  );
}
