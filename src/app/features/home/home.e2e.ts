describe('Home', function() {

  beforeEach(function() {
      browser.get('');
  });

  it('should have correct header text', function() {
      expect(element(by.css('app h1:first-child')).getText()).toEqual('Angular 2 Seed Project');
  });

});
