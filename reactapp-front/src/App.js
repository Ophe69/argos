import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function App() {
  const [memberName, setMemberName] = useState('');
  const [memberDescription, setMemberDescription] = useState(''); 

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
                //console.log('info user from front', memberName, memberDescription)
                //handleSubmitClick();
              }}
            >Ajouter</Button>
          </Form>
        
        <h2>Membres de l'équipage</h2>
        <section class="member-list">
          <div class="member-item">Eleftheria</div>
          <div class="member-item">Gennadios</div>
          <div class="member-item">Lysimachos</div>
        </section>
</main>
    </div>
  );
}

export default App;
