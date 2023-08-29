import { Box } from "@mui/material";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const statusTextDropDown = (statusText:string) => {
  if (statusText === 'ACTIVE') {
    return { backgroundColor: "#edf7ed", color: "#5e7d5f", padding: "4px 6px", borderRadius: "4px", fontSize: "10px" }
  }
  else if (statusText === 'TERMINATED' || statusText === 'DECLINED') {
    return { backgroundColor: "#fde8e8", color: "#c23c2a", padding: "4px 6px", borderRadius: "4px", fontSize: "10px" }
  }
  else if (statusText === 'UNINVITED' || statusText === 'INACTIVE') {
    return { backgroundColor: "#fff4e5", color: "#6a2e2e", padding: "4px 6px", borderRadius: "4px", fontSize: "10px" }
  }
  else if (statusText === 'INVITED' || statusText === 'CHANGE REQUESTED') {
    return { backgroundColor: "#E5F6FD", color: "#014361", padding: "4px 6px", borderRadius: "4px", fontSize: "10px" }
  }
}

interface StatusDropdownProps{
  handleStatusSelect:any,
  statusText:any,
  handleClose:()=>any,
  status:any,
}


export const StatusDropdown:React.FC<StatusDropdownProps> = ({ handleStatusSelect, statusText, handleClose, status }:StatusDropdownProps) => {

  const handleStatusSelection = (statusValueChange:any) => {
    handleStatusSelect(statusValueChange);
  }

  return (
    <>
      <FormControl size="small">
        <Select MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          }
        }}
          open={true} sx={{ width: "180px" }}
          defaultValue={10}
          onClick={handleClose}
          displayEmpty

        >

          <MenuItem value={10} className="re" sx={{ display: "none" }}>{status}</MenuItem>
          
          {statusText.map((
          item:any,) => {
              return <MenuItem key={item.id} className="status-popover-dropdown" onClick={(event) => handleStatusSelection(item.name)}>
                <Box className="status-popover-dropdown"  >
                  <Box sx={{ pr: 1 }}>Change to</Box>
                  <Box> <ArrowForwardIcon sx={{ verticalAlign: "middle", pr: 1 }} fontSize="medium" /></Box>
                </Box>
                <Box {...statusTextDropDown(item.name)} >
                  {item.name}
                </Box>
              </MenuItem>
            })
          }
        </Select>
      </FormControl>
    </>
  )
}
interface VgCustomStatusDropDownProps{
  handleStatusSelect:any, 
  status:any, 
  sx:any, 
  statusText:any 

}
  const VgCustomStatusDropDown:React.FC<VgCustomStatusDropDownProps>= ({ handleStatusSelect, status, sx, statusText }) => {
  const [statusValueChange, setStatusValueChange] = React.useState(false);

  const setStatusValue = () => {
    setStatusValueChange(!statusValueChange)
  }
  const handleClose = () => {
    setStatusValueChange(!statusValueChange);
  }
  return (
    <React.Fragment>
      {["TERMINATED", "DECLINED", "CHANGE REQUESTED"].includes(status) && statusText.length === 0 ?
        <Box sx={{ backgroundColor: "#edf7ed", color: "#5e7d5f", fontSize: '12px', pl: "10px", pr: "10px", pt: "6px", pb: "6px", borderRadius: '4px', ...sx }}>
          {status}
        </Box>
        :
        <React.Fragment>
          {!statusValueChange ?
            <Button className="statusButton"    disableFocusRipple onClick={setStatusValue} sx={{ ...sx }} >
              {status}
              <ExpandMoreOutlinedIcon sx={{ fontSize: 'small', ml: 1 }} />
            </Button>
            : <StatusDropdown statusText={statusText} handleStatusSelect={handleStatusSelect} handleClose={handleClose} status={status} />
          }
        </React.Fragment>
      }

    </React.Fragment>
  )
}

export default VgCustomStatusDropDown