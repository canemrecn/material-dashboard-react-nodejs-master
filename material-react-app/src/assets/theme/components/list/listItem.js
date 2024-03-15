
// Bu dosya, bir liste öğesi (list item) bileşeninin stilini özelleştirmek için kullanılır. disableGutters özelliği, liste öğesinin iç boşluklarını devre dışı bırakır, yani içeriğin kenarlara sıfıra yakın hizalanmasını sağlar. root stil özelliği ise liste öğesinin üst ve alt kenar boşluklarını sıfırlar, böylece diğer öğelerle daha sıkı bir şekilde hizalanabilir. Bu özelleştirmeler, liste öğelerinin içeriğini daha kompakt bir şekilde göstermek veya diğer bileşenlerle daha iyi hizalamak için kullanılabilir.

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
