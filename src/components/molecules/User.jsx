/* eslint-disable react/prop-types */

const User = (props) => {
    // const { id, name, username, email, city, street } = props
 
    const { id, title, status } = props

  return (
    // <div key={id} style={{ border: '1px solid black', padding: '20px'}}>
    //     <h4>{name}</h4>
    //     <p>username: {username}</p>
    //     <a href={`mailto:${email}`}>{email}</a>
    //     <ul>
    //         <li>street: {street}</li>
    //         <li>city: {city}</li>
    //     </ul>
    // </div>
    
    <div key={id} style={{ border: '1px solid black', padding: '20px'}}>
    <h4>{id}</h4>
    <p>ID: {id}</p>
    <p>Title: {title}</p>
    <p>Status: {status}</p>
</div>
  )
}

export default User;