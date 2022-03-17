import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ToolbarEnd from './ToolbarEnd';
import ToolBarTop from './ToolBarTop';
import Busqueda from './Busqueda';

function App() {
  let fetchResponse = [];
  let valueTextField = "";
  let hits = [];
  let url = "https://genius.p.rapidapi.com/search?q=";
  const [tracks, setTracks] = useState([]);

  const onChangeValue = (newValue) => {
    console.log(newValue);
    valueTextField = newValue;
  }

  const onClickButton = () => {
    hits = [];
    console.log("Fetch GET here");
    console.log("TextField value:");
    console.log(valueTextField);
    if(valueTextField) {
      valueTextField = valueTextField.replace(" ", '%20');
      console.log(valueTextField);
      url = url + valueTextField;
      fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": "4022f93320msh59feb1ec0ce31e8p1c42e0jsn0d278bf71271"
        }
      })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        console.log(response.response.hits);
        response.response.hits.map((hit) => {
          console.log("Hit:");
          console.log(hit);
          hits.push(
            <Grid  item xs={3} sm={3} md={3} lg={3} > 
              <div className='result'> 
                {hit.result.title} <br></br> 
                {hit.result.artist_names} 
              </div>
            </Grid>);
        });
        setTracks([...tracks, hits]);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }

  

  return (
    <Container>
      <Grid container direction="row" spacing={3} item xs={12} sm={12} md={12} lg={12} >
        <Grid item xs={12} sm={12} md={12} lg={12} > 
          <ToolBarTop onChangeValue={onChangeValue} onClickButton={onClickButton} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} > 
          <Busqueda tracks={tracks} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}  > 
          <ToolbarEnd />      
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
