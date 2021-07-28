import { useState } from "react";
import DisplayData from "./DisplayData";
import Form from "./Form";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [agree, setAgree] = useState(false);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(
      `firstname: ${firstName}, lastname: ${lastName}, agreement: ${agree}`
    );
  }

  function handleNewsletterChange(event) {
    setAgree(event.target.checked);
  }

  return (
    <div>
      <Form
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleSubmit={handleSubmit}
        handleNewsletterChange={handleNewsletterChange}
        agree={agree}
      />
      <DisplayData firstName={firstName} lastName={lastName} agree={agree} />
    </div>
  );
}

export default ParentComponent;
