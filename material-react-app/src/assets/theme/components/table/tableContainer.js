
// Bu dosya, bir tablo konteynerinin stilini özelleştirir. root özelliği, tablo konteynerinin genel stilini tanımlar.

// root: Tablo konteynerinin genel stilini belirler. Bu stil, arka plan rengi (backgroundColor), gölge efekti (boxShadow) ve kenar yuvarlaklığı (borderRadius) gibi özellikleri içerir.
// Bu özelleştirmeler, tablo konteynerinin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { white } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: white.main,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
