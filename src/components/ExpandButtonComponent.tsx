import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import OpenWith from "@material-ui/icons/OpenWith";

function getModalStyle(): React.CSSProperties {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "50%",
    height: "80%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

interface ExpandButtonComponentInterface {
  componentToExpand: JSX.Element;
}

export default function ExpandButtonComponent(props: ExpandButtonComponentInterface): JSX.Element {
  const classes = useStyles();
  const modalStyle = getModalStyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      {props.componentToExpand}
    </div>
  );

  return (
    <div>
      <IconButton size="small" onClick={handleOpen}>
        <OpenWith />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}
