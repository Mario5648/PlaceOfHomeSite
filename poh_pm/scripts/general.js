function populateWebsiteData()
{

    populateCompanyWebsiteCall(function(data)
    {

        if(data["status"] == "success")
        { 
            data = data['websiteData'];
            console.log(data["companyName"])
            document.getElementById("companyName").innerHTML = data["companyName"];
            document.getElementById("cityStateHeroText").innerHTML = `Search for apartments/houses in the ${data["city"]}, ${data['state']}`;
            document.getElementById("businessServicesDescription").innerHTML = `At ${data['companyName']}, we offer a comprehensive range of business services designed to simplify and enhance your property management experience. Our expert team is dedicated to maximizing the value of your investment and ensuring the satisfaction of both landlords and tenants.`;
            document.getElementById("contactPhoneNumber").innerHTML = data["phoneNumber"];
            document.getElementById("contactEmail").innerHTML = data["email"];
            document.getElementById("footerText").innerHTML = `&copy; 2024 ${data["companyName"]}. All rights reserved.`;
        }
    })
}

function populateCompanyWebsiteCall(callBack = null)
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const wid = urlParams.get('wid')
    
    let params = {
        "wid":wid,
       };

    endpointCall("getUserWebsiteData", params, function(data)
    {
        if(data["status"] == "success")
        {
            return callBack(data);
        }
            else if(data["status"] == "failed")
        {
            alert('This address currently does not have a company tied to it. Redirecting you to placeofhome.org');
            window.open("https://placeofhome.org", "_self");
        }
    });
}