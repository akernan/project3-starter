import { browser, element, by} from 'protractor'

function navToRegistration(){
    beforeEach(() => {
      browser.get('/');
    });
  }

describe('Routing Tests', () => {
    navToRegistration();
    it('Home page: h2 with id=\'subpageTitle\'Equals \'Brackets App\'', () => {
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });

    it('Navigate to registration page', () => {
        element.all(by.partialLinkText('Registration')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Register Players']);
    });

    it('Navigate to brackets page', () => {
        element.all(by.partialLinkText('Brackets')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets']);
    });

    it('Navigate to Welcome From brackets page', () => {
        element.all(by.partialLinkText('Welcome')).click();
        expect(element.all(by.id('subpageTitle')).getText()).toEqual(['Brackets App']);
    });

  });

