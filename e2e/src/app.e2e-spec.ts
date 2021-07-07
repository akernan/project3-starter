import { AppPage } from './app.po';
import { browser, logging, element, by, ExpectedConditions, until } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('8-Player Tournament Bracket!');
  });
});

  
describe('Tournament Pipeline Tests: ', () => {

  it('AUTO GEN 2 PLAYERS & Register Them', () => {
  browser.get('/');
  element.all(by.partialLinkText('Registration')).click();
  element(by.id('autoGen2Players')).click();
  element(by.id('submit')).click();
  expect(element(by.id('message')).getText()).toBe('Zoe,Kaylee');
});

it('AUTO GEN 4 PLAYERS & Register Them', () => {
  browser.get('/');
  element.all(by.partialLinkText('Registration')).click();
  element(by.id('autoGen4Players')).click();
  element(by.id('submit')).click();
  expect(element(by.id('message')).getText()).toBe('John,Paul,George,Ringo');
});

it('AUTO GEN 8 PLAYERS & Register Them', () => {
  browser.get('/');
  element.all(by.partialLinkText('Registration')).click();
  element(by.id('autoGen8Players')).click();
  element(by.id('submit')).click();
  expect(element(by.id('message')).getText()).toBe('Leia,Luke,Lando,Han,Chewy,R2D2,C3P0,Vader');
});



  it('AUTO GEN 2 PLAYERS, Player Zoe WINS', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element.all(by.id('autoGen2Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('championExists')).getText()).toBe('Winner: Zoe');

});

it('AUTO GEN 2 PLAYERS, Player John WINS', () => {
  browser.get('/');
  element.all(by.partialLinkText('Registration')).click();
  element(by.id('autoGen4Players')).click();
  element(by.id('submit')).click();
  element.all(by.partialLinkText('Brackets')).click();
  element(by.id('match1')).all(by.tagName('input')).get(0).click();
  element(by.id('match2')).all(by.tagName('input')).get(0).click();
  element(by.id('completeRoundButton')).click();
  element(by.id('match1')).all(by.tagName('input')).get(0).click();
  element(by.id('completeRoundButton')).click();
  expect(element(by.id('championExists')).getText()).toBe('Winner: John');
});

it('AUTO GEN 2 PLAYERS, Player Leia WINS', () => {
  browser.get('/');
  element.all(by.partialLinkText('Registration')).click();
  element.all(by.id('autoGen8Players')).click();
  element(by.id('submit')).click();
  element.all(by.partialLinkText('Brackets')).click();
  element(by.id('match1')).all(by.tagName('input')).get(0).click();
  element(by.id('match2')).all(by.tagName('input')).get(0).click();
  element(by.id('match3')).all(by.tagName('input')).get(0).click();
  element(by.id('match4')).all(by.tagName('input')).get(0).click();
  element(by.id('completeRoundButton')).click();
  element(by.id('match1')).all(by.tagName('input')).get(0).click();
  element(by.id('match2')).all(by.tagName('input')).get(0).click();
  element(by.id('completeRoundButton')).click();
  element(by.id('match1')).all(by.tagName('input')).get(0).click();
  element(by.id('completeRoundButton')).click();
  expect(element(by.id('championExists')).getText()).toBe('Winner: Leia');
});


  });

describe('Registration Error Tests', () => {
  browser.get('/registration');
});

describe('Bracket Error Tests', () => {
});

