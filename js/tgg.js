navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
  .then(function(stream) {
    var video = document.getElementById('stream');
    video.srcObject = stream;
    video.play();
  })
  .catch(function(err) {
    console.log("An error occurred: " + err);
  });

document.getElementById('phot').addEventListener('click', function() {
  var video = document.getElementById('stream');
  var canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  var dataURL = canvas.toDataURL('image/png');

  var a = document.createElement('a');
  a.href = dataURL;
  a.download = 'photo.png';
  a.click();
});
