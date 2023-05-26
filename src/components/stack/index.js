import "./stack.css";

function Stack({ selectedStack, handleStackChange, keyword }) {
  const isSelected = selectedStack.includes(keyword);

  const handleClick = (event) => {
    event.preventDefault();
    handleStackChange(keyword);
  };

  return (
    <div className="stack-box">
      <button
        className={`stack-Btn${isSelected ? "-selected" : ""}`}
        onClick={handleClick}
      >
        {keyword}
      </button>
    </div>
  );
}

export default Stack;
