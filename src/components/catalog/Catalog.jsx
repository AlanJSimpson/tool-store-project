import { Box, Grid, Typography } from "@mui/material";
import education from "../../assets/images/Education.png";
import engineeringImage from "../../assets/images/Engineering.png";
import logistic from "../../assets/images/Logistic.png";
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
            <a
              href='mailto:peraltech@peraltech.com '
              target='_blank'
              rel='noopener noreferrer'
            >
              <Card
                srcImage={{ icon: engineeringImage }}
                widthImage='100px'
                heigth='auto'
                altImage='engineering image'
              >
                Engenharia
              </Card>
            </a>
          </Grid>
          <Grid item xs>
            <a
              href='http://www.sandvik.coromant.com/pt-pt/services/logistics/pages/tool-logistics.aspx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Card
                srcImage={{ icon: logistic }}
                widthImage='100px'
                heigth='auto'
                altImage='logistic icon'
              >
                Logística
              </Card>
            </a>
          </Grid>
          <Grid item xs>
            <a
              href='https://www.sandvik.coromant.com/pt-pt/services/education/pages/e-learning.aspx'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Card
                srcImage={{ icon: education }}
                widthImage='100px'
                heigth='auto'
                altImage='logistic icon'
              >
                Aprenda sobre usinagem
              </Card>
            </a>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
