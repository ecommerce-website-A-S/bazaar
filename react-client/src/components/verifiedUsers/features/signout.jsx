import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import container from '@material-ui/core/container';





class SignOut extends React.Component {
  constructor(props) {
    super(props);
     }

//the function that deletes the token we have in order to sign out
  signout() {
  localStorage.clear()
  window.location = '/'
  }
  //here is get us back to our homepage
  nosignout(){
    window.location ='/loggedIn'
  }





  render () {
    return (
      <Grid container
      item xs={16}
   direction='column'
   alignContent='stretch'
   direction="row"
   alignItems='stretch'
   alignItems='stretch'
   justify='center'
   wrap='wrap'
   > <div>

      <Typography style={{ textAlign:'center' ,fontSize:'50px', fontFamily:'Cursive	'}}>are you sure you want to sign out ? </Typography>
   <br/> <br/>
      <Button  color="secondary"    variant="contained" onClick=  {this.signout.bind(this)}>yes</Button>
      <Button  style={{ marginLeft:'5px'}} color="secondary"    variant="contained" onClick= {this.nosignout.bind(this)}>
      no</Button>
        </div> </Grid>)
        }


}

export default SignOut