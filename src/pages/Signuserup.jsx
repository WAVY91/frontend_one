import React, { useState, useEffect } from 'react'

const Signuserup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  // // ✅ Load users from localStorage on page load
  // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem('allUsers')) || []
  //   setAllUsers(storedUsers)
  // }, [])

  // ✅ Save users to localStorage anytime allUsers changes
  useEffect(() => {
    localStorage.setItem('allUsers', JSON.stringify(allUsers))
  }, [allUsers])

  // ✅ Add or update user
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!firstName || !lastName || !email || !password) {
      alert('Please fill all fields')
      return
    }

    const userData = { firstName, lastName, email, password }

    if (editIndex !== null) {
      // Update user
      const updatedUsers = [...allUsers]
      updatedUsers[editIndex] = userData
      setAllUsers(updatedUsers)
      setEditIndex(null)
    } else {
      // Add new user
      setAllUsers([...allUsers, userData])
    }

    // Reset form
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  // ✅ Delete user
  const deleteData = (index) => {
    alert('are you sure you want to delete this user')
    const updatedUsers = [...allUsers]
    updatedUsers.splice(index, 1)
    setAllUsers(updatedUsers)
  }

  // ✅ Edit user
  const editData = (index) => {
    const user = allUsers[index]
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email)
    setPassword(user.password)
    setEditIndex(index)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#f4f6f8',
      padding: '20px'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          width: '320px'
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#333' }}>
          {editIndex !== null ? 'Edit User' : 'Sign Up'}
        </h2>

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First name'
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last name'
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />

        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          Already have an account? <a href="/signin">Sign in here</a>
        </p>

        <button
          type='submit'
          style={{
            padding: '10px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {editIndex !== null ? 'Update User' : 'Sign Up'}
        </button>
      </form>

      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}
      >
        {allUsers.map((user, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
              padding: '20px',
              width: '250px',
              textAlign: 'center'
            }}
          >
            <h3 style={{ color: '#007bff', fontSize: '16px', fontWeight: '500' }}>
              <strong style={{ color: 'black' }}>Name:</strong> {user.firstName} {user.lastName}
            </h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '15px'
            }}>
              <button
                onClick={() => editData(index)}
                style={{
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
              >
                Edit
              </button>

              <button
                onClick={() => deleteData(index)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 14px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Signuserup


// import React, { useState } from 'react'

// const Signuserup = () => {
//   const [firstName, setFirstName] = useState('')
//   const [lastName, setLastName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [allUsers, setallUsers] = useState([])

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     let userData = { firstName, lastName, email, password }
//     let newAllUsers = [...allUsers, userData]
//     setallUsers(newAllUsers)

//     setFirstName('')
//     setLastName('')
//     setEmail('')
//     setPassword('')
//   }

//   const deleteData = () => {
    
//   }

//   return (
//     <div style={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       alignItems: 'center', 
//       justifyContent: 'center', 
//       minHeight: '100vh', 
//       background: '#f4f6f8',
//       padding: '20px'
//     }}>
//       <form 
//         onSubmit={handleSubmit} 
//         style={{
//           background: '#fff',
//           padding: '30px',
//           borderRadius: '10px',
//           boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//           display: 'flex',
//           flexDirection: 'column',
//           gap: '15px',
//           width: '320px'
//         }}
//       >
//         <h2 style={{ textAlign: 'center', color: '#333' }}>Sign Up</h2>

//         <input 
//           type="text" 
//           value={firstName} 
//           onChange={(e)=> setFirstName(e.target.value)} 
//           placeholder='First name'
//           style={{
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc'
//           }}
//         />
//         <input 
//           type="text" 
//           value={lastName} 
//           onChange={(e)=> setLastName(e.target.value)} 
//           placeholder='Last name'
//           style={{
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc'
//           }}
//         />
//         <input 
//           type="text" 
//           value={email} 
//           onChange={(e)=> setEmail(e.target.value)} 
//           placeholder='Email'
//           style={{
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc'
//           }}
//         />
//         <input 
//           type="password" 
//           value={password} 
//           onChange={(e)=> setPassword(e.target.value)} 
//           placeholder='Password'
//           style={{
//             padding: '10px',
//             borderRadius: '5px',
//             border: '1px solid #ccc'
//           }}
//         />

//         <p style={{ fontSize: '14px', textAlign: 'center' }}>
//           Already have an account? <a href="/signin">Sign in here</a>
//         </p>

//         <button 
//           type='submit'
//           style={{
//             padding: '10px',
//             border: 'none',
//             backgroundColor: '#007bff',
//             color: '#fff',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             fontWeight: 'bold'
//           }}
//         >
//           Sign Up
//         </button>
//       </form>

//       <div 
//         style={{
//           marginTop: '40px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '20px',
//           justifyContent: 'center'
//         }}
//       >
//         {allUsers.map((user, index) => (
//           <div 
//             key={index} 
//             style={{
//               background: '#fff',
//               borderRadius: '10px',
//               boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//               padding: '20px',
//               width: '250px',
//               textAlign: 'center'
//             }}
//           >
//             <h3 style={{ color: '#007bff', fontSize:'16px', fontWeight:'500'}}> 
//               <strong style={{color:'black'}}>Name:</strong> {user.firstName} {user.lastName}
//             </h3>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Password:</strong> {user.password}</p>

//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '10px',
//               marginTop: '15px'
//             }}>

//               <button 
//                 style={{
//                   backgroundColor: '#28a745',
//                   color: 'white',
//                   border: 'none',
//                   padding: '8px 14px',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   fontWeight: 'bold'
//                 }}
//                 onMouseOver={(e)=> e.target.style.backgroundColor = '#218838'}
//                 onMouseOut={(e)=> e.target.style.backgroundColor = '#28a745'}
//               >
//                 Edit
//               </button>

//               <button onClick={deleteData}
//                 style={{
//                   backgroundColor: '#dc3545',
//                   color: 'white',
//                   border: 'none',
//                   padding: '8px 14px',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   fontWeight: 'bold'
//                 }}
//                 onMouseOver={(e)=> e.target.style.backgroundColor = '#c82333'}
//                 onMouseOut={(e)=> e.target.style.backgroundColor = '#dc3545'}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Signuserup




// // import React, { useState } from 'react'

// // const Signuserup = () => {
    
// //       const [firstName, setFirstName] = useState('')
// //       const [lastName, setLastName] = useState('')
// //       const [email, setEmail] = useState('')
// //       const [password, setPassword] = useState('')

// //       const [allUsers, setallUsers] = useState([])

// //       const handleSubmit =(e) => {
// //         e.preventDefault();
// //             let userData = {
// //                 firstName,
// //                 lastName,
// //                 email,
// //                 password
// //             }

// //             let newAllUsers = [...allUsers, userData]
// //             setallUsers(newAllUsers)
// //             console.log(newAllUsers)
// //       }
// //   return (
// //     <>
// //     <div>
// //         <form onSubmit={handleSubmit}>
// //             <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} name="firstName" id="firstName" placeholder='first name'/>
// //             <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} name="lastName" id="lastName" placeholder='last name'/>
// //             <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" placeholder='email'/>
// //             <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder='password'/>
// //             <p>Already have an account ? <a href="/signin">sign in here</a></p>
// //             <button type='submit'>Sign up</button>
// //         </form>

// //         {
// //         allUsers.map((user, index)=> (
// //           <div key={index}>
// //             <h2>{user.firstName}</h2>
// //             <h2>{user.lastName}</h2>
// //             <h2>{user.email}</h2>
// //             <h2>{user.password}</h2>
// //           </div>
// //         ))}
// //     </div>
// //     </>
// //   )
// // }

// // export default Signuserup