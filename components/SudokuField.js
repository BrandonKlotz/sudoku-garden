const SudokuField = (props) => {
  const { field } = props;

  const handleChange = (e) => {
    const value = value === "" ? null : parseInt(e.target.value, 10);
    props.onChange({ ...field, value: value });
  };

  return (
    <input
      className="text-gray-300 text-center text-lg w-12 h-12 m-2 bg-green-100"
      value={field.value || ""}
      readOnly={field.readonly}
      onChange={handleChange}
    />
  );
};

export default SudokuField;
