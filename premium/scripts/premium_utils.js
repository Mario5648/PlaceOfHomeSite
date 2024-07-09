function generateZipCodePremiumReport()
{

    STATE = checkStateInput();
    if(!STATE)
    {
        return;
    }
    CITY = checkCityInput();
    if(!CITY)
    {
        return;
    }
    ZIPCODE = checkValidZipCode();
    if(!ZIPCODE)
    {
        return;
    }

    
    renderLoadingScreen();
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');

    generatePremiumReport(function(data)
    {

        if(data["status"] == "success")
        { 
            renderPremiumReportPage();

            document.getElementById("dateRangeText").innerHTML = "01/01/2022 - "+DATE_TODAY;
            document.getElementById("zipCodeText").innerHTML = ZIPCODE;
            document.getElementById("cityStateText").innerHTML = CITY + ", "+ STATE;
            document.getElementById("destinationsZipText").innerHTML = "Destinations in "+ZIPCODE;
            document.getElementById("livingInZipCodeText").innerHTML = "Living in "+ZIPCODE;
            document.getElementById("workingInZipCodeText").innerHTML = "Working in "+ZIPCODE;
            document.getElementById("peopleInZipCodeText").innerHTML = "People in "+ZIPCODE;
            document.getElementById("costOfLivingInZipCodeText").innerHTML = "Cost of Living in "+ZIPCODE;
            document.getElementById("costBreakDownInZipCodeText").innerHTML = "Cost breakdown for one person in "+ZIPCODE;
            document.getElementById("COLSubText").innerHTML = "How much will you pay on average living in "+CITY;
            
            document.getElementById("avgWeather").innerHTML = "Avg. "+data["weatherData"]["averageWeather"]+"°F" 
            document.getElementById("springWeather").innerHTML = "Spring : "+data["weatherData"]["springWeather"]+"°F" 
            document.getElementById("summerWeather").innerHTML = "Summer : "+data["weatherData"]["summerWeather"]+"°F" 
            document.getElementById("fallWeather").innerHTML = "Fall : "+data["weatherData"]["fallWeather"]+"°F" 
            document.getElementById("winterWeather").innerHTML = "Winter : "+data["weatherData"]["winterWeather"]+"°F" 

            document.getElementById("zipCodeOverviewDescription").innerHTML = data["descriptions"]["zipcodeOverall"];
            document.getElementById("zipCodePopulation").innerHTML = data["zipCode"]["DEMOGRAPHIC"]['Total population'];
            document.getElementById("cityNationCrime").innerHTML = data["crimeDescriptions"]["nationCrimeDescription"];
            document.getElementById("cityStateCrime").innerHTML = data["crimeDescriptions"]["stateCrimeDescription"];

            document.getElementById("populationDescription").innerHTML = "*"+data["descriptions"]["population"];

            document.getElementById("zipCodeRent").innerHTML = "$"+data["zipCode"]["HOUSING"]["Rent_Median (dollars)"];
            document.getElementById("cityRent").innerHTML = "Median. City : $"+data["city"]["HOUSING"]["Rent_Median (dollars)"];
            document.getElementById("stateRent").innerHTML = "Median. State : $"+data["state"]["HOUSING"]["Rent_Median (dollars)"];
            document.getElementById("nationalRent").innerHTML = "Median. National : $"+data["nation"]["HOUSING"]["Rent_Median (dollars)"];

            document.getElementById("zipCodeHomePrice").innerHTML = "$"+data["zipCode"]["HOUSING"]["House_Median (dollars)"];
            document.getElementById("cityHomePrice").innerHTML = "Median. City : $"+data["city"]["HOUSING"]["House_Median (dollars)"];
            document.getElementById("stateHomePrice").innerHTML = "Median. Sate : $"+data["state"]["HOUSING"]["House_Median (dollars)"];
            document.getElementById("nationalHomePrice").innerHTML = "Median. National : $"+data["nation"]["HOUSING"]["House_Median (dollars)"];


            document.getElementById("rentDescription").innerHTML = "*"+data["descriptions"]["medianRent"];
            document.getElementById("homePriceDescription").innerHTML = "*"+data["descriptions"]["medianHomePrice"];

            document.getElementById("zipCodeIncome").innerHTML = "$"+data["zipCode"]["ECONOMIC"]["Mean household income (dollars)"];
            document.getElementById("cityIncome").innerHTML = "Avg. City : $"+data["city"]["ECONOMIC"]["Mean household income (dollars)"];
            document.getElementById("stateIncome").innerHTML = "Avg. State : $"+data["state"]["ECONOMIC"]["Mean household income (dollars)"];
            document.getElementById("nationalIncome").innerHTML = "Avg. National : $"+data["nation"]["ECONOMIC"]["Mean household income (dollars)"];
            document.getElementById("incomeHistoryDescription").innerHTML = "*"+data["descriptions"]["meanIncome"];

            document.getElementById("zipCodeCommuteTime").innerHTML = data["zipCode"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("cityCommuteTime").innerHTML = "Avg. City : "+data["city"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("stateCommuteTime").innerHTML = "Avg. State : "+data["state"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("nationalCommuteTime").innerHTML = "Avg. National : "+data["nation"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";

            document.getElementById("commuteDescription").innerHTML = "*"+data["descriptions"]["commute"];
            
            document.getElementById("zipCodePeopleStayedSameHome").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same house'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ "% stayed in the same home for a year";
            document.getElementById("zipCodePeopleStayedSameCounty").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same county'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ "% stayed in the same county for a year after moving homes";
            document.getElementById("zipCodePeopleStayedSameState").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same state'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ "% stayed in the same state for a year after moving";
            document.getElementById("zipCodePeopleStayedDifferentState").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Different state'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ "% moved out of the state after a year";
         
         
            document.getElementById("peopleStayedDescription").innerHTML = "*"+data["descriptions"]["residentsStayed"];

            document.getElementById("foodCOL").innerHTML = "$"+data["costOfLiving"]["Month_Food"];
            document.getElementById("healthcareCOL").innerHTML = "$"+data["costOfLiving"]["Month_Healthcare"];
            document.getElementById("housingCOL").innerHTML = "$"+data["costOfLiving"]["Month_Housing"];
            document.getElementById("transportationCOL").innerHTML = "$"+data["costOfLiving"]["Month_Transportation"];
            document.getElementById("otherCOL").innerHTML = "$"+data["costOfLiving"]["Month_Other"];
            document.getElementById("taxesCOL").innerHTML = "$"+data["costOfLiving"]["Month_Taxes"];
            document.getElementById("monthlyTotalCOL").innerHTML = "$"+data["costOfLiving"]["Month_Total"];
            document.getElementById("annualTotalCOL").innerHTML = "$"+data["costOfLiving"]["Annual_Total"];


            document.getElementById("overallRatingIcon").src = `../grade_icons/grade_${data["ratings"]["overallRating"]}.png`;
            document.getElementById("rentRatingIcon").src = `../grade_icons/grade_${data["ratings"]["rentRating"]}.png`;
            document.getElementById("homePriceRating").src = `../grade_icons/grade_${data["ratings"]["housePriceRating"]}.png`;
            document.getElementById("commuteRating").src = `../grade_icons/grade_${data["ratings"]["commuteRating"]}.png`;

            renderPopulationHistoryChart(data);
            renderCrimeBreakdownChart(data)
            renderRentHistoryChart(data);
            renderHomePriceHistoryChart(data);
            renderEmploymentChart(data);
            renderIncomeHistory(data);
            renderCommuteChart(data);
            renderResidentsStayedChart(data);
            renderRaceDemographicChart(data);
            renderAgeDemographicChart(data);
            renderEducationAttainmentChart(data);

            renderNaturalDisasters(data);

            renderRestaurants(data["destinations"]["restaurants"]["places"]);
            renderParks(data["destinations"]["parks"]["places"]);
            renderGroceryStores(data["destinations"]["groceryStores"]["places"]);
        }
    })
}

function generateZipCodeComparePremiumReport()
{

    STATE = checkStateInput();
    if(!STATE)
    {
        return;
    }
    CITY = checkCityInput();
    if(!CITY)
    {
        return;
    }
    getAllZipCodeValues();
    renderLoadingScreen();
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');

    generatePremiumZipCodeCompareReport(function(data)
    {

        if(data["status"] == "success")
        {
            renderZipCodeComparisonPremiumReport();

            let zipCodes = Object.keys(data)
            zipCodes.pop()

            for (let index in zipCodes) {
                document.getElementById("zipCodesColumns").innerHTML += `<td>${zipCodes[index]}</td>`;
            
                document.getElementById("descriptionColumns").innerHTML += `<td>${data[zipCodes[index]]['descriptions']['zipcodeOverall']}</td>`;

                document.getElementById("populationColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['DEMOGRAPHIC']['Total population']}</td>`;

                document.getElementById("avgWeatherColumns").innerHTML += `<td>${data[zipCodes[index]]['weatherData']['averageWeather']}</td>`;

                document.getElementById("medianRentPriceColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['HOUSING']['Rent_Median (dollars)']}</td>`;
                document.getElementById("medianHomePriceColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['HOUSING']['House_Median (dollars)']}</td>`;
                document.getElementById("avgIncomeColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['ECONOMIC']['Mean household income (dollars)']}</td>`;
                document.getElementById("employmentColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['ECONOMIC']['Employed']}</td>`;
                document.getElementById("unemploymentColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['ECONOMIC']['Unemployed']}</td>`;
                document.getElementById("avgCommuteTimeColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['ECONOMIC']['Mean travel time to work (minutes)']}</td>`;
                document.getElementById("commuteMediumColumns").innerHTML += `<td>${_popularCommuteMedium(data[zipCodes[index]])}</td>`;
                document.getElementById("sameHomeColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['SOCIAL']['Same house']}</td>`;
                document.getElementById("sameCountyColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['SOCIAL']['Same county']}</td>`;
                document.getElementById("sameStateColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['SOCIAL']['Same state']}</td>`;
                document.getElementById("movedOutColumns").innerHTML += `<td>${data[zipCodes[index]]['zipCode']['SOCIAL']['Different state']}</td>`;
                document.getElementById("commonAgeRangeColumns").innerHTML += `<td>${_commonAgeRange(data[zipCodes[index]])}</td>`;
                document.getElementById("commonEducationColumns").innerHTML += `<td>${_commonEducation(data[zipCodes[index]])}</td>`;
                document.getElementById("numberDisastersColumns").innerHTML += `<td>${(Object.keys(data[zipCodes[index]]['naturalDisasters']['BEGIN_LOCATION']).length).toString()}</td>`;

            
            }

        }
    })
}

function _popularCommuteMedium(data)
{
    let commuteMediums = ['Public transportation (excluding taxicab)', 'Walked', 'Worked from home', 'Car, truck, or van -- drove alone']

    let tmpValue = -1;
    let popularCommute = "";
    for (let index in commuteMediums) {
        let tmp = parseInt(data['zipCode']['ECONOMIC'][commuteMediums[index]].replace(',', ''))

        if(tmpValue < tmp)
        {
            tmpValue = tmp;
            popularCommute = commuteMediums[index];
        }
    }

    return popularCommute;
}


function _commonAgeRange(data)
{
    let ageRanges = ["Under 5 years", "5 to 9 years", "10 to 14 years", "15 to 19 years", "20 to 24 years", "25 to 34 years", "35 to 44 years", "45 to 54 years", "55 to 59 years", "60 to 64 years", "65 to 74 years", "75 to 84 years", "85 years and over"];
    let tmpValue = -1;
    let popularAgeRanges = "";
    for (let index in ageRanges) {
        let tmp = parseInt(data['zipCode']['DEMOGRAPHIC'][ageRanges[index]].replace(',', ''))

        if(tmpValue < tmp)
        {
            tmpValue = tmp;
            popularAgeRanges = ageRanges[index];
        }
    }

    return popularAgeRanges;
}

function _commonEducation(data)
{
    let educationAttainment = ["Less than 9th grade", "9th to 12th grade, no diploma", "High school graduate (includes equivalency)", "High school graduate or higher", "Some college, no degree", "Associate's degree", "Bachelor's degree", "Bachelor's degree or higher", "Graduate or professional degree"];
    let tmpValue = -1;
    let popularEducation = "";
    for (let index in educationAttainment) {
        let tmp = parseInt(data['zipCode']['SOCIAL'][educationAttainment[index]].replace(',', ''))

        if(tmpValue < tmp)
        {
            tmpValue = tmp;
            popularEducation = educationAttainment[index];
        }
    }

    return popularEducation;
}

function renderNaturalDisasters(data = null)
{
    let tableHtml = `<table>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Disaster Type</th>
                            <th>Location</th>
                            <th>Description</th>
                        </tr>
                    `;

    Object.keys(data['naturalDisasters']['BEGIN_YEARMONTH']).forEach(key => {
        tableHtml += `
                        <tr class="destinationRow">
                            <td>${data['naturalDisasters']['BEGIN_YEARMONTH'][key].toString().substring(0,4)}</td>
                            <td>${data['naturalDisasters']['BEGIN_YEARMONTH'][key].toString().substring(4,7)}</td>
                            <td>${data['naturalDisasters']['EVENT_TYPE'][key]}</td>
                            <td>${data['naturalDisasters']['BEGIN_LOCATION'][key]}</td>
                            <td>${data['naturalDisasters']['EVENT_NARRATIVE'][key]}</td>
                        </tr>
    `;
    });

    tableHtml += '</table>'
    document.getElementById("naturalDisastersTableContainer").innerHTML = tableHtml;
}

function generateNearbyHomes(nearByHomesData)
{
    let nearbyHomesTableHtml = `
                                <tr>
                                    <th>Address</th>
                                    <th>living Area</th>
                                    <th>SqFt</th>
                                    <th>Sale Price</th>
                                </tr>
                                `;

    let sumPrice = 0;
    let numOfHomes = nearByHomesData.length;

    for(let i = 0; i < nearByHomesData.length -1; i++)
    {
        sumPrice += nearByHomesData[i]['price'];

        nearbyHomesTableHtml += `<tr>
                                    <td>${nearByHomesData[i]['address']['streetAddress']+' '+nearByHomesData[i]['address']['city']+', '+nearByHomesData[i]['address']['state']+' '+nearByHomesData[i]['address']['zipcode']}</td>
                                    <td>${nearByHomesData[i]['livingArea']}</td>
                                    <td>${nearByHomesData[i]['lotSize']}</td>
                                    <td>$ ${nearByHomesData[i]['price']}</td>
                                </tr>`;
    }


    if(sumPrice != 0)
    {
        document.getElementById('noNearbyHomesText').style.visibility='hidden';
        document.getElementById('nearbyHomesTable').innerHTML = nearbyHomesTableHtml;
        document.getElementById('nearbyHomesAvgPriceText').innerHTML = "Avg. Price: $ " + (sumPrice / numOfHomes);
    }
}

function getAllPropertyInputData()
{
    ZILLOW_LINK = document.getElementById("zillowLinkInput").value;
    ANTICIPATED_RENT = document.getElementById("anticipatedRentInput").value;
    ANTICIPATED_OCCUPIED_MONTHS = document.getElementById("anticipatedOccupiedMonthsInput").value;
    ANTICIPATED_EXPENSES = document.getElementById("anticipatedExpensesInput").value;
    ANTICIPATED_PRINCIPLE = document.getElementById("anticipatedPrincipleInput").value;
    ANTICIPATED_INTEREST = document.getElementById("anticipatedInterestInput").value;
    ANTICIPATED_DOWNPAYMENT = document.getElementById("anticipatedDownpaymentInput").value;
    ANTICIPATED_CLOSING_COST = document.getElementById("anticipatedClosingCostInput").value;
    ANTICIPATED_RENOVATION_COST = document.getElementById("anticipatedRenovationCostInput").value;
}

function generatePropertyAnalysisPremiumReport()
{

    getAllPropertyInputData();
    renderLoadingScreen();
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');

    generatePremiumPropertyAnalysisReport(function(data)
    {

        if(data["status"] == "success")
        {
            renderPropertyAnalysisPremiumReport();
            document.getElementById("generatedDateText").innerHTML = "Report Generated On: "+DATE_TODAY;

            document.getElementById("propertyAddress").innerHTML = data["zillowData"]["address"]["streetAddress"];
            document.getElementById("propertyCityStateZipCode").innerHTML = data["zillowData"]["address"]["city"] + ", " + data["zillowData"]["address"]["state"]+ " "+data["zillowData"]["address"]["zipcode"];

            document.getElementById("propertyImage").src = data['zillowData']['imgSrc']
            document.getElementById("propertyDatePostedText").innerHTML = "Date Posted: "+data['zillowData']['datePosted']

            document.getElementById("propertyPriceText").innerHTML = data['zillowData']['price']
            document.getElementById("propertyBedroomsText").innerHTML = data['zillowData']['bedrooms']
            document.getElementById("propertyBathroomsText").innerHTML = data['zillowData']['bathrooms']
            document.getElementById("propertyStoryText").innerHTML = data['zillowData']['resoFacts']['stories']
            document.getElementById("propertyLivingAreaText").innerHTML = data['zillowData']['livingArea']
            document.getElementById("propertyYearBuiltText").innerHTML = data['zillowData']['yearBuilt']
            document.getElementById("propertyTypeText").innerHTML = data['zillowData']['resoFacts']['propertySubType']
            document.getElementById("propertyPricePerSqFtText").innerHTML = data['zillowData']['resoFacts']['pricePerSquareFoot']
            document.getElementById("propertyHOAText").innerHTML = data['zillowData']['monthlyHoaFee']

            document.getElementById("zillowDescriptionsText").innerHTML = data['zillowData']['description']

            document.getElementById("propertyAreaText").innerHTML = data['zipCodeData']['descriptions']['zipcodeOverall']

            document.getElementById("propertyAreaPopulationText").innerHTML = data['zipCodeData']['zipCode']['DEMOGRAPHIC']['Total population']
            document.getElementById("propertyAreaWeatherText").innerHTML = data['zipCodeData']['weatherData']['averageWeather']+"°F"
            document.getElementById("propertyAreaRentText").innerHTML = data['zipCodeData']['zipCode']['HOUSING']['Rent_Median (dollars)']
            document.getElementById("propertyAreaHomePriceText").innerHTML = data['zipCodeData']['zipCode']['HOUSING']['House_Median (dollars)']
            document.getElementById("propertyAreaIncomeText").innerHTML = data['zipCodeData']['zipCode']['ECONOMIC']['Mean household income (dollars)']
            document.getElementById("propertyAreaCommuteText").innerHTML = data['zipCodeData']['zipCode']['ECONOMIC']['Mean travel time to work (minutes)']
            document.getElementById("propertyAreaSameHomeText").innerHTML = (parseFloat(parseInt(data['zipCodeData']["zipCode"]["SOCIAL"]['Same house'].replace(',', '')) / parseInt(data['zipCodeData']["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)
            document.getElementById("propertyAreaRangeText").innerHTML = _commonAgeRange(data['zipCodeData'])
            document.getElementById("propertyAreaNaturalDisastersNumberText").innerHTML = Object.keys(data['zipCodeData']['naturalDisasters']['BEGIN_LOCATION']).length
            

            document.getElementById("grossOperatingIncomeText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['grossOperatingIncome']
            document.getElementById("netOperatingIncomeText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['netOperatingIncome']
            document.getElementById("capRateText").innerHTML = data['propertyAnalyticsCalculations']['capRate']+ " %"
            document.getElementById("cashFlowText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['cashFlow_BeforeTax']
            document.getElementById("cashOnCashText").innerHTML = data['propertyAnalyticsCalculations']['cashOnCashReturns']+ " %"
            document.getElementById("grossRentMultiplierText").innerHTML = data['propertyAnalyticsCalculations']['grossRentMultiplier']
            document.getElementById("debtServiceCoverageRatio").innerHTML = data['propertyAnalyticsCalculations']['debtServiceCoverageRatio']

            document.getElementById("homePriceAnalyticsText").innerHTML = "$ " +data['zillowData']['price']
            document.getElementById("rentAnalyticsText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['anticipatedRent']
            document.getElementById("expensesAnalyticsText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['anticipatedExpenses']
            document.getElementById("annualDebtServiceText").innerHTML = "$ " +data['propertyAnalyticsCalculations']['annualDebtService']

            generateNearbyHomes(data['zillowData']['nearbyHomes']);
            renderPopulationHistoryChart(data['zipCodeData']);
            renderHomePriceHistoryChart(data['zipCodeData']);

            renderRentComparisonChart(data);
            renderHomePriceComparisonChart(data);

        }
    })
}


function generateDashboard()
{
    retrieveUserAnalytics(function(data)
    {
        if(data['status'] == "success")
        {
            let tier = "Free";

            if(localStorage.getItem("POH_USER_TIER") != 'null')
            {
                tier = localStorage.getItem("POH_USER_TIER");
            }
            
            document.getElementById("dashboardTitleText").innerHTML = "Hello "+data['userAnalytics']['userName']
            document.getElementById("dashboardReportsGeneratedText").innerHTML = data['userAnalytics']['numberOfReports']
            document.getElementById("dashboardTierText").innerHTML = "Subscription Tier : " + tier;
        }
    });
}


function generateToolOptionsMenu()
{
    let toolOptionsHtml = ``;
    

    let userTools = localStorage.getItem("POH_USER_TOOLS");

    if(userTools != 'null')
    {
        userTools = userTools.split(",")
    }

    let toolsDictOptions = {

        "zipCodeAnalyzer": `<div class="menu-row-selection-container">
                                <i class="fa fa-map-marker menu-icon-style"></i>
                                <p class="menu-text" onclick="renderZipCodeAnalysisInputPage()">Zip Code Analysis</p>
                            </div>`,
        
        "zipCodeCompare": `<div class="menu-row-selection-container">
                                <i class="fa fa-balance-scale menu-icon-style"></i>
                                <p class="menu-text" onclick="renderZipCodeCompareInputPage()">Zip Code Compare</p>
                            </div>`,
        "propertyAnalyzer": `<div class="menu-row-selection-container">
                                <i class="fa fa-home menu-icon-style"></i>
                                <p class="menu-text" onclick="renderPropertyAnalysisInputPage()">Property Analysis</p>
                            </div>`,
        "propertyManager": `<div class="menu-row-selection-container">
                                <i class="fa fa-home menu-icon-style"></i>
                                <p class="menu-text" onclick="renderPropertyManagementHome()">Property Manager</p>
                            </div>`,
    }


    if(userTools != 'null')
    {
        for(let index = 0 ; index < userTools.length; index ++)
        {
            toolOptionsHtml += toolsDictOptions[userTools[index]]
        }
    }
    
    document.getElementById("toolOptions").innerHTML = toolOptionsHtml;
}

function generateWebsite()
{
    createUserWebsite(function(data)
    {

        if(data["status"] == "success")
        {
            localStorage.setItem("POH_USER_WEBSITE_ID", data['websiteId']);

            document.getElementById("websiteLiveInfoDiv").style.display = "block";
            document.getElementById("websiteNotLiveInfoDiv").style.display = "none";

            document.getElementById("aTagVisitWebsite").setAttribute("href", `../poh_pm/index.html?wid=${localStorage.getItem("POH_USER_WEBSITE_ID")}`);
        }
    })
}

function checkWebsiteLive()
{
    if(localStorage.getItem("POH_USER_WEBSITE_ID"))
    {
        document.getElementById("websiteLiveInfoDiv").style.display = "block";
        document.getElementById("websiteNotLiveInfoDiv").style.display = "none";

        document.getElementById("aTagVisitWebsite").setAttribute("href", `../poh_pm/index.html?wid=${localStorage.getItem("POH_USER_WEBSITE_ID")}`);
        getWebsiteData();
    }else
    {
        document.getElementById("websiteLiveInfoDiv").style.display = "none";
        document.getElementById("websiteNotLiveInfoDiv").style.display = "block";
    }
}

function getWebsiteData()
{
    retrieveWebsiteData(function(data)
    {

        if(data["status"] == "success")
        {
            document.getElementById('companyName').value = data['websiteData']['companyName'];
            document.getElementById('city').value = data['websiteData']['city'];
            document.getElementById('state').value = data['websiteData']['state'];
            document.getElementById('phoneNumber').value = data['websiteData']['phoneNumber'];
            document.getElementById('contactEmail').value = data['websiteData']['email'];
        }
    })
}

function updateWebsite()
{
    updateUserWebsite(function(data)
    {

        if(data["status"] == "success")
        {
            alert('Website changes have been saved!');
        }
    })
}

function removeWebsite()
{

    removeUserWebsite(function(data)
    {

        if(data["status"] == "success")
        {
            closeWebsiteModal();
            localStorage.removeItem("POH_USER_WEBSITE_ID");
            checkWebsiteLive();
            alert('Website has been deleted!');

        }
    })
}

function createStripeAccount()
{
    document.getElementById("connectStripeAccountButton").disabled = true;
    createAndLinkStripeAccount(function(data)
    {

        if(data["status"] == "success")
        {
            window.open(data['accountOnboardingUrl']);
        }else
        {
            document.getElementById("connectStripeAccountButton").disabled = false;
        }
    })
}


function checkStripeAccountConnection()
{
    if(localStorage.getItem("POH_USER_STRIPE_ACCOUNT_ID"))
    {
        document.getElementById("accountNotConnectedInfoDiv").style.display = "none";
        document.getElementById("accountConnectedInfoDiv").style.display = "block";
    }else
    {
        document.getElementById("accountNotConnectedInfoDiv").style.display = "block";
        document.getElementById("accountConnectedInfoDiv").style.display = "none";        
    }
}

function addProperty()
{
    addNewProperty(function(data)
    {

        if(data["status"] == "success")
        {
            alert("Successfully added property!");
            renderPropertyManagementHome();
        }
    })
}

function getAllUserProperties()
{
    getAllProperties(function(data)
    {

        if(data["status"] == "success")
        {
            let propertiesGridHtml = ``;
            for(let index = 0; index < data['properties'].length; index +=1)
            {

                let imgSrc = '';
                if(data['properties'][index]['propertyImage'] != "None")
                {
                    imgSrc = data['properties'][index]['propertyImage'];
                }else
                {
                    imgSrc = "./noImg.png";
                }

                propertiesGridHtml += `
                
                <div class="propertyViewCard">
                    <img class="propertyCardImage" src=${imgSrc}></img>
                    <div class="propertyCardInfo">
                        <p>${data['properties'][index]['propertyName']}</p>
                        <br>
                        <div class="propertyCardButtons">
                            <button class="propertyNormalCardButton" onclick="renderViewProperty('${data['properties'][index]['pid']}')">View</button>
                            <button class="propertyNormalCardButton" onclick="renderEditProperty('${data['properties'][index]['pid']}')">Edit</button>
                            <button class="propertyRemoveCardButton" onclick="renderRemoveModal('${data['properties'][index]['pid']}')">Remove</button>
                        </div>
                    </div>
                </div>
                
                `;
            }
            document.getElementById("propertyGridSection").innerHTML = propertiesGridHtml ; 
        }
    })
}

function getFullSinglePropertyData(pid, areaAnalytics)
{

    if(Object.keys(SELECTED_PROPERTY_DATA).length === 0)
    {
        getPropertyData(function(data)
        {
    
            if(data["status"] == "success")
            {
    
                SELECTED_PROPERTY_DATA = data;
    
                let imgSrc = '';
                if(data['properties'][0]['propertyImage'] != "None")
                {
                    imgSrc = data['properties'][0]['propertyImage'];
                }else
                {
                    imgSrc = "./noImg.png";
                }

                document.getElementById("propertyName").innerHTML = data['properties'][0]['propertyName'];
                document.getElementById("propertyAddress").innerHTML = data['properties'][0]['propertyAddress'].replace(/:/g, " ");
                document.getElementById("propertyNumRooms").innerHTML = data['properties'][0]['propertyNumberRooms'];
                document.getElementById("propertyNumBathrooms").innerHTML = data['properties'][0]['propertyNumberBathrooms'];
                document.getElementById("propertySqFt").innerHTML = data['properties'][0]['propertySqFt'];
                document.getElementById("propertyImage").src = imgSrc;
                document.getElementById("propertyContractAmount").innerHTML = `$ ${data['properties'][0]['propertyContractPrice']} / month`;
                document.getElementById("propertyContractDateRange").innerHTML = `Start Date: ${data['properties'][0]['propertyContractStartDate']} / End Date: ${data['properties'][0]['propertyContractEndDate']}`;
                document.getElementById("propertyTenantName").innerHTML = data['properties'][0]['propertyTenantName'];
                document.getElementById("propertyTenantEmail").innerHTML = data['properties'][0]['propertyTenantEmail'];
                document.getElementById("propertyTenantPhone").innerHTML = data['properties'][0]['propertyTenantPhoneNumber'];
            }
        }, pid, areaAnalytics)
    }else
    {
        let imgSrc = '';
        if(SELECTED_PROPERTY_DATA['properties'][0]['propertyImage'] != "None")
        {
            imgSrc = SELECTED_PROPERTY_DATA['properties'][0]['propertyImage'];
        }else
        {
            imgSrc = "./noImg.png";
        }

        document.getElementById("propertyName").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyName'];
        document.getElementById("propertyAddress").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyAddress'].replace(/:/g, " ");
        document.getElementById("propertyNumRooms").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyNumberRooms'];
        document.getElementById("propertyNumBathrooms").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyNumberBathrooms'];
        document.getElementById("propertySqFt").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertySqFt'];
        document.getElementById("propertyImage").src = imgSrc;
        document.getElementById("propertyContractAmount").innerHTML = `$ ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractPrice']} / month`;
        document.getElementById("propertyContractDateRange").innerHTML = `Start Date: ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractStartDate']} / End Date: ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractEndDate']}`;
        document.getElementById("propertyTenantName").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyTenantName'];
        document.getElementById("propertyTenantEmail").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyTenantEmail'];
        document.getElementById("propertyTenantPhone").innerHTML = SELECTED_PROPERTY_DATA['properties'][0]['propertyTenantPhoneNumber'];
    }

}

function getSinglePropertyDataEdit(pid, areaAnalytics)
{
    getPropertyData(function(data)
    {

        if(data["status"] == "success")
        {

            let imgSrc = "./noImg.png";

            if(data['properties'][0]['propertyImage'] != "None")
            {
                imgSrc = data['properties'][0]['propertyImage'];
            }
            

            document.getElementById("propertyName").value = data['properties'][0]['propertyName'];
                    
            let addressParts = data['properties'][0]['propertyAddress'].split(":");
            
            document.getElementById("streetAddress").value = addressParts[0];
            document.getElementById("cityAddress").value = addressParts[1];
            document.getElementById("stateAddress").value = addressParts[2];
            document.getElementById("zipCodeAddress").value = addressParts[3];

            document.getElementById("propertyNumRooms").value = data['properties'][0]['propertyNumberRooms'];
            document.getElementById("propertyNumBathrooms").value = data['properties'][0]['propertyNumberBathrooms'];
            document.getElementById("propertySqft").value = data['properties'][0]['propertySqFt'];
            document.getElementById("output").src = imgSrc;
            document.getElementById("output").value = imgSrc;
            document.getElementById("pricePerMonth").value = data['properties'][0]['propertyContractPrice'];
            document.getElementById("contractStartDate").value = data['properties'][0]['propertyContractStartDate'];
            document.getElementById("contractEndDate").value = data['properties'][0]['propertyContractEndDate'];
            document.getElementById("mainTenantName").value = data['properties'][0]['propertyTenantName'];
            document.getElementById("mainTenantEmail").value = data['properties'][0]['propertyTenantEmail'];
            document.getElementById("mainTenantPhoneNumber").value = data['properties'][0]['propertyTenantPhoneNumber'];
            document.getElementById("acceptOnlinePayments").checked = data['properties'][0]['acceptOnlinePayments'] == "True" ? true : false;
        }
    }, pid, areaAnalytics)

}

function checkForStripeOnlinePayments()
{
    if(localStorage.getItem("POH_USER_STRIPE_ACCOUNT_ID"))
    {
        document.getElementById("enableStripeMessage").hidden = true;
    }else
    {
        document.getElementById("enableStripeMessage").hidden = false
        document.getElementById("acceptOnlinePayments").disabled = true;
    }
}

function savePropertyChanges(pid)
{
    savePropertyEditChanges(function(data)
    {

        if(data["status"] == "success")
        {
            alert("Successfully edited property!");
        }
    }, pid)
}


function populatePropertyAreaAnalytics()
{

    
    document.getElementById("propertyAreaText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['descriptions']['zipcodeOverall']


    document.getElementById("propertyAreaPopulationText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['zipCode']['DEMOGRAPHIC']['Total population']
    document.getElementById("propertyAreaRentText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['zipCode']['HOUSING']['Rent_Median (dollars)']
    document.getElementById("propertyAreaHomePriceText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['zipCode']['HOUSING']['House_Median (dollars)']
    document.getElementById("propertyAreaIncomeText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['zipCode']['ECONOMIC']['Mean household income (dollars)']
    document.getElementById("propertyAreaCommuteText").innerHTML = SELECTED_PROPERTY_DATA['zipCodeData']['zipCode']['ECONOMIC']['Mean travel time to work (minutes)']
    document.getElementById("propertyAreaSameHomeText").innerHTML = (parseFloat(parseInt(SELECTED_PROPERTY_DATA['zipCodeData']["zipCode"]["SOCIAL"]['Same house'].replace(',', '')) / parseInt(SELECTED_PROPERTY_DATA['zipCodeData']["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)
    document.getElementById("propertyAreaRangeText").innerHTML = _commonAgeRange(SELECTED_PROPERTY_DATA['zipCodeData'])

    renderPropertyAreaRentComparisonChart(SELECTED_PROPERTY_DATA);

}

function populatePropertyPaymentsPage()
{
    
    document.getElementById("propertyContractAmount").innerHTML = `$ ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractPrice']} / month`;
    document.getElementById("propertyContractDateRange").innerHTML = `Start Date: ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractStartDate']} / End Date: ${SELECTED_PROPERTY_DATA['properties'][0]['propertyContractEndDate']}`;

}

function removeCachedPropertyData()
{
    SELECTED_PROPERTY_DATA = {};
}

function copyPaymentPortalLink() {
    // Get the text field
    var copyText = document.getElementById("paymentPortalLink");
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerHTML);
    
    document.getElementById("copyLinkButton").style.backgroundColor = '#f36c36';
    document.getElementById("copyLinkButton").style.color = '#fff';
    document.getElementById("copyLinkButton").innerHTML = 'Copied Text';

    setTimeout(function(){
        document.getElementById("copyLinkButton").style.backgroundColor = '#9cc5c7';
        document.getElementById("copyLinkButton").style.color = '#fff';
        document.getElementById("copyLinkButton").innerHTML = '<i class="fa fa-copy"></i> Copy Link';
    }, 5000);

  }

function removeProperty()
{

    removePropertyPM(function(data)
    {

        if(data["status"] == "success")
        {
            alert("Successfully deleted property!");
            renderPropertyManagementHome();
        }
    }, TO_DELETE_PID)
}

function addStripeIdToUser()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const stripeAccountId = urlParams.get('stripeAccountId');
    const email = urlParams.get('email');
    const token = urlParams.get('userToken');

    assignStripeIdtoUserAccount(function(data)
    {

        if(data["status"] == "success")
        {
            var timer = setTimeout(function() {
                window.location='https://placeofhome.org/premium/premium.html'
            }, 5000);
        }
    }, email, token, stripeAccountId)
}

