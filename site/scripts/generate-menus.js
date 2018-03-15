const fs = require('fs');
const path = require('path');

const menuOutputPath = path.join(__dirname, '../data/menus.json');
const categoryNames = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../data/category-names.json')
  , 'utf8')
);

module.exports = function (siteMetadata) {
  const menus = {};

  // Iterate over sites
  Object.keys(siteMetadata).forEach(siteName => {
    const siteMenu = {};

    // Iterate over sections
    Object.keys(siteMetadata[siteName]).forEach(sectionKey => {
      const menu = [];
      const categories = {};
      const sectionMetadata = siteMetadata[siteName][sectionKey];

      // Iterate over posts
      Object.keys(sectionMetadata)
      //       .sort((a, b) => {
      //         const aPost = sectionMetadata[a];
      //         const bPost = sectionMetadata[b];
      // console.log(aPost.id, aPost.next, bPost.id, bPost.next)
      //         // If explicit next, sort
      //         if (aPost.next || bPost.next) {
      //           if (aPost.next === bPost.id) {
      //             return -1;
      //           } else if (bPost.next === aPost.id) {
      //             return 1;
      //           }
      //         }
      
      //         return 0;
      //       })
        .forEach(postKey => {
          const { id, title, category } = sectionMetadata[postKey];
  
          // This post has a category
          if (category) {
            // If category data doesn't exist
            if (!categories[category]) {
              categories[category] = {
                id: category,
                title: categoryNames[category],
                posts: []
              };
              menu.push(categories[category]);
            }
  
            if (id !== category) {
              categories[category].posts.push({ id, title });
            }
  
          // Or stand-alone post
          } else {
            menu.push({ id, title });
          }
        });

      siteMenu[sectionKey] = menu;

      if (sectionKey === 'blog') menu.reverse();
    });

    menus[siteName] = siteMenu;
  });

  fs.writeFile(menuOutputPath, JSON.stringify(menus), (err) => {
    const msg = (!err) ? 'Menus created' : err;
  });
};
