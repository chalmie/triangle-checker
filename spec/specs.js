describe('checker', function() {
  it("is equilateral for all sides equal", function() {
    expect(checker(4,4,4)).to.equal('equilateral');
  });

  it("is not a triangle", function() {
    expect(checker(1,1,4)).to.equal("not a triangle");
  });
  it("is a isosceles triangle", function() {
    expect(checker(3,3,5)).to.equal("isosceles");
  });
  it("is a scalene triangle", function() {
    expect(checker(3,4,5)).to.equal("scalene");
  });
});
