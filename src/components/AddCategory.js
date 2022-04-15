import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const [warning, setWarning] = useState(false);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setWarning(false);
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    } else {
      setWarning(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="Press Enter to add..."
          type="text"
          value={inputValue}
        />
      </form>
      {warning && <p className="warning">Empty values are not allowed</p>}
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
