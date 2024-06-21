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