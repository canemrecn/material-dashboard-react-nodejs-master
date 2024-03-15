// Bu kod parçası, Material Dashboard 2 React temasının bir parçası olarak, kart bileşenlerinin stil geçersiz kılmalarını tanımlar. card nesnesi, kartların temel görünümünü ve davranışını belirleyen stil ayarlarını içerir. Bu stil ayarları, kartların arka plan rengi, kenarlık, yuvarlaklık ve gölge gibi özelliklerini özelleştirir, böylece kullanıcı arayüzünüzde görsel olarak çekici ve tutarlı bir görünüm sağlar.

// Anahtar Stil Özellikleri:
// root: Kart bileşeninin kök elemanı için stil ayarlarını içerir. Bu ayarlar, kartın temel yapı taşlarını oluşturur ve şunları belirler:
// display, flexDirection: Kartın içeriğinin nasıl düzenleneceğini (sütun olarak).
// position, minWidth, wordWrap: Pozisyonlama, minimum genişlik ve kelime kırma davranışı.
// backgroundImage, backgroundColor, backgroundClip: Kartın arka plan görünümü.
// border: Kenarlık stilini, genişliğini ve rengini tanımlar. rgba fonksiyonu kullanılarak, black renginin opaklığı ayarlanır.
// borderRadius: borders nesnesinden alınan xl yuvarlaklık değerini kullanır, kartın köşe yuvarlaklıklarını belirler.
// boxShadow: Kartın gölge efektini tanımlar. boxShadows nesnesinden alınan md değeri kullanılır.
// overflow: Kartın taşan içeriğinin nasıl görüntüleneceğini kontrol eder.
// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, kartların bir bilgi paneli, kullanıcı profil kartı, ürün kartı veya haber makalesi kartı gibi çeşitli kullanım senaryolarında kullanılmasını sağlar. Kartların tasarımı, içerdiği bilgileri net ve etkili bir şekilde sunarken, aynı zamanda kullanıcı arayüzünün estetik bütünlüğünü korur.

// Yardımcı Fonksiyonların Kullanımı:
// rgba Fonksiyonu: Renklerin opaklığını ayarlamak için kullanılır. Bu, kenarlık rengi gibi belirli stil özelliklerinde ince görsel ayarlamalar yapılmasını sağlar, böylece kartın tasarımı daha sofistike ve kullanıcı arayüzüne uyumlu hale getirilir.
// Bu tanımlar, Material Dashboard 2 React teması kullanılarak geliştirilen projelerde, kart bileşenlerinin görsel tasarımını özelleştirmek ve yönetmek için güçlü bir araçtır. Kartların görsel tasarımı, kullanıcı deneyiminin önemli bir parçasıdır ve bu stil geçersiz kılmaları, projenizde tutarlı ve profesyonel bir görünüm sağlamanıza yardımcı olur.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";
import borders from "assets/theme-dark/base/borders";
import boxShadows from "assets/theme-dark/base/boxShadows";

// Material Dashboard 2 React Helper Function
import rgba from "assets/theme-dark/functions/rgba";

const { black, background } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

const card = {
  styleOverrides: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: 0,
      wordWrap: "break-word",
      backgroundImage: "none",
      backgroundColor: background.card,
      backgroundClip: "border-box",
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: "visible",
    },
  },
};

export default card;
