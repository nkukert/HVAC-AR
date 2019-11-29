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
        direction='row'
        justify='flex-start'
        alignItems='flex-start'>
          <Grid item xs={3}>
            <div className = 'topLeft'>
                <Card className='welcomeCard'>Oh hai</Card>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
          <div className = 'topRight'>
                <Card className='welcomeCard'>Oh hai</Card>
              </div>
          </Grid>

        </Grid>
        <Grid>
          <div className='welcomeDiv'>
          <Card className="welcomeCard">
            <CardContent>
            <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
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
            <div className = 'bottomLeft'>
                <Card className='welcomeCard'>Oh hai</Card>
            </div>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}>
          <div className = 'bottomRight'>
                <Card className='welcomeCard'>Oh hai</Card>
              </div>
          </Grid>
        </Grid>
      </header>
      
    </div>
    
  );
}

export default App;
