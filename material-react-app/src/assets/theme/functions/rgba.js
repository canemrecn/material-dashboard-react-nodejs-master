
// Bu JavaScript fonksiyonu, bir renk kodunu (HEX formatında) ve bir opaklık değerini alarak rgba renk değerini oluşturur. Fonksiyon, iki parametre alır:

// color: HEX formatında bir renk kodunu temsil eden bir dize.
// opacity: Oluşturulacak rgba renk değerinin opaklık değerini temsil eden bir sayı (0 ile 1 arasında bir değer).
// Fonksiyon, renk kodunu rgb formatına dönüştürmek için hexToRgb fonksiyonunu kullanır ve ardından rgba renk değerini oluşturur. Örneğin, rgba("#FF0000", 0.5) çağrısı, "rgba(255, 0, 0, 0.5)" dizesini döndürür.

// Material Dashboard 2 React helper functions
import hexToRgb from "assets/theme/functions/hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
