// Bu dosya, adım etiketlerinin stiline özelleştirmeler ekler. label özelliği, adım etiketlerinin genel stilini tanımlar. Bu stil, etiketin yazı tipi boyutu, yazı rengi ve diğer özellikleri içerir. Ayrıca, etiketin etkin veya tamamlanmış durumlarında nasıl görüneceğini belirleyen özellikler de bulunur.

// label: Adım etiketlerinin genel stilini tanımlar. Özellikle, marginTop, fontWeight, fontSize ve color gibi özellikler bulunur. Mui-active ve Mui-completed sınıfları, etiketin etkin ve tamamlanmış durumlarını tanımlar.
// Bu özelleştirmeler, adım etiketlerinin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import rgba from "assets/theme/functions/rgba";

const { size, fontWeightRegular } = typography;
const { white } = colors;

const stepLabel = {
  styleOverrides: {
    label: {
      marginTop: `${pxToRem(8)} !important`,
      fontWeight: fontWeightRegular,
      fontSize: size.xs,
      color: "#9fc9ff",
      textTransform: "uppercase",

      "&.Mui-active": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },

      "&.Mui-completed": {
        fontWeight: `${fontWeightRegular} !important`,
        color: `${rgba(white.main, 0.8)} !important`,
      },
    },
  },
};

export default stepLabel;
