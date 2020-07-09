const SudokuField = (props) => {
  const { field } = props;

  const handleChange = (e) => {
    const value = e.target.value === "" ? null : parseInt(e.target.value, 10);
    props.onChange(Object.assign({ value: value }, props.field));
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
