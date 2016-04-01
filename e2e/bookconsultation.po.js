/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var BookConsultationPage = function() {
  this.jumbEl = element(by.css('.jumbotron'));
  this.patientsList = this.jumbEl.element(by.css('patients'));
  this.doctorsList = this.jumbEl.element(by.css('doctors'));
};

module.exports = new MainPage();
