
// Bu JavaScript kodu, verilen renk kodunu ve opaklık değerini kullanarak rgba renk değerini oluşturur.

// javascript
// Copy code
// import hexToRgb from "assets/theme-dark/functions/hexToRgb";

// function rgba(color, opacity) {
//   return `rgba(${hexToRgb(color)}, ${opacity})`;
// }

// export default rgba;
// Bu kod, hexToRgb fonksiyonunu içeri aktarır ve bu fonksiyonu kullanarak verilen renk kodunu rgb formatına dönüştürür. Sonra bu rgb değerini ve verilen opaklık değerini kullanarak rgba renk değerini oluşturur. Oluşturulan rgba değeri bir dize olarak döndürülür. Bu, genellikle CSS'te renk değerlerini tanımlarken kullanılır.

// Material Dashboard 2 React helper functions
import hexToRgb from "assets/theme-dark/functions/hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
