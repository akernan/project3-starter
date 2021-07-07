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

it('AUTO GEN 4 PLAYERS, Player John WINS', () => {
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

it('AUTO GEN 8 PLAYERS, Player Leia WINS', () => {
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

  it('NO PLAYERS, SHOWS MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });

  it('ONE PLAYER, SHOWS MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('contestant0')).sendKeys('Parzival');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });

  it('THREE PLAYERS, SHOWS MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('contestant0')).sendKeys('Parzival');
    element(by.id('contestant1')).sendKeys('Art3mis');
    element(by.id('contestant2')).sendKeys('TGAP_Ogg');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });

  it('FIVE PLAYERS, SHOWS MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('contestant0')).sendKeys('Parzival');
    element(by.id('contestant1')).sendKeys('Art3mis');
    element(by.id('contestant2')).sendKeys('TGAP_Ogg');
    element(by.id('contestant3')).sendKeys('Aech');
    element(by.id('contestant4')).sendKeys('Sho');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });

  it('Seven PLAYERS, SHOWS MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('contestant0')).sendKeys('Parzival');
    element(by.id('contestant1')).sendKeys('Art3mis');
    element(by.id('contestant2')).sendKeys('TGAP_Ogg');
    element(by.id('contestant3')).sendKeys('Aech');
    element(by.id('contestant4')).sendKeys('Sho');
    element(by.id('contestant5')).sendKeys('Anorak');
    element(by.id('contestant6')).sendKeys('Daito ');
    element(by.id('submit')).click();
    expect(element(by.id('message')).getText()).toBe('Should be 2, 4, or 8 contestants');
  });

});

describe('Bracket Error Tests', () => {

  it('1 MATCH, NO WINNERS SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element.all(by.id('autoGen2Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('championExists')).getText()).toBe('Winner: Zoe');
});

it('2 MATCH, ROUND 1, NO WINNERS SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen4Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('2 MATCH, ROUND 1, ONE WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen4Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('2 MATCH, ROUND 2, NO WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen4Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });


  it('4 MATCH, ROUND 1, NO WINNERS SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen8Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('4 MATCH, ROUND 1, ONE WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen8Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('4 MATCH, ROUND 2, NO WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen8Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(0).click();
    element(by.id('match3')).all(by.tagName('input')).get(0).click();
    element(by.id('match4')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('4 MATCH, ROUND 2, ONE WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen8Players')).click();
    element(by.id('submit')).click();
    element.all(by.partialLinkText('Brackets')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('match2')).all(by.tagName('input')).get(0).click();
    element(by.id('match3')).all(by.tagName('input')).get(0).click();
    element(by.id('match4')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    element(by.id('match1')).all(by.tagName('input')).get(0).click();
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });

  it('4 MATCH, ROUND 3, NO WINNER SELECTED, SHOW MESSAGE', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element(by.id('autoGen8Players')).click();
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
    element(by.id('completeRoundButton')).click();
    expect(element(by.id('message')).getText()).toBe('Please complete all matches');
  });
});

