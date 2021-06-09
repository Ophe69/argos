import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Form, FormGroup, Input, ListGroup, ListGroupItem} from 'reactstrap'; //, Label, ListGroupItemText


function App() {
  const [memberName, setMemberName] = useState('');
  const [memberDescription, setMemberDescription] = useState(''); 
  const [message, setMessage] = useState('');
  const [listCrewMembers, setListCrewMembers] = useState([]);


  var handleSubmitClick = async () => {
    const data = await fetch('/addMember', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `memberName=${memberName}&memberDescription=${memberDescription}`
    })
      const response = await data.json();
      //console.log('responsePost', response);
      setListCrewMembers(response.memberList);
      //var listCrewMembers = response.memberList; 
      
      setMessage(response.message);
      //console.log('memberList arrive sur front', listCrewMembers)

      
  }
  var membersChart = listCrewMembers.map((member, i) =>{
    return(
      <div className="crewName">
        <h5>{member.memberName}</h5>
        <p>{member.memberDescription}</p>
      </div>
    )
  })


/* 
    var displayCrewMembers = async() => {
      const dataCrew = await fetch('/crewMembers')
      const responseCrew = await dataCrew.json()
      console.log('comming from get request', responseCrew)
      setMemberList(responseCrew.memberList)

      setCrewName(responseCrew.memberList.memberName);
      setCrewDescription(responseCrew.memberList.memberDescription);
    }
 */
    
    
  
  

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
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 formInput">
              
              <Input
              type="text" 
              name="memberName" 
              id="memberName" 
              placeholder="Nom" 
              value={memberName} 
              onChange={e =>{setMemberName(e.target.value)}} />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0 formInput">
              
              <Input 
              type="text" 
              name="memberDescription" 
              id="memberDescription" 
              placeholder="Description"
              value={memberDescription} 
              onChange={e =>{setMemberDescription(e.target.value)}} />
            </FormGroup>
            <Button
              className="submitButton"
              onClick={() =>{
                setMemberName('');
                setMemberDescription('');
                console.log('info user from front', memberName, memberDescription);
                handleSubmitClick();
                setTimeout(() => {
                  setMessage('');
                }, 3000);
          
                setTimeout(() => {
                  
                }, 3000)
                //clickAddMember();
                //displayCrewMembers();
              }}
            >Ajouter</Button>
          </Form>
          <div>
            <h6 className="savedMessage">{message}</h6>
          </div>
          <div>
            <h2>Membres de l'équipage</h2>

            <ListGroup horizontal>
              <ListGroupItem className="memberTable">{membersChart}</ListGroupItem>
            </ListGroup>
          </div>
          <div></div>

      </main>
      <footer>
        <p>Réalisé par Ophélia à New-Lugdunum en 2021 ap. JC</p>
      </footer>
    </div>
  );
}

export default App;
