// Bu kod parçası, bir çizgi grafiği (line chart) için yapılandırma bilgilerini içeren bir configs fonksiyonunu tanımlar. Bu fonksiyon, grafiğin veri ve görünüm özelliklerini belirler.

// Fonksiyonun girdi parametreleri:

// labels: Grafikteki veri noktalarını etiketleyen değerlerin bir dizisi.
// datasets: Grafikte gösterilecek veri setlerinin bir nesnesi. Bu nesne, label (veri seti başlığı) ve data (veri seti değerleri) özelliklerini içerir.
// Fonksiyonun çıktı değeri:

// data: Grafik için veri yapısını içerir. Etiketler ve veri setleri burada belirtilir.
// options: Grafik için seçenekleri içerir. Grafik davranışı, görünüm ayarları ve etkileşim seçenekleri burada belirtilir.
// Bu yapılandırma, çizgi grafiği oluşturmak için kullanılır. Veri setlerinin görsel özellikleri (örneğin, çizgi rengi, dolgu rengi, kenarlık kalınlığı) ve eksenlerin görünüm özellikleri (örneğin, etiket renkleri, kenarlık türleri) bu yapılandırmada belirtilir.

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0.4,
          borderWidth: 0,
          borderRadius: 4,
          borderSkipped: false,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          data: datasets.data,
          maxBarThickness: 6,
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
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
              style: "normal",
              lineHeight: 2,
            },
            color: "#fff",
          },
        },
        x: {
          grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: "rgba(255, 255, 255, .2)",
          },
          ticks: {
            display: true,
            color: "#f8f9fa",
            padding: 10,
            font: {
              size: 14,
              weight: 300,
              family: "Roboto",
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
