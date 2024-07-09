
var ERROR_FLAG = "ERROR";

//https://placeofhome-api.org/
var generateReportEndPoint = "http://127.0.0.1:5000/getZipCodeData";
var getCitiesForStateEndPoint = "http://127.0.0.1:5000/getCitiesForState"
var generatePremiumReportEndPoint = "http://127.0.0.1:5000/getZipCodeDataPremium";
var generateZipCodeComparePremiumReportEndPoint = "http://127.0.0.1:5000/getZipCodeCompareDataPremium";
var generatePropertyAnalysisPremiumReportEndPoint = "http://127.0.0.1:5000/generatePropertyAnalysisPremiumReport";
var userSignupEndPoint = "http://127.0.0.1:5000/signup";
var userLoginEndPoint = "http://127.0.0.1:5000/login";
var userAnalyticsEndPoint = "http://127.0.0.1:5000/getUserAnalytics";
var sendMessageEndPoint = "https://www.api-contact-lite.com/sendMessage";
var updateUserSubscriptionEndPoint = "http://127.0.0.1:5000/updateUserSubscription";
var getUserWebsiteDataEndPoint = "http://127.0.0.1:5000/getUserWebsiteData";
var createWebsiteEndPoint = "http://127.0.0.1:5000/createWebsite";
var updateWebsiteEndPoint = "http://127.0.0.1:5000/updateWebsite";
var removeWebsiteEndPoint = "http://127.0.0.1:5000/removeWebsite";
var createAndLinkStripeAccountEndPoint = "http://127.0.0.1:5000/createStripeAccount";
var addPropertyPMEndPoint = "http://127.0.0.1:5000/addPropertyPM";
var getAllUserPropertiesPMEndPoint = "http://127.0.0.1:5000/getAllUserPropertiesPM";
var getSinglePropertyDataEndPoint = "http://127.0.0.1:5000/getSinglePropertyData";
var editPropertyPMEndPoint = "http://127.0.0.1:5000/editPropertyPM";
var removePropertyPMEndPoint = "http://127.0.0.1:5000/removePropertyPM";
var assignStripeIdtoUserAccountEndPoint = "http://127.0.0.1:5000/assignStripeIdtoUserAccount"

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
        case "getUserWebsiteData":
            return getUserWebsiteDataEndPoint;
        case "createWebsite":
            return createWebsiteEndPoint;
        case "updateWebsite":
            return updateWebsiteEndPoint;
        case "removeWebsite":
            return removeWebsiteEndPoint;
        case "createStripeAccount":
            return createAndLinkStripeAccountEndPoint;
        case "addPropertyPM":
            return addPropertyPMEndPoint;
        case "getAllUserPropertiesPM":
            return getAllUserPropertiesPMEndPoint;
        case "getSinglePropertyData":
            return getSinglePropertyDataEndPoint;
        case "editPropertyPM":
            return editPropertyPMEndPoint;
        case "removePropertyPM":
            return removePropertyPMEndPoint;
        case "assignStripeIdtoUserAccount":
            return assignStripeIdtoUserAccountEndPoint;
    }
}