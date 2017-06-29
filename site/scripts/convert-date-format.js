/*
Simple script to convert YYYYMMDD format into eg 28 Jan 2017 format
*/
const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

module.exports = function (yyyymmdd) {
  const year = yyyymmdd.substring(2, 4);
  const month = parseInt(yyyymmdd.substring(4, 6));
  const day = parseInt(yyyymmdd.substring(6, 8));

  return `${day} ${months[month]} ${year}`;
};
