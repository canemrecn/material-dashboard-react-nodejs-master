// Bu dosya, çerçeveli giriş alanlarının (outlined input) stiline ilişkin bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors, borders ve typography modüllerini içeri aktarıyor. Bu modüller, temel renkler, sınırlar ve tipografi stilleri gibi stil bilgilerini içerebilir.

// pxToRem ve rgba gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden çeşitli renkleri (inputBorderColor, info, grey, transparent, white) alıyor.

// borders modülünden kenar yarıçapını (borderRadius) alıyor.

// typography modülünden boyutu (size) alıyor.

// inputOutlined adlı bir nesne tanımlıyor. Bu nesne, çerçeveli giriş alanlarının kök, dış kenarlık ve içeriğini içeren bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, giriş alanlarının arka plan rengini (backgroundColor), yazı tipi boyutunu (fontSize), köşe yarıçapını (borderRadius) ve diğer bazı stillerini belirler.

// Fare üzerine gelindiğinde dış kenarlığın rengini ayarlar (&:hover .MuiOutlinedInput-notchedOutline).

// Odaklandığında dış kenarlığın rengini ayarlar (&.Mui-focused .MuiOutlinedInput-notchedOutline).

// Dış kenarlığın rengini belirler (notchedOutline).

// Giriş alanının metin rengini ve yer tutucu (placeholder) metin rengini belirler (input).

// Küçük boyutlu giriş alanları için boyutu ve dolguyu ayarlar (inputSizeSmall).

// Çok satırlı giriş alanları için metin rengini ve dolguyu ayarlar (multiline).

// Bu dosya, çerçeveli giriş alanlarının stiline özgü bazı özelleştirmeler sağlar. Örneğin, arka plan rengini, metin rengini ve dış kenarlığın rengini belirleyerek giriş alanlarının görünümünü ayarlayabilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { inputBorderColor, info, grey, transparent, white } = colors;
const { borderRadius } = borders;
const { size } = typography;

const inputOutlined = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
      fontSize: size.sm,
      borderRadius: borderRadius.md,

      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: rgba(inputBorderColor, 0.6),
      },

      "&.Mui-focused": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: info.main,
        },
      },
    },

    notchedOutline: {
      borderColor: rgba(inputBorderColor, 0.6),
    },

    input: {
      color: white.main,
      padding: pxToRem(12),
      backgroundColor: transparent.main,

      "&::-webkit-input-placeholder": {
        color: grey[100],
      },
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
