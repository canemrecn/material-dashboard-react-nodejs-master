
// Bu dosya, bir hex renk kodunu RGB formatına dönüştüren bir fonksiyon içerir. Bu işlem, chroma-js kütüphanesinin chroma fonksiyonu kullanılarak gerçekleştirilir.

// Fonksiyonun işlevi şu şekildedir:

// hexToRgb: Bu fonksiyon, bir hex renk kodunu alır ve onu RGB formatına dönüştürür. Sonuç olarak, RGB renklerini bir dize olarak döndürür.
// Parametreler:

// color: Dönüştürülecek olan hex renk kodu. Örneğin: "#RRGGBB".
// Fonksiyon, chroma fonksiyonunu kullanarak hex renk kodunu bir chroma nesnesine dönüştürür. Daha sonra, bu nesnenin rgb yöntemi çağrılarak RGB değerleri alınır ve bir dize olarak birleştirilir. Son olarak, bu RGB dizesi döndürülür.

// chroma-js is a library for all kinds of color conversions and color scales.
import chroma from "chroma-js";

function hexToRgb(color) {
  return chroma(color).rgb().join(", ");
}

export default hexToRgb;
