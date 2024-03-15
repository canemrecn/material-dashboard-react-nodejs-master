//Bu dosya, düğme metni için farklı stiller tanımlar.

//buttonText nesnesi, düğme metninin farklı özelliklerini içerir:

//base: Temel düğme metni stilini tanımlar. Bu stil, düğme metninin arka plan rengi, metin rengi, gölge efekti, boyutu ve diğer stil özelliklerini belirler.
//small: Küçük boyutta düğme metni stilini tanımlar.
//large: Büyük boyutta düğme metni stilini tanımlar.
//primary: Birincil renkte düğme metni stilini tanımlar. Bu stil, düğme metninin birincil renkte olmasını sağlar ve üzerine geldiğinde veya odaklandığında farklı bir renge dönüşür.
//secondary: İkincil renkte düğme metni stilini tanımlar. Bu stil, düğme metninin ikincil renkte olmasını sağlar ve üzerine geldiğinde veya odaklandığında farklı bir renge dönüşür.
//Her bir düğme metni stili, belirli boyutlar ve renklerle birlikte gelir. Ayrıca, farklı durumlar için (örneğin: hover, focus, active) ilgili stil değişiklikleri tanımlanmıştır. Bu dosya, düğme metni stilini tutarlı bir şekilde yönetmek ve farklı düğme türlerinde kullanmak için kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { text, info, secondary, transparent } = colors;
const { size } = typography;

const buttonText = {
  base: {
    backgroundColor: transparent.main,
    minHeight: pxToRem(40),
    color: text.main,
    boxShadow: "none",
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: transparent.main,
      boxShadow: "none",
    },

    "&:focus": {
      boxShadow: "none",
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
      boxShadow: "none",
    },

    "&:disabled": {
      boxShadow: "none",
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    color: info.main,

    "&:hover": {
      color: info.main,
    },

    "&:focus:not(:hover)": {
      color: info.focus,
      boxShadow: "none",
    },
  },

  secondary: {
    color: secondary.main,

    "&:hover": {
      color: secondary.main,
    },

    "&:focus:not(:hover)": {
      color: secondary.focus,
      boxShadow: "none",
    },
  },
};

export default buttonText;
