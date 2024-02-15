import React from 'react';
import Carousel from 'react-multi-carousel';
import Typography from '@mui/material/Typography';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ProjectCard from './ProjectCard';
import { allProjects } from '../projects/projectInformation';
import { Link } from 'react-router-dom';



const ProjectGallery = ({type}) => {

      const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1788 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		},
		laptop: {
			breakpoint: { max: 1788, min: 1500 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1500, min: 1100 },
			items: 3,
			slidesToSlide: 1 // optional, default to 1.
		},
        tablet2: {
			breakpoint: { max: 1100, min: 700 },
			items: 2,
			slidesToSlide: 1 // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 700, min: 0 },
			items: 1,
			slidesToSlide: 1 // optional, default to 1.
		}
	};

      const projects = allProjects;

	  {/*
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
		const { carouselState: { currentSlide } } = rest;
		return (
			<div className="carousel-button-group"> 
				<IconButton size="medium" className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
					<NavigateBeforeIcon />
				</IconButton>
				<IconButton size="medium" className={currentSlide === 3 ? 'disable' : ''} onClick={() => next()}>
					<NavigateNextIcon />
				</IconButton>
				<Button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button>
			</div>
		);
	};
	  */}

      return (

            <div className="container-fluid-no-padding" style={{width: "100%"}}>
            <Carousel responsive={responsive} infinite={true} autoPlay={true}  autoPlaySpeed={2000}>
				{projects.map((project) => (
					project.id < 6 &&
                              <div style={{justifyContent: "center", alignItems: "center", display: "flex"}} key={project.id}>
						<Link to={`/projects/${project.id}`} style={{textDecoration: "none"}}>

								<ProjectCard text={project.title} id={project.id} type={type} />
							
							
					
						</Link>
                              </div>
				))}
		</Carousel>
            </div>
            
      );

}

export default ProjectGallery;