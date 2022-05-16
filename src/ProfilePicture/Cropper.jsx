import React, { useState, useRef ,useContext } from "react";
import Cropper from "react-easy-crop";
import { Slider, Button } from "@mui/material";
import getCroppedImg, { generateDownload } from "../Components/cropImage";
import { IconButton, makeStyles } from "@material-ui/core";
import { SnackbarContext } from "../ProfilePicture/Snackbar";
import { dataURLtoFile } from "../Components/dataURLtoFile";
import "../ProfilePicture/Cropper.css";

const useStyles = makeStyles({
  iconButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  cancelIcon: {
    color: "#00a3c8",
    fontSize: "50px",
    "&:hover": {
      color: "red",
    },
  },
});

export default function RenderCropper({ handleCropper }) {
  const classes = useStyles();

  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

  const setStateSnackbarContext = useContext(SnackbarContext);

  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

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
    if (!image)
      return setStateSnackbarContext(
        true,
        "Please select an image!",
        "warning"
      );

    setImage(null);
  };

  const onUpload = async () => {
    if (!image)
      return alert("No selected")
    const canvas = await getCroppedImg(image, croppedArea);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(
      canvasDataUrl,
      "cropped-image.jpeg"
    );
  };

  return (
    <div className="container">
      <IconButton className={classes.iconButton} onClick={handleCropper}>
        {<img src={croppedArea} alt='cropped'/>}
      </IconButton>

      <div className="container-cropper">
        {image ? (
          <>
            <div className="cropper">
              <Cropper
                cropShape="round"
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                shape="roundC"
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>

            <div className="slider">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
                color="secondary"
              />
            </div>
          </>
        ) : null}
      </div>

      <div className="container-buttons">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />

        <Button
          onClick={() => onClear()}
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          Choose
        </Button>
        <Button variant="contained" color="secondary" onClick={onUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
}
