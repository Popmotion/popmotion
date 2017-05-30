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

  // Iterate over top-level sections
  Object.keys(siteMetadata).forEach((sectionKey) => {
    const menu = [];
    const categories = {};
    const sectionMetadata = siteMetadata[sectionKey];

    // Iterate over posts
    Object.keys(sectionMetadata).forEach((postKey) => {
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

        categories[category].posts.push({ id, title });

      // Or stand-alone post
      } else {
        menu.push({ id, title });
      }
    });

    menus[sectionKey] = menu;
  });

  fs.writeFile(menuOutputPath, JSON.stringify(menus), (err) => {
    const msg = (!err) ? 'Menus created' : err;
    console.log(msg);
  });
};
