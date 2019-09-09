import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

var formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '250px',
  height: '200px'
}

var inputStyle = {
  fontSize: '20px'
}

var bodyStyle = {
  height: '130px',
  width: '400px',
  fontSize: '20px'
}

var buttonStyle = {
  fontSize: '15px',
  backgroundColor: 'coral',
  fontWeight: 'bolder',
  width: '100px'
}

function NewCardForm(props){
  let _name = null;
  let _body = null;

  function handleNewCardFormSubmission(event) {
    event.preventDefault();
    const profile_url = "https://www.m5hosting.com/wp-content/uploads/no-profile-img.gif";

    props.onCardCreation({name: _name.value, body: _body.value, url: profile_url, id: v4()});
    _name.value = '';
    _body.value = '';
  }

  return (
      <div>
        <form style={formStyle} onSubmit={handleNewCardFormSubmission}>
          <input style={inputStyle}
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}}/>
          <textarea style={bodyStyle}
            id='body'
            placeholder='...'
            ref={(textarea) => {_body = textarea;}}/>
          <button type='submit' style={buttonStyle}>Submit</button>
        </form>
      </div>
    );
  }

  NewCardForm.propTypes = {
    onNewCardCreation: PropTypes.func
  };

  export default NewCardForm;
