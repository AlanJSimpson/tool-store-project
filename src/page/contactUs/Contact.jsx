import emailjs, { init } from "@emailjs/browser";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import SimpleSelect from "../../components/simpleSelect/SimpleSelect";

const FACTORY_IMAGE =
  "https://images.unsplash.com/photo-1566688045489-95fddaab0c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80";

export default function Contact() {
  init(process.env.REACT_APP_USER_ID);

  const [sector, setSector] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showWhatsAppScreen, setShowWhatsAppScreen] = useState(false);

  const handleSelectChange = (newSelectValue) => {
    setSector(newSelectValue);
  };

  const sendEmail = () => {
    emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      {
        sector,
        name,
        email,
        subject,
        message,
      }
    );
    setShowWhatsAppScreen(true);
  };

  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${FACTORY_IMAGE})`,
        }}
      >
        <Container>
          <Grid container spacing={2} columns={12}>
            <Grid
              item
              lg={6}
              sx={{ height: "70vh", display: "flex", alignItems: "center" }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  component='h2'
                  variant='h3'
                  color='primary'
                  fontWeight='bold'
                  fontSize='2.2rem'
                >
                  Peraltech
                </Typography>
                <Typography
                  component='p'
                  variant='h4'
                  sx={{ color: "#fff", fontWeight: "bold", marginTop: "2rem" }}
                  fontSize='1.5rem'
                >
                  Solicite uma visita de nossos especialistas
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              sx={{
                height: "70vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height: "70%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  justifyContent: "space-around",
                  paddingX: "75px",
                  paddingY: "20px",
                }}
              >
                {showWhatsAppScreen ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "3rem",
                    }}
                  >
                    <Typography
                      color='secondary'
                      component='h2'
                      variant='h5'
                      fontWeight='bold'
                      textAlign='center'
                    >
                      Você também pode nos contatar por whatsapp
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Button
                        onClick={() => setShowWhatsAppScreen(false)}
                        variant='contained'
                        color='secondary'
                      >
                        Voltar
                      </Button>
                      <Button variant='contained' startIcon={<WhatsAppIcon />}>
                        <a
                          target='_blank'
                          href={
                            sector === "Engenharia"
                              ? `https://wa.me/55${process.env.REACT_APP_TEL_ENGENHARIA}`
                              : sector === "Comercial" ||
                                sector === "Treinamentos"
                              ? `https://wa.me/55${process.env.REACT_APP_TEL_COMERCIAL}`
                              : `https://wa.me/55${process.env.REACT_APP_TEL_SOLICITE_VISITA}`
                          }
                          rel='noreferrer'
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <>
                    <Box>
                      <SimpleSelect
                        label='Selecione setor para contato'
                        value={sector}
                        onSelectChange={handleSelectChange}
                        options={[
                          { title: "Engenharia", value: "Engenharia" },
                          { title: "Comercial", value: "Comercial" },
                          { title: "Treinamentos", value: "Treinamentos" },
                          {
                            title: "Solicite uma visita",
                            value: "Solicite uma visita",
                          },
                        ]}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <TextField
                        value={name}
                        onInput={(e) => setName(e.target.value)}
                        label='Nome'
                        size='small'
                      />
                      <TextField
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        label='E-mail'
                        size='small'
                      />
                      <TextField
                        value={subject}
                        onInput={(e) => setSubject(e.target.value)}
                        label='Assunto'
                        size='small'
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <TextField
                        label='Mensagem'
                        width='100%'
                        multiline
                        rows={4}
                        value={message}
                        onInput={(e) => setMessage(e.target.value)}
                      />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button onClick={sendEmail} variant='contained'>
                        Enviar
                      </Button>
                    </Box>
                  </>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
