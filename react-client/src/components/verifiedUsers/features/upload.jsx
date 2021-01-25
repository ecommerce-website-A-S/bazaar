import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import { storage } from "../firbase.jsx";
import $ from "jquery";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import container from '@material-ui/core/container';
import InputBase from '@material-ui/core/InputBase';
import Image from 'material-ui-image'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SimpleBottomNavigation from "../../footer.jsx";
// import BackgroundHeader from "assets/img/BlueDiamondBg.png"
// import SimpleBottomNavigation from "../footer.jsx";
// const BackgroundHead = {
//   backgroundImage: 'url('+ BackgroundHeader+')'
//   }

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      categories: ['cars','small-business-for-sale',"food recipes","shoes",'clothes'],
      category:[],
      userId:"",
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
      window.location ='/Items3'


     }
      //we used material ui
      render() {
        return (
          // <div style={BackgroundHead}>
          <div>

         <div  style={{   marginLeft : '7% '    ,  border: "26px ", borderStyle: 'groove', height: '400%' , padding : '4% ' , width : '75%' , textAlign: 'center'  }} >
          <p  style={{  fontFamily :"Cursive" }} > BAZZAR is better than any other online store offering and selling your product in the easiest way</p>
          <p   style={{  fontFamily :"Cursive" }}  >Sell  your product </p>
          <div >


         <div >

            <div onSubmit={this.handleSubmit}  >
              <label>Title</label>
              <br/>
            <TextField id="outlined-basic"     value={this.state.value}     onChange={this.handleChangeTitle} variant="outlined"    style={ {  width : '80% '}} />
            <br/>
             <br/>
             <label>Description</label>
              <br/>

            <TextField id="outlined-basic"    value={this.state.value}    onChange={this.handleChangeDescription} variant="outlined"    style={ {   width : '80% '}} />


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
              <div  style={ { width : '80% '}}  >
         <img src={this.state.url }   style={ {  padding: "5px 5px 5px 5px"}} />
         <input  type="file" onChange={this.handleChange.bind(this)}  style={ { marginRight : "580px" }}/>
         <div  style={ { paddingLeft: " 510px "}} >
            <Button  onClick={this.handleUpload.bind(this)}  color="secondary"    variant="contained" style ={{marginRight : "200px "}} >Upload</Button>
          <br/><br/>
        </div>
          <br />

          <br />
         </div>
              <div >
              <Button
               style={ {  width : '80% '}}
               variant="contained"
                type="button"
                value="Info"
                onClick={this.handleAdd}
                color="secondary"
              >
               ADD
              </Button>
            </div>
            </div>
          </div>
          </div>
          </div>

          <br/>
             <br/>
             <br/>

          <SimpleBottomNavigation />
      </div>



        );
      }
    }

export default Upload;
