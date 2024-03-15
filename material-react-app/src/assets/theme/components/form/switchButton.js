
// Bu dosya, anahtar anahtar (switch) bileşeninin stillerini belirlemek için kullanılır. Ana özelleştirmeler şu şekildedir:

// Anahtar Anahtar (Switch) Temel Stili: Bu stilde, anahtar anahtar bileşeninin genel özellikleri belirlenir. color, &:hover, &.Mui-checked gibi durumlara göre arka plan rengi ve diğer stiller ayarlanır.

// Başlık (Thumb) Stili: Bu stilde, anahtar anahtar bileşeninin başlık (thumb) kısmının özellikleri belirlenir. backgroundColor, boxShadow, border gibi özellikler kullanılarak başlık kısmının görünümü tanımlanır.

// İz (Track) Stili: Bu stilde, anahtar anahtar bileşeninin iz (track) kısmının özellikleri belirlenir. width, height, backgroundColor, border gibi özellikler kullanılarak iz kısmının görünümü ve boyutu ayarlanır.

// Kontrol Edilmiş Durum (Checked) Stili: Bu stilde, anahtar anahtar bileşeninin kontrol edilmiş durumunda uygulanacak özellikler belirlenir.

// Bu özelleştirmeler, anahtar anahtar bileşeninin görünümünü ve davranışını kontrol etmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
// import rgba from "assets/theme/functions/rgba";
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

const { white, gradients, grey, transparent } = colors;
const { borderWidth } = borders;
const { md } = boxShadows;

const switchButton = {
  defaultProps: {
    disableRipple: false,
  },

  styleOverrides: {
    switchBase: {
      color: gradients.dark.main,

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-checked": {
        color: gradients.dark.main,

        "&:hover": {
          backgroundColor: transparent.main,
        },

        "& .MuiSwitch-thumb": {
          borderColor: `${gradients.dark.main} !important`,
        },

        "& + .MuiSwitch-track": {
          backgroundColor: `${gradients.dark.main} !important`,
          borderColor: `${gradients.dark.main} !important`,
          opacity: 1,
        },
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: "0.3 !important",
      },

      "&.Mui-focusVisible .MuiSwitch-thumb": {
        backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      },
    },

    thumb: {
      backgroundColor: white.main,
      boxShadow: md,
      border: `${borderWidth[1]} solid ${grey[400]}`,
    },

    track: {
      width: pxToRem(32),
      height: pxToRem(15),
      backgroundColor: grey[400],
      border: `${borderWidth[1]} solid ${grey[400]}`,
      opacity: 1,
    },

    checked: {},
  },
};

export default switchButton;
