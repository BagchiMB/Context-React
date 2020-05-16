import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import {LanguageContext} from './contexts/LanguageContext'

let words=
{
  english:{Email:"Email",Password:"Password",Remember:"Remember Me", SignIn:"Sign In"},
  hindi:{Email:"ईमेल पता",Password:"कुंजिका",Remember:"मुझे याद रखना", SignIn:"साइन इन करें"},
  spanish:{Email:"Correo electrónico",Password:"Contraseña",Remember:"Recuérdame",SignIn:"Registrarse"}
}
class Form extends Component {
  static contextType= LanguageContext
  render() {
    const {language, changeLang}=this.context
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{words[language].SignIn}</Typography>
          <Select value={language} onChange={changeLang}>
            <MenuItem value='english'>English</MenuItem>
            <MenuItem value='hindi'>Hindi</MenuItem>
            <MenuItem value='spanish'>Spanish</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{words[language].Email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{words[language].Password}</InputLabel>
              <Input id='password' name='password' />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={words[language].Remember}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {words[language].SignIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);