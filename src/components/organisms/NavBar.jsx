import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <nav style={{display: 'flex', flexDirection: 'row', justifyContent:'space-evenly'}}>
    <NavLink to="/" end> Home</NavLink>
    <NavLink to="/trafic-light"> Semaforo</NavLink>
    <NavLink to="/users"> Users</NavLink>
    <NavLink to="/issues"> Issues</NavLink>
  </nav>
  )
}

export default NavBar