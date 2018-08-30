const fs = require('fs');
const path = require('path');

const menuOutputPath = path.join(__dirname, '../data/menus.json');
const categoryNames = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/category-names.json'), 'utf8')
);

module.exports = function(siteMetadata) {
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
      Object.keys(sectionMetadata).forEach(postKey => {
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

      // Sort posts - adapted/butchered from https://blog.theodorejb.me/linked-list-sorting/
      menu.sort((a, b) => (a.id < b.id ? -1 : 1)).forEach(menuItem => {
        if (menuItem.posts) {
          const unsortedList = [];
          const sortedList = [];
          const map = new Map();
          let currentPost = null;

          menuItem.posts.forEach((post, i) => {
            const { next } = sectionMetadata[post.id];

            if (!next || !sectionMetadata[next]) {
              unsortedList.push(post);
            } else {
              const nextIndex = menuItem.posts.findIndex(
                ({ id }) => id === next
              );
              const isFirstPost =
                menuItem.posts.find(({ id }) => {
                  const thisPost = sectionMetadata[id];
                  return post.id === thisPost.next;
                }) === undefined;
              if (isFirstPost) currentPost = post;

              if (nextIndex > -1) {
                map.set(post.id, nextIndex);
              } else {
                throw new Error(`${post.id} incorrectly linked to ${next}`);
              }
            }
          });

          const numPosts = menuItem.posts.length;
          const numUnsorted = unsortedList.length;
          const numToSort = numPosts - numUnsorted;

          if (numToSort && currentPost) {
            sortedList.push(currentPost);
            const removeIndex = unsortedList.findIndex(
              ({ id }) => id === currentPost.id
            );
            if (removeIndex >= 0) {
              unsortedList.splice(removeIndex, 1);
            }

            while (sortedList.length < numToSort) {
              const nextPost = menuItem.posts[map.get(currentPost.id)];
              sortedList.push(nextPost);
              currentPost = nextPost;
            }

            menuItem.posts = [...sortedList, ...unsortedList];
          }
        }
      });

      siteMenu[sectionKey] = menu;

      if (sectionKey === 'blog') menu.reverse();
    });

    menus[siteName] = siteMenu;
  });

  fs.writeFile(menuOutputPath, JSON.stringify(menus), err => {
    const msg = !err ? 'Menus created' : err;
  });
};
