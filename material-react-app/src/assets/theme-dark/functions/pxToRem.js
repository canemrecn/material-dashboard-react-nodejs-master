// Bu JavaScript fonksiyonu, piksel cinsinden bir uzunluğu rem birimine dönüştürmek için kullanılır.

// Fonksiyonun işlevi şu şekildedir:

// pxToRem: Bu fonksiyon, bir piksel cinsinden uzunluk ve isteğe bağlı olarak bir temel piksel değeri alır. Bu uzunluğu rem birimine dönüştürür ve sonucu bir dize olarak döndürür.
// Parametreler:

// number: Dönüştürülecek piksel cinsinden uzunluk.
// baseNumber: Temel piksel değeri. Varsayılan değer 16'dır.
// Fonksiyon, verilen piksel uzunluğunu temel piksel değerine bölerek rem birimine dönüştürür ve sonucu bir dize olarak döndürür. Bu dize, CSS uzunluk birimi olarak kullanılabilir.
/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
