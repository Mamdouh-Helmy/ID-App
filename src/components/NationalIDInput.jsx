import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NationalIDInput = ({ onSubmit }) => {
  const [nationalID, setNationalID] = useState("");

  const handleInputChange = (e) => {
    setNationalID(e.target.value);
  };
  return (
    <div className="input-user">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input
        type="text"
        value={nationalID}
        onChange={handleInputChange}
        placeholder="رقم البطاقه ..."
      />
      <button
        onClick={() => onSubmit(nationalID)}
      >
        إبحث
      </button>
    </div>
  );
};

export default NationalIDInput;
