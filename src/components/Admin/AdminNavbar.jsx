import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const AdminNavbar = () => {
  return (
    <AdminNavbarStyle>
        <div className='container'>
            <div className='btns'>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/about">About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/blogs">Blogs</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/portfolio">Portfolio</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/admin/cotegory">Cotegory</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home</NavLink>
            </div>
        </div>
    </AdminNavbarStyle>
  )
}
const AdminNavbarStyle = styled.div`
@media screen and (max-width:551px){
background: black;
padding: 20px 0;
.btns{
    display: flex;
    gap: 0 20px;
}
.inactive{
    color: white;
    font-size: 12px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
.active{
    background: white;
    color: black;
    font-size: 12px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
}

@media screen and (min-width:551px){
background: black;
padding: 20px 0;
.btns{
    display: flex;
    gap: 0 20px;
}
.inactive{
    color: white;
    font-size: 14px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
.active{
    background: white;
    color: black;
    font-size: 14px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
}

@media screen and (min-width:1020px){
background: black;
padding: 20px 0;
.btns{
    display: flex;
    gap: 0 20px;
}
.inactive{
    color: white;
    font-size: 16px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
.active{
    background: white;
    color: black;
    font-size: 16px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
}

@media screen and (min-width:1400px){
background: black;
padding: 20px 0;
.btns{
    display: flex;
    gap: 0 20px;
}
.inactive{
    color: white;
    font-size: 20px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
.active{
    background: white;
    color: black;
    font-size: 20px;
    text-decoration: none;
    padding: 3px 10px;
    border-radius: 6px;
}
}
`

export default AdminNavbar