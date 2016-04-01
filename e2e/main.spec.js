'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('/index.html');
    page = require('./main.po');
  });

  it('should show home page with content of babylone data', function() {
    expect(page.h3El.getText()).toBe('Book a Consultation');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/dribbble_doc.png$/);
  });

  it('should list more than 5 awesome things', function () {
    expect(page.thumbnailEls.count()).toBeGreaterThan(5);
  });
});
