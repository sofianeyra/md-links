// calling functions
import {
  calculateUniqueLinks,
  calculateBrokenLinks,
  calculateTotalLinks,
} from '../src/models/stats.js';

const input = [{
  href: 'https://developers.google.com/',
  status: 200,
  value: 'OK'}, 
{
  href: 'https://es.wikipedia.org/wiki/Markdown',
  status: 200,
  value: 'OK'
}, 
{ href: 'https://es.wikipedia.org/wiki/Markdown',
  status: 200,
  value: 'OK'
},
{ href: 'https://github.com/sofianeyra/LIM008-md-links',
  status: 404,
  value: 'Fail'
}];
const output = {total: 4, unique: 3};
const outputValidate = {total: 4, unique: 3, broken: 1};

describe('calculate total links', () => {
  it('should be a function', () => {
    expect(typeof calculateTotalLinks).toBe('function');
  });
  it('should return the amount of total links', () => {
    expect(calculateTotalLinks(input)).toBe(4);
  });
});

describe('calculate broken links', () => {
  it('should be a function', () => {
    expect(typeof calculateBrokenLinks).toBe('function');
  });
  it('should return the amount of broken links', () => {
    expect(calculateBrokenLinks(input)).toBe(1);
  });
});

describe('calculate unique links', () => {
  it('should be a function', () => {
    expect(typeof calculateUniqueLinks).toBe('function');
  });
  it('should return the amount of unique links', () => {
    expect(calculateUniqueLinks(input)).toBe(3);
  });
});

console.log(calculateUniqueLinks(input));