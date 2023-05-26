import "./selectbox.css";

function SelectBox({ title, options, handleChange }) {
  return (
    <div>
      <select className="select-box" onChange={handleChange}>
        <option value="" disabled selected defaultValue={""}>
          {title}을 선택해주세요.
        </option>
        {options.map((op) => (
          <option key={op.id} value={op.value}>
            {op.value}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
