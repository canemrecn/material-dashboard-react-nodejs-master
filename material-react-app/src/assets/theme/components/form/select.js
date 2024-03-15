// Bu dosya, özel bir seçim (select) bileşeninin stillerini belirlemek için kullanılır. Temel özelleştirmeler şu şekildedir:

// Seçim (Select) Stili: Bu stilde, seçim bileşeninin genel özellikleri belirlenir. display, alignItems ve padding gibi CSS özellikleri kullanılarak bileşenin görünümü ve düzeni tanımlanır. Ayrıca, seçili öğelerin arka plan rengi de ayarlanır.

// Seçim Menüsü (Select Menu) Stili: Bu stilde, seçim menüsünün özellikleri belirlenir. background, height, minHeight ve overflow gibi özellikler kullanılarak menünün görünümü ve davranışı ayarlanır.

// İkon Stili: Bu stilde, seçim bileşenindeki simgenin (ikonun) özellikleri belirlenir. Burada display: none ile ikonun gizlenmesi sağlanır.

// Bu özelleştirmeler, seçim bileşeninin görünümünü ve davranışını kontrol etmek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent } = colors;

const select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};

export default select;
