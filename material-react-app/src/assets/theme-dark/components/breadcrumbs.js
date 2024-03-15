// Bu dosya, breadcrumbs (ekmek kırıntısı) bileşeninin stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// colors ve typography modüllerini içeri aktarıyor. Bu modüller, renkler ve yazı tipi stilleri gibi stil bilgilerini içerebilir.

// grey rengini colors modülünden ve yazı tipi boyutunu typography modülünden alıyor.

// breadcrumbs adında bir nesne tanımlıyor. Bu nesne, breadcrumbs bileşeninin alt öğeleri için bazı stil düzenlemeleri içerir.

// styleOverrides altında, breadcrumbs bileşeninin <li> (liste öğesi) ve ayırıcı (separator) için stil düzenlemeleri tanımlanmıştır.

// li: Liste öğelerinin arasındaki boşluk miktarını (lineHeight) sıfıra ayarlar. Böylece, ekmek kırıntılarının birbirine daha yakın görünmesini sağlar.

// separator: Ayırıcıların (separator) yazı tipi boyutunu (fontSize) küçük (size.sm) ve rengini (color) gri tonlarında (grey[600]) ayarlar. Bu, ayırıcıların daha az belirgin olmasını sağlar.

// Bu dosya, breadcrumbs bileşeninin görünümünü özelleştirmek için kullanılır. Örneğin, ekmek kırıntısı bileşeninin ayırıcılarının rengini veya yazı tipi boyutunu değiştirerek ekmek kırıntısı bileşeninin görünümünü değiştirebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme-dark/base/colors";
import typography from "assets/theme-dark/base/typography";

const { grey } = colors;
const { size } = typography;

const breadcrumbs = {
  styleOverrides: {
    li: {
      lineHeight: 0,
    },

    separator: {
      fontSize: size.sm,
      color: grey[600],
    },
  },
};

export default breadcrumbs;
