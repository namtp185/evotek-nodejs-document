const loadAsset = (url, type, callback) => {
  let xhr = new XMLHttpRequest();
  debugger
  xhr.open('GET', url);
  debugger
  xhr.responseType = type;
  debugger

  xhr.onload = function() {
    callback(xhr.response);
  };
  debugger
  xhr.send();
}

// callback function
const displayImage = (blob) => {
  debugger
  let container = document.getElementsByClassName("container")[0];
  let objectURL = URL.createObjectURL(blob);

  let image = document.createElement('img');
  image.src = objectURL;
  container.appendChild(image);
}

const url = "/assets/googlelogo_color_272x92dp.png";

loadAsset(url, 'blob', displayImage);