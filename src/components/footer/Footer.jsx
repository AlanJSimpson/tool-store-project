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
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          component="h3"
          color="primary"
          variant="h6"
          fontSize="1.2rem"
        >
          Contato
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton color="primary">
            <PhoneIcon />
          </IconButton>
          <Typography component="span" variant="body2" color="primary">
            (81) 3129-6548
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton color="primary">
            <WhatsAppIcon />
          </IconButton>

          <Typography component="span" variant="body2" color="primary">
            (81) 98191-1258
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton color="primary">
            <EmailIcon />
          </IconButton>
          <Typography component="span" variant="body2" color="primary">
            peraltech@peraltech.com
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          component="h3"
          color="primary"
          variant="h6"
          fontSize="1.2rem"
        >
          Direitos reservados &copy; 2022
        </Typography>
      </Grid>
      <Grid
        item
        xs={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
      >
        <Typography
          fontWeight="bold"
          component="h3"
          color="primary"
          variant="h6"
          fontSize="1.2rem"
        >
          Redes sociais
        </Typography>
        <Box>
          <IconButton color="primary">
            <FacebookIcon />
          </IconButton>
          <Typography component="span" variant="body2" color="primary">
            facebook.com/PERALTECH
          </Typography>
        </Box>
        <Box>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
          <Typography component="span" variant="body2" color="primary">
            instagram.com/peraltech
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
