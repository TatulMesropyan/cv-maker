import React, { useState, useRef, useContext } from "react";
import Cropper from "react-easy-crop";
import { Slider, Button, Grid, Box } from "@mui/material";
import getCroppedImg from "../Components/cropImage";
import "../ProfilePicture/Cropper.css";

export default function RenderCropper({ handleCropper }) {
  const inputRef = useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();

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
    if (!image) setImage(null);
  };

  const onUpload = async () => {
    if (!image) return alert("No selected");
    const pictureOnBase64 = await getCroppedImg(image, croppedArea);
  };

  return (
    <Box sx={{ width: "80vh", position: "relative", paddingBottom: "5px" }}>
      <Grid sx={{ height: "60vh", padding: "10px" }}>
        {image ? (
          <Grid>
            <Grid sx={{ height: "10px" }}>
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
            </Grid>
            <Grid
              sx={{
                height: "110vh",
                display: "flex",
                alignItems: "center",
                margin: "auto",
                width: "60%",
              }}
            >
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
                color="success"
              />
            </Grid>
            <Button
              onClick={() => onClear()}
              variant="contained"
              color="error"
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
            <Button variant="contained" color="success" onClick={onUpload}>
              Upload
            </Button>
          </Grid>
        ) : (
          <div>
            <Button
              onClick={() => onClear()}
              variant="contained"
              color="error"
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
            <Button variant="contained" color="success" onClick={onUpload}>
              Upload
            </Button>
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onSelectFile}
          style={{ display: "none" }}
        />
      </Grid>
    </Box>
  );
}
