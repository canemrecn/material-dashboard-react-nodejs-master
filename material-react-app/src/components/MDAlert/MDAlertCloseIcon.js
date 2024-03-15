// Bu kod, MUI'nin styled fonksiyonunu kullanarak bir <span> öğesini özelleştiren bir bileşeni tanımlar. Bileşen, tema nesnesinden gelen renkler, tipografi ve işlevleri kullanarak stillendirilmiştir. İşte bileşenin temel özellikleri:

// color: Metin rengi, tema nesnesinden gelen beyaz rengin ana tonu kullanılmıştır.
// fontSize: Metin boyutu, tema nesnesinden gelen büyük boyutlu metin (xl) kullanılmıştır.
// padding: Kenar boşlukları, tema nesnesinden gelen pxToRem işlevi ile belirlenmiş piksel değerleri kullanılarak ayarlanmıştır.
// marginLeft: Sol kenar boşluğu, tema nesnesinden gelen pxToRem işlevi ile belirlenmiş piksel değeri kullanılarak ayarlanmıştır.
// fontWeight: Metin kalınlığı, tema nesnesinden gelen orta kalınlık (medium) kullanılmıştır.
// cursor: Fare imlecinin stilini belirler, burada "pointer" olarak ayarlanmıştır.
// lineHeight: Satır yüksekliği, 0 olarak ayarlanmıştır.
// Bu bileşen, genellikle belirli bir işlemi veya bağlantıyı temsil etmek için kullanılır ve kullanıcıya tıklanabilir bir öğe olduğunu göstermek için fare imleci üzerine geldiğinde değişen bir görünüm sunar.

// @mui material components
import { styled } from "@mui/material/styles";

export default styled("span")(({ theme }) => {
  const { palette, typography, functions } = theme;

  const { white } = palette;
  const { size, fontWeightMedium } = typography;
  const { pxToRem } = functions;

  return {
    color: white.main,
    fontSize: size.xl,
    padding: `${pxToRem(9)} ${pxToRem(6)} ${pxToRem(8)}`,
    marginLeft: pxToRem(40),
    fontWeight: fontWeightMedium,
    cursor: "pointer",
    lineHeight: 0,
  };
});
