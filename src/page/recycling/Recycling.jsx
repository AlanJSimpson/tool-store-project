import { Box, Container, Typography } from '@mui/material';
import hardMetalRecycling from '../../assets/images/hardMetalRecycling.png';
import recyclingCircle from '../../assets/images/recycling-circle.png';
import transportBox from '../../assets/images/transportBox.png';
import zeroWaste from '../../assets/images/zero-waste.png';
import Footer from '../../components/footer/Footer';
import NavBar from '../../components/navBar/NavBar';
export default function Recycling() {
  return (
    <Box>
      <NavBar />
      <Container maxWidth='xl'>
        <Box sx={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
          <Typography component='h2' variant='h3' fontWeight='bold'>
            Reciclagem de metal duro
          </Typography>
          <Typography component='h4' variant='h5' fontStyle='italic'>
            Para uma empresa mais sustentável
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
              Circularidade do metal duro
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              A maior parte da matéria-prima usada em nossas ferramentas de
              metal duro vem do que você pode chamar de sucata. Compramos de
              volta suas ferramentas de metal duro gastas e reutilizamos para
              criar novas. Ao fazer isso, praticamos negócios sustentáveis em um
              ambiente de recursos limitados e minimizamos o desperdício
              excessivo.
            </Typography>
            <Box
              sx={{
                width: '50%',
                paddingY: '4rem',
              }}
            >
              <img
                src={hardMetalRecycling}
                alt='metal reciclável'
                height='100%'
                width='100%'
              />
            </Box>
          </Box>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Peça uma caixa de reciclagem
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Você precisa de uma caixa para suas fresas de topo, pastilhas,
              pontas da broca ou outras ferramentas de metal duro? Se você for
              um usuário registrado, você pode facilmente solicitar uma caixa de
              reciclagem online.
            </Typography>

            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              91617 - Caixa de coleta (amarela)
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              92994 - Caixa de transporte para ferramentas inteiriças de metal
              duro
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
            >
              92995 - Caixa de transporte para pastilhas
            </Typography>

            <Box sx={{ width: '50%', paddingY: '2rem' }}>
              <img
                height='100%'
                width='100%'
                src={transportBox}
                alt='caixa de transportes'
              />
            </Box>
          </Box>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Circularidade de metal duro - reduzir, reutilizar, refazer,
              reciclar
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              A circularidade de metal duro não oferece somente benefícios
              ambientais. Assim que as ferramentas de corte perdem suas
              propriedades da aresta de corte, é fácil considerá-las inúteis.
              Porém, os materiais usados para fazer essas ferramentas continuam
              valiosos.
            </Typography>
            <Box sx={{ width: '50%', paddingBottom: '2rem' }}>
              <img
                width='100%'
                height='100%'
                src={recyclingCircle}
                alt='círculo de reciclagem'
              />
            </Box>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Para reduzir o uso de material virgem como o tungstênio, já
              estamos na fase do projeto em possibilidades para incluir mais de
              metal duro reciclado em nossas ferramentas. Como um exemplo, a
              mais nova linha de classes de torneamento de aços é feita com,
              pelo menos, 40% de material reciclado. Na verdade, a maioria de
              nossas ferramentas inteiriças de metal duro vem de metais
              considerados sucata: metal duro reciclado. O metal duro que usamos
              em nossa produção vem de pastilhas, ferramentas sólidas rotativas
              e outras ferramentas de metal duro desgastadas que coletamos de
              nossos clientes. As ferramentas de metal duro usadas vão para
              nossas plantas certificadas pela ISO 14001 e pela OHSAS 18001 para
              serem recicladas por meio de métodos de reciclagem ambientalmente
              corretos e aprovados. Seja através de um processo de zinco onde
              são separados em um pó ou um processo químico durante o qual os
              metais duros são dissolvidos em componentes atômicos.
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Queremos que você use as ferramentas de corte pelo maior tempo
              possível. O uso otimizado é sustentável tanto para o meio ambiente
              e quanto para seus negócios. Certifique-se de que está usando os
              dados de corte e o set-up corretos da ferramenta para otimizar a
              vida útil da ferramenta. Antes de colocar a ferramenta na caixa de
              reciclagem, verifique se é possível repará-la ou reformá-la.
              Muitas ferramentas também podem aproveitar a vida útil da
              ferramenta mais longa por meio do recondicionamento ou reafiação,
              que é uma opção de custo otimizado e sustentável para prolongar a
              vida útil da ferramenta antes que sejam enviadas para reciclagem.
              Nosso Serviço de recondicionamento está disponível para muitas
              ferramentas inteiriças redondas - transformar a fresa ou a broca
              em novas três vezes.
            </Typography>
          </Box>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Vamos lutar juntos contra o desperdício
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Lembre-se: sua sucata não é lixo. Certifique-se de classificar
              cuidadosamente seu metal duro em nossas caixas de reciclagem, se
              você quiser tornar sua produção mais sustentável ao mesmo tempo em
              que nós apoia em nossa meta para aumentar a circularidade de metal
              duro. Todos saem ganhando quando as ferramentas gastas não vão
              parar em aterros e ferros-velhos.
            </Typography>
          </Box>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Como enviar suas ferramentas usadas para reciclarmos
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Deixamos caixas de coleta em sua fábrica para você enchê-las.
              Quando estiverem cheias, nós coletamos e você manda a conta.
              Independentemente da origem, compramos seu metal duro usado a
              preço de mercado. Entre em contato conosco e peça uma caixa de
              coleta para cada máquina. Vamos discutir ideias sobre como
              economizar espaço no chão de fábrica e em seu centro de usinagem.
              Se precisar de recomendações sobre como evitar furtos e roubos,
              fale conosco. Temos experiência em segurança.
            </Typography>
            <Box sx={{ width: '70%', margin: '0 auto', paddingBottom: '2rem' }}>
              <img
                height='100%'
                width='100%'
                src={zeroWaste}
                alt='reaproveitamento'
              />
            </Box>
          </Box>
          <Box component='section'>
            <Typography
              paddingBottom='2rem'
              component='h4'
              variant='h4'
              fontWeight='bold'
            >
              Economia de energia e diminuição das emissões de CO2
            </Typography>
            <Typography
              component='p'
              variant='body1'
              textAlign='justify'
              fontSize='1.3rem'
              paddingBottom='2rem'
            >
              Os recursos do planeta não são infinitos e visamos reduzir nossa
              pegada ambiental o máximo possível. Estamos sempre procurando
              novas maneiras de desenvolver tecnologias de reciclagem mais
              limpas e mais eficientes. Produzir novas ferramentas a partir de
              metal duro reciclado não é bom apenas porque economiza
              matéria-prima virgem, isso também significa economizar a energia
              na produção. Fazer ferramentas com material reciclado utiliza 70%
              menos energia e reduz a emissão de dióxido de carbono em 40%.
            </Typography>
          </Box>
        </Container>
      </Container>
      <Footer />
    </Box>
  );
}
