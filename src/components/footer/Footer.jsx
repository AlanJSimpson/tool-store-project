import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Grid, IconButton, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "var(--secondary-color)",
        height: "20vh",
        justifyContent: "space-around",
      }}
    >
      <Grid
        item
        xs={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
      >
        <Typography
          fontWeight='bold'
          component='h3'
          color='primary'
          variant='h6'
          fontSize='1.2rem'
        >
          Redes sociais
        </Typography>
        <Box>
          <a
            href='https://www.facebook.com/PERALTECH'
            target='_blank'
            rel='noreferrer'
          >
            <IconButton color='primary'>
              <FacebookIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              facebook.com/PERALTECH
            </Typography>
          </a>
        </Box>
        <Box>
          <a
            href='https://www.instagram.com/peraltech/'
            target='_blank'
            rel='noreferrer'
          >
            <IconButton color='primary'>
              <InstagramIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              instagram.com/peraltech
            </Typography>
          </a>
        </Box>
      </Grid>

      <Grid
        item
        xs={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
      >
        <Typography
          fontWeight='bold'
          component='h3'
          color='primary'
          variant='h6'
          fontSize='1.2rem'
        >
          Direitos reservados &copy; 2022
        </Typography>
      </Grid>
    </Grid>
  );
}
