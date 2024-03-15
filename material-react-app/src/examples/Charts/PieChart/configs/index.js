// Bu configs fonksiyonu, çubuk grafik için yapılandırma bilgilerini oluşturur. Fonksiyon, etiketler ve veri setleri bilgilerini alır ve bu bilgilere dayanarak çubuk grafik yapılandırmasını oluşturur.

// Parametreler:

// labels: Grafikte gösterilecek etiketlerin dizisi.
// datasets: Grafikte gösterilecek veri setlerinin bilgilerini içeren bir nesne.
// Fonksiyon, verilen datasets nesnesinin backgroundColors özelliğini kontrol eder. Eğer bu özellik varsa, her bir veri seti için arka plan renklerini gradients nesnesinden alır. Eğer belirtilen renk gradient nesnesinde bulunmuyorsa, varsayılan olarak dark.main rengini kullanır.

// Daha sonra, data ve options objelerini oluşturur. data objesi, grafik verilerini ve görüntülenen etiketleri içerirken, options objesi grafik için genel ayarları içerir.

// Grafik yapılandırmasında çubuk grafik için özelleştirilmiş ayarlar bulunur. Örneğin, label özelliği veri setinin etiketini belirtirken, backgroundColor özelliği çubukların arka plan renklerini belirtir. Diğer özellikler ise grafik çizgileri ve izgara için özelleştirilmiş ayarlardır.

// Son olarak, fonksiyon oluşturulan yapılandırma bilgilerini içeren bir nesne döndürür.
// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

const { gradients, dark } = colors;

function configs(labels, datasets) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color) =>
      gradients[color]
        ? backgroundColors.push(gradients[color].state)
        : backgroundColors.push(dark.main)
    );
  } else {
    backgroundColors.push(dark.main);
  }

  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          weight: 9,
          cutout: 0,
          tension: 0.9,
          pointRadius: 2,
          borderWidth: 2,
          backgroundColor: backgroundColors,
          fill: false,
          data: datasets.data,
        },
      ],
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
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  };
}

export default configs;
