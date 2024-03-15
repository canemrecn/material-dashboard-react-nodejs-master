// Bu dosya, bir adım (stepper) bileşeninin stiline ilişkin bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors, borders ve boxShadows modüllerini içeri aktarıyor. Bu modüller, temel renkler, sınırlar ve kutu gölgeleri gibi stil bilgilerini içerebilir.

// pxToRem ve linearGradient gibi stil işlevlerini içeren functions altında bulunan dosyaları içeri aktarıyor.

// colors modülünden saydam renk ve gradyanları (transparent ve gradients) alıyor.

// borders modülünden kenar yarıçapını (borderRadius) alıyor.

// boxShadows modülünden renkli kutu gölgelerini (colored) alıyor.

// stepper adlı bir nesne tanımlıyor. Bu nesne, adım bileşeninin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, adım bileşeninin stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, adım bileşeninin arka plan rengi, kenar yarıçapı ve kutu gölgesi gibi stil özelliklerini belirtir.

// .MuiPaper-root sınıfı altında, kağıt kök öğesi olması durumunda arka plan rengini saydam olarak ayarlar.

// Bu dosya, adım bileşeninin stiline özgü bazı özelleştirmeler sağlar. Örneğin, adım bileşeninin arka plan rengini gradyan olarak veya belirli bir kutu gölgesi ekleyerek adımların görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import linearGradient from "assets/theme-dark/functions/linearGradient";

const { transparent, gradients } = colors;
const { borderRadius } = borders;
const { colored } = boxShadows;

const stepper = {
  styleOverrides: {
    root: {
      background: linearGradient(gradients.info.main, gradients.info.state),
      padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
      borderRadius: borderRadius.lg,
      boxShadow: colored.info,

      "&.MuiPaper-root": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default stepper;
