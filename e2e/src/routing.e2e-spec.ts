import { browser, element, by} from 'protractor'

describe('Home Page Tests', () => {

    it('h2 with id=\'subpageTitle\'Equals \'Brackets App\'', () => {
        browser.get('/');
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });

    it('navigate to registration page', () => {
        browser.get('/');
        element.all(by.partialLinkText('Registration')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Register Players']);
    });

    it('navigate to brackets page', () => {
        browser.get('/');
        element.all(by.partialLinkText('Brackets')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
    });
  });
