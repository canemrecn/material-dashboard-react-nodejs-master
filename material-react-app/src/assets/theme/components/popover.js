// Bu dosya, popover bileşeninin görünümünü özelleştiren stilleri içerir. Popover, bir içeriğin belirli bir alanın üzerine gelindiğinde veya tıkladığında açılan bir pencere gibi davranır.

// popover objesi içinde styleOverrides özelliği belirtilir ve popover bileşeninin kağıt (paper) kısmı için özel stiller tanımlanır:

// backgroundColor: Popover'ın arka plan rengi belirlenir. Burada transparent.main değeri atanarak arka plan rengi şeffaf olarak ayarlanır.
// boxShadow: Popover'ın gölgesi belirlenir. Burada lg değeri atanarak büyük boyutta bir gölge tanımlanır.
// padding: Popover içeriğinin kenar boşlukları belirlenir. Burada pxToRem(8) değeri atanarak kenar boşlukları 8 piksel olarak ayarlanır.
// borderRadius: Popover'ın köşe yuvarlanma yarıçapı belirlenir. Burada borderRadius.md değeri atanarak orta boyutta bir köşe yuvarlanma yarıçapı tanımlanır.
// Bu stil tanımları, popover bileşeninin görünümünü istenilen şekilde özelleştirmek için kullanılır.
// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";
import boxShadows from "assets/theme/base/boxShadows";
import borders from "assets/theme/base/borders";

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

const popover = {
  styleOverrides: {
    paper: {
      backgroundColor: transparent.main,
      boxShadow: lg,
      padding: pxToRem(8),
      borderRadius: borderRadius.md,
    },
  },
};

export default popover;
