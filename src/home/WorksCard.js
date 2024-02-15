import { Card, Typography, Stack, Skeleton, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
      IconButton,
      CardContent,
      CardMedia,
      CardActionArea,
      Box,
} from "@mui/material";


const eventCardStyle = {
      width: "180px",
      margin: "15px",
      height: "90px",
      background: "#F5F5F5",
      boxShadow: "rgb(19, 39, 32)",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      display: "flex",
      ":hover": {
            transition: "0.1s",
      },
      '@media (max-width: 968px)': {
            maxWidth: "100%",
            width: "130px",
            height: "70px",

      }
};

const typographyStyle = {
      color: "black", 
      alignItems: "center", 
      justifyContent: "center", 
      textAlign: "center", 
      display: "flex" , 
      padding: "5px", 
      fontSize: "14px",
      marginTop: "5px",
      '@media (max-width: 968px)': {
            fontSize: "8px",
            padding: "4px", 
      }
}

const iconStyle = {
      width: "25px",
      height: "30px",
      borderRadius: "50%",
      objectFit: "cover",
      '@media (maxWidth: 968px)': {
            width: "20px",
            height: "20px",
      }
}


const WorksCard = ({ text, id }) => {

      return (
            <div>
                  <Card sx={eventCardStyle}>
                              <CardContent>
                                    <div className="container" style={{ alignItems: "center", justifyContent: "center", textAlign: "center", display: "flex" }}>
                                                
                                                <img src={"/icons/" + id + ".png"} alt="icon"  style={iconStyle} />
                                                <Typography gutterBottom variant="h" component="div" sx={typographyStyle} >
                                                      {text}
                                                </Typography>
                                    </div>
                              </CardContent>
                  </Card>
            </div>
      );

}

export default WorksCard;