// Bu dosya, bir liste bileşeninin (list) stilini özelleştirmek için kullanılır. Özellikle, liste içeriğinin üst ve alt kenar boşluklarını sıfırlamak için padding özelliği üzerinde bir özelleştirme yapar. Böylece, listenin üst ve alt kenar boşlukları kaldırılmış olur. Bu stil ayarları, listenin içeriğini daha sıkı bir şekilde paketlemek veya diğer bileşenlerle daha iyi hizalamak için kullanılabilir.

const list = {
  styleOverrides: {
    padding: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
};

export default list;
