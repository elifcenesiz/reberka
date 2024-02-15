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
      maxWidth: "100%",
      width: "140px",
      margin: "10px",
      height: "190px",
      background: "#F5F5F5",
      borderRadius: "10px",
      boxShadow: "rgba(19, 39, 32, 0.3) 0px 20px 40px",
      paddingLeft: "0px",
      

      '@media (max-width: 768px)': {
            maxWidth: "100%",
            width: "120px",
            height: "150px",

      }
};



const referenceCardStyle = {
      maxWidth: "100%",
      width: "180px",
      margin: "10px",
      height: "190px",
      background: "#F5F5F5",
      borderRadius: "10px",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      paddingTop: "0px",
      boxShadow: "rgba(19, 39, 32, 0.3) 0px 20px 40px",
      '@media (max-width: 768px)': {
            maxWidth: "100%",
            width: "150px",
            height: "100px",

      }
};



const ReferenceCard = ({ text, image }) => {


      return (

            <div>

                        {image ? (
                              <Card sx={eventCardStyle}>
                                    <CardActionArea>
                                          {image ? (
                                                <CardMedia
                                                      src= {image}
                                                      component="img"
                                                      height="120"
                                                      onError={(e) => {
                                                            e.target.src = ""
                                                      }}
                                                      alt=''
                                                      style={{objectFit: "fill", borderRadius: "10px 10px 0px 0px" }}
                                                />

                                          ) : (
                                                <Skeleton variant="rectangular" width="100%" height="250px" />
                                          )}
                                          <CardContent style={ text === " T.C. Cumhurbaşkanlığı " ? {paddingLeft: "0px", paddingRight: "0px"} : { }}>
                                                <div className="container">
                                                      {!image ? (
                                                            <Stack spacing={2}>
                                                                  <Skeleton
                                                                        sx={{ bgcolor: "#eaeaea" }}
                                                                        variant="rounded"
                                                                        width="100%"
                                                                        height="40px"
                                                                  />
                                                                  <Skeleton
                                                                        sx={{ bgcolor: "#eaeaea" }}
                                                                        variant="rounded"
                                                                        width="85%"
                                                                        height="30px"
                                                                  />
                                                                  <Skeleton
                                                                        sx={{ bgcolor: "#eaeaea" }}
                                                                        variant="rounded"
                                                                        width="85%"
                                                                        height="30"
                                                                  />
                                                            </Stack>
                                                      ) : (
                                                            <div style={{ alignItems: "", justifyContent: "", textAlign: "center", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                                                                  <p  component="div" style={{ fontSize:"14px", textShadow: "0px 0px 5px rgba(0,0,0,0.3)", marginTop: "-10px" }}>
                                                                        {text}
                                                                  </p>
                                                            </div>
                                                      )}

                                                </div>
                                          </CardContent>
                                    </CardActionArea>
                              </Card>) :
                              <Card sx={referenceCardStyle}>
                                    <CardContent>
                                          <div style={{ alignItems: "center", justifyContent: "center", textAlign: "center", display: "flex", flexDirection: "column", marginTop: "20%" }}>
                                                <Typography gutterBottom  component="div" style={{ fontWeight: "", textAlign: "center", alignItems: "center", justifyContent: "center", fontSize:"16px" }}>
                                                      {text}
                                                </Typography>
                                          </div>
                                    </CardContent>
                              </Card>
                        }
            </div>
      );

}

export default ReferenceCard;