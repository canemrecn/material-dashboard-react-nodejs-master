//Bu dosya, bir dizi düğme bileşeni stillerini içeren bir nesne olan button'ı içerir.

//Bu nesne, varsayılan düğme özelliklerini (defaultProps) ve düğme bileşenlerinin farklı stillerini (styleOverrides) tanımlar. Her bir stil, belirli bir durumu temsil eder (örneğin, temel, küçük, büyük, birincil, ikincil) ve ilgili bileşenin görünümünü belirleyen CSS özelliklerini içerir.

//styleOverrides altındaki anahtarlar, belirli bir durumu ve stilin kombinasyonunu temsil eder. Örneğin, containedPrimary anahtarı, birincil renkteki bir düğme bileşeninin görünümünü tanımlar. Her bir anahtar altında, ilgili düğme stilinin görünümünü belirleyen CSS özellikleri yer alır.

//Bu dosya, genellikle bir tema yönetim sistemi içinde kullanılır ve uygulamadaki düğme bileşenlerinin görünümünü tutarlı bir şekilde kontrol etmek için kullanılır.

// Material Dashboard 2 React Button Styles
import root from "assets/theme/components/button/root";
import contained from "assets/theme/components/button/contained";
import outlined from "assets/theme/components/button/outlined";
import buttonText from "assets/theme/components/button/text";

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
