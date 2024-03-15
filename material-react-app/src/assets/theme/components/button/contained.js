//Bu dosya, içerdiği temel renk ve tipografi tanımlarıyla birlikte, düğme stillerini içeren bir nesne olan contained'ı içerir.

//Bu nesne, içerdiği anahtarlar altında farklı düğme stillerini (örneğin, varsayılan, küçük, büyük, birincil, ikincil) belirtir. Her anahtar altında, ilgili düğme stili için arka plan rengi, metin rengi, yükseklik, dolgu ve font boyutu gibi özellikler bulunur. Ayrıca, fare etkileşimlerine (örneğin, hover ve focus) yanıt olarak arka plan rengindeki değişiklikler de tanımlanmıştır.

//Bu dosya, genellikle bir tema yönetim sistemi içinde kullanılır ve uygulamanın düğme stillerini tutarlı bir şekilde tanımlamak için kullanılır. Bu sayede, farklı bileşenlerdeki düğmelerin tutarlı görünmesi sağlanır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { white, text, info, secondary } = colors;
const { size } = typography;

const contained = {
  base: {
    backgroundColor: white.main,
    minHeight: pxToRem(40),
    color: text.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      backgroundColor: white.main,
    },

    "&:active, &:active:focus, &:active:hover": {
      opacity: 0.85,
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
    backgroundColor: info.main,

    "&:hover": {
      backgroundColor: info.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: info.focus,
    },
  },

  secondary: {
    backgroundColor: secondary.main,

    "&:hover": {
      backgroundColor: secondary.main,
    },

    "&:focus:not(:hover)": {
      backgroundColor: secondary.focus,
    },
  },
};

export default contained;
