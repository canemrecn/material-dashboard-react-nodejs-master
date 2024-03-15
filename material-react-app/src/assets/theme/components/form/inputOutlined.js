// Bu dosya, çerçeveli (outlined) giriş alanlarının stillerini özelleştirmek için kullanılır. Temel özelleştirmeler şu şekildedir:

// Kök (Root) Stili: Giriş alanının temel özelliklerini belirler. Burada, arka plan rengi transparent.main, font boyutu typography'den alınan size.sm olarak ayarlanır. Ayrıca, etrafındaki çerçevenin kenar rengi, etiket odaklandığında info.main olarak değiştirilir.

// Çerçeve (Notched Outline) Stili: Giriş alanının çerçevesinin özelliklerini belirler. Kenar rengi colors'tan alınan inputBorderColor olarak ayarlanır.

// Giriş (Input) Stili: Giriş alanının içerik özelliklerini belirler. Metin rengi colors'tan alınan grey[700], arka plan rengi transparent.main olarak ayarlanır.

// Küçük Boyutlu Giriş (Input Size Small) Stili: Küçük boyutlu giriş alanlarının stillerini belirler. Font boyutu typography'den alınan size.xs olarak ayarlanır.

// Çok Satırlı (Multiline) Giriş Stili: Çok satırlı giriş alanlarının özelliklerini belirler. Metin rengi colors'tan alınan grey[700], padding değeri sıfıra ayarlanır.

// Bu özelleştirmeler, çerçeveli giriş alanlarının görünümünü ve davranışını kontrol etmek için kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { inputBorderColor, info, grey, transparent } = colors;
const { borderRadius } = borders;
const { size } = typography;

const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: inputBorderColor,
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: inputBorderColor,
    },

    input: {
      color: grey[700],
      padding: pxToRem(12),
      backgroundColor: transparent.main,
    },

    inputSizeSmall: {
      fontSize: size.xs,
      padding: pxToRem(10),
    },

    multiline: {
      color: grey[700],
      padding: 0,
    },
  },
};

export default inputOutlined;
