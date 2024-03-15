// Bu dosya, bir radyo düğmesinin (radio button) stiline ilişkin bazı düzenlemeler içerir. İçeriği incelediğimizde:

// borders ve colors modüllerini içeri aktarıyor. Bu modüller, sınırlar ve renkler gibi temel stil özelliklerini içerebilir.

// pxToRem ve linearGradient gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// borders modülünden sınır genişlikleri ve sınır renklerini alıyor.

// colors modülünden saydam ve bilgi renklerini alıyor.

// radio adlı bir nesne tanımlıyor. Bu nesne, radyo düğmelerinin kök, birincil renk ve ikincil renk stillerini içerir.

// Kök öğesinin altında, radyo düğmelerinin stilini belirleyen çeşitli özellikler belirtilmiştir. Bu özellikler, radyo düğmesinin simgesi (SvgIcon), arka plan rengi, sınır rengi ve geçiş efektleri gibi özelliklerdir.

// Radyo düğmelerinin birincil (colorPrimary) ve ikincil (colorSecondary) renk stilleri belirtilmiştir. Her iki renk stili de radyo düğmesinin seçili olduğunda ve seçilmediğinde nasıl görüneceğini belirler.

// Bu dosya, radyo düğmelerinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, radyo düğmelerinin simgesinin boyutunu, renklerini ve geçiş efektlerini belirleyerek radyo düğmelerinin görünümünü ayarlayabilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import linearGradient from "assets/theme-dark/functions/linearGradient";

const { borderWidth, borderColor } = borders;
const { transparent, info } = colors;

const radio = {
  styleOverrides: {
    root: {
      "& .MuiSvgIcon-root": {
        width: pxToRem(20),
        height: pxToRem(20),
        color: transparent.main,
        border: `${borderWidth[1]} solid ${borderColor}`,
        borderRadius: "50%",
      },

      "&:after": {
        transition: "opacity 250ms ease-in-out",
        content: `""`,
        position: "absolute",
        width: pxToRem(14),
        height: pxToRem(14),
        borderRadius: "50%",
        backgroundImage: linearGradient(info.main, info.main),
        opacity: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
      },

      "&:hover": {
        backgroundColor: transparent.main,
      },

      "&.Mui-focusVisible": {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      color: borderColor,

      "&.Mui-checked": {
        color: info.main,

        "& .MuiSvgIcon-root": {
          borderColor: info.main,
        },

        "&:after": {
          opacity: 1,
        },
      },
    },

    colorSecondary: {
      color: borderColor,

      "&.Mui-checked": {
        color: info.main,

        "& .MuiSvgIcon-root": {
          borderColor: info.main,
        },

        "&:after": {
          opacity: 1,
        },
      },
    },
  },
};

export default radio;
