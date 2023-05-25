import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';

export default function TopNav() {
    return (
        <Navbar bg="light" expand="md" fixed='top'>
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-bold'>room</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fw-bold fs-5">
                        <Nav.Link href="#home" className='ms-md-5'>home</Nav.Link>
                        <Nav.Link href="#link" className='ms-md-5'>shop</Nav.Link>
                        <Nav.Link href="#link" className='ms-md-5'>about</Nav.Link>
                        <Nav.Link href="#link" className='ms-md-5'>contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <Navbar fixed='top'>
        //     <Container className='d-flex align-items-center justify-content-start text-white pt-3 navbar-wrapper'>
        //         <div className='fw-bold fs-3'>room</div>
        //         <div className='d-flex align-items-center ms-4 fw-bold fs-5 nav-links'>
        //             <div className='ms-5'>home</div>
        //             <div className='ms-5'>shop</div>
        //             <div className='ms-5'>about</div>
        //             <div className='ms-5'>contact</div>
        //         </div>
        //     </Container>
        // </Navbar>
    )
}
