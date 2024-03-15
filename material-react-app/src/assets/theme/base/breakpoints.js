//Bu dosya, Material Dashboard 2 React temasının kesme noktalarını (breakpoints) tanımlayan bir modül içerir. İçeriği şu şekildedir:

//breakpoints adlı bir nesne oluşturulur. Bu nesne, belirli ekran genişliklerine karşılık gelen kesme noktalarını içerir.
//values içindeki her bir anahtar, belirli bir ekran genişliğini temsil eder. Değerler piksel cinsinden belirtilmiştir.
//xs: 0 piksel (en küçük ekran boyutu)
//sm: 576 piksel
//md: 768 piksel
//lg: 992 piksel
//xl: 1200 piksel
//xxl: 1400 piksel
//Bu kesme noktaları, genellikle medya sorguları veya belirli ekran boyutlarına bağlı olarak bileşenlerin düzenini veya davranışını değiştirmek için kullanılır.

//Son olarak, bu breakpoints nesnesi dışa aktarılır. Bu sayede, diğer bileşenler bu kesme noktalarını kullanarak ekran boyutlarına göre uygun görünüm ve davranışları sağlayabilirler.

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
