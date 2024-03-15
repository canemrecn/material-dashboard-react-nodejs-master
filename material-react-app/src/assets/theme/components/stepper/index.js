// Bu dosya, bir adım göstergesi (stepper) bileşeninin stilini özelleştirmek için kullanılır. root stil özelliği, adım göstergesinin genel görünümünü düzenler. Özelleştirilebilecek özellikler arasında arka plan, dolgu (padding), köşe yuvarlaklığı ve gölge efekti bulunur. Bu özelleştirmeler, adım göstergesinin tasarımını belirlemek için kullanılabilir ve genellikle uygulamanın veya web sitesinin genel tema ve stilini yansıtmak için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import linearGradient from "assets/theme/functions/linearGradient";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
