//Bu dosya, genel tarayıcı stil ayarlarını içerir ve genellikle uygulamanın tamamında kullanılan global CSS kurallarını tanımlar. İçeriği şu şekildedir:

//html: Temel HTML öğelerine ilişkin bazı stilleri tanımlar. Örneğin, düzgün bir kaydırma davranışı sağlamak için scrollBehavior özelliği tanımlanır ve yatay taşmayı engellemek için overflowX özelliği gizlenir.
//*, *::before, *::after: Tüm öğelerin (ve öncesi ve sonrası ile birlikte) dönüşüm kutularının kenar boşluklarını ve dolgularını sıfırlar.
//a, a:link, a:visited: Tüm bağlantı öğelerinin varsayılan bağlantı vurgusunu kaldırır.
//.link: Özel olarak belirlenmiş .link sınıfına sahip bağlantı öğelerinin renk geçişlerini belirtir. Öncelikle, bağlantılar siyah (dark.main) renkte olacak şekilde ayarlanır. Ancak fare üzerine gelindiğinde veya odaklandığında, rengi info.main olan bir geçiş efekti uygulanır.
//Bu dosya genellikle bir ThemeProvider bileşeni içerisinde GlobalStyles veya benzeri bir bileşenle kullanılır. Bu şekilde, uygulamanın herhangi bir bileşeni için genel stil tanımlarını etkinleştirmek ve tutarlılık sağlamak mümkün olur.

// Material Dashboard 2 React Base Styles
import colors from "assets/theme/base/colors";

const { info, dark } = colors;

const globals = {
  html: {
    scrollBehavior: "smooth",
    overflowX: "hidden",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none !important",
  },
  "a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited": {
    color: `${dark.main} !important`,
    transition: "color 150ms ease-in !important",
  },
  "a.link:hover, .link:hover, a.link:focus, .link:focus": {
    color: `${info.main} !important`,
  },
};

export default globals;
