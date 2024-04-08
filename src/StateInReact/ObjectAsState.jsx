import React, { useState } from 'react';

function ObjectState() {
  // Define your state object with useState hook
  const [state, setState] = useState({
    name: '',
    age: 0,
    email: ''
  });

  // Event handler to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value // update only the property that's being changed
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>Name: {state.name}</p>
      <p>Age: {state.age}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}

export default ObjectState;
