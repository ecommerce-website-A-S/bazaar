import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import React from "react";
import SimpleBottomNavigation from "../footer.jsx";
import $ from "jquery";
import Delete from './features/delete.jsx'
import Update from './features/update.jsx'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import axios from 'axios'
import container from '@material-ui/core/container';
import {  Link,withRouter } from "react-router-dom" ;
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Navbar4 from "./navbar4.jsx";

const Profileuser = props => (
  <tr  >

    <Card   class="border border-top-0" style={{marginTop:"30px", fontFamily:"  serif"}}>
    <CardActionArea>
    <CardMedia
          component="img"
           height="300"
           width ='200'
          image="https://www.clipartmax.com/png/middle/83-836353_orange-username-icon.png"
          title="Contemplative Reptile"
        />
          <CardContent>

          <Typography gutterBottom variant="h5" component="h2">
            User Name
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {" "}
               {props.user.email}
               <br/>
          here you will have all your items
          {" "}

          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="secondary"    variant="contained">
          Edit info
        </Button>
        <Button size="small" color="secondary"    variant="contained">
          Delete
        </Button>
        </CardActions>
 </Card >
  </tr>
)


const Profileitems= props => (
  <tr>

      <td>{props.item.title}</td>
      <td>{props.item.description}</td>
      <td>{props.item.category }</td>

      <img src= {props.item.image} width='50' height='50'/>


      <td></td>
      <td>  <Button   color="secondary"    variant="contained" >  <Link to={
    {
        pathname: "/edit/"+props.item.id,
        myCustomProps: {category : props.item.category,title : props.item.title,
          description : props.item.description,
          image : props.item.image}
    }
}> Edit item </Link></Button></td>


  </tr>
)



class  User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userid: localStorage.getItem('userId'),
      items:[],
      users:[]
}


}
componentDidMount() {

  axios.get("/profile1")
     .then( res => {
      this.setState({users : res.data})
      })
     .catch((error) => {
         console.log(error);
     });

     axios.get("/Items1")
     .then( res => {
      this.setState({items : res.data})
      })
     .catch((error) => {
         console.log(error);
     });


}


usersList() {
  let listedusers = this.state.users;

  return listedusers.filter(elet=> localStorage.getItem('userId') == elet.id).map(currentUser => {
    return <Profileuser user= { currentUser } key = { currentUser.id }/>;
  })
}

itemsList() {
  let listeditem = this.state.items;

  return listeditem.filter(elet => localStorage.getItem('userId') == elet.userId).map(currentItem => {
    return  <Profileitems item= { currentItem } key = { currentItem.id }/>;
  })
}



        render() {
      return (
        <div>
        <Navbar4 />
        <Grid container

        item xs={12}
     direction='column'
     width= '100px'
     alignContent='stretch'
     direction="row"
     alignItems='stretch'
     alignItems='stretch'
     justify='center'
     wrap='wrap'
     >
    <div>

        <div>

        <div    className="container text-center border border-light p-9">
            <table className="table">
              <thead className="thead">
        <tbody> {this.usersList()}</tbody>
        <br/>
        <br/>
        </thead>
       </table>
          </div>
      </div>
      <div>
      <div className="container text-center border border-light p-9">
            <table className="table">

              <thead className="thead">

              <tbody>  {this.itemsList()}</tbody>

        </thead>
       </table>
          </div>


       </div>
      </div>
      </Grid>
      <SimpleBottomNavigation />
      </div>
      )}
    }

    export default withRouter( User)

// Registration.jsx