// Bu dosya, liste öğelerinin (list item) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// listItem adlı bir nesne tanımlıyor. Bu nesne, liste öğelerinin varsayılan özelliklerini ve stil düzenlemelerini içerir.

// defaultProps altında, disableGutters özelliğinin varsayılan olarak true olmasını sağlar. Bu, liste öğelerinin iç ve dış boşluklarının devre dışı bırakılmasını sağlar.

// Kök öğesinin altında, liste öğelerinin üst ve alt boşluklarını sıfırlayan bir styleOverrides nesnesi bulunmaktadır. Yani, liste öğelerinin üstünde ve altında hiçbir boşluk bırakılmaz.

// Bu dosya, liste öğelerinin stilini özelleştirmek için kullanılabilir. Örneğin, liste öğelerinin iç ve dış boşluklarını kaldırarak daha sıkı bir düzen elde etmek isteyebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

const listItem = {
  defaultProps: {
    disableGutters: true,
  },

  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
};

export default listItem;
