'use strict';

describe('Book Consultation View', function () {
  var page;

  beforeEach(function () {
    browser.get('/#/book');
    page = require('./bookconsultation.po');
  });

  // @todo component test for identifying the list of patients
  it('should display patients', function() {
    expect(page.patientsList().toBe();
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/dribbble_doc.png$/);
  });

  // @todo component test for selection of first patient
  it('should able to select only one patient from the list', function() {

  });

  // @todo component test for selection of first patient
  it('should able to select only one health specialist from the list', function() {

  });

  // @todo component test for selection of first patient
  it('should able to click the book consultation button after selection of all the required fields in the page', function() {

  });
});
