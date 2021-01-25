import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Navbar2 from './navbar2.jsx'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Image from "material-ui-image";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import container from "@material-ui/core/container";
import axios from "axios";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import SimpleBottomNavigation from "../footer.jsx";
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const ClothesItem = (props) => (
  <TableRow>
    <TableCell >{props.item.title}</TableCell >
    <TableCell >{props.item.category}</TableCell >
    <TableCell >{props.item.description}</TableCell >

    <TableCell >
      <img
        src={props.item.image}
        className="images-list"
        width="200"
        height="200"
        class="w3-round"
      />
    </TableCell >
  </TableRow>
);

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems: [],
      newData: [],
      Category: "",
    };
  }

  componentDidMount() {
    axios.get("/Items1").then((res) =>
      this.setState({
        newData: res.data,
      })
    );
  }

  itemsList() {
    let listedItems =
      this.state.filteredItems.length > 0
        ? this.state.filteredItems
        : this.state.newData;
    return listedItems.map((currentItem) => {
      return <ClothesItem item={currentItem} key={currentItem.id} />;
    });
  }

  onChangeCategory(e) {
    var val = e.target.value;

    this.setState({
      Category: val,
    });

    let filteredItems = this.state.newData.filter((item) =>
      item.category.includes(val)
    );

    if (filteredItems.length > 0) {
      this.setState({ filteredItems: filteredItems });
    } else {
      filteredItems.push("we cannot find it");
      this.setState({ filteredItems: filteredItems });
    }
  }

  Rest() {
    this.setState({
      filteredItems: 0,
      Category: "",
    });
  }

  render() {
    return (
      <div>
        {" "}
        <div><Navbar2 />
          <br></br></div>
        <Grid
          container
          item
          xs={34}
          direction="column"
          width="100px"
          alignContent="stretch"
          direction="row"
          alignItems="stretch"
          alignItems="stretch"
          justify="center"
          wrap="wrap"
        >
          <br/>
<br/>
<br/>
<div   style ={{  backgroundColor : '#92a8d1' ,  borderRadius: '50px ' , border : '20px ' ,   border : 'solid  ' ,  width :'100%'}}>
<p style={{  fontFamily :"Cursive" ,fontSize :'30px' , textAlign :"center" }}> The best part about selling your products and services online is that <br/>people outside local borders can order them too .<br/> You are not restricted to a simple brick-and-mortar location to sell your products.</p>
</div>
<br/>
<br/>
<br/>


<div style={{    border:' 20px' }} >
            <table className="table">
              <thead className="thead">
              <th  style={{fontFamily:'Monospace	' ,fontSize:'30px'  }} > select a category</th>
                <tr>

                  <th>

                  <FormControl  style={ { width : '80% '}}>
                  <InputLabel  variant="outlined"  style={ {   width : '80% '}}></InputLabel>
                    <Select


                      variant="outlined"
                      className="form-control"
                      value={this.state.Category}
                      onChange={this.onChangeCategory.bind(this)}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem>choose category</MenuItem>

                      <MenuItem  value="cars">  cars    </MenuItem>
                      <MenuItem  value="small-business-for-sale">
                        small-business-for-sale
                      </MenuItem>
                      <MenuItem  value="food recipes">
                        food recipes
                      </MenuItem>
                      <MenuItem  value="shoes">
                        shoes
                      </MenuItem>
                      <MenuItem  value="clothes">
                        clothes
                      </MenuItem>
                      </Select>
            </FormControl>
                  </th>
                  <th>
                    {" "}


                    <Button
               style={ {  width : '80% '}}
               variant="contained"
                type="button"
                value="Info"
                onClick={this.Rest.bind(this)}
                color="secondary"
              >
               Reset
              </Button>


                  </th>
                </tr>
             {/* //////////////start render the table////////////// */}


 <TableContainer >
      <Table >
        <TableHead style={ {   width : '800% '}}>
          <TableRow>
            <TableCell >title </TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Image</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>{this.itemsList()}</TableBody>

        </Table>
    </TableContainer>

    </thead>

</table>
</div>






        </Grid>{" "}
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default Items;
