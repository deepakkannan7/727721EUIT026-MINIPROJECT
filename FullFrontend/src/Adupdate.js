import axios from 'axios';
// import './Post.css';
import './Adupdate.css';
import React, { useState } from 'react';

function Adupdate() {
  const [pid, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      pid:pid,
      pname: name,
      pprice:price,
      pdescription:description,
    };

    try {
        const response = await axios.put(`http://localhost:8081/api/v1/user/updatingpro/${pid}`, data);
  
        // Reset the form fields if needed
        setId('');
        setName('');
        setPrice('');
        setDescription('');
      } catch (error) {
        console.error('Error:', error);
        // Handle errors if needed
      }
    };
        
  return (
    <>
      <div className='body7'><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className='mar'>
          <div className='u1form'>
            <form onSubmit={handleSubmit}>
              <h1>
                <center className='ud'>Update Product Details</center>
              </h1>

              <div className='formRow1'>
                <label className='epid-label1'>Enter ID:</label>
                <div className='inputContainer1'>
                <input
                  type="number"
                  id="id"
                  className='inputField1'
                  style={styles.input}
                  value={pid}
                  onChange={(event) => setId(event.target.value)}
                />
              </div>
              </div>

              <div className='formRow1'>
                <label className='epid-label1'>Product Name:</label>
                <div className='inputContainer1'>
                <input
                  type="text"
                  id="name"
                  className='inputField1'
                  style={styles.input}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              </div>

              <div className='formRow1'>
                <label className='epid-label1'>Product Price:</label>
                <div className='inputContainer1'>
                <input
                  type="number"
                  id="count"
                  className='inputField1'
                  style={styles.input}
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </div>
              </div>

              <div className='formRow1'>
                <label className='epid-label1'>Product Description:</label>
                <div className='inputContainer1'>
                <input
                  type="text"
                  id="description"
                  className='inputField1'
                  style={styles.input}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </div>
              </div>

              

              <div className='posubmit'>
                <button className='submitButton'>Submit</button>
              </div>
            </form>

          
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container1: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    backgroundColor: 'rgb(205, 196, 196)',
  },
  formRow1: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
  },
  label1: {
    fontWeight: 'bold',
    flex: '1',
  },
  input1: {
    flex: '2',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  successMessage1: {
    backgroundColor: '#dff0d8',
    color: '#3c763d',
    padding: '10px',
    borderRadius: '3px',
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Adupdate;