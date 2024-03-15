// Bu dosya, bir çizgi grafiği için bir renk gradyanı oluşturmak için bir fonksiyon sağlar. Fonksiyon, bir CanvasRenderingContext2D nesnesi alır (grafik nesnesi), başlangıç renk değeri ve opaklık parametrelerini kullanarak bir renk gradyanı oluşturur.

// Fonksiyonun parametreleri şunlardır:

// chart: CanvasRenderingContext2D nesnesi. Bu, çizgi grafiğinin bağlı olduğu Canvas elemanının 2D bağlamını temsil eder.
// color: Gradient'in başlangıç rengi. Örnek format: "#RRGGBB" veya "rgba(0, 0, 0, 0.5)"".
// opacity: Gradient'in başlangıç renginin opaklığı. Varsayılan değer 0.2.
// Fonksiyon, belirtilen renk ve opaklık değerlerine göre bir gradyan oluşturur ve bu gradyanı çizgi grafiği için kullanılmak üzere döndürür.

// GradientStroke, çizgi grafiğinin çizilmesinde kullanılmak üzere oluşturulan bir gradyan nesnesidir. Bu nesne, çizgi grafiğinin arka plan rengiyle birleştirilerek gradyan bir çizgi oluşturulmasını sağlar.

// Material Dashboard 2 React helper functions
import rgba from "assets/theme-dark/functions/rgba";

function gradientChartLine(chart, color, opacity = 0.2) {
  const ctx = chart.getContext("2d");
  const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  const primaryColor = rgba(color, opacity).toString();

  gradientStroke.addColorStop(1, primaryColor);
  gradientStroke.addColorStop(0.2, "rgba(72, 72, 176, 0.0)");
  gradientStroke.addColorStop(0, "rgba(203, 12, 159, 0)");

  return gradientStroke;
}

export default gradientChartLine;
