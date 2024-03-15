// Bu dosya, Material Dashboard 2 React temasında diyalog bileşenleri için stil geçersiz kılmalarını tanımlıyor. dialog nesnesi, diyalogların görünümünü özelleştiren styleOverrides özelliğini içerir. Bu özelleştirmeler, diyalogların kağıt (paper) ve tam ekran kağıt (paperFullScreen) varyantları için belirlenmiş stil özellikleridir.

// Stil Özellikleri:
// paper: Diyalogların standart kağıt bileşeni için stil ayarlarıdır. Bu ayarlarda,

// borderRadius: borders nesnesinden alınan borderRadius.lg değeri ile diyalogun köşe yuvarlaklıklarını belirler. Bu, diyalogun görsel olarak daha yumuşak ve modern bir görünüme sahip olmasını sağlar.
// boxShadow: boxShadows nesnesinden alınan xxl değeri ile diyalogun gölge efektini belirler. Bu, diyalogun arka plandan öne çıkmasını ve derinlik hissi vermesini sağlar.
// paperFullScreen: Tam ekran modunda gösterilen diyaloglar için stil ayarlarıdır. Bu ayarlarda,

// borderRadius: Köşe yuvarlaklığını 0 olarak ayarlayarak, tam ekran modundayken diyalogun ekranın kenarlarına tam sığmasını ve köşelerin yuvarlatılmamasını sağlar. Bu, tam ekran diyalogların ekranı tamamen kaplamasını ve kenar boşluklarının olmamasını sağlar.
// Kullanım Amacı:
// Bu dosya, diyalogların görsel tasarımını Material Dashboard 2 React teması içinde özelleştirmek için kullanılır. Özelleştirilen stil ayarları, diyalogların uygulama içinde tutarlı bir şekilde kullanılmasını ve temanın genel estetiğiyle uyumlu olmasını sağlar. Diyalogların köşe yuvarlaklıkları ve gölge efektleri gibi görsel özellikleri, kullanıcı deneyimini doğrudan etkileyebilir. Bu nedenle, dosyadaki stil geçersiz kılmaları, diyalogların kullanıcı arayüzüne entegre edilme şeklini iyileştirmeyi amaçlar.

// Bu yapılandırma, React uygulamalarında kullanıcı arayüzü bileşenlerinin stilini özelleştirmek için bir örnektir. Stil geçersiz kılmaları, Material-UI gibi kütüphanelerin sunduğu esneklikten faydalanarak, bileşenlerin varsayılan stillerini projenin ihtiyaçlarına göre değiştirmeye olanak tanır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

const { borderRadius } = borders;
const { xxl } = boxShadows;

const dialog = {
  styleOverrides: {
    paper: {
      borderRadius: borderRadius.lg,
      boxShadow: xxl,
    },

    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

export default dialog;
