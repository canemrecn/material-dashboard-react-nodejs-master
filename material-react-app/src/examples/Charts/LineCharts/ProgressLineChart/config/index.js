// Bu kod bir çizgi grafiği yapılandırması sağlayan bir fonksiyon içerir. Bu fonksiyon, çizgi grafiğinin veri setlerini, renklerini, etiketlerini ve diğer ayarlarını belirler.

// Fonksiyonun parametreleri şunlardır:

// color: Çizgi grafiğinin rengini belirten bir dizedir. Bu renk, verilen renk paletindeki gradyanlardan seçilir.
// labels: Çizgi grafiğinin eksen etiketlerini temsil eden bir dizi.
// label: Çizgi grafiğinin veri seti etiketini temsil eden bir dizedir.
// data: Çizgi grafiğinin veri noktalarını temsil eden bir dizi.
// Fonksiyon, verilen parametrelere dayanarak bir yapı döndürür. Bu yapı, çizgi grafiğinin veri ve görüntü ayarlarını içerir. Örneğin, çizgi rengi, nokta boyutu, çizgi kalınlığı, eksenlerin görünürlüğü ve etiketlerin stili gibi ayarlar bu yapı içinde belirtilir.

// Son olarak, configs fonksiyonu, çizgi grafiğinin yapılandırmasını sağlamak üzere kullanılır. Bu yapı, çizgi grafiğinin görünümünü ve davranışını belirlemek için kullanılır.

// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

const { gradients } = colors;

function configs(color, labels, label, data) {
  return {
    data: {
      labels,
      datasets: [
        {
          label,
          tension: 0,
          pointRadius: 3,
          pointBackgroundColor: gradients[color] ? gradients[color].main : gradients.info.main,
          borderColor: gradients[color] ? gradients[color].main : gradients.info.main,
          borderWidth: 4,
          backgroundColor: "transparent",
          maxBarThickness: 6,
          fill: true,
          data,
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
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
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
      },
    },
  };
}

export default configs;
