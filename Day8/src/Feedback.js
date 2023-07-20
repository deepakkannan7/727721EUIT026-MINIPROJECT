import React from 'react';
import './Feedback.css'
import { connect } from 'react-redux';
import { updateFeedback } from './Actions';
import {Link} from 'react-router-dom';

const FeedbackForm = ({ feedback, updateFeedback }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(feedback);
  };

  const handleFeedbackChange = (e) => {
    updateFeedback(e.target.value);
  };

  return (








<div id="fbox">
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <br></br>
      <label id="title">Name:</label>
      <input type="text" id="feedback"></input>
      <br></br>
      <br></br>
      <label htmlFor="feedback" id="title">Your Feedback:</label>
      <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} />
      <br></br>
      <div className="fgroup">
                  <input type="submit" className="fbutton" value="Submit Feedback" required/>
                </div>
    </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  feedback: state.feedback,
});

const mapDispatchToProps = {
  updateFeedback,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);