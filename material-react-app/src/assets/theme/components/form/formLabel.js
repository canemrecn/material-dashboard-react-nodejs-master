
// Bu dosya, form etiketlerinin (form labels) renklerini özelleştirmek için kullanılır. Temel özelleştirmeler aşağıdaki gibidir:

// Kök (Root) Stili: Form etiketlerinin kök bileşeninin stilini belirler. Burada, etiketlerin metin rengi text.main ile belirlenir.
// Bu dosya, form etiketlerinin metin rengini belirlemek için kullanılan stil özelleştirmelerini içerir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

const { text } = colors;

const formLabel = {
  styleOverrides: {
    root: {
      color: text.main,
    },
  },
};

export default formLabel;
