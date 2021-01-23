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

const ClothesItem = (props) => (
  <tr>
    <td>{props.item.title}</td>
    <td>{props.item.category}</td>
    <td>{props.item.description}</td>

    <td>
      <img
        src={props.item.image}
        className="images-list"
        width="200"
        height="200"
        class="w3-round"
      />
    </td>
  </tr>
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


          <div className="container text-center border border-light p-9">
            <table className="table">
              <thead className="thead">
                <tr>
                  <th> select a category</th>
                  <th>
                    <select
                      ref="userInput"
                      required="true"
                      className="form-control"
                      value={this.state.Category}
                      onChange={this.onChangeCategory.bind(this)}
                    >
                      <option value=""></option>
                      <option id="option">choose category</option>

                      <option id="option" value="cars">
                        cars
                      </option>
                      <option id="option" value="small-business-for-sale">
                        small-business-for-sale
                      </option>
                      <option id="option" value="food recipes">
                        food recipes
                      </option>
                      <option id="option" value="shoes">
                        shoes
                      </option>
                      <option id="option" value="clothes">
                        clothes
                      </option>
                    </select>
                  </th>
                  <th>
                    {" "}
                    <button onClick={this.Rest.bind(this)}> Reset</button>{" "}
                  </th>
                </tr>
                <tr>
                  <th>title </th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>{this.itemsList()}</tbody>
            </table>
          </div>
        </Grid>{" "}
      </div>
    );
  }
}

export default Items;
