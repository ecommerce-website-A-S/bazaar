import React from "react";
import $ from "jquery";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import container from '@material-ui/core/container';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      TextField: {
        padding: 300,
      },
    },
  })
);

class signIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [],
      password: [],
      loginStatus: [],
      };
      }
      //checks the our username and password  and brings back the result and save them in the storage with the token value
    login(email, password) {
    var email = this.state.email;
    var password = this.state.password;
    $.ajax({
      method: "POST",
      url: "/signIN1",
      data: JSON.stringify({ email, password }),
      contentType: "application/json",
      success: (data) => {

        this.setState({
          loginStatus: data.auth
        })

        localStorage.setItem('session',data.token);
        localStorage.setItem('userId',data.result[0].id);
          if (this.state.loginStatus=== true){
            window.location ='/loggedIn'

          }
          else(
            alert('you dont have an account')
          )

      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);

          return;
        }
      },
    });
  }
  //to set states for the input fields
 handleChangeemail(event) {
   this.setState({
      email: event.target.value,
    });
  }
  handleChangepassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  render() {
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
   >
      <div
        style={{
          border: "  1px solid grey",
          borderRadius: "100px",
          width: " 470px",
          margin: "auto",
          marginTop: " 100px",
          paddingBottom: "50px",
        }}
      >
        {/* <SignUP /> */}
        <Grid
          alignItems="center"
          alignContent="center"
          container
          direction="row"
          justify="center"
          alignItems="center"
          justify="center"
        >
          <form noValidate autoComplete="off" style={{ width: "40" }}>
            <h1 style={{ margin: "100px 215px 0px 100px" }}>SIGN IN</h1>
            <div>
              <TextField
                style={{ margin: "100px 215px 0px 100px" }}
                type="text"
                className="raised-button--rounded"
                placeholder=" username"
                onChange={this.handleChangeemail.bind(this)}
              />
            </div>
            <div>
              <TextField
                style={{ margin: "100px 215px 0px 100px" }}
                id="filled-basic"
                type="text"
                placeholder=" password"
                onChange={this.handleChangepassword.bind(this)}
              />
            </div>
            <Button
              style={{ margin: "100px 215px 0px 100px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                this.login();
              }}
            >
              SIGN IN
            </Button>
          </form>
        </Grid>
      </div>
       </Grid>
    );
  }
}
export default signIN;
