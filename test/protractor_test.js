function navigate(url)
{
    browser.driver.manage().window().maximize();
    browser.get(url);
}

function perform_operation(a, b, operation_name){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);

    browser.actions().mouseMove(element(by.model('operator'))).click().perform();
    browser.actions().mouseMove(element(by.xpath('//option[@value=\''+ operation_name.toUpperCase() +'\']')).click()).perform();
    element(by.id('gobutton')).click();
}

describe("Calculator sample", function(){

    beforeAll(function(){
        navigate('http://www.way2automation.com/angularjs-protractor/calc/');
    });

    it("first test", function(){
        
        perform_operation(2, 3, "SUBTRACTION");
        element(by.css('.ng-binding')).getText().then(function(text){
            console.log(text);
        });
        browser.sleep(3000);
   
    });
});
