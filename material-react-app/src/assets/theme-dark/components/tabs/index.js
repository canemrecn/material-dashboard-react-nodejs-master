// Bu dosya, sekmelerin (tabs) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors, borders ve boxShadows modüllerini içeri aktarıyor. Bu modüller, temel renkler, sınırlar ve kutu gölgeleri gibi stil bilgilerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden arka plan rengini (background), borders modülünden köşe yarıçapını (borderRadius) ve boxShadows modülünden orta büyüklükte bir kutu gölgesini (md) alıyor.

// tabs adlı bir nesne tanımlıyor. Bu nesne, sekmelerin kök öğesi ve alt öğeleri için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, sekmelerin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, sekmelerin arka plan rengini, köşe yarıçapını, dolgusunu ve diğer bazı özellikleri belirtir.

// flexContainer, fixed, vertical ve indicator gibi özel stiller sekmelerin belirli durumları için ayrı ayrı tanımlanmıştır.

// Bu dosya, sekmelerin stiline özgü bazı özelleştirmeler sağlar. Örneğin, sekmelerin arka plan rengini, köşe yarıçapını veya sekmelerin dikey konumlandırılmasını ayarlayarak sekmelerin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { background } = colors;
const { borderRadius } = borders;
const { md } = boxShadows;

const tabs = {
  styleOverrides: {
    root: {
      position: "relative",
      backgroundColor: background.card,
      borderRadius: borderRadius.xl,
      minHeight: "unset",
      padding: pxToRem(4),
    },

    flexContainer: {
      height: "100%",
      position: "relative",
      zIndex: 10,
    },

    fixed: {
      overflow: "unset !important",
      overflowX: "unset !important",
    },

    vertical: {
      "& .MuiTabs-indicator": {
        width: "100%",
      },
    },

    indicator: {
      height: "100%",
      borderRadius: borderRadius.lg,
      backgroundColor: background.default,
      boxShadow: md,
      transition: "all 500ms ease",
    },
  },
};

export default tabs;
