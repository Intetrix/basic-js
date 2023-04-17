const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chainArray: [],
  error: "You can't remove incorrect link!",
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position < this.chainArray.length
    ) {
      this.chainArray.splice(position - 1, 1);
    } else {
      this.chainArray = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chainArray.reverse();
    return this;
  },
  finishChain() {
    const result = this.chainArray.join("~~");
    this.chainArray = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
