// Bu dosya, metin alanı (textField) bileşeninin stilini özelleştirmek için kullanılır. Özellikle backgroundColor özelliği üzerinde bir özelleştirme yapılmıştır. Metin alanı bileşeninin kök (root) elementi için arka plan rengi transparent olarak ayarlanmıştır. Bu şekilde, metin alanı arka planı saydam olacaktır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

const textField = {
  styleOverrides: {
    root: {
      backgroundColor: transparent.main,
    },
  },
};

export default textField;
