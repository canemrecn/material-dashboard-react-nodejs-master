
// Bu JavaScript fonksiyonu, piksel cinsinden bir uzunluğu rem (kök em) birimine dönüştürür. Fonksiyon, iki parametre alır:

// number: Dönüştürülecek piksel uzunluğunu temsil eden sayı.
// baseNumber: Dönüştürme işlemi için kullanılacak temel sayı. Varsayılan değeri 16'dır.
// Fonksiyon, dönüştürülen uzunluğu rem birimiyle birlikte bir dize olarak döndürür. Örneğin, pxToRem(16) çağrısı, "1rem" dizesini döndürür.

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
