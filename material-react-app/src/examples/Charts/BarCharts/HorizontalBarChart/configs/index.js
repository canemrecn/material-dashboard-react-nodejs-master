// Bu kod, bir grafik yapılandırması oluşturan bir configs fonksiyonunu tanımlar. Bu fonksiyon, grafik verilerini (labels ve datasets) alır ve bu verilere uygun bir yapılandırma nesnesi döndürür.

// Fonksiyon, iki ana bölümden oluşur:

// data: Grafik verilerini içeren bir nesnedir. Bu nesne labels ve datasets özelliklerini içerir. labels, grafikteki etiketleri temsil ederken, datasets veri kümelerini temsil eder.

// options: Grafik için seçenekleri içeren bir nesnedir. Bu nesne, grafik görünümü, ölçekler ve eksenlerin görünümü gibi çeşitli grafik özelliklerini tanımlar.

// Özellikle, options içinde aşağıdaki anahtarlar bulunur:

// indexAxis: Grafik verilerinin dizin ekseni. Bu örnekte, yatay ekseni (x) kullanılmaktadır.
// responsive: Grafik boyutlarının duyarlı olup olmadığını belirler.
// maintainAspectRatio: Grafik boyutları ile ilgili en boy oranının korunup korunmayacağını belirler.
// plugins: Grafik üzerine eklenen eklentileri belirler. Bu örnekte, efsane (legend) bileşeninin görünürlüğü false olarak ayarlanmıştır.
// scales: Grafik ölçeklerini tanımlar. Bu örnekte, yatay (x) ve dikey (y) eksenlerin görünümü ve etiketleri belirlenmiştir.
// configs fonksiyonu, grafik oluşturma işlemi sırasında kullanılabilecek bir grafik yapılandırma nesnesini döndürür.

// Bu yapılandırma nesnesi, grafik kütüphaneleri (örneğin, Chart.js gibi) ile kullanılarak belirtilen grafik türlerine uygun olarak kullanılabilir.

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [...datasets],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
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
            display: false,
            drawOnChartArea: true,
            drawTicks: true,
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
