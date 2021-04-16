import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import SelectBox from './SelectBox'
const useStyles = makeStyles({
  grow: {
    flexGrow: 1
  },
  main: {
    paddingTop: '1%'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <SelectBox/>
    </div>
  );
};
