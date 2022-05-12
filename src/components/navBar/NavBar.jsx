import { useMediaQuery } from '@material-ui/core';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import logoPeraltech from '../../assets/images/LOGO_EM_TRANSPARENCIA.png';
import CustomMenu from '../menu/customMenu';

export default function NavBar() {
  const isHDResolution = useMediaQuery('(max-width: 1480px)');
  return (
    <Grid
      container
      columns={12}
      sx={{
        display: 'flex',
        backgroundColor: 'var(--primary-color)',
        alignItems: 'center',
      }}
    >
      <Grid
        sx={[
          { paddingLeft: '6rem', width: '50%' },
          isHDResolution && {
            width: '40%',
          },
        ]}
        item
      >
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
      <Grid
        item
        sx={[
          { width: '50%' },
          isHDResolution && {
            width: '60%',
          },
        ]}
      >
        <Grid
          container
          spacing={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <CustomMenu
              buttonName='Digital'
              menuOptions={[
                { label: 'Download app', href: '#mobile-app', target: '_self' },
                {
                  label: 'Crie uma montagem',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/coroplus-toollibrary/pages/online-tool-assembler.aspx',
                  target: '_blank',
                },
                {
                  label: 'Cutting speed',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/pages/toolguide.aspx',
                  target: '_blank',
                },
                {
                  label: 'Nossos catálogos',
                  href: '/catalogo',
                  isInternal: true,
                },
                {
                  label: 'Tool guide',
                  href: 'https://www.sandvik.coromant.com/pt-pt/products/coroplus-toolguide/pages/default.aspx',
                  target: '_blank',
                },
                {
                  label: 'Usinagem Digital Coroplus',
                  href: 'https://www.sandvik.coromant.com/pt-pt/campaigns/pages/coroplus.aspx?internal_camplink=coroplus&internal_camplink_type=highlight',
                  target: '_blank',
                },
              ]}
            />
          </Grid>
          <Grid item>
            <CustomMenu
              buttonName='Treinamento'
              menuOptions={[
                {
                  label: 'Nossos treinamentos',
                  href: 'https://www.sandvik.coromant.com/pt-pt/events_training/pages/default.aspx?country=br',
                  target: '_blank',
                },
                {
                  label: 'Solicite um treinamento',
                  href: '/contato',
                  isInternal: true,
                  state: { contato: 'Treinamentos' },
                },
              ]}
            />
          </Grid>
          <Grid item>
            <CustomMenu
              buttonName='Sustentabilidade'
              menuOptions={[
                {
                  label: 'Reciclagem de metal duro',
                  href: '/sustentabilidade/reciclagem',
                  isInternal: true,
                },
                {
                  label: 'Recondicionamento',
                  href: '/sustentabilidade/recondicionamento',
                  isInternal: true,
                },
              ]}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textTransform: 'uppercase',
                color: 'var(--secondary-color)',
                fontWeight: 'bold',
              }}
              component='span'
              variant='body2'
              className='navbar-options'
            >
              <Link to='/quem-somos'>Quem somos</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={{
                textTransform: 'uppercase',
                color: 'var(--secondary-color)',
                fontWeight: 'bold',
              }}
              component='span'
              variant='body2'
              className='navbar-options'
            >
              <Link to='/contato'>Contato</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
