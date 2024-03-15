
// Bu stil dosyası, bir çizgi grafiği için gradyan (renk geçişli) çizgi oluşturan bir fonksiyon içerir. Fonksiyon, aşağıdaki parametreleri alır:

// chart: Çizgi grafiğinin bağlı olduğu canvas öğesini temsil eden bir nesne.
// color: Gradyanın başlangıç rengini belirten bir dize.
// opacity: Gradyanın opaklığını belirten bir sayı. Varsayılan değeri 0.2'dir.
// Fonksiyon, belirtilen renk ve opaklıkla birlikte bir gradyan çizgi oluşturur ve bu gradyanı döndürür. Oluşturulan gradyan, çizgi grafiği çizmek için kullanılabilir.

// Material Dashboard 2 React helper functions
import rgba from "assets/theme/functions/rgba";

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
