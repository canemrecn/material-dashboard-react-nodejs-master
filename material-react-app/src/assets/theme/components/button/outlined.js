//Bu dosya, bir dizi dışbükey (outline) düğme bileşeni stiline sahip bir nesne olan outlined'ı içerir.

//outlined nesnesi, varsayılan dışbükey düğme özelliklerini (base) ve farklı boyutlarda (small, large) ve renklerde (primary, secondary) dışbükey düğme stillerini tanımlar.

//Her bir dışbükey düğme stili, ilgili görünümü belirleyen CSS özelliklerini içerir. Örneğin, primary stilindeki bir dışbükey düğme, belirli bir renkte bir iç dolgu rengine ve bir kenarlık rengine sahip olabilir ve fare üzerine gelindiğinde görünümü değiştirebilir.

//Bu dosya, bir tema yönetim sistemi içinde kullanılmak üzere tasarlanmıştır ve uygulamadaki dışbükey düğme bileşenlerinin tutarlı bir şekilde görünmesini sağlar.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent, light, info, secondary } = colors;
const { size } = typography;

const outlined = {
  base: {
    minHeight: pxToRem(40),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
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
    backgroundColor: transparent.main,
    borderColor: info.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },
};

export default outlined;
