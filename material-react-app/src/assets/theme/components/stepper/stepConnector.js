// Bu dosya, bir adım bağlayıcısının (step connector) stiline özelleştirmeler ekler. root özelliği, adım bağlayıcısının genel stilini tanımlar. Bu stil, bağlayıcının rengini ve geçiş efektini belirler. alternativeLabel ve line özellikleri, alternatif etiket ve çizgi stillerini ayarlar.

// root: Adım bağlayıcısının genel stilini tanımlar. Özellikle, color özelliği geçiş efektini belirler. Mui-active ve Mui-completed sınıfları, bağlayıcının etkin ve tamamlanmış durumlarını tanımlar.
// alternativeLabel: Alternatif etiket stilini tanımlar. Bu stil, etiketin konumunu belirler.
// line: Çizgi stilini tanımlar. borderWidth ve borderColor özellikleri ile çizgi kalınlığı ve rengi ayarlanır. opacity özelliği ise çizginin opaklığını belirler.
// Bu özelleştirmeler, adım bağlayıcısının görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.
// Material Dashboard 2 React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { white } = colors;
const { borderWidth } = borders;

const stepConnector = {
  styleOverrides: {
    root: {
      color: "#9fc9ff",
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: white.main,
      },

      "&.Mui-completed": {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
      opacity: 0.5,
    },
  },
};

export default stepConnector;
