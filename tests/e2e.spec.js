describe('template', function() {
  beforeAll(function() {
    for (var id in __html__) {
      document.write('<script type="text/html" id="' + id + '">' + __html__[id] + '</script>');
    }
  });

  it('should define __html__', function() {
    expect(__html__).toBeDefined();
  });

  it('should expose the templates to __html__', function() {
    expect(__html__.template_1).toBeDefined();
    expect(__html__.template_2).toBeDefined();
    expect(__html__.template_3).toBeDefined();
  });


  it('should have templates added to dom', function() {
    for (var id in __html__) {
      expect(document.querySelector('#template_1').innerHTML.trim()).toEqual('<div class="">Hello Text</div>');
    }
  });


});
