import { browser, element, by} from 'protractor'

describe('EmptyDescribe', () => {

    it('EmptyIt', () => {
        browser.get('/');
        let subtitle = element(by.id('subpageTitle'));
        expect(subtitle.toBe("Brackets App"));
    });
  });
