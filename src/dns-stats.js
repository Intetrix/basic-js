const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const ogj = {};

  for (let el of domains) {
    const secondDomains = el.split(".").reverse();
    let current = "";

    for (let el of secondDomains) {
      current += "." + el;

      if (ogj.hasOwnProperty(current)) {
        ogj[current]++;
      } else {
        ogj[current] = 1;
      }
    }
  }

  return ogj;
}

module.exports = {
  getDNSStats,
};
