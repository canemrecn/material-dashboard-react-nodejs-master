
// Bu dosya, giriş alanlarının (input fields) stillerini özelleştirmek için kullanılır. Temel özelleştirmeler aşağıdaki gibidir:

// Kök (Root) Stili: Giriş alanlarının temel özelliklerini belirler. Burada, font boyutu typography'den alınan size.sm, metin rengi colors'tan alınan dark.main olarak ayarlanır.

// Hover Stili: Fare giriş alanının üzerine geldiğinde uygulanan stil. Burada, giriş alanının alt kenar çizgisinin rengi inputBorderColor olarak belirlenir.

// Before Stili: Giriş alanının kenar çizgisi öncesi (before) stilini belirler. Burada, kenar çizgisi rengi inputBorderColor olarak ayarlanır.

// After Stili: Giriş alanının kenar çizgisi sonrası (after) stilini belirler. Burada, kenar çizgisi rengi info.main olarak belirlenir.

// Bu özelleştirmeler, giriş alanlarının genel görünümünü ve davranışını kontrol etmek için kullanılır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

const { info, inputBorderColor, dark } = colors;
const { size } = typography;
const { borderWidth } = borders;

const input = {
  styleOverrides: {
    root: {
      fontSize: size.sm,
      color: dark.main,

      "&:hover:not(.Mui-disabled):before": {
        borderBottom: `${borderWidth[1]} solid ${inputBorderColor}`,
      },

      "&:before": {
        borderColor: inputBorderColor,
      },

      "&:after": {
        borderColor: info.main,
      },
    },
  },
};

export default input;
