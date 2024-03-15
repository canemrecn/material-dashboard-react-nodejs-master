
// Bu dosya, bir uygulama çubuğunun (app bar) stilini özelleştirir.

// defaultProps: Bu özellik, uygulama çubuğunun varsayılan özelliklerini belirler. Burada color özelliği "transparent" olarak ayarlanmış, yani uygulama çubuğu varsayılan olarak şeffaf bir arka plana sahip olacaktır.
// styleOverrides: Bu özellik, uygulama çubuğunun stilini özelleştirir. root içinde belirtilen stil özellikleri, uygulama çubuğunun kök öğesine (root element) uygulanır. Bu örnekte, boxShadow özelliği "none" olarak ayarlanmış, yani uygulama çubuğu gölgesiz olacaktır.
// Bu özelleştirmeler, uygulama çubuğunun görünümünü ve davranışını belirleyerek uygulamanın genel tasarımını kişiselleştirmek için kullanılabilir.







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
