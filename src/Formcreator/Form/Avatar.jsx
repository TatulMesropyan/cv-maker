import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-easy-crop";
import Picture from "../../images/profileimg.webp";
import {
  Dialog,
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
  Avatar,
  Badge,
} from "@mui/material";
import getCroppedImg from "../../Helpers/cropImage";
import { CameraAlt } from "@mui/icons-material";


const RenderAvatar = ({ getData, topic }) => {
  /* eslint-disable no-unused-vars */

  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);

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
  const handleMouseEnter = () => {
    iconRef.current.style.color = "grey";
  };
  const handleMouseLeave = () => {
    iconRef.current.style.color = "green";
  };
  const [croppedImage, setCroppedImage] = useState("");
  const onUpload = async () => {
    if (image) {
      const pictureOnBase64 = await getCroppedImg(image, croppedArea);
      setCroppedImage(pictureOnBase64);
      getData([{ image: pictureOnBase64 }], topic);
      setOpenWindow(false);
    }
    if (!image) {
      setOpenWindow(false);
      return alert("No picture selected");
    }
  };
  const iconRef = useRef();
  const [showCropper, setShowCropper] = useState(false);

  useEffect(() => {
    getData([{ image: "data:image/png;base64,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" }], topic);
  }, []);

  const handleCropper = () => setShowCropper((prevValue) => !prevValue);
  return (
    <Box sx={{ paddingRight: "10%" }}>
      <Button
        disabled
        startIcon={<CameraAlt ref={iconRef} style={{ color: "green" }} />}
        sx={{ marginLeft: "30%", height: "2px" }}
      />
      <IconButton
        onClick={(event) => {
          handleCropper();
          setOpenWindow(true);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Avatar
          src={croppedImage ? croppedImage : Picture}
          sx={{ width: "200px", height: "200px" }}
        ></Avatar>
      </IconButton>
      <Popper open={open} role={undefined} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={() => setOpen(false)}>
            <MenuItem onClick={() => setOpen(false)}>Remove</MenuItem>
          </ClickAwayListener>
        </Paper>
      </Popper>
      <Dialog
        open={openWindow}
        maxWidth="lg"
        onClose={() => setOpenWindow(false)}
      >
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
