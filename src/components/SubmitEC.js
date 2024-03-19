import '../css/App.css';
import React, { useState } from 'react';

const SubmitEC = () => {
  // state variables
  const [selectedOption, setSelectedOption] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [affectedModules, setAffectedModules] = useState([]); 
  const [affectedAssessments, setAffectedAssessments] = useState([]);

  // affected assessments options
  const affectedAssessmentsOptions = {
    ECS518U: ['Lab1', 'Lab2', 'Lab3', 'Lab4', 'Lab5', 'Lab6', 'Lab7', 'Lab8', 'MCQ1', 'MCQ2', 'Final Exam'],
    ECS506U: ['Domain Analysis Report', 'Domain Analysis Presentation', 'Requirements Report', 'Requirements Presentation', 'Design Report', 'Prototype Report', 'Prototype Presentation'],
    ECS522U: ['Assignment1', 'Assignment2', 'Assignment3', 'Final Exam'],
    ECS524U: ['Coursework1', 'Coursework2', 'Coursework3', 'Coursework4', 'Final Exam'],
  };

  // handle module checkbox change
  const handleModuleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setAffectedModules([...affectedModules, value]);
    } else {
      setAffectedModules(affectedModules.filter((module) => module !== value));
    }
  };

  // handle assessment checkbox change
  const handleAssessmentChange = (event) => {
    const { value, checked } = event.target;
    let updatedAssessments = [...affectedAssessments];
    if (checked) {
      updatedAssessments.push(value);
    } else {
      updatedAssessments = updatedAssessments.filter((assessment) => assessment !== value);
    }
    setAffectedAssessments(updatedAssessments);
  };

  // handle radio button change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value); // update selected option
  };

  // render the component for submitting an EC
  return (
    <div id="submit-ec-card">
      <form>
      <div id="ec-options">
        {/* choose standard ec */}
        <div id="standard-ec" >
          <input
              id="standardec"
              type="checkbox"
              value="StandardEC"
              checked={selectedOption === 'StandardEC'}
              onChange={handleOptionChange}
            />
            <label class="label-text" for="standardec"> Standard EC </label>
          </div>
          <br />
          {/* choose urgent ec */}
          <div id="urgent-ec">
            <input
              id="urgentec"
              type="checkbox"
              value="UrgentEC"
              checked={selectedOption === 'UrgentEC'}
              onChange={handleOptionChange}
            />
            <label class="label-text" for="urgentec"> Urgent EC </label>
          </div>
        </div>
        <br />
        {/* select reason for ec */}
        <div id="reason-for-ec">
          <label className="label-text" for="ec-reason"> Reason for EC </label>
          <br />
          <div className="ec-form-dropdown">
            <select id="ec-reason" name="ec-reason">
              <option value="" disabled selected hidden>Select reason...</option> 
              <option value="severe-illness">Severe illness/medical reasons: acute episode</option>
              <option value="minor-illness">Minor illness/medical reasons: acute episode</option>
              <option value="bereavement">Bereavement</option>
            </select>
          </div>
        </div>
        <br />
        {/* summary input box for user to explain chosen reason further */}
        <div id="summary">
          <label for="summary" class="label-text" >Summary: </label>
          <div id="summary-text-box">
            <input 
            type="text"
            id="ec-summary-box" 
            name="ec-summary-box"
            />    
          </div>     
        </div>
        <br />
        {/* choose affected modules */}
        <div id="affected-modules">
          <label className="label-text"> Affected Module(s): </label>
          <div className="affected-checkbox">
            <label>
              <input
                type="checkbox"
                name="affectedModules"
                value="ECS518U"
                onChange={handleModuleChange}
              />{' '}
              ECS518U - Operating Systems
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="affectedModules"
                value="ECS506U"
                onChange={handleModuleChange}
              />{' '}
              ECS506U - Software Engineering Project
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="affectedModules"
                value="ECS522U"
                onChange={handleModuleChange}
              />{' '}
              ECS522U - Graphical User Interfaces
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="affectedModules"
                value="ECS524U"
                onChange={handleModuleChange}
              />{' '}
              ECS524U - Internet Protocols and Applications
            </label>
            <br />
          </div>
      </div>
      {/* based on affected modules, allow user to choose affected assessments */}
      <div id="affected-assessments">
        <label className="label-text"> Affected Assessment(s): </label>
        <div className="assessments-outer-container">
          <div className="assessments-inner-container">
            <div className="affected-checkbox">
              {affectedModules.map((module) => (
                <div key={module}>
                  {module in affectedAssessmentsOptions && affectedAssessmentsOptions[module].map((assessment) => (
                    <label key={assessment}>
                      <input
                        type="checkbox"
                        name="affectedAssessments"
                        value={assessment}
                        onChange={handleAssessmentChange}
                      />{' '}
                      {module} - {assessment}
                      <br />
                    </label>
                  ))}
                  <br />
                </div>
              ))}
            </div> 
          </div>
        </div>  
      </div>
        <br/>
        {/* upload file */}
        <div id="attach-file">
          <label for="file-attachment" class="label-text">Supporting Evidence: </label>
          <br />
          <div id="file-attachment-box">
            <input 
              type="file" 
              id="file-attachment" 
              name="filename" 
            />   
          </div>
        </div>
        <br /> 
        {/* submit buttom to submit ec form */}
        <div id="submit-form">
          <input type="submit" class="submit-button" />
        </div>
      </form>
    </div>
  );

};

export default SubmitEC;
