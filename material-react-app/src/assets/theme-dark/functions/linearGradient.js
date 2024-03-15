// Bu dosya, iki renk arasında bir lineer gradyan oluşturan bir JavaScript fonksiyonunu içerir.

// Fonksiyonun işlevi şu şekildedir:

// linearGradient: Bu fonksiyon, iki renk ve isteğe bağlı olarak bir açı alır ve bu renkler arasında bir lineer gradyan oluşturur. Oluşturulan lineer gradyanı temsil eden bir CSS değeri döndürür.
// Parametreler:

// color: Lineer gradyanın başlangıç rengi.
// colorState: Lineer gradyanın bitiş rengi.
// angle: Lineer gradyanın açısı. Varsayılan değer 195 derecedir.
// Fonksiyon, linear-gradient CSS fonksiyonunu kullanarak iki rengi ve isteğe bağlı olarak bir açıyı içeren bir dize oluşturur ve bu dizeyi döndürür. Bu dize, lineer gradyanı tanımlayan bir CSS değeri olarak kullanılabilir.

/**
  The linearGradient() function helps you to create a linear gradient color background
 */

function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
