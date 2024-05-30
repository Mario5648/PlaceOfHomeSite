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
            document.getElementById("cityNationCrime").innerHTML = data["crime"]["nationCrimeDescription"];
            document.getElementById("cityStateCrime").innerHTML = data["crime"]["stateCrimeDescription"];

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

            document.getElementById("zipCodeCommuteTime").innerHTML = data["zipCode"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("cityCommuteTime").innerHTML = "Avg. City : "+data["city"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("stateCommuteTime").innerHTML = "Avg. State : "+data["state"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";
            document.getElementById("nationalCommuteTime").innerHTML = "Avg. National : "+data["nation"]["ECONOMIC"]["Mean travel time to work (minutes)"] + " minutes";

            document.getElementById("commuteDescription").innerHTML = "*"+data["descriptions"]["commute"];
            
            document.getElementById("zipCodePeopleStayedSameHome").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same house'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ " % stayed in the same home for a year";
            document.getElementById("zipCodePeopleStayedSameCounty").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same county'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ " % stayed in the same county for a year after moving homes";
            document.getElementById("zipCodePeopleStayedSameState").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Same state'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ " % stayed in the same state for a year after moving";
            document.getElementById("zipCodePeopleStayedDifferentState").innerHTML =  (parseFloat(parseInt(data["zipCode"]["SOCIAL"]['Different state'].replace(',', '')) / parseInt(data["zipCode"]["SOCIAL"]['Population 1 year and over'].replace(',', '')) ) * 100).toFixed(2)+ " % moved out of the state after a year";
         
         
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
            renderRentHistoryChart(data);
            renderHomePriceHistoryChart(data);
            renderEmploymentChart(data);
            renderCommuteChart(data);
            renderResidentsStayedChart(data);

            renderRestaurants(data["destinations"]["restaurants"]["places"]);
            renderParks(data["destinations"]["parks"]["places"]);
            renderGroceryStores(data["destinations"]["groceryStores"]["places"]);
        }
    })
}