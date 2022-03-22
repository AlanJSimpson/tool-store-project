import { Box, Grid, Typography } from '@mui/material';
import education from '../../assets/images/Education.png';
import engineeringImage from '../../assets/images/Engineering.png';
import logistic from '../../assets/images/Logistic.png';
import manufacture from '../../assets/images/Manufacture.png';
import sustentability from '../../assets/images/Sustentability.png';
import Card from '../card/Card';

export default function Catalog() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '70vh',
      }}
    >
      <Typography component='h3' variant='h4' fontWeight='bold' paddingY='6rem'>
        Nossos serviços
      </Typography>
      <Box padding={'20px'}>
        <Grid container spacing={2} rowSpacing={8}>
          <Grid item xs>
            <Card
              srcImage={{ icon: engineeringImage }}
              widthImage='140px'
              heigth='150px'
              altImage='engineering image'
            >
              Engenharia
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: manufacture }}
              widthImage='140px'
              heigth='140px'
              altImage='manufacture icon'
            >
              Manufatura
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: logistic }}
              widthImage='140px'
              heigth='140px'
              altImage='logistic icon'
            >
              Logística
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: education }}
              widthImage='140px'
              heigth='140px'
              altImage='education icon'
            >
              Treinamento
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: sustentability }}
              widthImage='140px'
              heigth='140px'
              altImage='sustentability icon'
            >
              Sustentabilidade
            </Card>
          </Grid>
          <Grid item xs>
            <Card
              srcImage={{ icon: manufacture }}
              widthImage='140px'
              heigth='140px'
              altImage='manufacture icon'
            >
              teste
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
