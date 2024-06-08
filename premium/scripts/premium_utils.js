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
                            <td>${data['naturalDisasters']['BEGIN_YEARMONTH'][key].toString().substring(0,4)}</td>
                            <td>${data['naturalDisasters']['EVENT_TYPE'][key]}</td>
                            <td>${data['naturalDisasters']['BEGIN_LOCATION'][key]}</td>
                            <td>${data['naturalDisasters']['EVENT_NARRATIVE'][key]}</td>
                        </tr>
    `;
    });

    tableHtml += '</table>'
    document.getElementById("naturalDisastersTableContainer").innerHTML = tableHtml;
}


function generatePropertyAnalysisPremiumReport()
{

    renderLoadingScreen();
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=device-width, initial-scale=1.0');

    generatePremiumPropertyAnalysisReport(function(data)
    {

        if(data["status"] == "success")
        {
            renderPropertyAnalysisPremiumReport();
        }
    })
}