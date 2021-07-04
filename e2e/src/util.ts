// TODO: INPORT AND EXPORT STATEMENTS. 
export navigateTo;

function navigateTo(location[:string]){
    browser.get(location);
    return element.all(by.id('subpageTitle'));
}