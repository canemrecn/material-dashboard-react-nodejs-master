// Bu dosya, Material Dashboard 2 React temasının bir parçası olarak, düğmeler için varsayılan özellikler ve stil geçersiz kılmalarını (overrides) tanımlar. Dosya, düğmelerin genel görünümünü ve davranışını özelleştirmek için root, contained, outlined, ve text stil tanımlarını birleştirir. Bu yapılandırma, düğme bileşenlerinin teması içinde tutarlı bir şekilde kullanılmasını sağlar ve temanın genel estetiğine uygun düğmeler oluşturulmasına olanak tanır.

// Anahtar Özellikler ve Kullanımları:
// defaultProps: Düğme bileşeninin varsayılan özelliklerini belirler. Örneğin, disableRipple özelliği düğme tıklama efektinin (ripple effect) varsayılan olarak etkin olup olmayacağını belirler.

// styleOverrides: Material-UI'nin stil sistemini kullanarak düğme bileşenlerinin stillerini geçersiz kılar. Bu, temanın farklı düğme türlerine (örneğin, contained, outlined, text) ve bunların çeşitli durumlarına (örneğin, küçük boyut, büyük boyut, birincil renk, ikincil renk) özgü stillerini tanımlar.

// Stil Geçersiz Kılmaları:
// root: Tüm düğme türlerinin temel stilini tanımlar.
// contained, outlined, text: Farklı düğme türlerine özgü temel stilleri tanımlar. Her bir tür için boyut ve renk çeşitlerine özgü ek stiller de (containedSizeSmall, outlinedPrimary vb.) belirtilir.
// Kullanım Senaryoları:
// Bu yapılandırma, bir uygulamanın farklı bölümlerinde kullanılan düğmelerin görünümünü ve hissini tutarlı tutmak için kullanılır. Örneğin, bir contained düğme birincil eylem için kullanılabilirken, bir text düğme daha az öne çıkan bir eylem için kullanılabilir.
// Stil geçersiz kılmaları, bir proje genelinde düğmelerin belirli bir tasarım diline uygun olmasını sağlamak için kullanılır. Bu, marka kimliğini güçlendirir ve kullanıcı deneyimini iyileştirir.
// Bu dosya, React ve Material-UI kullanılarak geliştirilen projelerde, düğmelerin görünümünü ve davranışını özelleştirmek ve yönetmek için güçlü bir araçtır. Proje genelinde tutarlı bir kullanıcı arayüzü stilini korumak ve geliştirmek isteyen geliştiriciler için tasarlanmıştır.

// Material Dashboard 2 React Button Styles
import root from "assets/theme-dark/components/button/root";
import contained from "assets/theme-dark/components/button/contained";
import outlined from "assets/theme-dark/components/button/outlined";
import buttonText from "assets/theme-dark/components/button/text";

const button = {
  defaultProps: {
    disableRipple: false,
  },
  styleOverrides: {
    root: { ...root },
    contained: { ...contained.base },
    containedSizeSmall: { ...contained.small },
    containedSizeLarge: { ...contained.large },
    containedPrimary: { ...contained.primary },
    containedSecondary: { ...contained.secondary },
    outlined: { ...outlined.base },
    outlinedSizeSmall: { ...outlined.small },
    outlinedSizeLarge: { ...outlined.large },
    outlinedPrimary: { ...outlined.primary },
    outlinedSecondary: { ...outlined.secondary },
    text: { ...buttonText.base },
    textSizeSmall: { ...buttonText.small },
    textSizeLarge: { ...buttonText.large },
    textPrimary: { ...buttonText.primary },
    textSecondary: { ...buttonText.secondary },
  },
};

export default button;
