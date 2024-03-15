// Bu dosya, liste öğesi metinlerinin (list item text) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelediğimizde:

// listItemText adlı bir nesne tanımlıyor. Bu nesne, liste öğesi metinlerinin kök öğesi için bazı stil düzenlemeleri içerir.

// Kök öğesinin altında, liste öğesi metinlerinin üst ve alt boşluklarını sıfırlayan bir styleOverrides nesnesi bulunmaktadır. Yani, liste öğesi metinlerinin üstünde ve altında hiçbir boşluk bırakılmaz.

// Bu dosya, liste öğesi metinlerinin stilini özelleştirmek için kullanılabilir. Örneğin, liste öğesi metinlerinin üst ve alt boşluklarını kaldırarak daha sıkı bir düzen elde etmek isteyebilirsiniz. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

const listItemText = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
};

export default listItemText;
