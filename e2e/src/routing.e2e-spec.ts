import { browser, element, by} from 'protractor'

describe('Home Page Tests', () => {

    it('h2 with id=\'subpageTitle\'Equals \'Brackets App\'', () => {
        browser.get('/');
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });

    it('h2 with id=\'subpageTitle\'Equals \'Brackets App\'', () => {
        browser.get('/');
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });
    
  });
