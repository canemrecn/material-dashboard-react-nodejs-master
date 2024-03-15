// Bu kod, bir çizgi grafiği yapılandırma fonksiyonunu içerir. Bu fonksiyon, çizgi grafiğinin görünümünü ve davranışını belirlemek için kullanılır. İlgili dosyalardan alınan labels ve datasets parametrelerini kullanarak bir yapı oluşturur.

// Fonksiyonun içeriği şu şekildedir:

// configs: Çizgi grafiği yapılandırma ayarlarını içeren bir fonksiyondur. Bu ayarlar, çizgi grafiğinin görünümünü ve davranışını belirler.
// labels: Grafiğin eksenlerindeki etiketleri temsil eder.
// datasets: Grafiğin veri setlerini temsil eder.
// options: Çizgi grafiği seçeneklerini içeren bir nesnedir. Bu seçenekler, grafiğin genel davranışını, etkileşimini ve özelliklerini belirler.
// scales: Eksenlerin yapılandırma ayarlarını içeren bir nesnedir. Bu ayarlar, yatay (x) ve dikey (y) eksenlerin görünümünü belirler.
// ticks: Eksen etiketlerinin yapılandırma ayarlarını içeren bir nesnedir. Bu ayarlar, etiketlerin görünümünü belirler, örneğin renk, boyut, font vb.
// typography.fontFamily: Yazı tipi ailesini belirten bir değerdir. Bu değer, etiketlerin fontunu belirler.
// Bu yapılandırma fonksiyonu, çizgi grafiğinin genel görünümünü ve eksenlerin davranışını belirler. Örneğin, eksen etiketlerinin renkleri, boyutları ve fontu gibi özelliklerin yanı sıra çizgi grafiğinin etkileşim modunu ve legendlendirme öğesini de yapılandırabilir.

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
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5],
          },
          ticks: {
            display: true,
            color: "#b2b9bf",
            padding: 20,
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
