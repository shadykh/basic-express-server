'use strict';

const logger = require('../src/middleware/logger');

describe('logger middleware', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {

    consoleSpy = jest.spyOn(console, 'log');

  });
    
  afterEach(() => {

    consoleSpy.mockRestore();

  });
    
  it('should log all get requests', () => {

    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
    expect(next).toHaveBeenCalledWith();

  });
});