import React, { useState } from "react";
import Navbar from "./navbar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import Validator from "../utils/validator";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button
} from "@material-ui/core";

const InputField = withStyles({
  root: {
    "& label.Mui-focused":{
      color: "tomato"
    },
    "& label": {
      color: "tan"
    },
     "& .MuiOutlinedInput-root":{
      "& fieldSet": {
        borderColor: "tan"
      },
      "&:hover fieldset":{
        borderColor: "tan"
      },
      "&.Mui-focused fieldset":{
        borderColor: "tan"
      }
    }
  }
})(TextField);

const useStyles = makeStyles({
  mainContainer:{
    background:"#233",
    height:"100vh "
  },
  formContainer:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%, -50%)"
  },
  button:{
    color: "#222",
    margin: "1rem auto",
    backgroundColor: "tan",
    "&:hover":{
      backgroundColor: "green",
    }
  },
  getInTouch:{
    marginBottom: "1rem",
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

const Contacts = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [msgErr, setMsgErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameErr(!Validator.validateName(name))
    setEmailErr(!Validator.validateEmail(email))
    setMsgErr(!Validator.validateMessage(message))
 
    //submit to backend using fetch
  };

  return(
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.formContainer}>
          <Typography 
          variant="h5" 
          className={classes.getInTouch}
          >
          get in touch
          </Typography>
          <InputField 
            fullWidth={true} 
            label="Name" 
            variant="outlined"
            margin="dense"
            size="medium"
            error={nameErr}
            inputProps={{style: { color: "#CCC" }}}
            onInput={ e => setName(e.target.value) }
          />
          <InputField 
            fullWidth={true} 
            label="Email" 
            variant="outlined"
            margin="dense"
            size="medium"
            error={emailErr}
            inputProps={{style: { color: "#CCC" }}}
            onInput={ e => setEmail(e.target.value) }
          />
          <InputField 
            fullWidth={true} 
            label="Message" 
            variant="outlined"
            margin="dense"
            size="medium"
            multiline
            error={msgErr}
            inputProps={{style: { color: "#CCC", height: "20vh" }}}
            onInput={ e => setMessage(e.target.value) }
          />
          <Button 
            variant="outlined" 
            fullWidth={true} 
            endIcon={<SendIcon/>}
            className={classes.button}
            onClick={handleSubmit}
            >
            send message
          </Button>       
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;