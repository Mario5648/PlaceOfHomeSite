function makeCallGeneratePremiumReport( callBack = null )
{

    let params = {
                  "zipCode":ZIPCODE,
                  "city":CITY,
                  "state":STATE,
                  "reportType":"freeTier",
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