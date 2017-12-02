import CreateWidthMeasurer from '../lib';

const cases = [
  {
    font: '12pt Arial',
    helloWidth: 37,
  },
  {
    font: '12pt Trebuchet',
    helloWidth: 37,
  },
  {
    font: '10pt Courier',
    helloWidth: 41,
  },
];

describe('measure-text', () => {
  cases.forEach(({font, helloWidth}) => {
    it('should return correct value for ' + font, () => {
      expect(CreateWidthMeasurer(window).setFont(font)('Hello')).toBe(helloWidth);
    });
  });
});
