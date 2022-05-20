export function getDataFromCanvas(canvas) {
  var context = canvas.getContext('2d');
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

export function getDataFromImage(img) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);
  return context.getImageData(0, 0, img.width, img.height);
}

export function countPixels(data, width, height) {
  var pixel = 0;
  for (var y = 0, i =0 ; y < height; y++)
      for (var x = 0; x < width; x++, i+=4)
      {
          if (data[i] != 0 || data[i + 1] != 0 || data[i + 2] != 0)
          {
            pixel++;
          }
      }
  return pixel;
}

export function calculateScore(resultDiff, maxDiff) {
  var percentage = 0;
  if (resultDiff < maxDiff)
    percentage = (1 - (resultDiff / maxDiff)) * 100;

  return Math.floor(percentage/5) * 5;
}