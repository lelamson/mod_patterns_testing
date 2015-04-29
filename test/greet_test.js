'use strict';

var expect = require('chai').expect;
var greet = require('../greet');
var greetCli = require('../greet_cli');

describe('greet', function() {
  it('should greet the person', function() {
    expect(greet('Raynor')).to.eql('hello Raynor');
  });
});

describe('greetCli', function() {
  describe('passing name to function', function() {
    it('should greet with name', function() {
      expect(greetCli('Raynor')).to.eql('hello Raynor');
    });
  });

  describe('name from argvs', function() {
    before(function() {
      process.argv = ['node', 'package', 'Kerrigan'];
    });

    after(function() {
      process.argv = ['node', 'package', 'Kerrigan'];
    });

    it('should greet from command line', function() {
      expect(greetCli()).to.eql('hello Kerrigan');
    });
  });

});

