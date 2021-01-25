import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import tileData from "./tileData.jsx";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {

    margin: 17000,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    width: 2500,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br/>
<br/>
<br/>
      <Typography style={{fontFamily:'Monospace	' ,fontSize:'40px' , textAlign:'center'}}> Choose the right e-commerce store
      <br/>
More flexibility, faster to market and showcase your products.<br/> Find out what <span style= {{backgroundColor: "#fc3f4f"}}>BAZZAR</span> can do for you.</Typography>
<br/>
<br/>
<br/>
      {/* <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList> */}
    </div>
  );
            }