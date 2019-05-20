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
        results = ['9','2','0','18','3'];
        iteration = 0;
        navigate('http://www.way2automation.com/angularjs-protractor/calc/');
    });

    it("Addition", function(){
        
        perform_operation(6, 3, "ADDITION");
        element(by.css('.ng-binding')).getText().then(function(number){
            expect(number).toBe(results[0]);
        });   
    });

    it("Division", function(){
        
        perform_operation(6, 3, "DIVISION");
        element(by.css('.ng-binding')).getText().then(function(number){
            expect(number).toBe(results[1]);
        });   
    });

    it("Modulo", function(){
        
        perform_operation(6, 3, "MODULO");
        element(by.css('.ng-binding')).getText().then(function(number){
            expect(number).toBe(results[2]);
        });   
    });

    it("Multiplication", function(){
        
        perform_operation(6, 3, "MULTIPLICATION");
        element(by.css('.ng-binding')).getText().then(function(number){
            expect(number).toBe(results[3]);
        });   
    });

    it("Subtraction", function(){
        
        perform_operation(6, 3, "SUBTRACTION");
        element(by.css('.ng-binding')).getText().then(function(number){
            expect(number).toBe(results[4]);
        });   
    });

    it("Table validation", function(){

        results = results.reverse();
        element.all(by.repeater("result in memory")).each(function(item){
            item.element(by.css("td:nth-child(3)")).getText().then(function(text){
                expect(text).toBe(results[iteration]);
                iteration++;
            });
        });
    });
});
