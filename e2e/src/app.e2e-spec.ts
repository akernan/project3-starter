import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('8-Player Tournament Bracket!');
  });


  
describe('Tournament App Pipeline Tests: AUTO GEN 4 PLAYERS', () => {

  it('AUTO GEN 2 PLAYERS, Player A WINS', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element.all(by.id('autoGen2Players')).click();
    element.all(by.id('submit')).click();
    browser.get('/brackets');
    expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
    element.all(by.name('match_A_1')).click();
    element.all(by.name('completeRoundButton')).click();
    expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
    browser.sleep(2000);
    expect(element.all(by.id('championExists')).getText()).toContain("Winner:");

});

  });

describe('Registration Error Tests', () => {
  browser.get('/registration');
});

describe('Registration Error Tests', () => {
});
});
