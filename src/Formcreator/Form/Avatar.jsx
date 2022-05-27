import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-easy-crop";
import Picture from "../../images/profileimg.webp";
import { defaultPic } from "../../Helpers/defaultPic";
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
    getData(
      [
        {
          image:defaultPic.avatarPic
        },
      ],
      topic
    );
  }, []);

  const handleCropper = () => setShowCropper((prevValue) => !prevValue);
  const spanRef = useRef();
  const handleMouseEnter = () => {
    spanRef.current.style.display = "block";
  };
  const handleMouseLeave = () => {
    spanRef.current.style.display = "none";
  };
  return (
    <>
      <Box sx={{ paddingRight: "10%" }}>
     
        <IconButton
          onClick={(event) => {
            handleCropper();
            setOpenWindow(true);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}

          ><Grid>
          <Avatar
            src={croppedImage ? croppedImage : Picture}
            alt="Enter"
            sx={{ width: "200px", height: "200px" }}
          />
           <span
          ref={spanRef}
          style={{
            fontStyle: "italic",
            display: "none",
            fontSize: "12px",
            height:"1vh",
            paddingLeft: "8px",
          }}
        >          Upload an Image
        </span>
        </Grid>
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
    </>
  );
};
export default RenderAvatar;
