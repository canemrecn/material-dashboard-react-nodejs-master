
// Bu dosya, buttonBase adında bir nesne tanımlar. Bu nesne, genellikle buton bileşenlerinin temel özelliklerini belirler. İçeriği incelersek:

// defaultProps özelliği, butonların varsayılan özelliklerini belirtir. Bu dosyada, disableRipple özelliği varsayılan olarak false olarak ayarlanmıştır. Bu, butonların varsayılan olarak "ripple" efektini (tıklama efekti) etkinleştireceği anlamına gelir. Bu efekt, butona tıkladığınızda butonun etrafında dalgaların oluşmasını sağlar.

// buttonBase nesnesi, butonların temel özelliklerini belirlemek için kullanılabilir. Bu dosya, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır. Özellikle buton bileşenlerinin varsayılan davranışlarını ve görünümlerini özelleştirmek için kullanılır.

const buttonBase = {
  defaultProps: {
    disableRipple: false,
  },
};

export default buttonBase;
