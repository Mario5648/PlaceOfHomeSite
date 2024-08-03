function makeCallGeneratePremiumReport( callBack = null )
{

    let params = {
                  "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                  "userToken":localStorage.getItem("POH_USER_TOKEN"),
                  "zipCode":ZIPCODE,
                  "city":CITY,
                  "state":STATE,
                  "reportType":"premium",
                 };

    endpointCall("generatePremiumReport", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data)
        }
        else if(data["status"] == "failed")
        {
            alert("No data found for the zipcode. Redirecting you back to home page.");
            window.open("./index.html", "_self");
        }
    });
}

function getCitiesForState(callBack = null, selectedState)
{
    let params = {
        "state":selectedState,
       };

    endpointCall("getCitiesForState", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data)
        }
        else if(data["status"] == "failed")
        {
            return callBack(data)
        }
    });
}

function generatePremiumReport( callBack = null )
{
    makeCallGeneratePremiumReport(function(data)
    {        
        callBack(data)
    });
}


function makeCallGeneratePremiumZipCodeCompareReport( callBack = null )
{

    let params = {
                  "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                  "userToken":localStorage.getItem("POH_USER_TOKEN"),

                  "zipCodes":ZIPCODES,
                  "city":CITY,
                  "state":STATE,
                  "reportType":"premium",
                 };

    endpointCall("generateZipCodeComparePremiumReport", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data)
        }
        else if(data["status"] == "failed")
        {
            alert("No data found for the zipcode. Redirecting you back to home page.");
            window.open("./index.html", "_self");
        }
    });
}

function generatePremiumZipCodeCompareReport( callBack = null)
{
    makeCallGeneratePremiumZipCodeCompareReport(function(data)
    {        
        callBack(data)
    });
}


function makeCallGeneratePremiumPropertyAnalysisReport( callBack = null )
{

    let params = {
                  "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                  "userToken":localStorage.getItem("POH_USER_TOKEN"),

                  "propertyZillowLink": ZILLOW_LINK,
                  "anticipatedRentInput":ANTICIPATED_RENT,
                  "anticipatedOccupiedMonthsInput":ANTICIPATED_OCCUPIED_MONTHS,
                  "anticipatedExpensesInput":ANTICIPATED_EXPENSES,
                  "anticipatedPrincipleInput":ANTICIPATED_PRINCIPLE,
                  "anticipatedInterestInput":ANTICIPATED_INTEREST,
                  "anticipatedDownpaymentInput":ANTICIPATED_DOWNPAYMENT,
                  "anticipatedClosingCostInput":ANTICIPATED_CLOSING_COST,
                  "anticipatedRenovationCostInput":ANTICIPATED_RENOVATION_COST,
                  "test_flag":TEST_API_CALLS,
                  "reportType":"premium",
                 };
    
    endpointCall("generatePropertyAnalysisPremiumReport", params, function(data)
    {
        
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            alert("No data found for the property. Redirecting you back to home page.");
            window.open("./index.html", "_self");
        }

    });
}


function generatePremiumPropertyAnalysisReport( callBack = null )
{
    makeCallGeneratePremiumPropertyAnalysisReport(function(data)
    {        
        callBack(data)
    });
}



function makeCallUserSignup( callBack = null, firstName, email, password )
{
    localStorage.setItem("POH_USER_EMAIL",email);

    let params = {
                  "firstName":firstName,
                  "email":email,
                  "password":password,
                 };

    endpointCall("userSignup", params, function(data)
    {
        if(data["status"] == "success")
        {
            localStorage.setItem("POH_USER_TOKEN", data["jwt"]);
            return callBack(data)
        }
        else if(data["status"] == "failed")
        {
            alert("failed to sign up, please try again");
        }
    });
}

