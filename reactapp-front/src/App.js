import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Form, FormGroup, Input} from 'reactstrap'; //, Label, Container, Row, Col, ListGroup, ListGroupItem


function App() {
  const [memberName, setMemberName] = useState('');
  const [memberDescription, setMemberDescription] = useState(''); 
  const [message, setMessage] = useState('');
  const [memberList, setMemberList] = useState([]);

  var handleSubmitClick = async () => {
    const data = await fetch('/addMember', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `memberName=${memberName}&memberDescription=${memberDescription}`
    })
      const response = await data.json();
      console.log('response', response);
      setMemberList(response.memberList);
      setMessage(response.message);
  }

  var clickAddMember = (newMember) =>{
    setMemberList([...memberList, newMember]);
  }
/*   var memberListChart = memberList.map((member, i)=>{
    <ListGroup horizontal="lg">
        <ListGroupItem tag="a" href="#">Cras justo odio</ListGroupItem>
      </ListGroup>
  }); */
  

  return (
    <div className="App">
      <header>
        <h1>
          <img className="image" src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>
      <main>

        <h2>Ajouter un(e) Argonaute</h2>
          <Form inline className="formCountainer">
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              {/* <Label for="memberName" className="mr-sm-2">Nom</Label> */}
              <Input 
              type="text" 
              name="memberName" 
              id="memberName" 
              placeholder="Nom" 
              value={memberName} 
              onChange={e =>{setMemberName(e.target.value)}} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              {/* <Label for="memberDescription" className="mr-sm-2">Description</Label> */}
              <Input 
              type="text" 
              name="memberDescription" 
              id="memberDescription" 
              placeholder="Description"
              value={memberDescription} 
              onChange={e =>{setMemberDescription(e.target.value)}} />
            </FormGroup>
            <Button
              onClick={() =>{
                setMemberName('');
                setMemberDescription('');
                //console.log('info user from front', memberName, memberDescription);
                handleSubmitClick();
                clickAddMember();
              }}
            >Ajouter</Button>
          </Form>
          <div>
            <h6>{message}</h6>
          </div>
        
        <h2>Membres de l'équipage</h2>
        {/* <section class="member-list">
          <div class="member-item">Eleftheria</div>
          <div class="member-item">Gennadios</div>
          <div class="member-item">Lysimachos</div>
        </section> */}
        {/* <Container>
          <Row>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
            <Col sm="4">.col-sm-4</Col>
          </Row>
        </Container> */}
        <h4>Les membres de votre équipage: { memberList.join(',') }</h4>

</main>
    </div>
  );
}

export default App;
