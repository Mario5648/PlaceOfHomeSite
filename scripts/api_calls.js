
var ERROR_FLAG = "ERROR";

var generateReportEndPoint = "https://placeofhome-api.org/getZipCodeData";
var getCitiesForStateEndPoint = "https://placeofhome-api.org/getCitiesForState"
var generatePremiumReportEndPoint = "https://placeofhome-api.org/getZipCodeDataPremium";
var generateZipCodeComparePremiumReportEndPoint = "https://placeofhome-api.org/getZipCodeCompareDataPremium";
var generatePropertyAnalysisPremiumReportEndPoint = "https://placeofhome-api.org/generatePropertyAnalysisPremiumReport";
var userSignupEndPoint = "https://placeofhome-api.org/signup";
var userLoginEndPoint = "https://placeofhome-api.org/login";
var userAnalyticsEndPoint = "https://placeofhome-api.org/getUserAnalytics";
var sendMessageEndPoint = "https://www.api-contact-lite.com/sendMessage";
var updateUserSubscriptionEndPoint = "https://placeofhome-api.org/updateUserSubscription"

function endpointCall(endpoint=null, params={}, callBack=null)
{
    let endpointLink = identifyEndPoint(endpoint);
    const Http = new XMLHttpRequest();
    var params = JSON.stringify(params);
    Http.open( "POST", endpointLink );
    Http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    Http.send(params);
    Http.onreadystatechange = ( e ) => 
    {
        //If the request was successful then populate everything
        if (Http.readyState == 4 && Http.status == 200) 
        {
            //parse the response from power automate to make it readable for the functions
            callBack(JSON.parse( Http.responseText ));
            
        }else
        {
            callBack(ERROR_FLAG);
        }
    }
}

function identifyEndPoint(endpoint=null)
{
    switch(endpoint)
    {
        case "generateReport":
            return generateReportEndPoint;
        case "getCitiesForState":
            return getCitiesForStateEndPoint;
        case "generatePremiumReport":
            return generatePremiumReportEndPoint;
        case "generateZipCodeComparePremiumReport":
            return generateZipCodeComparePremiumReportEndPoint;
        case "generatePropertyAnalysisPremiumReport":
            return generatePropertyAnalysisPremiumReportEndPoint;
        case "userSignup":
            return userSignupEndPoint;
        case "userLogin":
            return userLoginEndPoint;
        case "userAnalytics":
            return userAnalyticsEndPoint;
        case "sendMessage":
            return sendMessageEndPoint;
        case "updateUserSubscription":
            return updateUserSubscriptionEndPoint;
    }
}