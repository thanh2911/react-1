import React from 'react'
import { GiNoodles,GiChopsticks  } from "react-icons/gi";
import { FaPizzaSlice,FaHamburger } from "react-icons/fa";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Categary() {
  return (
    <List>
        <NavLink to={"/cuisine/Italian"}>
            <GiChopsticks/>
            <h4>Italia</h4>
        </NavLink>
        <NavLink to={"/cuisine/Japanese"}>
            <GiNoodles/>
            <h4>Japanese</h4>
        </NavLink>
        <NavLink to={"/cuisine/Vietnamese"}>
            <FaHamburger/>
            <h4>Vietnamese</h4>
        </NavLink>
        <NavLink to={"/cuisine/Thai"}>
            <FaPizzaSlice/>
            <h4>Thai</h4>
        </NavLink>

    </List>
  )
}

const List = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center;
    
    a {
        width : 90px ;
        height : 90px;
        margin  : 10px ;
        text-align: center;
        background-color: rgba(0,0,0,0.7);
        color :#fff;
        border-radius : 50% ;
        display:flex ;
        flex-direction : column ;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }

`;

export default Categary