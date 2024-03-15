// Bu dosya, Material Dashboard 2 React temasının bir parçası olarak, düğmeler için temel ("root") stil tanımlarını içerir. root stili, düğmelerin temel görünümünü ve davranışlarını tanımlar ve bu, tüm düğme varyasyonları için ortak temeli oluşturur. Bu tanımlar, düğmelerin boyutu, font özellikleri, yuvarlaklık, padding, metin formatı ve etkileşim durumları gibi özellikleri içerir.

// Anahtar Özellikler ve Kullanımları:
// display, justifyContent, alignItems: Düğmenin içeriğinin yatay ve dikey olarak merkezlenmesini sağlar. Bu, içeriklerin (metin veya ikonlar) düğme içinde düzgün bir şekilde hizalanmasını garanti eder.

// fontSize, fontWeight: typography dosyasından alınan font boyutu ve ağırlığı değerlerini kullanır. Bu, düğmenin metin içeriğinin tutarlı bir görünüme sahip olmasını sağlar.

// borderRadius: borders dosyasından alınan yuvarlaklık değerini kullanır. Düğmelerin köşe yuvarlaklıklarını belirler, bu da görsel estetiği ve kullanıcı arayüzü tasarım trendlerine uyumu etkiler.

// padding, lineHeight, textAlign, textTransform: Düğmenin iç boşluklarını, metin satır yüksekliğini, metin hizalamasını ve metnin büyük harflerle yazılmasını (uppercase) sağlayan stil özellikleridir.

// userSelect: Kullanıcıların düğme metnini seçememesini sağlar, bu da kullanıcı deneyimini iyileştirir.

// backgroundSize, backgroundPositionX, transition: Düğmenin arka planının nasıl davranacağını ve etkileşimlere (örneğin, hover) yanıt olarak nasıl animasyon yapılacağını tanımlar.

// :disabled: Düğmenin devre dışı bırakıldığında (disabled) uygulanacak stilleri belirler. Bu, genellikle düğmenin etkileşime kapalı olduğunu görsel olarak göstermek için kullanılır.

// .material-icons: Material Icons kullanıldığında, ikonların boyutu ve konumu için özel stiller tanımlar. Bu, ikonların düğme içinde doğru bir şekilde hizalanmasını ve boyutlandırılmasını sağlar.

// Bu stil tanımı, düğmelerinizi Material Dashboard 2 React temasının genel tasarım diliyle uyumlu hale getirir ve kullanıcı arayüzünüzde tutarlı bir görünüm ve his sağlar. Bu, aynı zamanda düğmelerin farklı durumlarına ve içeriklerine göre esnek şekilde özelleştirilebilmesine olanak tanır.

// Material Dashboard 2 React Base Styles
import typography from "assets/theme-dark/base/typography";
import borders from "assets/theme-dark/base/borders";

// Material Dashboard 2 React Helper Functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

const root = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.lg,
  padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
  lineHeight: 1.4,
  textAlign: "center",
  textTransform: "uppercase",
  userSelect: "none",
  backgroundSize: "150% !important",
  backgroundPositionX: "25% !important",
  transition: "all 150ms ease-in",

  "&:disabled": {
    pointerEvent: "none",
    opacity: 0.65,
  },

  "& .material-icons": {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

export default root;
