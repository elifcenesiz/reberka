import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageGallery from './ImageGallery';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "75%",
  bgcolor: 'rgba(0,0,0,0.2)',
  boxShadow: '24px 24px 48px 0 rgba(0,0,0,0.2)',
  p: 0,

  '@media (max-width: 968px)': {
    width: "100%",
  },
    '@media (max-width: 768px)': {
        width: "100%",
    },
};

const GalleryModal = ({images, close, index}) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    close()
    }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ImageGallery images={images} index={index}/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default GalleryModal;