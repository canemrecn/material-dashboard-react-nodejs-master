// Bu kod parçası, bir Icon bileşenini özelleştirmek için kullanılan bir styled bileşeni oluşturur. Bu özel bileşen, ikonların görünümünü belirlemek için Material-UI'nin styled fonksiyonunu kullanır.

// İçe Aktarmalar:
// Icon: Material-UI tarafından sağlanan ikon bileşenini içe aktarır.
// styled: Material-UI tarafından sağlanan styled fonksiyonunu içe aktarır.
// styled(Icon) Bileşeni:
// Props'lar:
// theme: Tema nesnesine erişim sağlar.
// ownerState: Sahip durumu, bileşenin stilini belirlemek için kullanılır. Bu durum, color ve bgWhite özelliklerini içerir.
// Bileşen, belirtilen color ve bgWhite özelliklerine göre ikonun rengini ve arka planını ayarlar.
// Arka planın bir gradyan olup olmadığını ve ikonun metin renginin belirlenmesi için koşullar sağlanır.
// İkonun boyutu, boşluk ve dikey konumlandırma gibi stil özellikleri tanımlanır.
// Bu özel bileşen, ikonları farklı renk şemaları ve arka planlarla uyumlu hale getirerek uygulamanızda daha tutarlı bir görünüm elde etmenize yardımcı olabilir.

// @mui material components
import Icon from "@mui/material/Icon";
import { styled } from "@mui/material/styles";

export default styled(Icon)(({ theme, ownerState }) => {
  const { palette, functions, typography } = theme;
  const { color, bgWhite } = ownerState;

  const { white, transparent, gradients } = palette;
  const { pxToRem, linearGradient } = functions;
  const { size } = typography;

  // backgroundImage value
  let backgroundImageValue;

  if (bgWhite) {
    backgroundImageValue = gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.info.main, gradients.info.state);
  } else if (color === "light") {
    backgroundImageValue = linearGradient(gradients.dark.main, gradients.dark.state);
  }

  return {
    backgroundImage: backgroundImageValue,
    WebkitTextFillColor: bgWhite || color === "light" ? transparent.main : white.main,
    WebkitBackgroundClip: "text",
    marginRight: pxToRem(8),
    fontSize: size.lg,
    transform: `translateY(${pxToRem(-2)})`,
  };
});
