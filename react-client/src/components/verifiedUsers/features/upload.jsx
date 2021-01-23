import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import { storage } from "../firbase.jsx";
import $ from "jquery";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import container from '@material-ui/core/container';
import InputBase from '@material-ui/core/InputBase';
import Image from 'material-ui-image'

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      categories: ['cars','small-business-for-sale',"food recipes","shoes",'clothes'],
      category:[],
      userId:localStorage.getItem('userId'),
      image:null,
      url :'',
      progress:0,
     };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
  }
  // it addes the values of the input fileds in the states
   handleChange (e) {
        if (e.target.files[0]) {
            this.setState({
            image: e.target.files[0],
        })
      }
    }
    // it handles the upload of the picture in the firbase
    handleUpload () {
      var uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            var progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({
              progress:progress})
            },
            error => {
            console.log(error);
           },
            () => {
              storage
              .ref("images")
              .child(this.state.image.name)
              .getDownloadURL()
              .then(url => {
                this.setState({
                  url:url
              })
              });
              }
              );
           }

//handles the change of the title and save it as a state
      handleChangeTitle(event) {
       this.setState({
      title: event.target.value,
    });
    //gets the userId so we can connect it in the table
    $.ajax({
      type: "Get",
      url: "/signIN1",
      success: (data) => {
          console.log(data)
       this.setState({
        userId:data.result[0].id,

        })


        },
      error:()=> {
      console.log('error')
                 }
            })
       }
  //handles the change of the descrpition and save it as a state
      handleChangeDescription(event) {
      this.setState({
      description: event.target.value,
    });
    }
  //handles the change of the category and save it as a state
    handleChangeCategory(event) {
      this.setState({
      category: event.target.value,
      });
    }
//this will add the our input from input field and picture from the firbase to our database
  handleAdd(event) {
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    var userId = this.state.userId
    var image = this.state.url
 Axios.post("http://localhost:3000/insert", {
      title: title,
      description: description,
      category: category,
      image:image,
      userId:userId,
    })
      .then((res) => console.log(res.data))
      .catch((err) => window.location='/');
      // window.location ='/Items3'


     }
      //we used material ui
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
          <div className={container}>
              <Typography style={ { textAlign: "center", fontFamily: 'BlinkMacSystemFont', fontSize: '3rem'}} >FAZ3ETAK </Typography>
           <div>
         <img src={this.state.url || "http://via.placeholder.com/50 50"} alt="firebase-image"  style={ {  padding: "5px 5px 5px 5px"}} />
         <input  type="file" onChange={this.handleChange.bind(this)}  style={ {  padding: "5px 5px 5px 5px "}}/>
         <div  style={ { paddingLeft: " 510px "}} >
            <Button  onClick={this.handleUpload.bind(this)} variant="contained" color="primary"  >Upload</Button>
          <br/><br/>
        </div>
          <br />

          <br />
         </div>
         <div
            style={{
              border: "  1px solid black",
              borderRadius: "100px",
              width:"500px",
              margin: "auto",
            }}
          >
            <div onSubmit={this.handleSubmit}  >
             <div  style={ { paddingBottom: " 10px ", paddingLeft:"170px" , paddingTop:"70px"}}>
                <TextField  id="standard-textarea"
              label="Title"
              placeholder="Placeholder"
              multiline
              variant="filled"
                  value={this.state.value}
                  onChange={this.handleChangeTitle}
                />
                </div>
              <div  style={ { paddingBottom: " 10px ", paddingLeft:"170px"}}>
                <TextField  id="standard-textarea"
              label="Description"
              placeholder="Description"
              multiline
              variant="filled"
                  value={this.state.value}
                  onChange={this.handleChangeDescription}
                />
                </div>
             <br/>
             <div  style={ { paddingBottom: " 10px ", paddingLeft:"170px"}}>
             <FormControl >
            <InputLabel htmlFor="demo-customized-select-native"> category:</InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
                onChange={this.handleChangeCategory}
            >
              <option aria-label="None" value="" />
              <option  value ='cars'>{this.state.categories[0]}</option>
              <option  value='small-business-for-sale '>{this.state.categories[1]}</option>
              <option  value ='food recipes'>{this.state.categories[2]}</option>
              <option  value='shoes'>{this.state.categories[3]}</option>
              <option  value ='clothes'>{this.state.categories[4]}</option>

            </NativeSelect>
          </FormControl>
          </div>

              <br></br>
              <br></br>
              <div style={ { paddingBottom: " 20px ", paddingLeft:"170px"}}>
              <Button
               variant="contained"
                type="button"
                value="Info"
                onClick={this.handleAdd}
              >
               ADD
              </Button>
            </div>
            </div>
          </div>
          </div>
          </Grid>
        );
      }
    }

export default Upload;
