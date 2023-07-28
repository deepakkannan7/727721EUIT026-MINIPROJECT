// import axios from 'axios';
// import './Adpost.css';
// import React, { useState } from 'react';

// function Adpost() {
//   const [pid, setId] = useState('');
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');

 
//   const [imagesUrl, setImageUrl] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       pid:pid,
//       pname: name,
//       pprice:price,
//       pdescription:description,
//       pimagesUrl:imagesUrl
//     };

//     try {
//       const response = await axios.post('http://localhost:8081/api/v1/user/addpro', data);
//       const newProductId = response.data.pid;
  
    
      
  
      
//       const formData1 = new FormData();
//       formData1.append('imageUrl', imagesUrl); // Attach the image file
  
//       const imageUploadResponse1 = await axios.post(`http://localhost:8081/api/v1/user/uploadImageUrl/${newProductId}`, formData1, {

//       });
  
//       console.log('Image Url uploaded successfully!', imageUploadResponse1);

//       setId('');
//       setName('');
//       setPrice('');
//       setDescription('');
    
//       setImageUrl('');
  
//     } catch (error) {
//       console.error('Error:', error);
//       // Handle errors if needed
//     }
//   };


//   return (
//     <>
//       <div className='ig'>
//         <div className='mar'>
//           <div className='form'>
//             <form onSubmit={handleSubmit}>
//               <h1>
//                 <center className='pd'>Post Product Details</center>
//               </h1>

//               <div style={styles.formRow} >
//                 <label style={styles.label} className='epdid1'>Enter ID:</label>
//                 <input
//                   type="number"
//                   id="id"
//                   className='epidinput'
//                   style={styles.input}
//                   value={pid}
//                   onChange={(event) => setId(event.target.value)}
//                 />
//               </div>

//               <div style={styles.formRow}  className='epn'>
//                 <label style={styles.label}>Product Name:</label>
//                 <input
//                   type="text"
//                   id="name"
//                   className='epninput'
//                   style={styles.input}
//                   value={name}
//                   onChange={(event) => setName(event.target.value)}
//                 />
//               </div>

//               <div style={styles.formRow}  className='epp'>
//                 <label style={styles.label}>Product Price:</label>
//                 <input
//                   type="number"
//                   id="count"
//                   className='eppinput'
//                   style={styles.input}
//                   value={price}
//                   onChange={(event) => setPrice(event.target.value)}
//                 />
//               </div>

//               <div style={styles.formRow} className='epd'>
//                 <label style={styles.label}>Product Description:</label>
//                 <input
//                   type="text"
//                   id="description"
//                   className='epdinput'
//                   style={styles.input}
//                   value={description}
//                   onChange={(event) => setDescription(event.target.value)}
//                 />
//               </div>
//               <div style={styles.formRow} className='epurl' >
//       <label style={styles.label}>Image URL:</label>
//       <input
//         type="text"
//         id="imageUrl"
//         className='epurlinput'
//         style={styles.input}
//         value={imagesUrl}
//         onChange={(event) => setImageUrl(event.target.value)}
//       />
//     </div>
              

//               <div className="posubmit" style={styles.formRow}>
//                 <button className="bon">Submit</button>
//               </div>
//             </form>

          
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// const styles = {
//   // container: {
//   //   maxWidth: '500px',
//   //   margin: '0 auto',
//   //   padding: '20px',
//   //   border: '1px solid #ccc',
//   //   backgroundColor: 'rgb(205, 196, 196)',
    
//   // },
//   formRow: {
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   label: {
//     fontWeight: 'bold',
//     flex: '1',
//   },
//   input: {
//     flex: '2',
//     padding: '5px',
//     border: '1px solid #ccc',
//     borderRadius: '3px',
//   },
//   successMessage: {
//     backgroundColor: '#dff0d8',
//     color: '#3c763d',
//     padding: '10px',
//     borderRadius: '3px',
//     textAlign: 'center',
//     marginTop: '20px',
//   },
// };

// export default Adpost;


import axios from 'axios';
import './Adpost.css';
import React, { useState } from 'react';

function Adpost() {
  const [pid, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imagesUrl, setImageUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      pid: pid,
      pname: name,
      pprice: price,
      pdescription: description,
      pimagesUrl: imagesUrl,
    };

    try {
      const response = await axios.post(
        'http://localhost:8081/api/v1/user/addpro',
        data
      );
      const newProductId = response.data.pid;

      const formData1 = new FormData();
      formData1.append('imageUrl', imagesUrl); // Attach the image file

      const imageUploadResponse1 = await axios.post(
        `http://localhost:8081/api/v1/user/uploadImageUrl/${newProductId}`,
        formData1
      );

      console.log('Image Url uploaded successfully!', imageUploadResponse1);

      setId('');
      setName('');
      setPrice('');
      setDescription('');
      setImageUrl('');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors if needed
    }
  };

  return (
    <>
       <div className='body'><br></br><br></br><br></br><br></br>
        <div className='mar'>
          <div className='form'>
            <form onSubmit={handleSubmit}>
              <h1>
                <center className='pd'>Post Product Details</center>
              </h1>

              <div className='formRow'>
                <label className='epid-label'>Enter ID:</label>
                <div className='inputContainer'>
                  <input
                    type='number'
                    id='id'
                    className='inputField'
                    value={pid}
                    onChange={(event) => setId(event.target.value)}
                  />
                </div>
              </div>

              <div className='formRow'>
                <label className='epn-label'>Product Name:</label>
                <div className='inputContainer'>
                  <input
                    type='text'
                    id='name'
                    className='inputField'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>

              <div className='formRow'>
                <label className='epp-label'>Product Price:</label>
                <div className='inputContainer'>
                  <input
                    type='number'
                    id='count'
                    className='inputField'
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>
              </div>

              <div className='formRow'>
                <label className='epd-label'>Product Description:</label>
                <div className='inputContainer'>
                  <input
                    type='text'
                    id='description'
                    className='inputField'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
              </div>

              <div className='formRow'>
                <label className='eimu-label'>Image URL:</label>
                <div className='inputContainer'>
                  <input
                    type='text'
                    id='imageUrl'
                    className='inputField'
                    value={imagesUrl}
                    onChange={(event) => setImageUrl(event.target.value)}
                  />
                </div>
              </div>

              <div className='posubmit' >
      <button className='submitButton'>Submit</button>
    </div>
            </form>
          </div>
        </div>
        </div>
    </>
  );
}

export default Adpost;
