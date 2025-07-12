import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    goal: 'weight-loss',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/diet-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert('Your Diet Plan: ' + data.plan);
    } catch (error) {
      alert('Failed to fetch diet plan. Make sure the backend is running.');
    }
  };

  return (
    <div className="App">
      <h2>Fitness Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required />
        <select name="goal" onChange={handleChange}>
          <option value="weight-loss">Weight Loss</option>
          <option value="weight-gain">Weight Gain</option>
          <option value="maintain">Maintain Weight</option>
        </select>
        <button type="submit">Get Diet Plan</button>
      </form>
    </div>
  );
}

export default App;