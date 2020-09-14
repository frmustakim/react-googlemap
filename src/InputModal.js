import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Modal,
  Backdrop,
  Fade,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    margin: 10,
    outline: "none",
  },
  form: {
    textAlign: "center",
    padding: "7%",
  },
  textfield: {
    marginBottom: 12,
  },
}));

function InputModal({ position }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState({
    name: "",
    lat: position.lat,
    lng: position.lng,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(input);

    alert(`${input.name} you are at Lat: ${input.lat} Lng: ${input.lng}`);
    handleClose();
  };

  return (
    <div>
      <Button type="button" color="inherit" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-Login"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Card className={classes.card}>
            <CardContent>
              <form onSubmit={handleSubmit} className={classes.form}>
                <TextField
                  id="my-name"
                  name="name"
                  label="Name"
                  placeholder="Md. Fazle Rabbi"
                  className={classes.textfield}
                  fullWidth
                  required
                  onChange={onChange}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Latitude"
                  name="lat"
                  value={position.lat}
                  className={classes.textfield}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  disabled
                  onChange={onChange}
                />
                <TextField
                  id="standard-read-only-input"
                  label="Longitude"
                  name="lng"
                  value={position.lng}
                  className={classes.textfield}
                  fullWidth
                  InputProps={{
                    readOnly: true,
                  }}
                  disabled
                  onChange={onChange}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginTop: "1rem" }}
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Fade>
      </Modal>
    </div>
  );
}

export default InputModal;
