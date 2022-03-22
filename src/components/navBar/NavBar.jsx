import { Box, Grid, Typography } from '@mui/material';
import logoPeraltech from '../../assets/images/LOGO_EM_TRANSPARENCIA.png';

export default function NavBar() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        backgroundColor: 'var(--primary-color)',
        alignItems: 'center',
      }}
    >
      <Grid item xs={6} sx={{ paddingLeft: '6rem' }}>
        <Box
          sx={{
            width: '200px',
            height: 'auto',
          }}
        >
          <img
            src={logoPeraltech}
            alt='logo peraltech'
            width='100%'
            height='100%'
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
          }}
        >
          <Grid item>
            <a href='#'>
              <Typography
                fontSize='1.6rem'
                fontWeight={'bold'}
                color={'secondary'}
              >
                Mobile
              </Typography>
            </a>
          </Grid>
          <Grid item fontSize='1.6rem'>
            <a href='#'>
              <Typography
                fontSize='1.6rem'
                fontWeight={'bold'}
                color={'secondary'}
              >
                Digital
              </Typography>
            </a>
          </Grid>
          <Grid item fontSize='1.6rem'>
            <a
              target='_blank'
              href='https://www.sandvik.coromant.com/pt-pt/events_training/pages/default.aspx?country=br'
              rel='noreferrer'
            >
              <Typography
                fontSize='1.6rem'
                fontWeight={'bold'}
                color={'secondary'}
              >
                Treinamento
              </Typography>
            </a>
          </Grid>
          <Grid item fontSize='1.6rem'>
            <a href='#'>
              <Typography
                fontSize='1.6rem'
                fontWeight={'bold'}
                color={'secondary'}
              >
                Sustentatibilidade
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
