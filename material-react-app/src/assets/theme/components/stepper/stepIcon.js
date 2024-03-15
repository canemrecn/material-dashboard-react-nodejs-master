
// Bu dosya, adım simgelerinin stiline özelleştirmeler ekler. root özelliği, adım simgesinin genel stilini tanımlar. Bu stil, simgenin arka plan rengi, kenarlık rengi, dolgu rengi ve gölgelendirme gibi özellikleri içerir. Ayrıca, simgenin etkin veya tamamlanmış durumlarında nasıl görüneceğini belirleyen özellikler de bulunur.

// root: Adım simgesinin genel stilini tanımlar. Özellikle, background, fill ve stroke özellikleri arka plan rengi, dolgu rengi ve kenarlık rengini belirler. Mui-active ve Mui-completed sınıfları, simgenin etkin ve tamamlanmış durumlarını tanımlar.
// Bu özelleştirmeler, adım simgelerinin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

const { white } = colors;

const stepIcon = {
  styleOverrides: {
    root: {
      background: "#9fc9ff",
      fill: "#9fc9ff",
      stroke: "#9fc9ff",
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      "&.Mui-completed": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};

export default stepIcon;
