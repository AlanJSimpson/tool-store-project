import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logoPeraltech from '../../assets/images/LOGO_EM_TRANSPARENCIA.png';
import CustomMenu from '../menu/customMenu';

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
        <Link to='/'>
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
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item fontSize='1.6rem'>
            <CustomMenu
              buttonName='Digital'
              menuOptions={[
                { label: 'Download app', href: '#' },
                {
                  label: 'Crie uma montagem',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/coroplus-toollibrary/pages/online-tool-assembler.aspx',
                },
                {
                  label: 'Cutting speed',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/pages/toolguide.aspx',
                },
                { label: 'Nossos catálogos', href: '#' },
                {
                  label: 'Tool guide',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/coroplus-toolguide/pages/default.aspx',
                },
                {
                  label: 'Usinagem Digital Coroplus',
                  href: 'https://www.sandvik.coromant.com/pt-pt/campaigns/pages/coroplus.aspx?internal_camplink=coroplus&internal_camplink_type=highlight',
                },
                {
                  label: 'E-learning gratuito',
                  href: 'https://www.sandvik.coromant.com/pt-pt/services/education/pages/e-learning.aspx',
                },
              ]}
            />
          </Grid>
          <Grid item fontSize='1.6rem'>
            <CustomMenu
              buttonName='Treinamento'
              menuOptions={[
                {
                  label: 'Nossos treinamentos',
                  href: '#',
                },
                { label: 'Solicite um treinamento', href: '#' },
              ]}
            />
          </Grid>
          <Grid item fontSize='1.6rem'>
            <CustomMenu
              buttonName='Sustentabilidade'
              menuOptions={[
                { label: 'Reciclagem de metal duro', href: '/recycling', isInternal: true },
                { label: 'Recondicionamento', href: '#' },
              ]}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textTransform: 'uppercase',
                color: 'var(--secondary-color)',
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
              component='span'
              variant='body2'
            >
              <Link to='/aboutus'>Quem somos</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
