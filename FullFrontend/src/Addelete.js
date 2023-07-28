import axios from 'axios';
import './Adelete.css';
import React, { useState } from 'react';

function Addelete() {
  const [pid, setId] = useState('');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/user/deletePro/${pid}`);
      // Reset the id after successful deletion
      setId('');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };

  return (
    <>
      <div className='body2'><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className='mar'>
          <div className='dform'>
            <form onSubmit={(event) => event.preventDefault()}>
              <h1>
                <center className='dd'>Delete Products</center>
              </h1>

              <div className='formRow2'>
                <label className='epid-label2'>Enter ID:</label>
                <div className='inputContainer2'></div>
                <input
                  type="number"
                  id="id"
                  className='inputField2'
                  style={styles.input}
                  value={pid}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>

              <div className="posubmit">
                <button className='submitButton2' onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: 'rgb(205, 196, 196)',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    flex: '1',
  },
  input: {
    flex: '2',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  successMessage: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    padding: '10px',
    borderRadius: '3px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Addelete;