function makeCallUserLogin( callBack = null, email, password )
{
    localStorage.setItem("POH_USER_EMAIL",email);

    let params = {
                  "email":email,
                  "password":password,
                 };

    endpointCall("userLogin", params, function(data)
    {
        if(data["status"] == "success")
        {
            localStorage.setItem("POH_USER_TOKEN", data["jwt"]);
            localStorage.setItem("POH_USER_TIER", data['userTierData']["subscriptionTier"]);
            localStorage.setItem("POH_USER_TOOLS", data['userTierData']["tools"]);
            localStorage.setItem("POH_USER_SUBSCRIPTION_END_DATE", data['userTierData']["subscriptionEndDate"]);
            localStorage.setItem("POH_USER_SUBSCRIPTION_END_DATE", data['userTierData']["subscriptionEndDate"]);
            localStorage.setItem("POH_USER_STRIPE_ACCOUNT_ID", data['userTierData']["accountId"]);
            return callBack(data)
        }
        else if(data["status"] == "failed")
        {
            alert("failed to sign in, please try again");
        }
    });
}

function retrieveUserAnalytics(callBack = null)
{

    let params = {
                "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                 };

    endpointCall("userAnalytics", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function updateUserSubscriptionStatus()
{
    let params = {
        "userEmail":localStorage.getItem("POH_USER_EMAIL"),
        "userToken":localStorage.getItem("POH_USER_TOKEN"),
        "subscriptionStatus": document.getElementById("subscriptionStatusButton").innerHTML,
         };

    endpointCall("updateUserSubscription", params, function(data)
    {
        if(data["status"] == "success")
        {

            localStorage.setItem("POH_USER_SUBSCRIPTION_END_DATE", data["newSubscriptionEndingDate"]);
            alert("Successfully Updated Subscription Status");
            renderSettingsPage();
        }
        else if(data["status"] == "failed")
        {
            alert("Failed to Update Subscription Status");
        }
    });
}

function createUserWebsite(callBack = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                "companyName" : document.getElementById('companyName').value,
                "city" : document.getElementById('city').value,
                "state" : document.getElementById('state').value,
                "phoneNumber" : document.getElementById('phoneNumber').value,
                "email" : document.getElementById('contactEmail').value,
                "otherData" : {},
                 };




    endpointCall("createWebsite", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function retrieveWebsiteData(callBack = null)
{
    let params = {
        "wid":localStorage.getItem("POH_USER_WEBSITE_ID"),
    };




    endpointCall("getUserWebsiteData", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function updateUserWebsite(callBack = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                "wid": localStorage.getItem("POH_USER_WEBSITE_ID"),
                "companyName" : document.getElementById('companyName').value,
                "city" : document.getElementById('city').value,
                "state" : document.getElementById('state').value,
                "phoneNumber" : document.getElementById('phoneNumber').value,
                "email" : document.getElementById('contactEmail').value,
                "otherData" : {},
                };




    endpointCall("updateWebsite", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function removeUserWebsite(callBack = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                "wid": localStorage.getItem("POH_USER_WEBSITE_ID"),
                };




    endpointCall("removeWebsite", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function createAndLinkStripeAccount(callBack = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                };

    endpointCall("createStripeAccount", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function addNewProperty(callBack = null)
{
    let params = {
            "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
            "userToken":localStorage.getItem("POH_USER_TOKEN"),

            "stripeAccountId" : localStorage.getItem("POH_USER_STRIPE_ACCOUNT_ID"),
            "acceptOnlinePayments" : document.getElementById('acceptOnlinePayments').checked,

            "propertyName" : document.getElementById('propertyName').value,
            "propertyAddress" : `${document.getElementById('streetAddress').value}:${document.getElementById('cityAddress').value}:${document.getElementById('stateAddress').value}:${document.getElementById('zipCodeAddress').value}`,
            "propertyNumberRooms" : document.getElementById('propertyNumRooms').value,
            "propertyNumberBathrooms" : document.getElementById('propertyNumBathrooms').value,
            "propertySqFt" : document.getElementById('propertySqft').value,
            "propertyImage" : document.getElementById('output').value,

            "propertyContractPrice" : document.getElementById('pricePerMonth').value,
            "propertyContractStartDate" : document.getElementById('contractStartDate').value,
            "propertyContractEndDate" : document.getElementById('contractEndDate').value,

            "propertyTenantName" : document.getElementById('mainTenantName').value,
            "propertyTenantEmail" : document.getElementById('mainTenantEmail').value,
            "propertyTenantPhoneNumber" : document.getElementById('mainTenantPhoneNumber').value,
        };

    endpointCall("addPropertyPM", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}


function getAllProperties(callBack = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                };

    endpointCall("getAllUserPropertiesPM", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function getPropertyData(callBack = null, pid = null, areaAnalytics = false)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                "pid":pid,
                "areaAnalytics":areaAnalytics,
                };

    endpointCall("getSinglePropertyData", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function savePropertyEditChanges(callBack = null, pid = null)
{
    let params = {
            "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
            "userToken":localStorage.getItem("POH_USER_TOKEN"),
            "pid": pid,
            "stripeAccountId" : localStorage.getItem("POH_USER_STRIPE_ACCOUNT_ID"),
            "acceptOnlinePayments" : document.getElementById('acceptOnlinePayments').checked,

            "propertyName" : document.getElementById('propertyName').value,
            "propertyAddress" : `${document.getElementById('streetAddress').value}:${document.getElementById('cityAddress').value}:${document.getElementById('stateAddress').value}:${document.getElementById('zipCodeAddress').value}`,
            "propertyNumberRooms" : document.getElementById('propertyNumRooms').value,
            "propertyNumberBathrooms" : document.getElementById('propertyNumBathrooms').value,
            "propertySqFt" : document.getElementById('propertySqft').value,
            "propertyImage" : document.getElementById('output').value,

            "propertyContractPrice" : document.getElementById('pricePerMonth').value,
            "propertyContractStartDate" : document.getElementById('contractStartDate').value,
            "propertyContractEndDate" : document.getElementById('contractEndDate').value,

            "propertyTenantName" : document.getElementById('mainTenantName').value,
            "propertyTenantEmail" : document.getElementById('mainTenantEmail').value,
            "propertyTenantPhoneNumber" : document.getElementById('mainTenantPhoneNumber').value,
        };

    endpointCall("editPropertyPM", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function removePropertyPM(callBack = null, pid = null)
{

    let params = {
                "loginEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                "pid":pid,
                };

    endpointCall("removePropertyPM", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function assignStripeIdtoUserAccount(callBack = null, email = null, token = null, stripeAccountId = null)
{

    let params = {
                "loginEmail": email,
                "userToken": token,
                "stripeAccountId": stripeAccountId,
                };

    endpointCall("assignStripeIdtoUserAccount", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}

function generateLiveMarketPremiumReport(callBack = null)
{

    let params = {
                "zipCode": ZIPCODE,
                "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                };

    endpointCall("getZipCodeLiveMarketData", params, function(data)
    {
        if(data["status"] == "success")
        {
            SOLD_PROPERTIES_DATA_LIST = data["currentMarketAnalytics"]["liveMarketData"]["soldPropertiesDataList"];
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}



function updateLiveMarketPremiumReport(callBack = null)
{

    let params = {
                "zipCode": ZIPCODE,
                "numberOfRooms": document.getElementById("numberOfRooms").value,
                "numberOfBathrooms": document.getElementById("numberOfBathrooms").value,
                "homeTypeSelection": getSelectedHomeTypes(),
                "userEmail":localStorage.getItem("POH_USER_EMAIL"),
                "userToken":localStorage.getItem("POH_USER_TOKEN"),
                };

    endpointCall("getZipCodeLiveMarketDataWithSelection", params, function(data)
    {
        if(data["status"] == "success")
        {
            SOLD_PROPERTIES_DATA_LIST = data["currentMarketAnalytics"]["liveMarketData"]["soldPropertiesDataList"];
            return callBack(data);
        }
        else if(data["status"] == "failed")
        {
            return callBack(data);
        }
    });
}