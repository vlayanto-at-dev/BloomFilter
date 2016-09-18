describe('bloom filter', function() {
  var bloomFilter;

  beforeEach(function() {
    bloomFilter = new BloomFilter(18);
  });

  it('should have methods named "addInput" and "contains"', function() {
    expect(bloomFilter.addInput).to.be.a('function');
    expect(bloomFilter.contains).to.be.a('function');
  });

  it('should validate true when inputs possible exist in a bloomFilter', function() {
    bloomFilter.addInput('Susan Sarandon');
    bloomFilter.addInput('Danny Glover');
    expect(bloomFilter.contains('Danny Glover')).to.equal(true);
    expect(bloomFilter.contains('Susan Sarandon')).to.equal(true);
  });

  it('should validate false when inputs don\'t exist in a bloomFilter', function() {
    bloomFilter.addInput('Hello');
    bloomFilter.addInput('World');
    expect(bloomFilter.contains('Danny Glover')).to.equal(false);
    expect(bloomFilter.contains('Susan Sarandon')).to.equal(false);
  });
});
