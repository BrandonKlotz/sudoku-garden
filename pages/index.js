import { useState, useEffect } from "react";
import SudokuBoard from "../components/SudokuBoard";
import { generateSudoku } from "../lib/sudoku";

export default function Home() {
  const [sudoku, setSudoku] = useState(null);

  useEffect(() => {
    if (sudoku === null) {
      setSudoku(generateSudoku());
    }
  });

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
    console.log(sudoku);
    updatedSudoku.rows.forEach((row) =>
      row.cols.forEach((col) => {
        col.value = updatedSudoku.solution[col.row * 9 + col.col];
        col.readonly = true;
      })
    );
    setSudoku(updatedSudoku);
  }

  return (
    <>
      {sudoku ? (
        <>
          <SudokuBoard sudoku={sudoku} onChange={handleChange} />
          <button onClick={solveSudoku}>Solve it Magically!</button>
        </>
      ) : null}
    </>
  );
}
