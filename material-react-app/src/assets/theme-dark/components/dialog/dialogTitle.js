// Bu dosya, Material Dashboard 2 React teması için diyalog başlığı (dialogTitle) bileşeninin stilini özelleştiriyor. dialogTitle nesnesi, styleOverrides adında bir özellik içerir. Bu özellik, diyalog başlığının kök (root) elemanına uygulanacak CSS stil tanımlarını içerir. Bu stil tanımları, diyalog başlıklarının görünümünü ve hissini tema genelinde tutarlı bir şekilde özelleştirmek için kullanılır.

// Stil Özellikleri:
// padding: Diyalog başlığının etrafındaki iç boşluğu (padding) ayarlar. pxToRem fonksiyonu kullanılarak, piksel cinsinden verilen değer rem birimine dönüştürülür. Bu dönüştürme, farklı ekran boyutları ve çözünürlüklerde daha iyi bir ölçeklenebilirlik ve erişilebilirlik sağlar.
// fontSize: Başlığın font boyutunu ayarlar. typography nesnesinden alınan size.xl (extra large) değeri kullanılarak, diyalog başlığının okunabilirliğini artırmak ve görsel olarak dikkat çekici olmasını sağlamak amaçlanır.
// Kullanım Amacı:
// Bu dosya, Material Dashboard 2 React kullanılarak geliştirilen uygulamalarda diyalog başlıklarının stilini özelleştirmek için kullanılır. Özelleştirme, diyalog başlıklarının genel kullanıcı arayüzü tasarımıyla uyumlu olmasını ve belirli bir görsel önem taşımasını sağlamak amacı taşır. Bu özellikle, uygulamanın kullanıcı deneyimini iyileştirmek ve kullanıcıların dikkatini diyalog içeriğine çekmek için önemlidir.

// Fonksiyonlar ve Stil Tanımları:
// pxToRem Fonksiyonu: Bu fonksiyon, stil tanımlarında ölçeklenebilirlik ve erişilebilirlik sağlamak amacıyla piksel değerlerini rem birimine dönüştürmek için kullanılır.
// typography Modülü: Uygulamanın genelinde kullanılan tipografik stil değerlerini içerir. Bu modül, font boyutları gibi stil özelliklerini merkezi bir yerden yönetmek ve tema genelinde tutarlı bir tipografik stil sağlamak için kullanılır.
// Bu yapı, Material Dashboard 2 React temasının esneklik ve özelleştirilebilirlik özelliklerini gösterir, geliştiricilere uygulamanın görsel tasarımını kolayca özelleştirebilme olanağı sunar.

// Material Dashboard 2 React base styles
import typography from "assets/theme-dark/base/typography";

// Material Dashboard 2 React helper functions
import pxToRem from "assets/theme-dark/functions/pxToRem";

const { size } = typography;

const dialogTitle = {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};

export default dialogTitle;
