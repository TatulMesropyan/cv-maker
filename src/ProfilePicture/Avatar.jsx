import React, { useState, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { Grow } from "@mui/material";
import { Paper } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { Popper } from "@mui/material";
import { MenuItem } from "@mui/material";
import { MenuList } from "@mui/material";
import { IconButton } from "@mui/material";
import RenderCropper from "./Cropper";
import { Dialog, DialogActions, DialogContent ,DialogTitle} from "@mui/material";
import "../ProfilePicture/Avatar.css";
import { Camera, CameraAlt } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
//   cameraIcon: {
//     height: "4rem",
//     width: "4rem",
//     position: "absolute",
//     bottom: "0",
//     right: "100px",
//     backgroundColor: "white",

//     "&:hover": {
//       backgroundColor: "white",
//     },
//   },
// }));

export default function RenderAvatar() {
  const [open, setOpen] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);

  const handleWindowOpen = () => {
    setOpenWindow(true);
  };
  const handleWindowClose = () => {
    setOpenWindow(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
  setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  const [showCropper, setShowCropper] = useState(false);
  const handleCropper = () => setShowCropper((prevValue) => !prevValue);

  return (
    <>
        <Button variant="outlined" onClick={handleWindowOpen}>
          Upload Picture
        </Button>
        <Dialog open={openWindow} maxWidth="lg" onClose={handleWindowClose}>            
		<IconButton
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={(event) => {
				handleCropper();
				handleClose(event);
			  }}
            >
              <CameraAlt />
            </IconButton>
            <Popper
              open={open}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                        <MenuItem onClick={handleClose}>Remove</MenuItem>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
		  {showCropper && <RenderCropper handleCropper={handleCropper} />}
         </Dialog>
    </>
  );
}
