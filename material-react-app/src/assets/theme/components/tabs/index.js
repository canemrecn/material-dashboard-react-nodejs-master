// Bu dosya, bir sekme bileşeninin stilini özelleştirir.

// root: Sekmelerin genel stilini belirler. position, backgroundColor, borderRadius, minHeight ve padding gibi özellikler burada tanımlanır.
// flexContainer: Sekmelerin içeriğinin yerleştirildiği kutunun stilini belirler. height ve zIndex gibi özellikler burada belirlenir.
// fixed: Sabit sekme stili için geçerlidir. Burada overflow ve overflowX özellikleri belirlenmiştir.
// vertical: Dikey sekme düzeni için geçerlidir. Burada sekmenin göstergesi (indicator) genişliği ayarlanır.
// indicator: Sekme göstergesinin stilini belirler. Yükseklik (height), kenar yuvarlaklığı (borderRadius), arka plan rengi (backgroundColor) ve gölge efekti (boxShadow) gibi özellikler burada tanımlanır.
// Bu özelleştirmeler, sekme bileşeninin görünümünü belirleyerek kullanıcı arayüzünün estetiğini geliştirmek için kullanılabilir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: grey[100],
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: white.main,
      boxShadow: tabsBoxShadow.indicator,
      transition: "all 500ms ease",
    },
  },
};

export default tabs;
