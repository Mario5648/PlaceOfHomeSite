function makeCallGenerateReport( callBack = null )
{

    let params = {
                  "zipCode":ZIPCODE,
                  "city":CITY,
                  "state":STATE,
                  "reportType":"freeTier",
                 };

    endpointCall("generateReport", params, function(data)
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

function generateReport( callBack = null )
{
    makeCallGenerateReport(function(data)
    {        
        callBack(data)
    });
}

function sendMessage(callBack = null)
{

    let params = {
        "organization": "placeOfHome",
        "token": "3c66b47e0371e080cdd49724b1c0289fabb0870bcdca51fde6eb4102defaadab",
        "name" : document.getElementById("firstNameInput").value,
        "reason" : document.getElementById("reasonInput").value,
        "email" : document.getElementById("emailInput").value,
        "message": document.getElementById("message").value
    };
    
    endpointCall("sendMessage", params, function(data)
                                {
                                    //Store id and name in cookies for later use
                                    if(data["status"] == "success")
                                    {
                                        callBack('Successfully sent message!');
                                    }else if(data["status"] == "failed")
                                    {
                                        callBack("Failed to send message. Please try again!");
                                    }
                                });
}

function sendMessageOnClick()
{
    document.getElementById("sendMessageButton").disabled = true;
    sendMessage( function(responseMessage)
        {
            alert(responseMessage);

            if(responseMessage == "Successfully sent message!")
            {
                alert(responseMessage);
                location.reload();
            }else
            {
                document.getElementById("sendMessageButton").disabled = false;
            }
        });
}