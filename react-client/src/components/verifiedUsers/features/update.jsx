import React, { Component } from 'react';
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
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';
import SimpleBottomNavigation from "../../footer.jsx";

class Update extends Component {
  constructor(props) {

    super(props);
console.log(this.props.location.myCustomProps)
    this.state = {
      title: this.props.location.myCustomProps.title,
      description:this.props.location.myCustomProps.description,
      categories: ['cars','small-business-for-sale',"food recipes","shoes",'clothes'],
      category:this.props.location.myCustomProps.category,
      userId:localStorage.getItem('userId'),
      image:this.props.location.myCustomProps.image,
      url :this.props.location.myCustomProps.image,
      progress:0,
     };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
     this.handleUpdate = this.handleUpdate.bind(this);
     this.DeleteItem = this.DeleteItem.bind(this);
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
handleUpdate(event) {
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    var userId = this.state.userId
    var image = this.state.url
    var id = this.props.match.params.id
 Axios.put("/update", {
      title: title,
      description: description,
      category: category,
      image:image,
      userId:userId,
      id:id
    })
      .then((res) => console.log(res.data))

      // window.location ='/Items3'


     }


     DeleteItem()  {
      var id = this.props.match.params.id
      console.log(id)
      Axios.delete('/delete1'+id
        )
        .then(res => console.log(res.data));

      }
      //we used material ui
      render() {
        return (
          <div>
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

          <div  style={{   marginLeft : '7% '    ,  border: "26px ", borderStyle: 'groove', height: '400%' , padding : '4% ' , width : '75%' , textAlign: 'center'  }} >
          <p  style={{  fontFamily :"Cursive" }} > BAZZAR is better than any other online store offering and selling your product in the easiest way</p>
          <p   style={{  fontFamily :"Cursive" }}  >Sell  your product </p>

           <div>


          <br />

          <br />
         </div>
         <div  >
            <div onSubmit={this.handleSubmit}  >
            <label>Title</label>
            <br/>
            <TextField id="outlined-basic"          value={this.state.title}    onChange={this.handleChangeTitle} variant="outlined"    style={ {  width : '80% '}} />
            <br/>
             <br/>
             <label>Description</label>
              <br/>


              <TextField id="outlined-basic"   value={this.state.description}   onChange={this.handleChangeDescription} variant="outlined"    style={ {   width : '80% '}} />


<br/>
<br/>


             <br/>
             <div  >
             <label>category</label>
              <br/>
             <FormControl  style={ { width : '80% '}}>
            <InputLabel  variant="outlined"  style={ { width : '80% ', marginLeft:' 40px ' , width : '80% '}}></InputLabel>
            <Select
          labelId="demo-simple-select-label"
          value={this.state.category}
             variant="outlined"
              id="demo-customized-select-native"
                onChange={this.handleChangeCategory}
            >
              <MenuItem  value=""> </MenuItem>
              <MenuItem  value ='cars'>{this.state.categories[0]}</MenuItem>
              <MenuItem  value='small-business-for-sale '>{this.state.categories[1]}</MenuItem>
              <MenuItem  value ='food recipes'>{this.state.categories[2]}</MenuItem>
              <MenuItem  value='shoes'>{this.state.categories[3]}</MenuItem>
              <MenuItem  value ='clothes'>{this.state.categories[4]}</MenuItem>

              </Select>
            </FormControl>
          </div>




              <br></br>
              <br></br>
              <div style={ { paddingBottom: " 20px "}}>
              <img src={this.state.url || "http://via.placeholder.com/50 50"} alt="firebase-image"  style={ {  padding: "5px 5px 5px 5px"}} />
         <input  type="file" onChange={this.handleChange.bind(this)}  style={ {  padding: "5px 5px 5px 5px "}}/>
         <div  style={ { paddingLeft: " 510px "}} >
            <Button  onClick={this.handleUpload.bind(this)} variant="contained"   color="secondary"  >Upload</Button>
          <br/><br/>
        </div>
              <Button
               style={ {  width : '80% '}}
               variant="contained"
                type="button"
                value="Info"
                onClick={this.handleUpdate}
                color="secondary"
              >
               Update
              </Button>
<br/><div>
              <Button    style={ {  marginTop : '2%', width : '80% '}}
               variant="contained"
                type="button"
                value="Info" color="secondary" onClick = {() => this.DeleteItem() }> delete</Button>
                </div>

            </div>
            </div>
          </div>
          </div>
          </Grid>
                    <SimpleBottomNavigation />
                    </div>
        );
      }
    }

export default Update;
