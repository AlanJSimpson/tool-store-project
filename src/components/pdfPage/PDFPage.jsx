import { Box, Button, Container, Grid, Typography } from '@mui/material';
import catalogoResumido from '../../assets/images/catalogo-resumido.jpg';
import ferramentasParaTorneamentoImg from '../../assets/images/ferramenta-para-torneamento.jpg';
import ferramentasRotativasImg from '../../assets/images/ferramentas-rotativas.jpg';
import ferramentasSolidasRotativas from '../../assets/images/ferramentas-solidas-rotativas.jpg';
import hardPartTuningImg from '../../assets/images/hard-part-tuning.jpg';
import manualTecnicoImg from '../../assets/images/manual-tecnico.jpg';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

export default function PDFPage() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth='md'>
        <Box paddingTop='2rem' paddingBottom='4rem'>
          <Typography fontWeight='bold' component={'h1'} variant='h4'>
            Catálogos e manuais da Sandvik Coromant
          </Typography>
          <Typography component={'h2'} variant='h5'>
            Faça o download dos catálogos e manuais da Sandvik coromant
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent={'center'}
        >
          <Typography fontWeight='bold' component='h3' variant='h4'>
            Principais Catálogos
          </Typography>
          <Grid container paddingTop='4rem'>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={catalogoResumido}
                  alt='capa do pdf catalogo resumido'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={ferramentasParaTorneamentoImg}
                  alt='capa do pdf ferramentas para torneamento'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={ferramentasRotativasImg}
                  alt='capa do pdf ferramentas rotativas'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={ferramentasSolidasRotativas}
                  alt='capa do pdf ferramentas solidas rotativas'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={hardPartTuningImg}
                  alt='capa do pdf hard part tuning'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
            <Grid item lg={4} md={6} xs={12}>
              <Box display='flex' flexDirection='column' alignItems='center'>
                <img
                  width='40%'
                  src={manualTecnicoImg}
                  alt='capa do pdf manual tecnico'
                />
                <Button sx={{ marginY: '2rem' }} variant='contained'>
                  Baixar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
