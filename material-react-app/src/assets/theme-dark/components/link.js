
// Bu dosya, link bileşeninin stillerini belirler. İçeriği incelendiğinde:

// link nesnesi, link bileşeninin varsayılan özelliklerini belirler.
// underline: Link altı çizgisinin varsayılan durumunu belirtir. Burada "none" değeri ile altı çizgiyi kaldırıldığı belirtilmiştir.
// color: Link metninin varsayılan renk değerini belirtir. "inherit" değeri, link renginin üst öğeden (genellikle bir üst düğmeden veya ana tema renginden) devralınmasını sağlar.
// Bu dosya, link bileşeninin varsayılan davranışını ve görünümünü belirleyerek linkleri özelleştirmek için kullanılır. Bu örnekte, altı çizgi kaldırılmış ve link rengi üst öğeden devralınmıştır.

const link = {
  defaultProps: {
    underline: "none",
    color: "inherit",
  },
};

export default link;
