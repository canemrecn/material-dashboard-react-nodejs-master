// Bu dosya, bir dizi veri seti ve etiketlerle birlikte verilen bir dizi veriyle birlikte bir dizi yapılandırma seçeneği üreten bir fonksiyon içerir. Bu yapılandırma seçenekleri, bir grafik bileşenine verilecek veri ve görüntüleme seçeneklerini içerir.

// İşlevin imzasına bakacak olursak:

// javascript
// Copy code
// function configs(labels, datasets, cutout = 60)
// Bu işlev, üç argüman alır:

// labels: Grafikteki veri noktalarının etiketleri.
// datasets: Grafikte gösterilecek veri setlerinin bir nesnesi. Bu nesne, her bir veri setinin etiketi, veri noktaları ve arka plan renkleri gibi özellikleri içerir.
// cutout: Daire şeklindeki grafiklerde (örneğin pasta grafikleri) iç boşluğun yüzdesi.
// İşlev, bu argümanlara dayanarak bir veri nesnesi ve bu veri için grafik seçeneklerini içeren bir yapı döndürür. Bu seçenekler, grafik bileşeninin nasıl görüntüleneceğini ve davranacağını belirler. Örneğin, grafikteki etiketlerin görünürlüğü, eksenlerin özellikleri ve etkileşim seçenekleri gibi özellikleri kontrol eder.

// Bu dosya, verilen veri setleri ve etiketler için önceden tanımlanmış bir dizi yapılandırma seçeneği sağlayarak, grafik bileşenlerinin hızlı bir şekilde oluşturulmasını sağlar. Bu şekilde, aynı yapılandırmayı tekrar tekrar kullanarak farklı grafikler oluşturabilirsiniz.

/* eslint-disable no-dupe-keys */
// Material Dashboard 2 React base styles
import colors from "assets/theme/base/colors";

const { gradients, dark } = colors;

function configs(labels, datasets, cutout = 60) {
  const backgroundColors = [];

  if (datasets.backgroundColors) {
    datasets.backgroundColors.forEach((color) => {
      if (gradients[color]) {
        if (color === "info") {
          backgroundColors.push(gradients.info.main);
        } else {
          backgroundColors.push(gradients[color].state);
        }
      } else {
        backgroundColors.push(dark.main);
      }
    });
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
          cutout,
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
