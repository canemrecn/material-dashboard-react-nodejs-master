
// Bu dosya, bir sekme öğesinin stilini özelleştirir.

// root: Sekme öğesinin genel stilini belirler. display, alignItems, flexDirection, flex, textAlign, maxWidth, minWidth, minHeight, fontSize, fontWeight, textTransform, lineHeight, padding, borderRadius, color ve opacity gibi özellikler burada tanımlanır. Bu özellikler aracılığıyla sekme öğesinin genel boyutu, yazı tipi, renk ve diğer stil özellikleri ayarlanabilir.
// labelIcon: Etiket içeren simgenin stilini belirler. Bu özellikler aracılığıyla simge ve etiket arasındaki boşluk (paddingTop) ayarlanabilir.
// Bu özelleştirmeler, sekme öğelerinin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { dark } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
