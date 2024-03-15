
// Bu dosya, giriş alanlarının etiketlerinin (labels) stillerini özelleştirmek için kullanılır. Temel özelleştirmeler aşağıdaki gibidir:

// Kök (Root) Stili: Giriş alanı etiketinin temel özelliklerini belirler. Burada, font boyutu typography'den alınan size.sm, metin rengi colors'tan alınan text.main olarak ayarlanır. Ayrıca, etiketin odaklandığında rengi info.main olarak değiştirilir.

// Size Small Stili: Küçük boyutta giriş alanı etiketinin stillerini belirler. Küçük boyutlu etiketler için font boyutu typography'den alınan size.xs olarak ayarlanır. Ayrıca, MuiInputLabel-shrink sınıfı uygulandığında etiket boyutu ve çizgi yüksekliği değiştirilir.

// Bu özelleştirmeler, giriş alanı etiketlerinin görünümünü ve davranışını kontrol etmek için kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

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
