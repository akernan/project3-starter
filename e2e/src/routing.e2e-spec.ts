import { browser, element, by} from 'protractor'
// import util.ts;

describe('Routing Tests', () => {

    it('Home page: h2 with id=\'subpageTitle\'Equals \'Brackets App\'', () => {
        browser.get('/');
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
//    TOD: Update with naviagate to
    });

    it('Navigate to registration page', () => {
        browser.get('/');
        element.all(by.partialLinkText('Registration')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Register Players']);
    });

    it('Navigate to brackets page', () => {
        browser.get('/');
        element.all(by.partialLinkText('Brackets')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
    });

    it('Navigate to Welcome From brackets page', () => {
        browser.get('/brackets');
        element.all(by.partialLinkText('Welcome')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });

  });

