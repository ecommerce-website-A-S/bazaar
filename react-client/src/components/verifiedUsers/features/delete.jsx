import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title:'',
    }
    }
    //delete the items with right title
     delete(title) {
       var that = this.state.title;
        console.log(`${that} was deleted`);
       $.ajax({
         type:'delete',
         url:'/delete1',
          contentType: "application/json",
          data: JSON.stringify({title:that}),
          success: (data) => {
            },
        })};
      //input the title
        onChange (e) {
         console.log("change was made")
          this.setState({
            title: e.target.value
          });
          }

    render () {
      return (
      <div >
      <label>Enter your title  please</label>
      <TextField onChange={this.onChange.bind(this)}  />
        <Button
            type="button"
            value="Info" onClick={this.delete.bind(this)}> Delete  </Button>
      </div>)
    }
  }
export default Delete ;
//