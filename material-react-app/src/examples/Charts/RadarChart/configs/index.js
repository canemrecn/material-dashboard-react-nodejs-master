
// Bu configs fonksiyonu, grafik veri setlerini ve etiketlerini alarak bir veri ve yapılandırma nesnesi döndürmektedir. Bu nesne, grafik bileşeninin data ve options özelliklerini içermektedir.

// labels: Grafikteki veri noktalarını etiketlemek için kullanılan dizidir.
// datasets: Grafikte gösterilecek veri setlerini içeren bir dizi nesnedir.
// Fonksiyon, bu bilgileri kullanarak bir veri nesnesi oluşturur. Bu veri nesnesi, etiketleri ve veri setlerini içerir. Daha sonra, bir yapılandırma nesnesi oluşturulur. Bu yapılandırma nesnesi, grafik bileşeninin görünümünü ve davranışını belirleyen seçenekleri içerir. Bu örnekte, efsaneyi gizlemek için legend seçeneği kullanılmıştır.

// Son olarak, configs fonksiyonu bu veri ve yapılandırma nesnelerini birleştirir ve döndürür.

// Bu yapılandırma, grafik bileşenini özelleştirmek ve istenilen görünümü elde etmek için kullanılabilir.

function configs(labels, datasets) {
  return {
    data: {
      labels,
      datasets: [...datasets],
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
