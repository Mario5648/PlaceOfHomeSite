function saveUserInfoMoveAdvisorPremium(params)
{

    endpointCall("saveUserInputMoveAdvisorPremium", params, function(data)
    {
        if(data["status"] == "success")
        {
            window.open("https://buy.stripe.com/7sI5o7cpL89jaYMcMM", "__self")
        }
        else if(data["status"] == "failed")
        {
            alert("An error occured. Please verify your input and/or try again.");
        }
    });
}

function saveUserInfoMoveAdvisorStandard(params)
{

    endpointCall("saveUserInputMoveAdvisorStandard", params, function(data)
    {
        if(data["status"] == "success")
        {
            location.href = "https://buy.stripe.com/9AQ5o74Xj75f6IweUV";
        }
        else if(data["status"] == "failed")
        {
            alert("An error occured. Please verify your input and/or try again.");
        }
    });
}
