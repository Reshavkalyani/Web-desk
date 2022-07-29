import React, { useEffect, useState } from 'react';
// import Grid from '@material-ui/core/Grid';
import TodoList from '../../page-components/Desk/Todo/TodoList';
import NavbarComponenet from '../../Components/Navbar'
import Calender from '../../page-components/Desk/Calender/Calender'
import { Button } from 'react-bootstrap'
import "./styles.css";
import Drawer from '../../page-components/Desk/Drawer/Drawer';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../assets/images/child.png';

function Desk() {
  const [quoteData, setQuoteData] = useState({});
  const email = localStorage.getItem('googleEmail')

  useEffect(() => {
    fetch("https://freequote.herokuapp.com/")
      .then(res => res.json())
      .then(res => setQuoteData(res));
  },[])
  
  //#ecf3f3
  if(email){
  return (
    <>
      <div style={{ backgroundColor: '#ebe6ed', height: '100%', paddingBottom: '2rem'}}>
      <NavbarComponenet />
      <Container className="desk">
      <Row style={{marginBottom: '12rem', justifyContent: 'center'}}>
        <Col spacing={5} xs={12} sm={5} className="calender_grid">
          <Button style={{position: 'absolute', right: '30.7%'}} href="/fullcalender">Open Full Calender</Button>
          <Calender />
        </Col>
        {/* <Grid item xs={12} sm={6} style={{padding:'3rem'}} > */}
        <Col style={{ maxWidth: '270px'}}>
          <img src={img} />
        </Col>
      <Col style={{maxHeight: '70vh', paddingTop: '2%',paddingLeft: '3%' , maxWidth: '670px'}}>
            <TodoList/>
        </Col>
      </Row>
        <Row style={{marginBottom:'9rem'}}>
          <Col>
            <Drawer title="College" desc="Place to find all your college related stuff." link="/college" />
          </Col>
          <Col>
          <div className="quote_container">
            <p className="quote_title">The best way to predict your future is to create it.</p>
            <p className="quote_author">-Abraham Lincon</p>
          </div>
          </Col>
          <Col>
            <Drawer title="Personal" desc="Place to find all your personal stuff." link="/personal" />
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}else{
  window.location.href = "/login"
}

}

export default Desk