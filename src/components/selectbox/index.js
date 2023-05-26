import "./selectbox.css";

function SelectBox({ title, options, handleChange }) {
  return (
    <div>
      <select className="select-box" onChange={handleChange} defaultValue={""}>
        <option value="" disabled>
          {title}을 선택해주세요.
        </option>
        {options.map((op) => (
          <option key={op.id} value={op.type}>
            {op.type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
