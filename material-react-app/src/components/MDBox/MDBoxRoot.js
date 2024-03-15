// Bu kod bir Box bileşenini stillemek için MUI'nin styled fonksiyonunu kullanır. Bu sayede, Box bileşenini styled fonksiyonu ile sarmalayarak, bileşene özgü özel stiller eklenir.

// Bileşen, ownerState ve theme parametrelerini alır. ownerState, bileşenin özelliklerini içerirken, theme MUI temalarını içerir.

// Bileşenin özellikleri şunlardır:

// variant: Kutunun görünümü ("gradient" veya diğer geçerli bir renk adı).
// bgColor: Kutunun arka plan rengi (renk adı veya hex kodu).
// color: Kutunun metin rengi (renk adı veya hex kodu).
// opacity: Kutunun opaklığı (0 ile 1 arasında bir değer).
// borderRadius: Kutunun kenar yuvarlaklığı (xs, sm, md, lg, xl, xxl veya section).
// shadow: Kutunun gölgesi (xs, sm, md, lg, xl, xxl veya inset).
// coloredShadow: Kutunun renkli gölgesi (primary, secondary, info, success, warning, error, light, dark veya none).
// Kod, bu özelliklere göre kutunun arka plan rengini, metin rengini, kenar yuvarlaklığını, gölgesini ve opaklığını belirler. Bu değerler, bileşenin style özelliğine atanır ve kutunun görünümünü belirler.

// Kodun sonunda, styled fonksiyonu kullanılarak stilize edilmiş Box bileşeni dışa aktarılır.

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { variant, bgColor, color, opacity, borderRadius, shadow, coloredShadow } = ownerState;

  const { gradients, grey, white } = palette;
  const { linearGradient } = functions;
  const { borderRadius: radius } = borders;
  const { colored } = boxShadows;

  const greyColors = {
    "grey-100": grey[100],
    "grey-200": grey[200],
    "grey-300": grey[300],
    "grey-400": grey[400],
    "grey-500": grey[500],
    "grey-600": grey[600],
    "grey-700": grey[700],
    "grey-800": grey[800],
    "grey-900": grey[900],
  };

  const validGradients = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ];

  const validColors = [
    "transparent",
    "white",
    "black",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
    "text",
    "grey-100",
    "grey-200",
    "grey-300",
    "grey-400",
    "grey-500",
    "grey-600",
    "grey-700",
    "grey-800",
    "grey-900",
  ];

  const validBorderRadius = ["xs", "sm", "md", "lg", "xl", "xxl", "section"];
  const validBoxShadows = ["xs", "sm", "md", "lg", "xl", "xxl", "inset"];

  // background value
  let backgroundValue = bgColor;

  if (variant === "gradient") {
    backgroundValue = validGradients.find((el) => el === bgColor)
      ? linearGradient(gradients[bgColor].main, gradients[bgColor].state)
      : white.main;
  } else if (validColors.find((el) => el === bgColor)) {
    backgroundValue = palette[bgColor] ? palette[bgColor].main : greyColors[bgColor];
  } else {
    backgroundValue = bgColor;
  }

  // color value
  let colorValue = color;

  if (validColors.find((el) => el === color)) {
    colorValue = palette[color] ? palette[color].main : greyColors[color];
  }

  // borderRadius value
  let borderRadiusValue = borderRadius;

  if (validBorderRadius.find((el) => el === borderRadius)) {
    borderRadiusValue = radius[borderRadius];
  }

  // boxShadow value
  let boxShadowValue = "none";

  if (validBoxShadows.find((el) => el === shadow)) {
    boxShadowValue = boxShadows[shadow];
  } else if (coloredShadow) {
    boxShadowValue = colored[coloredShadow] ? colored[coloredShadow] : "none";
  }

  return {
    opacity,
    background: backgroundValue,
    color: colorValue,
    borderRadius: borderRadiusValue,
    boxShadow: boxShadowValue,
  };
});
