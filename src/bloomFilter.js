var BloomFilter = function(numberOfSlot) {
  this.slot = Array.apply(null, Array(numberOfSlot)).map(Number.prototype.valueOf, 0);
}

BloomFilter.prototype.addInput = function(input) {
  this._setIndex(input);
};

BloomFilter.prototype.contains = function(input) {
  var result = this._getHashResults(input);
  return this.slot[result.fnv1s] === 1 || this.slot[result.murmur] === 1;
   // || this.slot[result.hash] === 1;
};

BloomFilter.prototype._setIndex = function(input) {
  var result = this._getHashResults(input);
  this.slot[result.fnv1s] = 1;
  this.slot[result.murmur] = 1;
  // this.slot[result.hash] = 1;
};

BloomFilter.prototype._getHashResults = function(input) {
  var result = {};

  result.fnv1s = fnv1s(input) % this.slot.length;
  result.murmur = murmur(input) % this.slot.length;
  // result.hash = getIndexBelowMaxForKey(input, this.slot.length);

  return result;
};

