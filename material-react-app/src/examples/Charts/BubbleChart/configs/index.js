// Bu configs fonksiyonu, bir çubuk grafik için yapılandırma objesini oluşturur. Fonksiyon, labels ve datasets parametrelerini alır.

// labels: Grafikte kullanılacak etiketlerin listesini temsil eder.
// datasets: Grafikte gösterilecek veri setlerini içerir.
// Yapılandırma objesi, data ve options olmak üzere iki ana bölümden oluşur:

// data: Grafikte kullanılacak veri setlerini ve etiketleri içerir.
// options: Grafik için yapılandırma seçeneklerini içerir. Bu seçenekler, grafik ölçeklerini, ızgaraları, eksenleri ve metin stillerini yapılandırmak için kullanılır.
// Grafikteki yatay ve dikey eksenlerin ızgaraları ve metin stilleri bu yapılandırma ile belirlenir. Örneğin, ızgara çizgilerinin görünürlüğü, rengi ve şekli gibi özellikler ayarlanabilir. Aynı şekilde, eksen etiketlerinin boyutu, rengi ve fontu gibi özellikler de yapılandırılabilir.

// Grafik yapısını ve görünümünü kontrol etmek için bu tür bir yapılandırma fonksiyonu çok kullanışlıdır. Bu sayede grafiklerin istenilen şekilde özelleştirilmesi ve uygun hale getirilmesi mümkün olur.

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
            drawTicks: false,
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
