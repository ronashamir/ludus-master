
const turf = require('turf');
const turfCircle = require('turf-circle');
const express = require ('express');
const PORT = 5001 
const app = express(); 

app.listen(PORT, function () { 
    console.log("Server is running on "+ PORT +" port");
  });

app.get('/', function (req, res) { 
    res.send('<h1>Hello World!</h1>')
  });

app.get('/distance/:pointA/:pointB', function(req, res) {
    let pointA = turf.point(req.params.pointA.split(',').map(Number)); 
    let pointB = turf.point(req.params.pointB.split(',').map(Number));
    let distance = turf.distance(pointA, pointB);
    res.set({
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true 
    });
    res.status(200).json(distance);
    return distance
});

try { 
  app.get('/getRandomPoint/:currentPoint', function(req, res) {
    let currentPoint;
    try {
      currentPoint = turf.point(req.params.currentPoint.split(',').map(Number));
    } catch {
      err => console.error(err)
    }
    const circle = turfCircle(currentPoint, 1); 
    const bbox = turf.bbox(circle);
    const pointOnPolygon = turf.random('points', 1, {'bbox': bbox});
    const randomPoint = pointOnPolygon.features[0].geometry.coordinates;

    let randomPointJson = {lat: randomPoint[0], lng: randomPoint[1]}; 
    res.set({
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true 
    });
    res.status(200).json(randomPointJson);
    return randomPointJson;
  })
} catch {
  (err) => {console.error(err)}};
