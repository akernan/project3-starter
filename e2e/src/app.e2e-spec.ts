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


  
describe('Tournament Pipeline Tests: AUTO GEN 4 PLAYERS', () => {

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

  });

describe('Registration Error Tests', () => {
  browser.get('/registration');
});

describe('Registration Error Tests', () => {
});
});
