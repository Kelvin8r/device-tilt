/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var imageElement = document.getElementById('orientee');
imageElement.scrollLeft = imageElement.style.width / 2 - 320;

function handleDeviceOrientation(e) {
  // console.log('gamma: ' + e.gamma);
  document.querySelector('p#tiltAngle').innerHTML = 'Tilt angle: ' + e.gamma + 'deg.';
  
  var transform = 'rotate(' + e.gamma + 'deg) rotate3d(1, 0, 0, ' +
      e.beta + 'deg)';
  var translate = 'translate(' + Math.floor(e.gamma / 90) * imageElement.style.width + 'px, 0px);';
  imageElement.style.webkitTransform = translate;
  imageElement.style.transform = translate;
}

if (window.DeviceOrientationEvent) {
  window.ondeviceorientation = handleDeviceOrientation;
} else {
  document.querySelector('p#isAvailable').innerHTML = 'Device Orientation is not available.';
}
