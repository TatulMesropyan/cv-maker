import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function App() {
const [src, setSrc] = useState(null);
const [crop, setCrop] = useState({ aspect: 16 / 9 });
const [image, setImage] = useState(null);
const [output, setOutput] = useState(null);

const selectImage = (e) => {
	setSrc(URL.createObjectURL(e.target.files[0]));
};

const cropImageNow = () => {
	const canvas = document.createElement('canvas');
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = crop.width;
	canvas.height = crop.height;
	const ctx = canvas.getContext('2d');

	const pixelRatio = window.devicePixelRatio;
	canvas.width = crop.width * pixelRatio;
	canvas.height = crop.height * pixelRatio;
	ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	ctx.imageSmoothingQuality = 'high';

	ctx.drawImage(
	image,
	crop.x * scaleX,
	crop.y * scaleY,
	crop.width * scaleX,
	crop.height * scaleY,
	0,
	0,
	crop.width,
	crop.height,
	);
	
	// Converting to base64
	const base64Image = canvas.toDataURL('image/jpeg');
	setOutput(base64Image);
};

return (
	<div className="App">
	<center>
		<input
		type="file"
		accept="image/*"
		onChange={(e) => {
			selectImage(e.target.files[0]);
		}}
		/>
		<br />
		<br />
		<div>
		{src && (
			<div>
			<ReactCrop src={src}
				crop={crop} onChange={setCrop} />
         <ReactCrop crop={crop} onChange={c => setCrop(c)} >
      <img src={src} />
    </ReactCrop>
			<br />
			<button onClick={cropImageNow}>Crop</button>
			<br />
			<br />
			</div>
		)}
		</div>
		<div>{output && <img src={output} alt=""/>}</div>
	</center>
	</div>
);
}

export default App;
