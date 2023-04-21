import React, { useState } from 'react';
import './UserForm.css'
import { useNavigate } from 'react-router-dom';


  function UserForm() {
    //here i am setting all the state or required input fields of the form
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [parentage, setParentage] = useState('');
    const [education, setEducation] = useState([{ degree: '', institution: '', year: '' }]);


     //here i am handling changes to the education items entered by the user
     //function takes two arguments: event and index. event is the event object created when the user types in the input fields, and index is the index of the education item being modified.
    //we extract the name and value of the input field from the event object using destructuring then copy of the education array using the spread operator ([...education])
    //we access the education item at the given index in the copy of the education array (list[index]) and set the value of the name to the new value entered by the user.
    //we set the education state to the modified list using the setEducation
    const handleEducationChange = (event, index) => {
      const { name, value } = event.target;
      const list = [...education];
      list[index][name] = value;
      setEducation(list);
    };

//when the "Add Education" button is clicked, this function is called and a new empty education item is added to the list of education items.
    const handleAddEducation = () => {
      setEducation([...education, { degree: '', institution: '', year: '' }]);
    };

//    copy of the education array is created using the spread operator [...education]. This is important because we should not modify the original state directly.
//    splice method is used to remove one element from the list from the index position
//   setEducation function is called with the updated list array
    const handleDeleteEducation = (index) => {
      const list = [...education];
      list.splice(index, 1);
      setEducation(list);
    };
// this function is called when we submit the form
// first prevents the default form submission behavior, which would cause the page to refresh.
// creates a new object called userData set item into localStorage and empty the input filed on submitting
//then navigate to show data
    const handleSubmit = (event) => {
      event.preventDefault();
      const userData = { name, email, age, parentage, education };
      localStorage.setItem('userData', JSON.stringify(userData));
      setName('');
      setEmail('');
      setAge('');
      setParentage('');
      setEducation([{ degree: '', institution: '', year: '' }]);
      navigate('/showdata')
    };

    return (
      <>
      <h1>User Data Input Form:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />

        <label htmlFor="age">Age:</label>
        <input type="number" id="age" min="18" max="80" name="age" value={age} onChange={(event) => setAge(event.target.value)} required />

        <label htmlFor="percentage">Percentage%:</label>
        <input type="text" id="Percentage" name="percentage" min="33" max="80" value={parentage} onChange={(event) => setParentage(event.target.value)} required />

        {education.map((educationItem, index) => (
          <div key={index}>
            <label htmlFor={`degree-${index}`}>Degree:</label>
            <input type="text" id={`degree-${index}`} name="degree" value={educationItem.degree} onChange={(event) => handleEducationChange(event, index)} required />

            <label htmlFor={`institution-${index}`}>Institution:</label>
            <input type="text" id={`institution-${index}`} name="institution" value={educationItem.institution} onChange={(event) => handleEducationChange(event, index)} required />

            <label htmlFor={`year-${index}`}>Year:</label>
            <input type="text" id={`year-${index}`} name="year" value={educationItem.year} onChange={(event) => handleEducationChange(event, index)} required />

            <button type="button" onClick={() => handleDeleteEducation(index)}>Delete</button>
          </div>
        ))}

        <button type="button" onClick={handleAddEducation}>Add Education</button>

        <button type="submit">Submit</button>
      </form>
      </>
    );
  }

export default UserForm;
