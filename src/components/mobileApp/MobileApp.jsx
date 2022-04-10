import { useMediaQuery } from '@material-ui/core';
import { Box, Grid, Typography } from '@mui/material';
import iFind from '../../assets/images/ifindIcon.png';
import machiningCalculator from '../../assets/images/machining-calculator.png';
import startValues from '../../assets/images/start-values-icon.png';
import toolWearAnalyzer from '../../assets/images/tool-war-analyzer-icon.png';

export default function MobileApp() {
  const isHDResolution = useMediaQuery('(max-width: 1500px)');
  return (
    <Box
      sx={[
        { paddingBottom: '5rem' },
        isHDResolution && {
          paddingTop: '15rem',
        },
      ]}
    >
      <Typography
        component='h3'
        variant='h4'
        fontWeight='bold'
        textAlign='center'
        paddingBottom='6rem'
      >
        Aplicativos Sandvik
      </Typography>
      <Grid container rowSpacing={8}>
        <Grid
          item
          xs={6}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Box sx={{ width: '20%', borderRadius: '25px' }}>
            <img
              height='100%'
              width='100%'
              src={machiningCalculator}
              alt='Icone do aplicativo Machining calculator'
              style={{ borderRadius: '25px' }}
            />
          </Box>
          <Box sx={{ paddingLeft: '1rem' }}>
            <Typography
              component='span'
              variant='body2'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.4rem',
              }}
            >
              Machining Calculator
            </Typography>
            <a
              href='https://apps.apple.com/br/app/machining-calculator/id389011280'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Apple Store
              </Typography>
            </a>
            /
            <a
              href='https://play.google.com/store/apps/details?id=com.sandvik.materialcalculator.activities&hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Google play
              </Typography>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <Box sx={{ width: '20%', borderRadius: '25px' }}>
            <img
              height='100%'
              width='100%'
              src={iFind}
              alt='Icone do aplicativo iFind'
              style={{ borderRadius: '25px' }}
            />
          </Box>
          <Box sx={{ paddingLeft: '1rem' }}>
            <Typography
              component='span'
              variant='body2'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.4rem',
              }}
            >
              Machining Calculator
            </Typography>
            <a
              href='https://apps.apple.com/us/app/online-offer/id977551106'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Apple Store
              </Typography>
            </a>
            /
            <a
              href='https://play.google.com/store/apps/details?id=com.sandvik.coromant.onlineoffer&hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Google play
              </Typography>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          display='flex'
          alignItems='center'
          justifyContent='center'
          paddingRight='25px'
        >
          <Box sx={{ width: '20%', borderRadius: '25px' }}>
            <img
              height='100%'
              width='100%'
              src={toolWearAnalyzer}
              alt='Icone do aplicativo iFind'
              style={{ borderRadius: '25px' }}
            />
          </Box>
          <Box sx={{ paddingLeft: '1rem' }}>
            <Typography
              component='span'
              variant='body2'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.4rem',
              }}
            >
              Tool Wear Analyzer
            </Typography>
            <a
              href='https://apps.apple.com/us/app/online-offer/id977551106'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Apple Store
              </Typography>
            </a>
            /
            <a
              href='https://play.google.com/store/apps/details?id=com.sandvik.coromant.toolwear&hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Google play
              </Typography>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          display='flex'
          alignItems='center'
          justifyContent='center'
          paddingRight='25px'
        >
          <Box sx={{ width: '20%', borderRadius: '25px' }}>
            <img
              height='100%'
              width='100%'
              src={startValues}
              alt='Icone do aplicativo iFind'
              style={{ borderRadius: '25px' }}
            />
          </Box>
          <Box sx={{ paddingLeft: '1rem' }}>
            <Typography
              component='span'
              variant='body2'
              sx={{
                fontWeight: 'bold',
                display: 'flex',
                flexDirection: 'column',
                fontSize: '1.4rem',
              }}
            >
              Start values
            </Typography>
            <a
              href='https://apps.apple.com/us/app/online-offer/id977551106'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Apple Store
              </Typography>
            </a>
            /
            <a
              href='https://play.google.com/store/apps/details?id=com.sandvik.startvalue.activities&hl=en'
              target='_blank'
              rel='noreferrer'
            >
              <Typography component='span' variant='body2' fontSize='1.1rem'>
                Google play
              </Typography>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
