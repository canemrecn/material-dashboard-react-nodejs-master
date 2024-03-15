
// Bu dosya, bir React projesi için gölge (shadow) stillerini tanımlayan bir yapılandırma dosyasıdır. Material Dashboard 2 React'ın karanlık teması içinde yer alır ve uygulamanın farklı bölümlerinde kullanılmak üzere çeşitli gölge stilleri sağlar. Bu gölgeler, kullanıcı arayüzü bileşenlerine derinlik ve görsel ilgi katmak için kullanılır. Kod, gölgeleri tanımlamak için önceden tanımlanmış renkler ve bir boxShadow yardımcı fonksiyonu kullanır.

// İçe Aktarmalar ve Renk Tanımlamaları
// colors: Projedeki renkler dosyasından çeşitli renk değerleri içe aktarılır (black, dark, vb.). Bu renkler, gölgelerin renk tonunu belirlemek için kullanılır.
// boxShadow: Gölge efektlerini oluşturmak için kullanılan bir yardımcı fonksiyondur. Fonksiyon, gölgenin konumu, boyutu, rengi ve opaklığı gibi parametreleri alır.
// Gölge Stilleri (boxShadows Nesnesi)
// Gölge stilleri (xs, sm, md, lg, xl, xxl, inset) çeşitli boyutlar ve kullanım durumları için tanımlanır. Her stil, boxShadow fonksiyonunu kullanarak belirli parametrelerle oluşturulan bir gölge değeridir.
// colored: Renkli gölgeleri tanımlar. Bu kategoride, her renk için özel bir gölge stili bulunur (primary, secondary, info, vb.). Bu gölgeler, temanın renk paletiyle uyumlu dinamik efektler oluşturmak için kullanılır.
// navbarBoxShadow ve sliderBoxShadow: Belirli UI bileşenleri için özelleştirilmiş gölge stilleri içerir. Örneğin, navbar veya slider gibi elemanlar için kullanılır.
// tabsBoxShadow: Sekme (tab) bileşenleri için özel bir gölge stilidir. Sekme göstergeleri için kullanılan gölgeyi tanımlar.
// Bu yapılandırma dosyası, Material Dashboard 2'nin temaları ve stil rehberiyle uyumlu, tutarlı ve estetik görsel efektler sağlamak üzere tasarlanmıştır. Geliştiriciler, bu dosyadaki gölge stillerini, uygulamanın farklı kısımlarında hızlıca ve kolayca uygulayabilirler, böylece kullanıcı arayüzünün görsel kalitesini artırabilirler.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme-dark/base/colors";

// Material Dashboard 2 React Helper Functions
import boxShadow from "assets/theme-dark/functions/boxShadow";

const { black, dark, tabs, coloredShadows } = colors;

const boxShadows = {
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: `${boxShadow([0, 2], [2, 0], black.main, 0.14)}, ${boxShadow(
    [0, 3],
    [1, -2],
    black.main,
    0.2
  )}, ${boxShadow([0, 1], [5, 0], black.main, 0.12)}`,
  lg: `${boxShadow([0, 10], [15, -3], black.main, 0.1)}, ${boxShadow(
    [0, 4],
    [6, -2],
    black.main,
    0.05
  )}`,
  xl: `${boxShadow([0, 20], [25, -5], black.main, 0.1)}, ${boxShadow(
    [0, 10],
    [10, -5],
    black.main,
    0.04
  )}`,
  xxl: boxShadow([0, 20], [27, 0], black.main, 0.05),
  inset: boxShadow([0, 1], [2, 0], black.main, 0.075, "inset"),
  colored: {
    primary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.primary,
      0.4
    )}`,
    secondary: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.secondary,
      0.4
    )}`,
    info: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.info,
      0.4
    )}`,
    success: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.success,
      0.4
    )}`,
    warning: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.warning,
      0.4
    )}`,
    error: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.error,
      0.4
    )}`,
    light: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.light,
      0.4
    )}`,
    dark: `${boxShadow([0, 4], [20, 0], black.main, 0.14)}, ${boxShadow(
      [0, 7],
      [10, -5],
      coloredShadows.dark,
      0.4
    )}`,
  },

  navbarBoxShadow: `${boxShadow([0, 0], [1, 1], dark.main, 0.9, "inset")}, ${boxShadow(
    [0, 20],
    [27, 0],
    black.main,
    0.05
  )}`,
  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow, 1),
  },
};

export default boxShadows;
