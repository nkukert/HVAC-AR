import React from 'react';
import Card from '@material-ui/core/Card';
import '../App.css';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

function Home(props) {

  

    return (
        <div className="App">
          <header className="App-header">
            <Grid
            container
            spacing={3}
            direction='row'
            justify='flex-start'
            alignItems='flex-start'>
              <Grid item xs>
                <div>
                    <Card className='topLeft' onClick={() => props.setPageSelected("explore")}>Explore</Card>
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
              <Card className="welcomeCard">
                <CardContent>
                Welcome to the development build of MARSH!
                </CardContent>
              </Card>
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
export default Home;