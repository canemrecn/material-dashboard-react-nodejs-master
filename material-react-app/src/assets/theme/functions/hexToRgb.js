
// Bu stil dosyası, bir hex renk kodunu alıp bu rengi RGB formatına dönüştüren bir fonksiyon içerir. Bu fonksiyon, chroma-js kütüphanesini kullanır.

// Fonksiyon, color olarak bir hex renk kodu alır ve bu rengi RGB formatına dönüştürerek bir dize olarak döndürür. Örneğin, "#ff0000" şeklinde bir hex renk kodu alındığında, çıktı "255, 0, 0" şeklinde olacaktır, çünkü bu kod kırmızı bir rengi temsil eder.

// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";

function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}

export default hexToRgb;
