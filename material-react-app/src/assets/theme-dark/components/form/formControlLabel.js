// Bu dosya, bir form kontrol etiketinin stiline ilişkin bazı düzenlemeler içerir. İçeriği ve kullanılan modülleri göz önünde bulundurarak, dosyanın yaptığı işi şu şekilde özetleyebilirim:

// colors ve typography modüllerini içeri aktarır. Bu modüller, temel renkler ve tipografi stilleri gibi stil bilgilerini içerebilir.

// Birkaç stil işlevi içeren pxToRem işlevini içeri aktarır. Bu işlev, piksel birimlerini rem birimlerine dönüştürmeye yardımcı olabilir.

// colors modülünden beyaz rengini alır ve typography modülünden boyut ve kalınlık gibi yazı tipi stillerini alır.

// formControlLabel adlı bir nesne tanımlar. Bu nesne, form kontrol etiketinin kök ve etiket öğeleri için bazı stil düzenlemeleri içerir. Bu düzenlemeler, etiketin boyutu, kalınlığı, rengi ve diğer stillerini belirleyebilir.

// Genel olarak, bu dosya, bir form kontrol etiketinin stilini özelleştirmek için kullanılabilir. Bu tür dosyalar, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır. Bu özel dosyanın, belirli bir React uygulamasında nasıl kullanıldığına dair daha fazla bağlam sağlanmadığı için, dosyanın tam olarak ne yaptığına dair kesin bir bilgi vermek zor olabilir. Ancak, form kontrol etiketlerini özelleştirmek için kullanıldığı açıktır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { white } = colors;
const { size, fontWeightBold } = typography;

const formControlLabel = {
  styleOverrides: {
    root: {
      display: "block",
      minHeight: pxToRem(24),
      marginBottom: pxToRem(2),
    },

    label: {
      display: "inline-block",
      fontSize: size.sm,
      fontWeight: fontWeightBold,
      color: white.main,
      lineHeight: 1,
      transform: `translateY(${pxToRem(1)})`,
      marginLeft: pxToRem(4),

      "&.Mui-disabled": {
        color: white.main,
      },
    },
  },
};

export default formControlLabel;
