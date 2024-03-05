import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer`}
        >
          <span className="label-text text-gray-500">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer`}
        >
          <span className="label-text text-gray-500">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
