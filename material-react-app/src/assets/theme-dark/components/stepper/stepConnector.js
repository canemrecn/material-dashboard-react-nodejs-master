// Bu dosya, adım bağlayıcısının (step connector) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors ve borders modüllerini içeri aktarıyor. Bu modüller, temel renkler ve sınırlar gibi stil bilgilerini içerebilir.

// colors modülünden beyaz rengini (white) alıyor.

// borders modülünden kenar kalınlığını (borderWidth) alıyor.

// stepConnector adlı bir nesne tanımlıyor. Bu nesne, adım bağlayıcısının kök öğesi ve alt öğeleri için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, adım bağlayıcısının stilini belirleyen çeşitli özellikler tanımlanmıştır. Bu özellikler, adım bağlayıcısının farklı durumları için çeşitli stilleri belirtir.

// &.Mui-active ve &.Mui-completed gibi seçicilerle adım bağlayıcısının aktif ve tamamlanmış durumları için metin rengini beyaza (white.main) ayarlar.

// alternativeLabel altında, alternatif etiketlerin konumunu ayarlar.

// line altında, bağlayıcı çizginin kalınlığını ve rengini belirler.

// Bu dosya, adım bağlayıcısının stiline özgü bazı özelleştirmeler sağlar. Örneğin, bağlayıcı çizginin kalınlığını ve rengini ayarlayarak veya alternatif etiketlerin konumunu değiştirerek adım bağlayıcısının görünümünü özelleştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import borders from "assets/theme-dark/base/borders";
import colors from "assets/theme-dark/base/colors";

const { white } = colors;
const { borderWidth } = borders;

const stepConnector = {
  styleOverrides: {
    root: {
      color: "#9fc9ff",
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: white.main,
      },

      "&.Mui-completed": {
        color: white.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
      opacity: 0.5,
    },
  },
};

export default stepConnector;
