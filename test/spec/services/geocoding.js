'use strict';

describe('Service: Geocoding', function () {

  // load the service's module
  beforeEach(module('distanceApp'));

  // instantiate service
  var Geocoding;
  beforeEach(inject(function (_Geocoding_) {
    Geocoding = _Geocoding_;
  }));

  it('should do something', function () {
    expect(!!Geocoding).toBe(true);
  });

});
