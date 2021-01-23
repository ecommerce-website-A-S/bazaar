import React from "react";
import $ from "jquery";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
//css styling code
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

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  //here is our function that does the post request to save the user name and password in our database
  register(email, password) {
    // console.log(this.state);
    var email = this.state.email;
    var password = this.state.password;
    $.ajax({
      method: "POST",
      url: "/SignUp1",
      data: JSON.stringify({ email: email, password: password }),
      contentType: "application/json",
      success: (data) => {

      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);
          return;
        }
      },
    });

    window.location ='/'
  }
  //handle the changes in the input field when we enter it
  handleChangeemail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  //handle the changes in the input field when we enter it
  handleChangepass(event) {
     this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
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
        <Grid
          alignItems="center"
          alignContent="center"
          container
          direction="row"
          justify="center"
          alignItems="center"
          justify="center"
        >
          <form noValidate autoComplete="off">
            <h1 style={{ margin: "100px 215px 0px 100px", float: "left" }}>
              SIGN UP
            </h1>
            <div>
              <TextField
                style={{ margin: "100px 215px 0px 100px" }}
                Type="text"
                className="raised-button--rounded"
                placeholder=" username"
                onChange={this.handleChangeemail.bind(this)}
              />
            </div>
            <div>
              <TextField
                style={{ margin: "100px 215px 0px 100px" }}
                id="filled-basic"
                Type="text"
                placeholder=" password"
                onChange={this.handleChangepass.bind(this)}
              />
            </div>
            {/* //the button that does the post request to save in our database */}
            <Button
              style={{ margin: "100px 215px 0px 100px" }}
              variant="contained"
              color="primary"
              onClick={() => {
                this.register();
              }}
            >
              {" "}
              Sign Up
            </Button>
          </form>
        </Grid>
      </div>
    );
  }
}
export default SignUp;
