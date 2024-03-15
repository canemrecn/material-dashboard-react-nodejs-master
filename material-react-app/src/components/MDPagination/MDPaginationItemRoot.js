
// Bu kod, bir düğme bileşenini özelleştirmek için styled fonksiyonunu kullanır. Özellikle, bu örnekte, MDButton bileşeni özelleştirilir.

// Bileşen, temel olarak düğmenin görünümünü ayarlayan bir dizi CSS stil kuralı içerir. İşlev içinde, bileşenin temel özelliklerine (theme, ownerState) erişilir ve bunlara göre uygun stiller belirlenir.

// Birkaç anahtar stil özelliği şunlardır:

// borderColor: Düğmenin kenarlık rengini belirler.
// margin: Düğmenin dış kenar boşluğunu ayarlar.
// pointerEvents: Düğmenin etkinlik alıp almayacağını belirler. active durumuna bağlı olarak bu özellik ayarlanır.
// fontWeight: Düğmenin yazı tipi kalınlığını belirler.
// fontSize: Düğmenin yazı tipi boyutunu belirler.
// width, height, minWidth, minHeight: Düğmenin genişlik ve yükseklik değerlerini ayarlar. Bu özellikler paginationSize'a bağlı olarak değişebilir.
// &:hover: Fare düğmenin üzerine geldiğinde veya odaklandığında uygulanacak stilleri belirler. Bu durumda, düğmenin arka plan rengi ve kenarlık rengi değiştirilir.
// Ayrıca, &:hover, &:focus, &:active için özel stiller de belirlenmiştir. Bu stiller, düğmenin etkileşim durumlarına göre davranışını ayarlar. Örneğin, fare düğmenin üzerine geldiğinde, düğmenin arka plan rengi ve kenarlık rengi değiştirilir.

// Bu özelleştirilmiş stil, MDButton bileşeninin stilini genişletir ve belirli durumlara göre uyarlar.

// @mui material components
import { styled } from "@mui/material/styles";

// Material Dashboard 2 React components
import MDButton from "components/MDButton";

export default styled(MDButton)(({ theme, ownerState }) => {
  const { borders, functions, typography, palette } = theme;
  const { variant, paginationSize, active } = ownerState;

  const { borderColor } = borders;
  const { pxToRem } = functions;
  const { fontWeightRegular, size: fontSize } = typography;
  const { light } = palette;

  // width, height, minWidth and minHeight values
  let sizeValue = pxToRem(36);

  if (paginationSize === "small") {
    sizeValue = pxToRem(30);
  } else if (paginationSize === "large") {
    sizeValue = pxToRem(46);
  }

  return {
    borderColor,
    margin: `0 ${pxToRem(2)}`,
    pointerEvents: active ? "none" : "auto",
    fontWeight: fontWeightRegular,
    fontSize: fontSize.sm,
    width: sizeValue,
    minWidth: sizeValue,
    height: sizeValue,
    minHeight: sizeValue,

    "&:hover, &:focus, &:active": {
      transform: "none",
      boxShadow: (variant !== "gradient" || variant !== "contained") && "none !important",
      opacity: "1 !important",
    },

    "&:hover": {
      backgroundColor: light.main,
      borderColor,
    },
  };
});
