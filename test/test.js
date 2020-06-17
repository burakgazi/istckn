const istckn = require('../index');

/**
 *
 * All valid TCKN numbers are generated using https://www.simlict.com
 *
 */

test('Valid TCKN(Number)', () => {
  expect(istckn(68326884780)).toBe(true);
});

test('Valid TCKN(String)', () => {
  expect(istckn('55661805624')).toBe(true);
});

test('Invalid TCKN(Number)', () => {
  expect(istckn(99738442121)).toBe(false);
});

test('Invalid TCKN(Number)', () => {
  expect(istckn(55661805625)).toBe(false);
});
test('Invalid TCKN(String)', () => {
  expect(istckn('10688105882')).toBe(false);
});

test('Invalid TCKN-Startin with 0(String)', () => {
  expect(istckn('02688105884')).toBe(false);
});

test('Invalid TCKN(Long Number)', () => {
  expect(istckn(1068810587412)).toBe(false);
});

test('Invalid TCKN(Long string)', () => {
  expect(istckn('10688105874134')).toBe(false);
});

test('Invalid TCKN(String with alphanum)', () => {
  expect(istckn('10@8z105A74')).toBe(false);
});

test('Invalid TCKN(NaN)', () => {
  expect(istckn(NaN)).toBe(false);
});

test('Invalid TCKN(Object)', () => {
  expect(istckn({})).toBe(false);
});

test('Invalid TCKN(Array)', () => {
  expect(istckn([])).toBe(false);
});
