import React, { useState }  from 'react';
import {
        Typography, 
        TextField, 
        makeStyles,
        FormControl,
        InputAdornment,
        InputLabel,
        OutlinedInput,
        IconButton
    } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons';
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
// import '../../src/App.css'


const useStyles = makeStyles({
    mainContent :{
        justifyContent:"center",
        display:'grid',
        position:'relative'
    },
    formContainer:{
        position:'relative',
        width:'28.9rem',
        height: 'auto',
        padding: 20,
        

    }
})

function StepOne() {
    const [showPasswordValue, setShowPasswordValue] = useState({
        showPassword : false
    })
    const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
        showConfirmPassword : false
    })

    const handelClickShowPassword =()=>{
        setShowPasswordValue({
            showPassword : !showPasswordValue.showPassword
        })
    }
    const handelClickShowConfirmPassword =()=>{
        setShowConfirmPasswordValue({
            showConfirmPassword : !showConfirmPasswordValue.showConfirmPassword 
        })
    }
    





    const classes = useStyles()
  return (
    <div className={classes.mainContent}>
     <Typography variant="h5" 
     style={{textAlign:'center'}}
     >
         This is Step one Component....
     </Typography>

     <form className={classes.formContainer}>
        <TextField 
        style={{width:'100%', margin:'1rem 0'}}
        label= "First Name"
        variant= "outlined"
         />

         <IntlTelInput 
         style={{width:'100%', margin:'1rem 0'}}
         preferredCountries = {["ma"]}
         />

         <FormControl variant='outlined'
         style={{width:'100%', margin:'1rem 0'}}>
             <InputLabel>Password</InputLabel>
             <OutlinedInput 
             labelWidth={75}
             type={showPasswordValue.showPassword ? 'text' : 'password'}
             endAdornment={
                 <InputAdornment
                 position="end"
                 >
                     <IconButton
                     edge="end"
                     onClick={handelClickShowPassword}
                     >
                     {showPasswordValue.showPassword ? <Visibility/> : <VisibilityOff/>}
                     </IconButton>

                 </InputAdornment>
             }
             />

         </FormControl>

         <FormControl variant='outlined'
         style={{width:'100%', margin:'1rem 0'}}>
             <InputLabel>Confirm Password</InputLabel>
             <OutlinedInput 
             labelWidth={135}
             type={showConfirmPasswordValue.showConfirmPassword ? 'text' : 'password'}
             endAdornment={
                 <InputAdornment
                 position="end"
                 >
                     <IconButton
                     edge="end"
                     onClick={handelClickShowConfirmPassword}
                     >
                     {showConfirmPasswordValue.showConfirmPassword ? <Visibility/> : <VisibilityOff/>}
                     </IconButton>

                 </InputAdornment>
             }
             />

         </FormControl>
     </form>
    </div>
  );
}

export default StepOne;