import { Box, Grid, Typography } from "@mui/material";
import education from "../../assets/images/Education.png";
import engineeringImage from "../../assets/images/Engineering.png";
import logistic from "../../assets/images/Logistic.png";
import manufacture from "../../assets/images/Manufacture.png";
import sustentability from "../../assets/images/Sustentability.png";
import Card from "../card/Card";

export default function Catalog() {
  return (
    <Box
      id='catalogos'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "45vh",
      }}
    >
      <Typography
        component='h3'
        variant='h4'
        fontWeight='bold'
        paddingY='4rem'
        fontSize='1.6rem'
      >
        Nossos serviços
      </Typography>
      <Box padding={"20px"}>
        <Grid container spacing={6} rowSpacing={8}>
          <Grid item xs>
            <Card
              srcImage={{ icon: engineeringImage }}
              widthImage='100px'
              heigth='auto'
              altImage='engineering image'
            >
              Engenharia
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: manufacture }}
              widthImage='100px'
              heigth='auto'
              altImage='manufacture icon'
            >
              Manufatura
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: logistic }}
              widthImage='100px'
              heigth='auto'
              altImage='logistic icon'
            >
              Logística
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: education }}
              widthImage='100px'
              heigth='auto'
              altImage='education icon'
            >
              Treinamento
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: sustentability }}
              widthImage='100px'
              heigth='auto'
              altImage='sustentability icon'
            >
              Sustentabilidade
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
