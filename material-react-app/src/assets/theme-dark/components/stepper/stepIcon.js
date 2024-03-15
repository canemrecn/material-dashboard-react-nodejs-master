// Bu dosya, adım simgesinin (step icon) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors modülünü içeri aktarıyor. Bu modül, temel renkler gibi stil bilgilerini içerebilir.

// pxToRem ve boxShadow gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden beyaz rengini (white) alıyor.

// stepIcon adlı bir nesne tanımlıyor. Bu nesne, adım simgesinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, adım simgesinin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, adım simgesinin farklı durumları için çeşitli stilleri belirtir.

// &.Mui-active ve &.Mui-completed gibi seçicilerle adım simgesinin aktif ve tamamlanmış durumları için arka plan rengini, doldurma rengini, çizgi rengini, kenarlık rengini ve kutu gölgesini beyaza (white.main) ayarlar.

// boxShadow fonksiyonunu kullanarak, adım simgesinin aktif ve tamamlanmış durumları için bir kutu gölgesi ekler.

// Bu dosya, adım simgesinin stiline özgü bazı özelleştirmeler sağlar. Örneğin, adım simgesinin boyutunu, arka plan rengini veya doldurma rengini ayarlayarak adım simgesinin görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import boxShadow from "assets/theme-dark/functions/boxShadow";

const { white } = colors;

const stepIcon = {
  styleOverrides: {
    root: {
      background: "#9fc9ff",
      fill: "#9fc9ff",
      stroke: "#9fc9ff",
      strokeWidth: pxToRem(10),
      width: pxToRem(13),
      height: pxToRem(13),
      borderRadius: "50%",
      zIndex: 99,
      transition: "all 200ms linear",

      "&.Mui-active": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },

      "&.Mui-completed": {
        background: white.main,
        fill: white.main,
        stroke: white.main,
        borderColor: white.main,
        boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};

export default stepIcon;
