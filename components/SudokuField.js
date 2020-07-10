const SudokuField = (props) => {
  const { field } = props;

  const handleChange = (e) => {
    const value = value === "" ? null : parseInt(e.target.value, 10);
    props.onChange({ ...field, value: value });
  };

  return (
    <input
      className="field"
      value={field.value || ""}
      readOnly={field.readonly}
      onChange={handleChange}
    />
  );
};

export default SudokuField;
