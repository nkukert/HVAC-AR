import React from 'react';
import logo from './logo.svg';
import Card from '@material-ui/core/Card';
import './App.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>
          Welcome to the development build of MARSH!
        </p>*/}
        <Grid
        container
        spacing={3}
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
          <Grid item xs>
            <div>
                <Card className='topLeft'>Explore</Card>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs>
            <div>
              <Card className='topRight'>Test</Card>
            </div>
          </Grid>

        </Grid>
        <Grid>
          <div className='welcomeDiv'>
          <Card className="welcomeCard">
            <CardContent>
            {/*NEED COLOR FIX FOR TYPOGRAPHY - BLACK TEXT ON BLACK BG NEEDS TO BE WHITE */}
            <Typography color="error" variant="body2" component="p">
            Welcome to the development build of MARSH!
          </Typography>
            </CardContent>
          </Card>
          </div>
        </Grid>

        <Grid
        container
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
        <Grid item xs={3}>
            <div>
                <Card className='bottomLeft'>Evaluate</Card>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
          <div>
                <Card className='bottomRight'>Create</Card>
              </div>
          </Grid>
        </Grid>
      </header>
      
    </div>
    
  );
}

export default App;
