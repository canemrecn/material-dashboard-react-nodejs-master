
// Bu dosya, giriş etiketlerinin (input label) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelersek:

// colors ve typography modüllerini içeri aktarıyor. Bu modüller, temel renkler ve tipografi stilleri gibi stil bilgilerini içerebilir.

// colors modülünden text ve info renklerini alıyor.

// typography modülünden boyutu (size) alıyor.

// inputLabel adlı bir nesne tanımlıyor. Bu nesne, giriş etiketlerinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, giriş etiketlerinin boyutunu (fontSize), metin rengini (color), satır yüksekliğini (lineHeight) ve diğer bazı stillerini belirler.

// Odaklandığında (&.Mui-focused), metin rengini info.main ile değiştirir.

// Shrink durumunda (&.MuiInputLabel-shrink), satır yüksekliğini ve yazı tipi boyutunu değiştirir. Ayrıca, bağlantılı giriş alanının (input) sınırının altında yer alan efsane (legend) etiketinin yazı tipi boyutunu da düzenler.

// Küçük boyutlu etiketler için (sizeSmall), boyut, satır yüksekliği ve efsane etiketinin yazı tipi boyutunu daha küçük bir değere ayarlar.

// Bu dosya, giriş etiketlerinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, metin rengini, boyutunu ve satır yüksekliğini belirleyerek giriş etiketlerinin görünümünü ayarlayabilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

const { text, info } = colors;
const { size } = typography;

const inputLabel = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: text.main,
      lineHeight: 0.9,

      "&.Mui-focused": {
        color: info.main,
      },

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.5,
        fontSize: size.md,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.85em",
        },
      },
    },

    sizeSmall: {
      fontSize: size.xs,
      lineHeight: 1.625,

      "&.MuiInputLabel-shrink": {
        lineHeight: 1.6,
        fontSize: size.sm,

        "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
          fontSize: "0.72em",
        },
      },
    },
  },
};

export default inputLabel;
