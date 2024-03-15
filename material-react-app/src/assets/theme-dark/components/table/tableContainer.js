// Bu dosya, tablo konteynırının (table container) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors, boxShadows ve borders modüllerini içeri aktarıyor. Bu modüller, temel renkler, kutu gölgeleri ve sınırlar gibi stil bilgilerini içerebilir.

// colors modülünden arka plan rengini (background) alıyor.

// boxShadows modülünden orta büyüklükte bir kutu gölgesini (md) alıyor.

// borders modülünden köşe yarıçapını (borderRadius) alıyor.

// tableContainer adlı bir nesne tanımlıyor. Bu nesne, tablo konteynırının kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, tablo konteynırının stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, tablo konteynırının arka plan rengini, kutu gölgesini ve köşe yarıçapını belirtir.

// Bu dosya, tablo konteynırının stiline özgü bazı özelleştirmeler sağlar. Örneğin, konteynırın arka plan rengini, gölgesini veya köşe yarıçapını ayarlayarak tablo konteynırının görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import boxShadows from "assets/theme-dark/base/boxShadows";
import borders from "assets/theme-dark/base/borders";

const { background } = colors;
const { md } = boxShadows;
const { borderRadius } = borders;

const tableContainer = {
  styleOverrides: {
    root: {
      backgroundColor: background.card,
      boxShadow: md,
      borderRadius: borderRadius.xl,
    },
  },
};

export default tableContainer;
