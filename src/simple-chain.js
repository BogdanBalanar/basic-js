const chainMaker = {
  chain : [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || this.chain[position - 1] === undefined) {
      this.chain.length = 0;
      throw new Error('err');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const res = '( ' + this.chain.map((element) => '' + element).join(' )~~( ') + ' )';
    this.chain.length = 0;
    return res;
  }
};
module.exports = chainMaker;