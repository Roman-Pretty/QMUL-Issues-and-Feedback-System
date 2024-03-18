import '../css/App.css';
import React, { useState } from 'react';


// INCOMPLETED





const SubmitEC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // handle radio button change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // update selected option
  };

  return (
    <div id="submit-ec-card">
      <form>
        <label>
          <input
            type="radio"
            value="StandardEC"
            checked={selectedOption === 'StandardEC'}
            onChange={handleOptionChange}
          />
          Standard EC
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="UrgentEC"
            checked={selectedOption === 'UrgentEC'}
            onChange={handleOptionChange}
          />
          Urgent EC
        </label>
      </form>
      <div>
        {/* <p>Selected option: {selectedOption}</p> */}
      </div>
    </div>
  );
};

export default SubmitEC;
