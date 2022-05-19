import React, { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import {
  Dialog,
  MenuList,
  DialogContent,
  ClickAwayListener,
  IconButton,
  Paper,
  Popper,
  Slider,
  Button,
  Grid,
  Box,
  Card,
  CardContent,
  MenuItem,
} from "@mui/material";
import getCroppedImg from "../Components/cropImage";
import { CameraAlt } from "@material-ui/icons";

const RenderAvatar = () => {
  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  const [error, setError] = useState(false);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };
  const onClear = () => {
    image && setImage(null);
  };

  const onUpload = async () => {
    if (image) {
      const pictureOnBase64 = await getCroppedImg(image, croppedArea);
      console.log(pictureOnBase64);
      return pictureOnBase64;
    }
    if (!image) {
      setOpenWindow(false);
      return alert("No picture selected");
    }
  };

  const handleWindowOpen = () => {
    setOpenWindow(true);
  };
  const handleWindowClose = () => {
    setOpenWindow(false);
  };
  const handleClose = (event) => {
    setOpen(false);
  };

  const [showCropper, setShowCropper] = useState(false);
  const handleCropper = () => setShowCropper((prevValue) => !prevValue);

  return (
    <Box>
      {error && <Dialog>Karobkics siktir</Dialog>}
      <Grid>
        <IconButton
          aria-haspopup="true"
          onClick={(event) => {
            handleCropper();
            handleWindowOpen();
          }}
        >
          <CameraAlt />
        </IconButton>
        <Popper open={open} role={undefined} transition disablePortal>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuItem onClick={handleClose}>Remove</MenuItem>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </Grid>
      <Dialog open={openWindow} maxWidth="lg" onClose={handleWindowClose}>
        <Grid>
          <Box
            sx={{
              width: "100vh",
              height: "auto",
            }}
          >
            <Grid
              sx={{
                height: "90vh",
              }}
            >
              <Card sx={{ position: "sticky", zIndex: "2" }}>
                <CardContent>
                  <Grid
                    sx={{
                      display: "flex",
                      position: "relative",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      sx={{
                        alignItems: "center",
                        margin: "auto",
                        width: "50%",
                      }}
                    >
                      {image ? (
                        <Slider
                          min={1}
                          max={3}
                          step={0.1}
                          value={zoom}
                          onChange={(e, zoom) => setZoom(zoom)}
                          color="success"
                        />
                      ) : (
                        <Slider
                          min={1}
                          max={3}
                          step={0.1}
                          disabled
                          value={zoom}
                          onChange={(e, zoom) => setZoom(zoom)}
                          color="success"
                        />
                      )}
                    </Grid>
                    <input
                      type="file"
                      accept="image/*"
                      ref={inputRef}
                      onChange={onSelectFile}
                      style={{ display: "none" }}
                    />
                    {image ? (
                      <Button
                        onClick={() => onClear()}
                        variant="contained"
                        color="error"
                        style={{ marginRight: "10px" }}
                      >
                        Clear
                      </Button>
                    ) : (
                      <Button
                        onClick={() => onClear()}
                        variant="contained"
                        color="error"
                        style={{ marginRight: "10px" }}
                        disabled
                      >
                        Clear
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={triggerFileSelectPopup}
                      style={{ marginRight: "10px" }}
                    >
                      Choose
                    </Button>
                    {image ? (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={onUpload}
                      >
                        Upload
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={onUpload}
                        disabled
                      >
                        Upload
                      </Button>
                    )}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Box sx={{ zIndex: 1 }}>
              {image ? (
                <Cropper
                  cropShape="round"
                  image={image}
                  crop={crop}
                  zoom={zoom}
                  aspect={5 / 5}
                  shape="round"
                  onCropChange={setCrop}
                  onZoomChange={setZoom}
                  onCropComplete={onCropComplete}
                />
              ) : null}
            </Box>
          </Box>
        </Grid>
      </Dialog>
    </Box>
  );
};
export default RenderAvatar;
