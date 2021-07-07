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


  
describe('Tournament App Pipeline Tests: AUTO GEN 4 PLAYERS', () => {

  it('AUTO GEN 2 PLAYERS, Player A WINS', () => {
    browser.get('/');
    element.all(by.partialLinkText('Registration')).click();
    element.all(by.id('autoGen2Players')).click();
    element.all(by.id('submit')).click();
    browser.get('/brackets');
    expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);


    element.all(by.id('match_A_0')).click();
    // element(by.id('radiogrp1')).all(by.tagName('md-radio-button')).get(0).click();
    // expect(element.all(by.id('match_A_0')).isSelected()).toBe(true);


    element.all(by.name('completeRoundButton')).click();
    expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
 
    
    var EC = ExpectedConditions;

    var e = element(by.id('championExists'));
    browser.driver.wait(EC.visibilityOf(e), 10000);
    
    expect(e.isPresent()).toBeTruthy();




    // expect(element.all(by.id('championExists')).getText()).toEqual(['Winner: Zoe']);
});

  });

describe('Registration Error Tests', () => {
  browser.get('/registration');
});

describe('Registration Error Tests', () => {
});
});
