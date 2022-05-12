import { Box, Typography } from "@mui/material";
import logoPeraltech from "../../assets/images/LOGO_EM_TRANSPARENCIA.png";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";

export default function AboutUs() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          height: "70vh",
          backgroundColor: "#efefef",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          fontWeight={"bold"}
          textAlign={"center"}
          component={"h3"}
          variant='h4'
          paddingTop={"4rem"}
          fontSize='1.6rem'
        >
          Quem somos?
        </Typography>

        <img
          src={logoPeraltech}
          alt='Logo Peraltech'
          width='350px'
          height='197px'
        />
        <Typography
          component='span'
          fontSize='1.3rem'
          fontWeight='200'
          width='65%'
          textAlign='justify'
          color='secondary'
        >
          A Peraltech é uma empresa de consultoria e distribuição de produtos da
          mais alta tecnologia para Usinagem, com 7 anos entregando os mais
          completos treinamentos desde operacionais à gerenciais, bem como as
          soluções de maior tecnologia mundial contamos com toda linha de
          softwares e ferramentas da Lider Global em Inovação e Tecnologia do
          Setor, a Sandvik Coromant. Para saber mais como podemos lhe ajudar
          entre em contato conosco, será um prazer lhe atender.
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
}
