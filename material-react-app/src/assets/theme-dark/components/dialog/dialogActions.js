// Bu kod parçası, Material Dashboard 2 React teması için diyalog eylemleri bölümünün stil geçersiz kılmalarını tanımlar. dialogActions nesnesi, diyalog penceresinin eylem butonlarının bulunduğu bölüm için temel padding stilini ayarlar. Bu stil tanımı, kullanıcı arayüzünüzdeki diyalog pencerelerinin eylem butonlarının görsel düzenini ve boşluklandırmasını özelleştirmek için kullanılır.

// Anahtar Stil Özellikleri:
// root: Diyalog eylemleri bölümünün kök elemanı için stil ayarlarını içerir. Bu ayar, eylem butonlarının etrafındaki boşluğu (padding) belirler. pxToRem fonksiyonu kullanılarak verilen padding değeri, tasarımın farklı ekran boyutları ve çözünürlüklerde tutarlı kalmasını sağlamak için rem birimine dönüştürülür.
// Kullanım Senaryoları:
// Bu stil geçersiz kılmaları, uygulamanızdaki diyalog pencerelerindeki eylem butonlarının düzenini ve aralarındaki boşluğu yönetmek için kullanılır. Örneğin, bir kullanıcı formu gönderme, bir uyarıyı onaylama veya bir işlemi iptal etme gibi eylemler için kullanılan butonlar bu bölümde yer alabilir. Bu stil ayarı, butonların kullanıcılar için kolay erişilebilir ve görsel olarak çekici olmasını sağlar.

// pxToRem Fonksiyonunun Kullanımı:
// pxToRem Fonksiyonu: Bu fonksiyon, piksel cinsinden verilen bir değeri, kullanıcıların tarayıcı veya cihaz ayarlarına bağlı olarak ölçeklenebilen rem birimine dönüştürür. Bu yaklaşım, responsive (duyarlı) tasarımın önemli bir parçasıdır ve uygulamanın farklı cihazlarda ve ekran boyutlarında tutarlı bir şekilde görüntülenmesine katkıda bulunur.
// Bu tanımlar, Material Dashboard 2 React teması kullanılarak geliştirilen projelerde, diyalog pencerelerinin eylem bölümlerinin görsel tasarımını özelleştirmek ve yönetmek için etkili bir yöntem sunar.

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const dialogActions = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
    },
  },
};

export default dialogActions;
