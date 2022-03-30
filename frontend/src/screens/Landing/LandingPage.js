import React from 'react'
import { Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {

  // useEffect(() => {
  //   const userInfo = localStorage.getItem('userInfo');
    
  //   if (userInfo) {
  //     history.push("/mynotes");
  //   }
  // }, [history, userInfo]);

  return (
    <div className = "main">
     <Container>
       <Row>
         <div className="intro-text">
           <div>
             <h1 className="title">Welcome to the Notess</h1>
             <p className="subtitle">Everything is safe here.</p>
           </div>
           <div className="buttonContainer">
             <a href="/login">
               <button size='lg' className='landingbutton'>Login</button>
             </a>
             <a href="/register">
               <button size='lg' className='landingbutton' variant='outline-primary'>Register
               </button>
             </a>
             </div>
         </div>
       </Row>
     </Container>
    </div>
  );
}

export default LandingPage;