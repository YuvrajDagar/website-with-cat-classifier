import React, { useState } from "react";
import axios from "axios";
import { HeroBtn, HeroLabel } from "../HeroSection/HeroSection.style";
// import FileBase64 from "react-file-base64";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mloutput, setMloutput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedImage);
    console.log(formData);
    //console.log(selectedImage);
    console.log(selectedImage);
    axios
      .post("https://rare-wombat-83.loca.lt/users/add/", formData)
      .then((res) => {
        console.log(res);
        setMloutput(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <HeroBtn onClick={handleSubmit}> Submit </HeroBtn>
          <HeroBtn
            onClick={() => {
              setSelectedImage(null);
              setMloutput(null);
            }}
          >
            Remove
          </HeroBtn>
        </div>
      )}
      <br />
      <form
        onSubmit={handleSubmit}
        action="/profile"
        encType="multipart/form-data"
      >
        {!selectedImage && (
          <HeroLabel>
            Choose file to upload image
            <input
              type="file"
              name="myImage"
              style={{ display: "none" }}
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
            {/* <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setSelectedPhoto({ ...selectedPhoto, image: base64 })
            }
          />
          <input type="submit" /> */}
          </HeroLabel>
        )}
        {/* {selectedImage && <HeroSubmit type="submit" />} */}
      </form>
      {mloutput && (
        <p style={{ color: "white" }}>
          Here is the answer: {mloutput} Thanks for using this. It is still in
          development!{" "}
        </p>
      )}
    </>
  );
};

export default UploadAndDisplayImage;
