import React,{useEffect} from 'react'
import { Alert,Snackbar,Slide,SlideProps,Box,} from '@mui/material'
import "./CustomAlert.scss"

type TransitionProps = Omit<SlideProps, 'direction'>;

 

function TransitionUp(props: TransitionProps) {

  return <Slide {...props} direction="up" />;

}



 interface toastmsgprops{
    severity?:'success' | 'info' | 'warning' | 'error',
    message?:string,
    isShow?:boolean,
    isSliderErrorMsg?:boolean,
    autoHideDuration?:number
 }

export const VgCustomAlert:React.FC<toastmsgprops>= ({severity="success",message,isShow=false,isSliderErrorMsg=false,autoHideDuration}:toastmsgprops) => {

  const [open, setOpen] = React.useState(false);

  const [transition, setTransition] = React.useState<

  React.ComponentType<TransitionProps> | undefined>(undefined);

 

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {

    if (reason === 'clickaway') {

      isSliderErrorMsg && setOpen(false);

      return;

    }

    setOpen(false);

  };

 

  useEffect(()=>{    

    setTransition(() => TransitionUp);

    setOpen(isShow);

  },[isShow])


 return (

   <>

    {isShow &&

    <Box  className={isSliderErrorMsg ? 'slider-errormsg-box' : ''}>

      <Snackbar TransitionComponent={transition}  className={isSliderErrorMsg ? 'slider-errormsg-snackbar' : ''} anchorOrigin={{vertical:'bottom',horizontal:'center'}} open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>

        <Alert elevation={2} className="slider-errormsg-alert"  onClose={handleClose} severity={severity} >

          <Box style={{ whiteSpace: 'pre-line' }}>{message}</Box>

        </Alert>

      </Snackbar>

    </Box>}  

    </>

  );

};


export default VgCustomAlert