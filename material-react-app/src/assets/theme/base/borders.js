//Bu dosya, Material Dashboard 2 React temasının temel çerçeve stillerini ve yardımcı işlevlerini içeriyor. İşlevselliği ve içeriği aşağıdaki gibidir:

//colors adlı tema renklerini içe aktarıyor. Tema renkleri, bileşenlerin arka plan, metin, kenarlık gibi özelliklerinin renklerini tanımlar.
//pxToRem adlı bir yardımcı işlevi içe aktarıyor. Bu işlev, piksel değerlerini rem birimine dönüştürmeye yarar.
//Daha sonra, borders adlı bir nesne oluşturuluyor. Bu nesne, çerçeve stillerini ve kenarlık değerlerini içerir. İçeriği şu şekildedir:

//borderColor: Kenarlık rengi olarak gri[300] kullanılıyor.
//borderWidth: Kenarlık kalınlıkları piksel değerlerini rem birimine dönüştürerek belirtilmiş. Değerler 0'dan 5'e kadar olup, her bir kalınlık seviyesine bir piksel değeri atanmış.
//borderRadius: Kenar yarıçapları belirtilmiş. Bu değerler, çeşitli boyutlarda yuvarlak kenarlıklar oluşturmak için kullanılır. Değerler xs'ten xxl'ye kadar farklı boyutları temsil eder.
//Bu dosya, temel çerçeve stillerini ve kenarlık değerlerini içerir ve bunları diğer bileşenlerde kullanmak için dışa aktarır. Bu şekilde, bileşenlerin tutarlı bir görünüm ve davranış sergilemesi sağlanır.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme/functions/pxToRem";

const { grey } = colors;

const borders = {
  borderColor: grey[300],

  borderWidth: {
    0: 0,
    1: pxToRem(1),
    2: pxToRem(2),
    3: pxToRem(3),
    4: pxToRem(4),
    5: pxToRem(5),
  },

  borderRadius: {
    xs: pxToRem(1.6),
    sm: pxToRem(2),
    md: pxToRem(6),
    lg: pxToRem(8),
    xl: pxToRem(12),
    xxl: pxToRem(16),
    section: pxToRem(160),
  },
};

export default borders;
