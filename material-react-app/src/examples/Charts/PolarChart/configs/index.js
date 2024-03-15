
// Bu configs fonksiyonu, çubuk grafikleri için veri yapılandırması ve seçenekler sağlar.

// Fonksiyonun aldığı parametreler:

// labels: Grafikte gösterilecek etiketlerin dizisi.
// datasets: Grafik veri setlerini içeren bir nesne. Her bir veri seti, bir etiket, bir arka plan rengi ve ilgili verileri içerir.
// Fonksiyonun yaptığı işlemler:

// backgroundColors adında bir dizi oluşturur. Bu dizi, her veri setinin arka plan rengini içerir.
// Veri setlerinin arka plan renklerini datasets.backgroundColors dizisinden alır.
// gradients nesnesini kullanarak bu arka plan renklerini gradientlere dönüştürür. Eğer bir gradient belirtilmemişse, varsayılan olarak dark.main kullanılır.
// Veri yapılandırmasını oluştururken, her bir veri seti için etiket, arka plan renkleri ve ilgili verileri içeren bir nesne oluşturur.
// Son olarak, data ve options objelerini içeren bir nesne döndürür. Bu nesne, grafik bileşenine veri ve yapılandırma sağlamak için kullanılır.
// Bu fonksiyon, react-chartjs-2 bileşeninin Chart bileşeniyle birlikte kullanılarak çubuk grafikleri oluşturmak için tasarlanmıştır. Grafik yapılandırması için gerekli verileri sağlar ve gerektiğinde gradient arka planlarını kullanır.
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
          backgroundColor: backgroundColors,
          data: datasets.data,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
}

export default configs;
