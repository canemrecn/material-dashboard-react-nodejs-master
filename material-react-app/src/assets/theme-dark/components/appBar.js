// Bu dosya, bir uygulamanın app bar'ının (üst çubuğu) stilini özelleştirmek için bazı düzenlemeler içerir. İçeriği incelendiğinde:

// appBar adında bir nesne tanımlanmıştır. Bu nesne, app bar bileşeninin varsayılan özelliklerini ve stil düzenlemelerini içerir.

// defaultProps altında, app bar'ın varsayılan özellikleri belirtilmiştir. Bu örnekte, app bar'ın rengi "transparent" olarak ayarlanmıştır. Yani, app bar'ın arka planı şeffaf olacaktır.

// styleOverrides altında, app bar'ın kök öğesi için stil düzenlemeleri tanımlanmıştır. Bu örnekte, app bar'ın gölgesi "none" olarak ayarlanmıştır. Yani, app bar'ın gölgesi olmayacaktır.

// Bu dosya, app bar bileşeninin arka plan rengi ve gölgesi gibi bazı temel özelliklerini belirler. Bu özellikler uygulamanın genel görünümünü etkiler ve özelleştirilebilir bir tasarım sağlar. Bu tür stil dosyaları, genellikle bir tema oluştururken veya bir bileşen kitaplığına katkı sağlarken kullanılır.

const appBar = {
  defaultProps: {
    color: "transparent",
  },

  styleOverrides: {
    root: {
      boxShadow: "none",
    },
  },
};

export default appBar;
