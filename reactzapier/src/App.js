import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useState } from "react"

// Use of material design
// https://mui.com/material-ui/

// This Google Sheet is updated with the name of email provided in the textfields
// https://docs.google.com/spreadsheets/d/1FDSMMOD5DE3aGiowxFbaTxO1s-qo_vFFFusv2ogq3Kw/edit#gid=0

// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material

// Reference: https://blog.jakoblind.no/react-forms-hooks/

// Zapier examples https://codesandbox.io/s/zapier-webhook-react-forked-l3pchr?file=/src/App.js:745-749


function App() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  
  const handleChangeName = (e) => {
    setName({ name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setEmail({ email: e.target.value });
  };

  const processData = (e) => {
    console.log(name)
    console.log(email)
    e.preventDefault()
    fetch(`https://hooks.zapier.com/hooks/catch/16893332/38q6ilt/`, {
      method: "POST",
      body: JSON.stringify({name, email }),
  })
  }

  return (    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a demo of zapier. Enter the name and email and 
        <br></br>the data is put in a <a href="https://docs.google.com/spreadsheets/d/1FDSMMOD5DE3aGiowxFbaTxO1s-qo_vFFFusv2ogq3Kw/edit#gid=0">Google Sheets</a> and also send to the provided email.</p>
        <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField id="idname" label="Name" variant="filled" onChange= {handleChangeName} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="idemail" label="Email" variant="filled" onChange= {handleChangeEmail} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={processData}>Make it happen!</Button>
          </Grid>
      </Grid>
    </div>
      </header>
    </div>
  );
}

export default App;
