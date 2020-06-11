// Set constraints
const constraints = {
  video: {
    facingMode: "environment",
  },
  audio: false,
};
// Set constants
const cameraView = document.querySelector("#camera-view"),
  cameraOutput = document.querySelector("#camera-output"),
  cameraSensor = document.querySelector("#camera-sensor"),
  cameraTrigger = document.querySelector("#camera-trigger");

// Start Camera
const cameraStart = () => {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
      track = stream.getTracks()[0];
      cameraView.srcObject = stream;
    })
    .catch((err) => console.log(err));
};

// Take a picture
cameraTrigger.onclick = () => {
  cameraSensor.width = cameraView.videoWidth;
  cameraSensor.height = cameraView.videoHeight;
  cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
  cameraOutput.src = cameraSensor.toDataURL("image/webp");
  cameraOutput.classList.add("taken");
};

window.addEventListener("load", cameraStart, false);
