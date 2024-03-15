
// Bu dosya, bir seçim alanının (select) stiline ilişkin bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors modülünü içeri aktarıyor. Bu modül, temel renkler gibi stil bilgilerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden saydam rengini (transparent) alıyor.

// select adlı bir nesne tanımlıyor. Bu nesne, seçim alanının kök, menü ve simge gibi bileşenlerinin stil düzenlemelerini içerir.

// Kök öğesi altında, seçim alanının display, alignItems ve padding gibi stillerini belirliyor.

// & .Mui-selected seçicisiyle, seçilen öğelerin arka plan rengini saydam olarak ayarlıyor.

// selectMenu altında, menü öğesinin arka planını, yüksekliğini ve taşma davranışını düzenliyor.

// icon altında, seçim alanının simgesini gizliyor.

// Bu dosya, seçim alanlarının stiline özgü bazı özelleştirmeler sağlar. Örneğin, seçim alanının görünümünü düzenlemek için arka plan rengini ve simgeyi gizleyebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.
// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

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
