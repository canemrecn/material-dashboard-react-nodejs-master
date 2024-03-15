
// Bu dosya, linklerin (anchor elementleri) görünümünü özelleştiren stilleri içerir.

// link objesi içinde defaultProps özelliği belirtilir ve varsayılan özellikler atanır:

// underline: Link altı çizgisinin olup olmayacağı belirlenir. Burada none değeri atanarak altı çizgi kaldırılır.
// color: Link rengi belirlenir. Burada inherit değeri atanarak link rengi, içerdiği üst öğenin rengine eşitlenir.
// Bu stil tanımları, linklerin altı çizgisinin kaldırılması ve renginin üst öğeden miras alınması sağlanarak, daha tutarlı bir görünüm elde edilmesini sağlar.

const link = {
  defaultProps: {
    underline: "none",
    color: "inherit",
  },
};

export default link;
