import { Box, Container, Typography } from '@mui/material';
import toolBox from '../../assets/images/tool-box.png';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';

export default function Reconditioning() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth='xl'>
        <Box sx={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
          <Typography component='h2' variant='h3' fontWeight='bold'>
            Recondicionamento de ferramentas usadas – uma ótima ideia
          </Typography>
          <Typography component='h4' variant='h5' fontStyle='italic'>
            Comece o recondicionamento!
          </Typography>
        </Box>
        <Container>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Aumente sua produtividade e consiga um processo de manufatura mais
              confiável.
            </Typography>
            <ul>
              <li>
                <Typography fontSize='1.2rem' component='span' variant='body1'>
                  <a href='https://www.sandvik.coromant.com/pt-pt/contact/pages/findus.aspx'>
                    Entre em contato com seu representante Sandvik Coromant
                  </a>{' '}
                </Typography>
                <Typography fontSize='1.2rem' component='span' variant='body1'>
                  para solicitar uma caixa de Recondicionamento.
                </Typography>
              </li>
              <li>
                <Typography fontSize='1.2rem'>
                  Empacote suas ferramentas inteiriças de metal duro e envie as
                  ferramentas de acordo com as instruções.
                </Typography>
              </li>
              <li>
                <Typography fontSize='1.2rem'>
                  Suas ferramentas são recondicionadas para a qualidade original
                  e devolvidas dentro de 2-3 semanas.
                </Typography>
              </li>
            </ul>
          </Box>
          <Box component='section'>
            <Typography
              paddingY='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Centros de recondicionamento
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              A Sandvik Coromant trabalha com centros de recondicionamento
              especializados na Europa, Ásia e Américas. Quase 100% do programa
              de ferramentas inteiriças de metal duro pode ser recondicionado.
              Todos os centros são equipados com a mais nova tecnologia e têm
              que passar por um processo de certificação, o que garante nossos
              padrões de qualidade.
            </Typography>
          </Box>
          <Box component='section'>
            <Typography
              paddingY='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Como podemos garantir o desempenho de uma nova ferramenta?
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              Ao incorporar um processo no desenho de nossas ferramentas, o que
              permite a cópia exata em um recondicionamento futuro, podemos
              garantir o desempenho de uma ferramenta nova. O processo de
              recondicionamento reproduzirá a geometria exata e a cobertura da
              ferramenta original. Nossos testes de desempenho para ferramentas
              recondicionadas seguem o mesmo processo das ferramentas novas.
            </Typography>
          </Box>
          <Box component='section'>
            <Typography
              paddingY='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Cuidando de seus interesses
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              Nós incentivamos você a planejar o recondicionamento com
              antecedência para evitar interrupções desnecessárias em sua
              produção. Quando o recondicionamento não for mais lucrativo para
              você, as ferramentas de metal duro podem ser recicladas através de
              outro programa, no qual pagamos o preço de mercado pelo metal
              duro. Abaixo, estão instruções sobre como embalar suas ferramentas
              antes de enviá-las para recondicionamento. É importante que você
              proteja suas ferramentas de qualquer dano, além do desgaste normal
              de usinagem, se quiser enviá-las para recondicionamento.
            </Typography>
          </Box>
          <Box component='section'>
            <Typography
              paddingY='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Caixa de recondicionamento da Sandvik Coromant
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              Nós cuidamos de suas ferramentas.
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              Nossas caixas de recondicionamento estão disponíveis em dois
              tamanhos:
            </Typography>
            <ul>
              <li>
                <Typography fontSize='1.2rem'>
                  Caixa standard (300x200x138), Número do artigo: 6949557
                </Typography>
              </li>
              <li>
                <Typography fontSize='1.2rem'>
                  Caixa grande (400x300x138), Número do artigo: 6949558
                </Typography>
              </li>
            </ul>
            <Box sx={{ width: '20%', paddingY: '2rem' }}>
              <img height='100%' width='100%' src={toolBox} alt='caixa' />
            </Box>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Todas as caixas serão entregues com camadas de espuma para
              assegurar que as ferramentas fiquem protegidas durante o
              transporte. Para mais informações sobre como evitar danos durante
              o transporte, veja nossas instruções de transporte.
            </Typography>
          </Box>
        </Container>
      </Container>
      <Footer />
    </Box>
  );
}
