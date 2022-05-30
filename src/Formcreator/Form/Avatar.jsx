import React, { useState, useRef, useEffect } from "react";
import Cropper from "react-easy-crop";
import Picture from "../../images/profileimg.webp";
import { defaultPic } from "../../Helpers/defaultPic";
import Webcam from "react-webcam";
import CameraIcon from "@mui/icons-material/Camera";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import useSessionData from "../../Helpers/useSessionData";
import CancelIcon from "@mui/icons-material/Cancel";
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
} from "@mui/material";
import getCroppedImg from "../../Helpers/cropImage";
import { CameraAlt } from "@mui/icons-material";

const RenderAvatar = ({ getData, topic }) => {
  /* eslint-disable no-unused-vars */

  const inputRef = useRef();

  const triggerFileSelectPopup = () => {
    inputRef.current.click();
    setWebcamOpen(false);
  };

  const [defaultValues, setDefaultValues, getValue] = useSessionData();
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [open, setOpen] = useState(false);
  const [openWindow, setOpenWindow] = useState(false);
  const [openWebcam, setWebcamOpen] = useState(false);
  const [showCropper, setShowCropper] = useState(false);


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
    setWebcamOpen(false);
  };
  const [croppedImage, setCroppedImage] = useState("");
  const onUpload = async () => {
    if (image) {
      const pictureOnBase64 = await getCroppedImg(image, croppedArea);
      setCroppedImage(pictureOnBase64);
      getData([{ image: pictureOnBase64 }], topic,[{ image: pictureOnBase64 }]);
      setOpenWindow(false);
    }
  };
  const handleWebcam = () => {
  setWebcamOpen(true)
   setImage(null);
  };

  useEffect(() => {
    getData(
      [
        {
          image: defaultPic.avatarPic,
        },
      ],
      topic
    );
  }, []);
  const webcamRef = useRef(null);
  let localImage = getValue('header')? getValue('header').image:null
  const WebcamCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setWebcamOpen(false);
    setImage(imageSrc);
  };
  const handleCropper = () => setShowCropper((prevValue) => !prevValue);
  const spanRef = useRef();
  const handleMouseEnter = () => {
    spanRef.current.style.color = "grey";
  };
  const handleMouseLeave = () => {
    spanRef.current.style.color = "white";
  };
  return (
    <>
      <Box sx={{ paddingRight: "10%" }}>
        <Grid alignContent="center">
          <span
            ref={spanRef}
            style={{
              fontStyle: "italic",
              color: "white",
              fontSize: "12px",
              height: "1vh",
              paddingLeft: "25px",
            }}
          >
            Upload an Image
          </span>
          <IconButton
            onClick={(event) => {
              handleCropper();
              setOpenWindow(true);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Grid>
              <Avatar
                src={croppedImage ? croppedImage : localImage}
                alt="Enter"
                sx={{ width: "200px", height: "200px" }}
              />
            </Grid>
          </IconButton>
        </Grid>
        <Popper open={open} role={undefined} transition disablePortal>
          <Paper>
            <ClickAwayListener onClickAway={() => {
              setWebcamOpen(false)
              setOpen(false)
              }}>
              <MenuItem onClick={() => {
              setWebcamOpen(false)
              setOpen(false)}}>
                Remove
                </MenuItem>
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
                          <DeleteIcon/>
                          </Button>
                      ) : (
                        <Button
                          onClick={() => onClear()}
                          variant="contained"
                          color="error"
                          style={{ marginRight: "10px" }}
                          disabled
                          >
                          <DeleteIcon/>
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={triggerFileSelectPopup}
                        style={{ marginRight: "10px" }}
                        endIcon={<AttachFileIcon />}
                      >
                        Choose 
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleWebcam}
                        style={{ marginRight: "10px" }}
                      >
                        <CameraAlt />
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
                {openWebcam && (
                  <Grid
                    sx={{
                      padding: "10px",
                      width: "720px",
                      height: "480px",
                      alignContent: "center",
                      textAlign:"center",
                    }}
                  >
                    <Grid sx={{paddingLeft:'25px',paddingTop:'10px'}}>
                    <Webcam
                      ref={webcamRef}
                      audio={false}
                      height={540}
                      screenshotFormat="image/jpeg"
                      width={720}
                      screenshotQuality={1}
                    />
                    </Grid>
                    <Grid >
                      <Button
                        varitant="contained"
                        color="success"
                        endIcon={<CameraIcon/>}
                        onClick={WebcamCapture}
                      >
                        Capture
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => setWebcamOpen(false)}
                      >
                        <CancelIcon />
                      </Button>
                    </Grid>
                  </Grid>
                )}
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
