
// Bu configs fonksiyonu, bir çubuk veya çizgi grafiği için veri ve seçenekler oluşturur. Fonksiyon, grafik için gerekli verileri ve yapılandırma seçeneklerini alır ve bu verilere dayalı olarak bir data ve options nesnesi döndürür.

// İşlevin içeriği şu şekildedir:

// labels: Grafikteki veri etiketlerini temsil eden bir dizi.
// datasets: Grafikteki veri kümelerini temsil eden bir dizi. Her bir veri kümesi, grafiğin bir çubuğunu veya çizgisini oluşturan verileri içerir.
// Fonksiyon, döndürülen nesnede iki ana anahtara sahiptir:

// data: Grafik verilerini temsil eden bir nesne. Bu nesne, labels ve datasets içerir.
// options: Grafik yapılandırma seçeneklerini temsil eden bir nesne. Bu nesne, grafik özelliklerini (örneğin, etkileşim, ölçekler ve ızgara) içerir.
// Örneğin, bu yapılandırma, çubuk veya çizgi grafiklerinde görüntülemek için yatay ve dikey eksenlerin ölçeklerini ve ızgaralarını yapılandırır. Ayrıca, grafiklerin etkileşim özelliklerini, ölçek ayarlarını ve ızgara renklerini belirler.

// Bu fonksiyon, grafik oluştururken yaygın olarak kullanılan özelleştirme seçeneklerini sağlar ve grafiklerin görünümünü ve davranışını istenen şekilde yapılandırmak için kullanılabilir.

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
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            padding: 10,
            color: "#9ca2b7",
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
            display: true,
            drawOnChartArea: true,
            drawTicks: true,
            borderDash: [5, 5],
            color: "#c1c4ce5c",
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
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
