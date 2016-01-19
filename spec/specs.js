describe("checker", function() {
  it("is equilateral for all sides equal", function() {
    expect(checker(4,4,4)).to.equal(true);
  });
});
