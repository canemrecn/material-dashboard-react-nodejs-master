

// Bu dosya, bir React projesinde kullanılmak üzere kenarlık (border) stilleri tanımlar. Material Dashboard 2 React'ın karanlık teması için tasarlanmış bu stiller, uygulamanın görsel unsurlarının kenarlıklarını özelleştirmek için kullanılır. İşlevsel ve görsel açıdan zengin bir kullanıcı arayüzü oluştururken, tutarlılık ve tema uyumluluğu sağlar. Aşağıda dosyanın ana bölümleri ve işlevleri detaylandırılmıştır:

// İçe Aktarmalar
// colors: Temanın renklerini tanımlayan dosyadan renkler içe aktarılır. Burada, white gibi spesifik bir renk değeri kullanılmak üzere çıkarılır.
// pxToRem: Piksel değerlerini rem birimlerine çeviren bir fonksiyondur. Bu, boyutların farklı ekran boyutlarında daha tutarlı görünmesini sağlamak için kullanılır.
// rgba: Renk değerlerini RGBA formatında kullanmayı sağlayan bir fonksiyondur. Bu fonksiyon, renklerin opaklık seviyesini ayarlamak için kullanılır.
// Kenarlık Stilleri (borders Nesnesi)
// borderColor: rgba fonksiyonu kullanılarak belirlenen, beyaz rengin belirli bir opaklık seviyesiyle (0.4) kullanıldığı kenarlık rengidir.
// borderWidth: Kenarlıkların kalınlığını tanımlayan bir nesnedir. 0dan 5e kadar olan anahtarlar, çeşitli kalınlıkları pxToRem fonksiyonu ile rem birimine çevirerek tanımlar. Bu, kenarlıkların kalınlığını dinamik bir şekilde ayarlamak için kullanılır.
// borderRadius: Yuvarlak köşelerin yarıçapını tanımlayan bir nesnedir. xsden xxl ve sectiona kadar çeşitli boyutlar için yarıçap değerleri, yine pxToRem fonksiyonu ile tanımlanır. Bu, öğelerin köşe yuvarlaklıklarını özelleştirmek için kullanılır.
// Bu dosya, Material Dashboard 2 React temasının bir parçası olarak, uygulamanın kenarlık stilini özelleştirmek ve yönetmek için bir araç sağlar. Kodun bu kısmı, tema içinde tutarlılık sağlamanın yanı sıra, geliştiricilere uygulama genelinde kullanılmak üzere hazır stil seçenekleri sunar.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";
import rgba from "assets/theme-dark/functions/rgba";

const { white } = colors;

const borders = {
  borderColor: rgba(white.main, 0.4),

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
