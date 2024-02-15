import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { allProjects } from "../projects/projectInformation";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Tabss = ({selected}) => {
  const [value, setValue] = React.useState(0);
    const { t } = useTranslation();

    React.useEffect(() => {
        setValue(Number(selected));
        console.log(selected);
        }
    , [selected]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsStyle = {
    display: "none",
    backgroundColor: "background.paper",
    marginTop: "50px",
    "@media (max-width: 968px)": {
      display: "block",
    },
  };

  return (
    <Box sx={tabsStyle}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
       // text-color= {400}
        indicatorColor="primary"
        allowScrollButtonsMobile
        aria-label="scrollable prevent tabs example"
      >
        <Link to="/gallery" style={{ textDecoration: 'none' }} key={0}>
        <Tab label="All Projects" key={0}/>
        </Link>
        {allProjects.map(
          (project, index) =>
            index < 5 && 
            <Link key= {index+1} to={`/projects/${project.id}`} style={{ textDecoration: 'none' } }>
            <Tab key={index+1} label={t(project.name)} />
            </Link>
        )}
      </Tabs>
    </Box>
  );
};

export default Tabss;
