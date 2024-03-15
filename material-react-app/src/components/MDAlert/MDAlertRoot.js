// Bu kod, bir MUI Box bileşenini özelleştiren bir bileşen tanımlar. Bileşen, bir tema nesnesinden ve özel bir ownerState propundan gelen değerlere dayanarak stillendirilir. İşte bileşenin ana özellikleri:

// display: İçeriğin yatay olarak hizalanması için flex kullanılmıştır.
// justifyContent: Öğeler arasında boşluk bırakarak yatay hizalama sağlanır.
// alignItems: Öğelerin dikey hizalaması için center kullanılmıştır.
// minHeight: En az yükseklik, pxToRem işleviyle belirli bir piksel değerine dönüştürülmüş ve temel tipografi özelliklerinden alınmıştır.
// backgroundImage: Arka plan resmi, linearGradient fonksiyonu kullanılarak bir arka plan geçişi oluşturulur. Geçişin rengi, ownerState propundan gelen renk değerine dayanır.
// color: Metin rengi, tema nesnesinden gelen beyaz rengin ana tonu kullanılmıştır.
// position: Öğenin konumu, relative olarak ayarlanmıştır.
// padding: İçerik kenar boşlukları, pxToRem işlevi kullanılarak belirli bir piksel değerine dönüştürülmüş ve temel tipografi özelliklerinden alınmıştır.
// marginBottom: Alt kenar boşluğu, pxToRem işlevi kullanılarak belirli bir piksel değerine dönüştürülmüştür.
// borderRadius: Köşe yuvarlama, tema nesnesinden gelen orta boyutlu (md) yuvarlama kullanılmıştır.
// fontSize: Metin boyutu, tema nesnesinden gelen düzenli boyut kullanılmıştır.
// fontWeight: Metin kalınlığı, tema nesnesinden gelen orta kalınlık kullanılmıştır.
// Bu bileşen genellikle bir arayüz öğesini veya bir bileşeni sarmak için kullanılır ve arka planında bir renk geçişi sağlayarak dikkat çekici bir görünüm sunar.

// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, borders, functions } = theme;
  const { color } = ownerState;

  const { white, gradients } = palette;
  const { fontSizeRegular, fontWeightMedium } = typography;
  const { borderRadius } = borders;
  const { pxToRem, linearGradient } = functions;

  // backgroundImage value
  const backgroundImageValue = gradients[color]
    ? linearGradient(gradients[color].main, gradients[color].state)
    : linearGradient(gradients.info.main, gradients.info.state);

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: pxToRem(60),
    backgroundImage: backgroundImageValue,
    color: white.main,
    position: "relative",
    padding: pxToRem(16),
    marginBottom: pxToRem(16),
    borderRadius: borderRadius.md,
    fontSize: fontSizeRegular,
    fontWeight: fontWeightMedium,
  };
});
