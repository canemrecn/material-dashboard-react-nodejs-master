// Bu dosya, bir adım (step) bileşeninin stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// pxToRem gibi bir stil işlevini içeren functions altında bulunan dosyaları içeri aktarıyor.

// step adlı bir nesne tanımlıyor. Bu nesne, adım bileşeninin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, adım bileşeninin iç içe girme (padding) stilini belirleyen bir styleOverrides nesnesi bulunmaktadır. Bu özellikler, adım bileşeninin iç içe girme miktarını belirtir.

// Bu dosya, adım bileşeninin stilini özelleştirmek için kullanılabilir. Örneğin, adımlar arasındaki boşluğu veya iç içe girme miktarını ayarlamak isteyebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const step = {
  styleOverrides: {
    root: {
      padding: `0 ${pxToRem(6)}`,
    },
  },
};

export default step;
