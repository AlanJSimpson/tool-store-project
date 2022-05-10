import { Box, Typography } from "@mui/material";

export default function Card({
  srcImage,
  altImage,
  widthImage,
  heigthImage,
  children,
}) {
  return (
    <Box
      sx={[
        {
          width: "12rem",
          height: "12rem",
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2);",
          backgroundColor: "var(--secondary-color)",
          borderRadius: "25px",
          transition: "transform 0.5s",
          "&:hover": {
            transform: "scale(1.1,1.1)",
          },
        },
      ]}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingY: "20px",
        }}
      >
        <img
          src={srcImage.icon}
          alt={altImage}
          width={widthImage}
          heigth={heigthImage}
        />
      </Box>
      <Typography
        fontSize='1.2rem'
        fontWeight='bold'
        textAlign='center'
        variant='body2'
        color='white'
      >
        {children}
      </Typography>
    </Box>
  );
}
