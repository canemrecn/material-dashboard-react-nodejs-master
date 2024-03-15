// Bu configs fonksiyonu, çizgi grafik bileşeninin yapılandırmasını oluşturur. Fonksiyon, verilen etiketler ve veri setleri üzerinde çalışır ve bir yapı döndürür. Bu yapı, çizgi grafik bileşeninin veri ve görünüm ayarlarını içerir.

// Fonksiyonun aldığı parametreler şunlardır:

// labels: Grafikte gösterilecek etiketlerin bir dizisi.
// datasets: Grafikte gösterilecek veri setlerinin bir dizisi.
// Döndürülen yapı, data ve options olmak üzere iki ana bölümden oluşur:

// data: Grafikte gösterilecek verilerin ve veri setlerinin bir listesi.
// options: Grafik bileşeninin görünüm ve davranış ayarlarının bir nesnesi.
// Bu yapı, çizgi grafiğinin görünümünü belirlemek için kullanılır. Örneğin, çizgi grafikteki eksenlerin görünümü, etiketlerin font özellikleri, ızgara çizgilerinin stil ayarları gibi detaylar bu yapı içinde belirlenir. Bu şekilde, çizgi grafiği bileşeninin nasıl görüneceği ve davranacağı kontrol edilmiş olur.

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
      scales: {
        y: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#b2b9bf",
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 10,
            font: {
              size: 11,
              family: typography.fontFamily,
              style: "normal",
              lineHeight: 2,
            },
          },
        },
      },
    },
  };
}

export default configs;
