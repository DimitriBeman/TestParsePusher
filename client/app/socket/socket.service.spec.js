'use strict';

describe('Service: socket', function () {

  // load the service's module
  beforeEach(module('bookingApp'));

  // instantiate service
  var socket;
  beforeEach(inject(function (_socket_) {
    socket = _socket_;
  }));

  it('should do something', function () {
    expect(!!socket).toBe(true);
  });

});
