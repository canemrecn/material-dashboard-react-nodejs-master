
// Bu dosya, form kontrol etiketinin (form control label) görünümünü özelleştirmek için kullanılır. Aşağıdaki özelleştirmeler sağlanmıştır:

// Kök (Root) Stili: Form kontrol etiketinin kök bileşeninin stili belirlenir. Etiketin genel özellikleri, görünümünü kontrol etmek için kullanılır. Etiketin blok düzeninde görüntülenmesi, minimum yükseklik belirlenmesi ve alt boşluk gibi özellikler burada ayarlanır.

// Etiket (Label) Stili: Form kontrol etiketinin metin stili belirlenir. Etiketin metin boyutu, kalınlığı, rengi ve diğer metin özellikleri bu kısımda ayarlanır. Ayrıca etiketin devre dışı bırakıldığında görünümü de burada tanımlanır.

// Bu dosya, form kontrol etiketinin genel görünümünü belirlemek için kullanılan stil özelleştirmelerini içerir.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark } = colors;
const { size, fontWeightBold } = typography;

const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: dark.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: dark.main,
      },
    },
  },
};

export default formControlLabel;
