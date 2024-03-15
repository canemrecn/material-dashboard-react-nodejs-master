
// Bu fonksiyon, çizgi grafiği için yapılandırma verilerini oluşturur. Aldığı parametreler:

// labels: Grafiğin x eksenindeki etiketleri içeren bir dizi.
// datasets: Grafiğin göstereceği verileri içeren bir nesne.
// Fonksiyon, verilen parametreler kullanılarak bir yapı döndürür. Bu yapı, çizgi grafiği bileşeninin data ve options özelliklerini içerir.

// data: Çizgi grafiği verilerini içeren bir nesnedir. Bu nesne, etiketleri ve veri setlerini içerir.

// labels: Grafikteki x ekseni etiketlerini içeren bir dizi.
// datasets: Grafikte gösterilecek veri setlerini içeren bir dizi. Her bir veri seti, bir etiket, veri noktaları ve stil bilgilerini içerir.
// label: Veri setinin adını temsil eden bir dizedir.
// tension, pointRadius, pointBorderColor, pointBackgroundColor, borderColor, borderWidth, backgroundColor, fill, data, maxBarThickness: Grafikteki veri setinin stil özelliklerini ve verilerini tanımlar.
// options: Çizgi grafiği için seçenekleri içeren bir nesnedir. Bu nesne, grafik davranışını ve görünümünü ayarlar.

// responsive, maintainAspectRatio: Grafik boyutunun ve oranının nasıl ayarlanacağını belirler.
// plugins.legend: Efsane görünümünü yapılandırır.
// interaction: Etkileşim modunu ve davranışını yapılandırır.
// scales.y, scales.x: Y ve X eksenlerinin yapılandırmasını içerir. Her biri, ızgaranın ve işaretlerin görünümünü ve stillerini belirtir.
// Bu yapılandırma, çizgi grafiği bileşeninin görüntüsünü ve davranışını belirler.

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [
        {
          label: datasets.label,
          tension: 0,
          pointRadius: 5,
          pointBorderColor: "transparent",
          pointBackgroundColor: "rgba(255, 255, 255, .8)",
          borderColor: "rgba(255, 255, 255, .8)",
          borderWidth: 4,
          backgroundColor: "transparent",
          fill: true,
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
