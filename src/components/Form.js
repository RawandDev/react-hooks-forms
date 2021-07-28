import React from "react";

function Form(props) {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          value={props.firstName}
          onChange={props.handleFirstNameChange}
        />
        <input
          type="text"
          value={props.lastName}
          onChange={props.handleLastNameChange}
        />
        <label htmlFor="newsletter">Accept TOS</label>
        <input
          type="checkbox"
          id="newsletter"
          onChange={props.handleNewsletterChange}
          checked={props.agree}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
