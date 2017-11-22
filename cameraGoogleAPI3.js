
//API START - this part is for google vision API
'use strict'
const vision = require('node-cloud-vision-api')
 
// init with auth
vision.init({auth: 'AIzaSyDtbNSzalRWR6kpaUV1JuF7UM3WpOG09wA'})
//API ENDS

//SERVER START
var express = require('express');
var app = express();
var path = require('path');
//SERVER ENDS

//CAMERA STARTS
//Available in nodejs  
var NodeWebcam = require( "node-webcam" );
 
//Default options 
var opts = {
 
    //Picture related 
    width: 1280,
    height: 720,
    quality: 100,
 
    //Delay to take shot 
    delay: 0,
 
    //Save shots in memory 
    saveShots: true,
 
    // [jpeg, png] support varies 
    // Webcam.OutputTypes 
    output: "jpeg",
 
    //false for default device 
    device: false,
 
    // [location, buffer, base64] 
    // Webcam.CallbackReturnTypes 
    callbackReturn: "location",
 
    //Logging 
    verbose: false
};
 
//Creates webcam instance 
var Webcam = NodeWebcam.create( opts );
 
//Will automatically append location output type 
Webcam.capture( "test_picture", function( err, data ) {} );
 
//Also available for quick use 
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
});
 
//Get list of cameras 
Webcam.list( function( list ) {
 
    //Use another device 
    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
 
});
 
//Return type with base 64 image 
var opts = {
    callbackReturn: "base64"
};
 
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
    var image = "<img src='" + data + "'>";
});

delay: 100;

// construct parameters
const req = new vision.Request({
  image: new vision.Image('test_picture.jpg'),
  features: [
    // new vision.Feature('FACE_DETECTION', 4),
    new vision.Feature('LABEL_DETECTION', 10),
  ]
})

// send single request
vision.annotate(req).then((res) => {
// handling response

    //CLIENT SIDE START
  app.get('/', function(req1,res1){
    res1.status(200).send(res.responses);
     // res1.sendFile(path.join(__dirname + '/index.html', res.responses));
    });

  // app.get('/', function(req1, res1) {
  //   res1.sendFile(path.join(__dirname + '/index.html'));
  //   });

 // app.use(express.static(__dirname + 'public')); 

    //POST IMAGE
//   app.get('../test_picture.jpg', function(req2, res2){
//   var uid = req2.params.uid
//     , file = req2.params.file;

//   req.user.mayViewFilesFrom(uid, function(yes){
//     if (yes) {
//       res2.sendFile('/uploads/' + uid + '/' + file);
//     } else {
//       res2.status(403).send("Sorry! You can't see that.");
//     }
//   });
// });
   //CLIENT SIDE ENDS

  //SERVER SIDE STARTS
  var server = app.listen(process.env.PORT || '8000', function(){
    console.log('app listening on port', server.address().port);
    console.log('press ctrl+c to quit');
    console.log(JSON.stringify(res.responses))
    })
  //SERVER SIDE ENDS

}, (e) => {
  console.log('Error: ', e)
})

