const data = require('../Data/data.js'),
    requiredData = data.requiredData,
    CompleteRegistration = require('../Tasks/CompleteRegistration.js');

const completeRegistration = new CompleteRegistration();

browser.waitForAngularEnabled(false); //For non-Angular apps
browser.ignoreSynchronization = true; //For non-Angular apps
browser.manage().window().maximize(); //Browser opens in maximized screen

describe('001: Registration', () => {

    let additionalData = {
        company: "Amazon", 
        address2: "10th Street",
        email: "jdoe212@gmail.com",
        address: "9th street in the East Village"
    }

    let allData = Object.assign(requiredData, additionalData);

    it('001: Complete registration form (required data)', async () => {
        await completeRegistration.completeRegistrationForm(requiredData);
    });

    it('001: Complete registration form (all data)', async () => {
       await completeRegistration.completeRegistrationForm(allData);
    });
});