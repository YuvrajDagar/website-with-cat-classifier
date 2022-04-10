const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const { spawn } = require("child_process");
//const User = require("../models/user.model");

const storage = multer.diskStorage({
  destination: "./py_scripts/Photo",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + path.extname(file.originalname));
  },
});
// + "-" + Date.now() + path.extname(file.originalname)
const upload = multer({ storage: storage });
//const uploadOld = multer({ dest: "./uploads/" });
//const upload = multer({ dest: "uploads/" });

router.route("/add").post(upload.single("photo"), (req, res) => {
  console.log("I am here");

  /*const hello = upload(req, res, (err) => {
    if (err) {
      console.log(err);
    }
    console.log(req.file);
    const photo = new User(req.file);
    console.log("photo: " + photo);
    req.file.save();
  });*/
  //python calling code
  var dataToSend;
  console.log(req.file);
  const pathtoimage = "./py_scripts/Photo/photo.jpg";
  console.log(pathtoimage);
  //calling child
  const python = spawn("python", [
    "D://yuvraj//Project//MERNstack//Practice//website//backend//py_scripts//predict.py",
    pathtoimage,
  ]);
  //python output
  python.stdout.on("data", (data) => {
    console.log("Pipe data from python script 1...");
    dataToSend = data.toString();
    console.log(`${data}`);
  });
  //python error
  python.stderr.on("data", (data) => {
    console.log("Pipe data from python script 2...");
    console.log(data);
    dataToSend = data.toString();
  });
  //event on close --not imp
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    res.send(dataToSend);
  });

  console.log("It is done");
  //sent to front

  /*const user = new User(req.body);
  user
    .save()
    .then(() => res.json("User added"))
    .catch((err) => res.status(400).json("Error: " + err));*/
  /*const photo = req.file.buffer;

  const newUserData = {
    photo,
  };
  const newUser = new User(newUserData);

  const circularReplacer = () => {
    // Creating new WeakSet to keep
    // track of previously seen objects
    const seen = new WeakSet();

    return (key, value) => {
      // If type of value is an
      // object or value is null
      if (typeof value === "object" && value !== null) {
        // If it has been seen before
        if (seen.has(value)) {
          return;
        }

        // Add current value to the set
        seen.add(value);
      }

      // return the value
      return value;
    };
  };
  var jsonString = JSON.stringify(req, circularReplacer());

  res.send(jsonString);*/
  /*newUser
    .save()
    .then(() => res.json(req.file))
    .catch((err) => res.status(400).json("Error: " + err));*/
});

router.route("/get").get((req, res) => {
  var dataToSend;
  // spawn new child process to call the python script
  //const python = spawn('python', ['python.py','node.js','python']);
  //var pathtoimage = "../uploads/photo.jpg";

  var pathtoimage = "./py_scripts/photo.jpg";
  const python = spawn("python", [
    "D://yuvraj//Project//MERNstack//Practice//tutorial//backend//py_scripts//predict.py",
    pathtoimage,
  ]);
  // collect data from script
  python.stdout.on("data", (data) => {
    console.log("Pipe data from python script ...");
    console.log(`${data}`);
    dataToSend = data.toString();
  });

  python.stderr.on("data", (data) => {
    console.log("Pipe data from python script ...");
    console.log(`${data}`);
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});

module.exports = router;
