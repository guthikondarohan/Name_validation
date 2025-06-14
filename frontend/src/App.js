import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submit', {
        name,
        date,
      });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: '20px' }}>Submit Your Info</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={styles.input}
          />
        </div>

        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};

export default App;
