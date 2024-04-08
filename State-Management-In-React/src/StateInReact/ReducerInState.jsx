import React, { useReducer } from 'react';

// Define your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

function MyComponent() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    age: 0,
    email: ''
  });

  // Event handler to update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Dispatch action to update state based on the event
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
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

export default MyComponent;
