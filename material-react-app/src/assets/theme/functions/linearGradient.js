
// Bu JavaScript fonksiyonu, iki renk arasında bir lineer gradyan oluşturur. Fonksiyon, başlangıç rengi (color) ve bitiş rengi (colorState) parametrelerini alır. Varsayılan olarak, gradyanın açısı 195 derecedir, ancak isteğe bağlı olarak bu açı da belirtilebilir.

// Fonksiyon, lineer gradyanın CSS linear-gradient() işleviyle oluşturulmuş bir dizeyi döndürür. Örneğin, linearGradient("#ff0000", "#00ff00") çağrısı, kırmızıdan yeşile doğru bir gradyan oluşturur.

function linearGradient(color, colorState, angle = 195) {
  return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
