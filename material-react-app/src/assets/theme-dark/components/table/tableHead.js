// Bu dosya, tablo başlığının (table head) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// borders modülünü içeri aktarıyor. Bu modül, sınırlar gibi stil bilgilerini içerebilir.

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// borders modülünden köşe yarıçapını (borderRadius) alıyor.

// tableHead adlı bir nesne tanımlıyor. Bu nesne, tablo başlığının kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, tablo başlığının stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, tablo başlığının iç içe girme miktarını ve köşe yarıçapını belirtir.

// Bu dosya, tablo başlığının stiline özgü bazı özelleştirmeler sağlar. Örneğin, başlık iç içe girme miktarını veya köşe yarıçapını ayarlayarak tablo başlığının görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { borderRadius } = borders;

const tableHead = {
  styleOverrides: {
    root: {
      display: "block",
      padding: `${pxToRem(16)} ${pxToRem(16)} 0  ${pxToRem(16)}`,
      borderRadius: `${borderRadius.xl} ${borderRadius.xl} 0 0`,
    },
  },
};

export default tableHead;
