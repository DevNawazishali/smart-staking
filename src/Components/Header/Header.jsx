import React, { useState } from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Assets/logo_main.png"
import { FaWallet } from "react-icons/fa";
import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'
export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className='main_header_here'>
      <Navbar collapseOnSelect expand="lg" className="main_headre">
      <Container>
        <Navbar.Brand href="#home" className='main_logo'>
            <img src={logo} alt="" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <span  className="d-block d-md-none " onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
        <Navbar.Collapse id="responsive-navbar-nav"  className={show ? "show":""}>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleClose} href="#features" className='header_links'>Home</Nav.Link>
            <Nav.Link onClick={handleClose} className='header_links' href="#pricing">Staking</Nav.Link>
            <Nav.Link onClick={handleClose} className='header_links' href="#pricing">Contract</Nav.Link>
           
          </Nav>
          <Nav>
           <button className='wallet_button'>Connect <FaWallet /></button>
           <div className='bg_blue'></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
