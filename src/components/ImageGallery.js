import React from "react";
import Carousel from "react-multi-carousel";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { height } from "@mui/system";
import {useEffect, useState} from "react";

const ImageGallery = ({ images, index }) => {

const [photos, setPhotos] = useState([])	
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  {/*const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="carousel-button-group">
        <IconButton
          size="medium"
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
        >
          <NavigateBeforeIcon />
        </IconButton>
        <IconButton
          size="medium"
          className={currentSlide === 3 ? "disable" : ""}
          onClick={() => next()}
        >
          <NavigateNextIcon />
        </IconButton>
        <Button onClick={() => goToSlide(currentSlide + 1)}>
          {" "}
          Go to any slide{" "}
        </Button>
      </div>
    );
  };
  */}

  useEffect(() => {
	if (index !== undefined) {
   const arr = []
   for (let i = index; i < images.length; i++) {
	 arr.push(images[i])
   }
   for (let i = 0; i < index; i++) {
	 arr.push(images[i])
   }
   setPhotos(arr)
}


  }, []);

  return (
    <div className="container-fluid-no-padding" style={{ width: "100%", height: "100%" }}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        //customButtonGroup={<ButtonGroup />}
        autoPlaySpeed={5000}
		draggable={true}
		swipeable={true}
		
		
      >
        {photos.map((image, index) => (
          <img
            src={image}
            alt="image"
            style={{
              maxWidth: "100%",
              height: "auto",
              maxHeight: "100%",
              objectFit: "cover",
            }}
            key={index}
           
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
