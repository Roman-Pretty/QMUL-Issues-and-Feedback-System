import React, { useState } from 'react';

const SubmitEC = () => {
    // set the default form to be lab when user loads page
  const [selectedForm, setSelectedForm] = useState('lab'); 

    //  handle submission of the form
  const handleSubmit = (event) => {
    // prevent empty submission
    event.preventDefault();
    alert("Enter a valid entry for each field.");
  }

  // depending on the formstate, show the relevant form
  const renderForm = () => {
    switch (selectedForm) {
      case 'lab':
        return (
          <div>
            {/* form for submitting lab issue */}
            <div id="submit-lab-card">
                <form onSubmit={handleSubmit}>
                    <br />
                    <br />
                    <div class="form-content">
                        {/* choose category of lab issue */}
                        <label className="label-text"> Category </label>
                        <br />
                        <div className="ec-form-dropdown">
                            <select id="ec-reason" name="lab-category">
                            <option value="" disabled selected hidden>Select reason...</option> 
                            <option value="building-hazard">Building Hazard</option>
                            <option value="hardware">Hardware</option>
                            <option value="power">Power</option>
                            <option value="cleanliness">Cleanliness</option>
                            <option value="accessibility">Accessibility</option>
                            <option value="computer issue">Computer Issue</option>
                            <option value="other">Other</option>
                            </select>
                        </div>
                        <br />
                        {/* enter summary of lab issue */}
                        <div id="summary">
                        <label className="label-text" >Summary: </label>
                        <div id="summary-text-box">
                            <input 
                            type="text"
                            id="ec-summary-box" 
                            name="service-summary-box"
                            />    
                        </div>     
                        </div>
                        <br />
                        {/* attach supporting files for lab issue */}
                        <div id="attach-file">
                        <label className="label-text"> Supporting Evidence: </label>
                        <br />
                        <div id="input-file">
                            <label htmlFor="file-attachment" className="file-upload">Attach evidence </label>
                            <br />
                            <input 
                            type="file" 
                            id="file-attachment" 
                            name="filename" 
                            onChange={(e) => {
                                const selectedFile = e.target.files[0];
                            }}
                            />   
                        </div>
                        </div>
                        <br /> 
                        {/* submit the form button */}
                        <div id="submit-form">
                        <input type="submit" className="submit-button" />
                        </div>
                    </div>
                </form>
                </div>
          </div>
        );
      case 'service':
        return (
          <div>
            {/* form for submitting service issue*/}
            <div id="submit-service-card">
                <form onSubmit={handleSubmit}>
                    <div class="form-content">
                        <br />
                        <br />
                        <div id="reason-for-ec">
                        <label className="label-text"> Service: </label>
                        <br />
                        {/* select which service */}
                        <div className="ec-form-dropdown">
                            <select id="ec-reason" name="service-choice">
                            <option value="" disabled selected hidden>Select reason...</option> 
                            <option value="qmplus">QM Plus</option>
                            <option value="qmapp">QM App</option>
                            <option value="mysis">MySIS</option>
                            <option value="other">Other</option>
                            </select>
                        </div>
                        < br />
                        </div>
                        <div id="reason-for-ec">
                        {/* select category issue */}
                        <label className="label-text"> Category </label>
                        <br />
                        <div className="ec-form-dropdown">
                            <select id="ec-reason" name="service-category">
                            <option value="" disabled selected hidden>Select reason...</option> 
                            <option value="technical">Technical</option>
                            <option value="functional">Functional</option>
                            <option value="accessibility">Accessibility</option>
                            <option value="other">Other</option>
                            </select>
                        </div>
                        </div>
                        <br />
                        {/* enter summary of service issue */}
                        <div id="summary">
                        <label className="label-text" >Summary: </label>
                        <div id="summary-text-box">
                            <input 
                            type="text"
                            id="ec-summary-box" 
                            name="ec-summary-box"
                            />    
                        </div>     
                        </div>
                        <br />
                        {/* attach supporting files for service issue */}   
                        <div id="attach-file">
                        <label className="label-text"> Supporting Evidence: </label>
                        <br />
                        <div id="input-file">
                            <label htmlFor="file-attachment" className="file-upload">Attach evidence </label>
                            <br />
                            <input 
                            type="file" 
                            id="file-attachment" 
                            name="filename" 
                            onChange={(e) => {
                                const selectedFile = e.target.files[0];
                            }}
                            />   
                        </div>
                        </div>
                        <br /> 
                        {/* submit form button */}
                        <div id="submit-form">
                        <input type="submit" className="submit-button" />
                        </div>
                    </div>
                </form>
                </div>
          </div>
        );
      default:
        return null;
    }
  };

  // text displayed at top of page
  return (
    <div id="submit-issue">
      <div id="instruction-text">
        {/* user chooses which facility to report an issue for */}
        <p> Which facility would you like to report an issue for? </p>
      </div>
        {/* button for lab */}
      <div className="lab-button" onClick={() => setSelectedForm('lab')}>
        <p> Lab </p>
        {/* set selected form state to lab */}
        {selectedForm === 'lab' && <div id="currently-selected"></div>}
      </div>
      {/* button for service */}
      <div className="service-button" onClick={() => setSelectedForm('service')}>
        <p> Service </p>
        {/* set selected form state to service */}
        {selectedForm === 'service' && <div id="currently-selected"></div>}
      </div>
      {/* render the form based on selected form state  */}
      {renderForm()}
    </div>
  );
};

export default SubmitEC;


