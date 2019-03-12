import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
})

describe('index.html', () => {

  it('should say Raise: Modern Activism', (done) => {

    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new JSDOM(index);
    const { window } = dom;

    const div = window.document.getElementsByTagName('div')[0];
    expect(div.innerHTML).to.equal("Raise: Modern Activism");
    window.close();

    done();

  });

})
