import React from "react";
import styled from "styled-components";
import { Grid, Pagination } from "@mui/material";
import { useState } from "react";
import GalleryModal from "../components/GalleryModal";
import { Fade } from "react-awesome-reveal";

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.08);
    transition: transform 0.2s ease-in-out;
  }
  @media (max-width: 968px) {
    width: 150px;
    height: 100px;
`;

const GalleryGrid = ({ images }) => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);

  function handleImageClick(index) {
    setIndex(index);
    setModal(true);
  }
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedImages = images.slice(startIndex, endIndex);

  return (
    <div className="gallery-grid" style={{ alignItems: "center", display: "flex", flexDirection: "column" }}>
      {modal && (
        <GalleryModal
          images={images}
          close={() => setModal(false)}
          index={index}
        />
      )}

      <Grid container spacing={3}>
        {displayedImages.map((image, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            key={index}
          >
            <Fade triggerOnce duration="1000" key={index} cascade damping={0.8} >
            <GalleryImage
              src={image}
              onClick={() => handleImageClick(images.indexOf(image))}
            />
            </Fade>
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        style={{ marginTop: "40px", justifyContent: "center" }}
        size="large"
      />
    </div>
  );
};

export default GalleryGrid;
