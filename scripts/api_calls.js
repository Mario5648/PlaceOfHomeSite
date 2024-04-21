
var ERROR_FLAG = "ERROR";

var generateReportEndPoint = "http://127.0.0.1:5000/getZipCodeData";
var getCitiesForStateEndPoint = "http://127.0.0.1:5000/getCitiesForState"


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
    }
}