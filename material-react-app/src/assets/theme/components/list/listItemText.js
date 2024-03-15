
// Bu dosya, liste öğesi metni (list item text) bileşeninin stilini özelleştirmek için kullanılır. root stil özelliği, liste öğesi metninin üst ve alt kenar boşluklarını sıfırlar, böylece metin diğer içeriklerle daha sıkı bir şekilde hizalanabilir veya daha kompakt bir görünüm elde edilebilir. Bu özelleştirme, liste öğelerinin metinlerinin görünümünü düzenlemek için kullanılabilir.

const listItemText = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
};

export default listItemText;
