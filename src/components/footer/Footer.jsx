import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Grid, IconButton, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "var(--secondary-color)",
        height: "20vh",
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
          Contato
        </Typography>
        <a target='_blank' href='tel:+558131296548'>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <IconButton color='primary'>
              <PhoneIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              (81) 3129-6548
            </Typography>
          </Box>
        </a>
        <a target='_blank' href='https://wa.me/5581981911258'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <IconButton color='primary'>
              <WhatsAppIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              (81) 98191-1258
            </Typography>
          </Box>
        </a>
        <a target='_blank' href='mailto:peraltech@peraltech.com'>
          <Box display='flex' alignItems='center' justifyContent='center'>
            <IconButton color='primary'>
              <EmailIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              peraltech@peraltech.com
            </Typography>
          </Box>
        </a>
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
          <a href='https://www.facebook.com/PERALTECH' target='_blank'>
            <IconButton color='primary'>
              <FacebookIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              facebook.com/PERALTECH
            </Typography>
          </a>
        </Box>
        <Box>
          <a href='https://www.instagram.com/peraltech/' target='_blank'>
            <IconButton color='primary'>
              <InstagramIcon />
            </IconButton>
            <Typography component='span' variant='body2' color='primary'>
              instagram.com/peraltech
            </Typography>
          </a>
        </Box>
      </Grid>
    </Grid>
  );
}
