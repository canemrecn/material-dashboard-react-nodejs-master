// Bu dosya, bir liste bileşeninin stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// list adlı bir nesne tanımlıyor. Bu nesne, listenin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, liste öğelerinin üst ve alt dolgularını sıfırlayan bir padding nesnesi bulunmaktadır. Yani, listenin üstünde ve altında hiçbir boşluk bırakılmaz.

// Bu dosya, bir liste bileşeninin stilini özelleştirmek için kullanılabilir. Örneğin, listenin üst ve alt boşluklarını sıfırlayarak daha sıkı bir düzen elde etmek isteyebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

const list = {
  styleOverrides: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
};

export default list;
