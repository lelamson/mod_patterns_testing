'use strict';

var expect = require('chai').expect;
var greet = require('../greet');

describe('greet', function() {
  it('should greet the person', function() {
    expect(greet.greet('Raynor')).to.eql('hello Raynor');
  })

});
