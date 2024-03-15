// Bu configs fonksiyonu, grafiklerin görünümünü yapılandırmak için kullanılır. İki ana parametre alır:

// labels: Grafikte kullanılacak etiketlerin (label) listesi.
// datasets: Grafikte gösterilecek veri setlerinin listesi.
// Fonksiyon, bu parametrelere dayanarak bir yapı oluşturur ve bu yapıyı data ve options olmak üzere iki ana bölüme ayırır. data bölümünde, grafikte kullanılacak etiketler ve veri setleri bulunurken, options bölümünde grafik görünümünün yapılandırma seçenekleri bulunur.

// Bu grafik yapılandırma seçenekleri arasında şunlar bulunur:

// responsive: Grafik boyutunun tarayıcı penceresi boyutuna uyum sağlamasını sağlar.
// maintainAspectRatio: Grafik boyutunun en-boy oranını korumayı sağlar.
// plugins: Eklenti yapılandırmalarını içerir. Bu örnekte, efsane (legend) bileşeninin görüntülenmesi devre dışı bırakılmıştır.
// scales: Ölçek yapılandırması içerir. y ve x ekseni için ölçek yapılandırmaları bulunur. Her eksen için ayrı ayrı, çizgi özellikleri (grid) ve işaretçi (ticks) özellikleri belirlenir. Örneğin, drawBorder, display, drawOnChartArea, drawTicks, borderDash gibi çizgi özellikleri ve display, color, padding, font gibi işaretçi özellikleri ayarlanabilir.
// Görünüm yapılandırması için font özellikleri, typography temasından alınan fontFamily değeri kullanılarak belirlenir. Bu, grafiklerin sitenin genel tipografi temasıyla uyumlu olmasını sağlar.

// Son olarak, yapılandırma nesnesi döndürülür ve grafik bileşeninde kullanılmak üzere kullanılır.

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
            color: "#9ca2b7",
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
            drawOnChartArea: true,
            drawTicks: true,
          },
          ticks: {
            display: true,
            color: "#9ca2b7",
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
