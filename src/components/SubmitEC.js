import '../css/App.css';
import React, { useState } from 'react';

const SubmitEC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // handle radio button change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // update selected option
  };

  return (
    <div id="submit-ec-card">
      <form>
        <div id="standard-ec">
            <input
              id="standardec"
              type="radio"
              value="StandardEC"
              checked={selectedOption === 'StandardEC'}
              onChange={handleOptionChange}
            />
            <label class="label-text" for="standardec"> Standard EC </label>
          </div>
        <br />
        <div id="urgent-ec">
          <input
            id="urgentec"
            type="radio"
            value="UrgentEC"
            checked={selectedOption === 'UrgentEC'}
            onChange={handleOptionChange}
          />
          <label class="label-text" for="urgentec"> Urgent EC </label>
        </div>
        <br />
        <div id="reason-for-ec">
          <label class="label-text"> Reason for EC </label>
          <br />
          <div class="dropdown">
            <button onclick="myFunction()" class="dropbtn">Dropdown</button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        <br />
        <div id="summary">
          <label for="summary" class="label-text" >Summary: </label>
          <input 
          type="text"
          id="summary" 
          name="summary-box"
          />        
        </div>
        <br />
        <div id="affected-assessments">
          <label class="label-text"> Affected assessments </label>
            <div class="dropdown">
              <button onclick="myFunction()" class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div> 
          </div>
        <br/>
        <div id="attach-file">
          <label for="file-attachment" class="label-text">Supporting Evidence: </label>
          <input 
            type="file" 
            id="file-attachment" 
            name="filename" 
          />   
        </div>
        <br /> 
        <input type="submit" />
      </form>
    </div>
  );
};

export default SubmitEC;


/* show or hide dropdown options for reason for ec */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
