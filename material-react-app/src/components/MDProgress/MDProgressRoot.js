// Bu kod, LinearProgress bileşenini stillemek için MUI'nin styled API'sini kullanır.

// Bileşen, LinearProgress bileşenine gelen ownerState prop'unu kullanarak stil özelliklerini belirler. ownerState prop'undan ilerleme çubuğunun color, value ve variant özellikleri alınır.

// İlerleme çubuğunun arka plan rengi (backgroundValue) hesaplanır. Eğer variant "gradient" ise, ilerleme çubuğunun arka planı, gradients temasından alınan bir gradyan oluşturulur. Aksi halde, belirtilen color özelliğine dayalı olarak tek bir renk kullanılır.

// Son olarak, ilerleme çubuğunun bar bileşeni (MuiLinearProgress-bar) stil özellikleri belirlenir. Arka plan rengi (background), ilerleme yüzdesine (value) göre genişlik ayarlanır ve metin rengi (color) belirlenir.

// Bu şekilde, LinearProgress bileşeninin farklı renklerde, gradyanlarla veya tek renkte olacak şekilde özelleştirilmesi sağlanır.

// @mui material components
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

export default styled(LinearProgress)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, value, variant } = ownerState;

  const { text, gradients } = palette;
  const { linearGradient } = functions;

  // background value
  let backgroundValue;

  if (variant === "gradient") {
    backgroundValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  } else {
    backgroundValue = palette[color] ? palette[color].main : palette.info.main;
  }

  return {
    "& .MuiLinearProgress-bar": {
      background: backgroundValue,
      width: `${value}%`,
      color: text.main,
    },
  };
});
