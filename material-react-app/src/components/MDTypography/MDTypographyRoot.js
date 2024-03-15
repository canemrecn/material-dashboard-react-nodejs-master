// Bu kod, MUI'nin Typography bileşenini özelleştirilmiş bir şekilde stilize eder. styled fonksiyonu kullanılarak Typography bileşeniyle birleştirilir ve belirli stil özellikleri uygulanır.

// İçe Aktarmalar:
// Typography: MUI'nin tipografi bileşenini temsil eder.
// styled: Bileşenleri özelleştirmek için kullanılan bir MUI fonksiyonudur.
// Özelleştirilmiş Typography Bileşeni:
// Props'lar:
// ownerState: Bileşenin sahibi durumunu temsil eder ve bileşenin belirli özelliklerini içerir.
// color: Metin rengini belirler.
// textTransform: Metin dönüşümünü belirler.
// verticalAlign: Dikey hizalamayı belirler.
// fontWeight: Font ağırlığını belirler.
// opacity: Metnin opaklığını belirler.
// textGradient: Metin üzerine gradyan uygulanıp uygulanmayacağını belirler.
// darkMode: Koyu modun etkin olup olmadığını belirler.
// Bileşen, belirli özelliklere göre metin stili uygular.
// Metin rengi, font ağırlığı, metin dönüşümü, dikey hizalama, opaklık ve gradyan gibi özellikler belirli koşullara göre ayarlanır.
// Gradyan uygulandığında, metnin arka planında gradyan uygulanır ve metin rengi şeffaf olarak ayarlanır.
// Koyu modda, metin rengi beyaza dönüştürülür ve varsayılan değerler geçerli değilse, koyu mod varsayılan olarak devre dışı bırakılır.
// Bu özelleştirilmiş bileşen, metin stilini ve özelliklerini uygulamak için kullanılabilir ve MUI'nin Typography bileşeni ile uyumludur.

// @mui material components
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export default styled(Typography)(({ theme, ownerState }) => {
  const { palette, typography, functions } = theme;
  const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient, darkMode } =
    ownerState;

  const { gradients, transparent, white } = palette;
  const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
  const { linearGradient } = functions;

  // fontWeight styles
  const fontWeights = {
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      color !== "inherit" && color !== "text" && color !== "white" && gradients[color]
        ? linearGradient(gradients[color].main, gradients[color].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative",
    zIndex: 1,
  });

  // color value
  let colorValue = color === "inherit" || !palette[color] ? "inherit" : palette[color].main;

  if (darkMode && (color === "inherit" || !palette[color])) {
    colorValue = "inherit";
  } else if (darkMode && color === "dark") colorValue = white.main;

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    fontWeight: fontWeights[fontWeight] && fontWeights[fontWeight],
    ...(textGradient && gradientStyles()),
  };
});
