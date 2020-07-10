import SudokuField from "./SudokuField";
// import Timer from "./Timer";
import Result from "./Result";

export default function SudokuBoard(props) {
  const { sudoku, onChange } = props;

  return (
    <div>
      {/* {!sudoku.solveTime && <Timer start={sudoku.startTime} />} */}
      {sudoku.solveTime && <Result sudoku={sudoku} />}
      {sudoku.rows.map((row) => (
        <div className="row" key={row.index}>
          {row.cols.map((field) => (
            <SudokuField field={field} key={field.col} onChange={onChange} />
          ))}
        </div>
      ))}
    </div>
  );
}
