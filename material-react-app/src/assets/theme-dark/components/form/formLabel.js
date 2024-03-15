// Bu dosya, form etiketlerinin stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelersek:

// colors modülünü içeri aktarıyor ve bu modülden text rengini alıyor. Muhtemelen text rengi, form etiketlerinin varsayılan metin rengini temsil ediyor.

// formLabel adlı bir nesne tanımlıyor. Bu nesne, form etiketlerinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin color özelliğini text.main ile ayarlıyor. Bu, form etiketlerinin metin rengini belirlemek için kullanılır. text.main, önceden tanımlanan bir renk değeri olmalıdır ve muhtemelen temanın ana metin rengini temsil eder.

// Bu dosya, form etiketlerinin stilini belirli bir tema veya tasarım sistemi içinde tutarlı hale getirmek için kullanılabilir. Örneğin, form etiketlerinin metin rengini tek bir yerden ayarlamak ve bu ayarı daha sonra tüm uygulama genelinde kullanmak gibi. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";

const { text } = colors;

const formLabel = {
  styleOverrides: {
    root: {
      color: text.main,
    },
  },
};

export default formLabel;
