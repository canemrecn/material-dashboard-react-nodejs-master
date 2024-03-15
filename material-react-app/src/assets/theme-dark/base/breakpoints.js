// Bu kod parçası, bir web uygulamasında responsif tasarım için kullanılan ekran boyutu kırılım noktalarını (breakpoints) tanımlar. breakpoints nesnesi, farklı ekran boyutları için minimum piksel değerlerini içeren bir values nesnesi içerir. Bu kırılım noktaları, uygulamanın farklı ekran genişliklerinde nasıl davranacağını belirlemek için kullanılır. Bu sayede, uygulamanızın mobil, tablet, laptop ve büyük ekranlı cihazlar gibi çeşitli cihazlarda düzgün bir şekilde görüntülenmesini sağlayabilirsiniz.

// Kırılım Noktaları ve Kullanım Alanları
// xs (extra small): 0 piksel ve üzeri. Genellikle mobil cihazlar için kullanılır.
// sm (small): 576 piksel ve üzeri. Küçük boyutlu tabletler ve büyük ekranlı telefonlar için kullanılabilir.
// md (medium): 768 piksel ve üzeri. Tabletler ve küçük boyutlu laptop ekranları için uygun.
// lg (large): 992 piksel ve üzeri. Orta boy laptop ve masaüstü monitörler için kullanılır.
// xl (extra large): 1200 piksel ve üzeri. Büyük ekranlı laptoplar ve masaüstü monitörler için ideal.
// xxl (extra extra large): 1400 piksel ve üzeri. Çok büyük ekranlı masaüstü monitörler için kullanılır.
// Bu değerler, CSS medya sorgularında veya JavaScript'te dinamik olarak stil uygulamak için kullanılabilir. Örneğin, Material-UI gibi bazı UI kütüphaneleri, bu kırılım noktalarını kendi içindeki theme nesnesine entegre eder ve geliştiricilerin bu değerlere erişimini kolaylaştırır. Böylece, farklı ekran boyutları için özelleştirilmiş düzenler ve stillemeler yapmak daha basit ve tutarlı hale gelir.

const breakpoints = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  },
};

export default breakpoints;
