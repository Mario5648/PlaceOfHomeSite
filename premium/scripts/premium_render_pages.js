function renderLoadingScreen()
{
    let loadingHtml = `
                <div class="loadingBody">
                    <div class="loadingBodySection">
                        <img src="../placeOfHomeLoading.gif" width="200px"></img>
                        <p class="loadingText">Gathering data for the area to potentially call home!</p>
                    </div>
                </div>
    `;

    document.getElementById("mainBody").innerHTML = loadingHtml;
}

function renderZipCodeAnalysisInputPage()
{
    let zipCodeInputHtml = `
                                
                                <div class="main-header-container">
                                    <p class="main-header-text">Zip Code Analyzer Report</p>
                                    <p class="main-header-subtext">Analyze the area a property is located. See the social, economic, demograpic, and housing data.</p>
                                </div>

                                <div class="input-box-container">
                                    <div class="input-box">
                                        <br>
                                        <label for="statesSelection">State :</label>
                                        <select id="statesSelection" name="statesSelection" class="input-field" onchange="populateCitySelection()"></select>
                                        <br>
                                        <br>
                                        <span id="cityFieldSection"></span>
                                        <div id="autocomplete-results" class="autocomplete-results"></div><br>
                                        <br>
                                        <br>
                                        <label for="zipCodeInput">Zip Code :</label>
                                        <input class="input-field" id="zipCodeInput" name="zipCodeInput" type="number"></input>
                                        <br>
                                        <button class="input-submit-button" onclick="generateZipCodePremiumReport()">Submit</button>
                                    </div>
                                </div>
    `;

    document.getElementById("mainBody").innerHTML = zipCodeInputHtml;

    generateStateSelectionFieldOptions();
}

function renderZipCodeCompareInputPage()
{
    let zipCodeInputHtml = `
                                
        <div class="main-header-container">
            <p class="main-header-text">Zip Code Compare</p>
            <p class="main-header-subtext">This tool enables users to compare key metrics such as social, economic, demograpic, and housing data across up to five zip codes simultaneously within the same city.</p>
        </div>

        <div class="input-box-container">
            <div class="input-box">
                <br>
                <label for="statesSelection">State :</label>
                <select id="statesSelection" name="statesSelection" class="input-field" onchange="populateCitySelection()"></select>
                <br>
                <br>
                <span id="cityFieldSection"></span>
                <div id="autocomplete-results" class="autocomplete-results"></div><br>
                <br>
                <br>
                <div id="zipCodeInputContainer">
                    <span>
                        <label for="zipCodeInput">Zip Code:</label><br>
                        <input style="width:360px;"class="input-field zipCodeInputField" id="zipCodeInput" name="zipCodeInput" type="number"></input><br>
                        <br>
                    </span>
                </div>
                <br>
                <div class="input-functions-container">
                    <button class="input-add-button" onclick="addInputField()">Add Zip Code</button>
                    <button class="input-del-button" onclick="removeInputField()">Delete Zip Code</button>
                </div>
                <br>
                <button class="input-submit-button" onclick="generateZipCodeComparePremiumReport()">Submit</button>
            </div>
        </div>
    `;

    document.getElementById("mainBody").innerHTML = zipCodeInputHtml;

    generateStateSelectionFieldOptions();
}

function renderPropertyAnalysisInputPage()
{
    let propertyInputHtml = `               
                        <div class="main-header-container">
                            <p class="main-header-text">Property Analysis Report</p>
                            <p class="main-header-subtext">This application generates a comprehensive property report by simply inputting a Zillow link, providing detailed information on property value, neighborhood statistics, and more.</p>
                        </div>

                        <div class="input-box-container">
                            <div class="input-box">
                                <br>
                                <label for="zillowLinkInput">Zillow Property Link:</label>
                                <input style="width:360px;"class="input-field" id="zillowLinkInput" name="zillowLinkInput" type="text"></input>
                                <br>  
                                <button class="input-submit-button" onclick="generatePropertyAnalysisPremiumReport()">Submit</button>
                            </div>
                        </div>
                    `;

    document.getElementById("mainBody").innerHTML = propertyInputHtml;
}

function renderPremiumReportPage()
{
    let reportHtml = `  
                        <div class="reportMenuHeaderContainer">
                            <p class="zipCodeHeaderTextStyle">Zip Code Analysis Report</p>
                            <button class="pdfButtonStyle" hidden>Export to PDF <i class="fa fa-file-pdf-o"></i></button>
                        </div>
                        <div id="reportHeader">
                            <div id="reportHeaderContainer">
                                <div id="reportHeaderContainerText">
                                    <div class="reportZipCodeGradeContainer">
                                        <p class="ratingBoxTitle">Zip Code Rating</p>
                                        <div class="reportRatingRow">
                                            <img id="overallRatingIcon" class="gradeImgStyle" src="../grade_icons/grade_null.png">
                                            <p class="ratingTextPadding ratingText" > Overall Zip Code Rating </p>
                                        </div>
                                        <hr>
                                        <div class="reportRatingRow">
                                            <img id="rentRatingIcon" class="gradeImgStyle" src="../grade_icons/grade_null.png">
                                            <p class="ratingTextPadding ratingText"> Rent Rating </p>
                                        </div>
                                        <div class="reportRatingRow">
                                            <img id="homePriceRating" class="gradeImgStyle" src="../grade_icons/grade_null.png">
                                            <p class="ratingTextPadding ratingText"> Home Price Rating </p>
                                        </div>
                                        <div class="reportRatingRow">
                                            <img id="commuteRating" class="gradeImgStyle" src="../grade_icons/grade_null.png">
                                            <p class="ratingTextPadding ratingText"> Commute Rating </p>
                                        </div>
                                    </div>
                                    <div class="zipCodeTextContainer">
                                        <div id="reportHeaderInfoContainer">
                                            <p class="report-header-text">Zip Code Report</p>
                                            <p id="dateRangeText" class="report-info-text">01/01/2022 - 03/01/2024</p>
                                        </div>
                                        <div id="reportHeaderAddressContainer">
                                            <div id="reportHeaderAddressContainerBox">
                                                <p class="report-header-text">Zip Code:</p>
                                                <p id="zipCodeText" class="report-info-text">77002</p>
                                            </div>
                                            <div id="reportHeaderAddressContainerBox">
                                                <p class="report-header-text">City:</p>
                                                <p id="cityStateText" class="report-info-text">Houston, TX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Overview Section-->
                        <div id="overviewSection">
                            <div id="overviewSectionContainer">
                                <p class="section-header-text">Overview</p>
                                <p class="section-title-text">Zip Code Description</p>
                                <div id="overviewContainer">
                                    <div id="overviewTextBox">
                                        <p id="zipCodeOverviewDescription" class="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                                <p class="section-title-text">Quick Stats</p>
                                <div id="overviewContainer">
                                    <div class="thirds-horizontal-container-box">
                                        <div class="thirds-horizontal-container-box-1">
                                            <p class="overview-box-title">Zip Code Population</p>
                                            <p id="zipCodePopulation" class="overview-box-value-text">16,763</p>
                                        </div>
                                        <div class="vl"></div>
                                        <div class="thirds-horizontal-container-box-2">
                                            <p class="overview-box-title">Zip Code Weather</p>
                                            <p id="avgWeather" class="overview-box-value-text">Avg. 87°F/30.5°C</p>
                                            <p id="springWeather" class="box-value-subtext">Spring : 106°F</p>
                                            <p id="summerWeather" class="box-value-subtext">Summer: 28°F/-2°C</p>
                                            <p id="fallWeather" class="box-value-subtext">Fall: 28°F/-2°C</p>
                                            <p id="winterWeather" class="box-value-subtext">Winter: 28°F/-2°C</p>

                                        </div>
                                        <div class="vl"></div>
                                        <div class="thirds-horizontal-container-box-3">
                                            <p class="overview-box-title">City Crime</p>
                                            <p class="overview-box-value-text">City Compared to Sate:</p>
                                            <p id="cityStateCrime" class="box-value-subtext"></p>
                                            <p class="overview-box-value-text">City Compared to Nation:</p>
                                            <p id="cityNationCrime" class="box-value-subtext"></p>

                                        </div>
                                    </div>
                                </div>
                                <div id="overviewContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Crime Breakdown</p>
                                        <canvas id="crimeBreakdownChart" width="400" height="200"></canvas>
                                    </div>
                                </div>
                                <div id="populationContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Population History</p>
                                        <canvas id="populationChart" width="400" height="200"></canvas>
                                        <p id="populationDescription" class="box-value-subtext"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <hr>

                        <!-- Closest to You Section -->
                        <div id="closestSection">

                            <div id="closestSectionContainer">
                                <p class="section-header-text">Closest Destinations...</p>
                                <p id="destinationsZipText" class="section-title-text">Destinations</p>
                                <div id="closestDestinationContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Restaurants in the Area</p>
                                        <table id="restaurantTable" class="close-destinations-table">
                                        </table>
                                    </div>
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Parks in the Area</p>
                                        <table id="parkTable" class="close-destinations-table">
                                        </table>
                                    </div>

                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Grocery Stores in the Area</p>
                                        <table id="groceryStoreTable" class="close-destinations-table">
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <hr>

                        <!-- Housing Section -->
                        <div id="housingSection">
                            <div id="housingSectionContainer">
                                <p id="livingInZipCodeText" class="section-header-text">Living in 77002</p>

                                <p class="section-title-text">Rent & Home Prices</p>
                                <div id="housingContainer">
                                    <div class="half-horizontal-container-box">
                                        <div class="left-horizontal-container-box">
                                            <p class="box-title">Zip Code Median Rent</p>
                                            <p id="zipCodeRent" class="box-value-text">$1,634</p>

                                            <p id="cityRent" class="box-value-subtext">Avg. City : $1,150</p>
                                            <p id="stateRent" class="box-value-subtext">Avg. State : $1,250</p>
                                            <p id="nationalRent" class="box-value-subtext">Avg. National : $1,190</p>
                                        </div>
                                        <div class="vl"></div>
                                        <div class="right-horizontal-container-box">
                                            <p class="box-title">Zip Code Median Home Price</p>
                                            <p id="zipCodeHomePrice" class="box-value-text">$150,342</p>

                                            <p id="cityHomePrice" class="box-value-subtext">Avg. City : $130,150</p>
                                            <p id="stateHomePrice" class="box-value-subtext">Avg. State : $111,250</p>
                                            <p id="nationalHomePrice" class="box-value-subtext">Avg. National : $180,190</p>
                                        </div>
                                    </div>
                                </div>

                                <div id="housingContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Rent History</p>
                                        <canvas id="rentChart" width="400" height="200"></canvas>
                                        <p id="rentDescription" class="box-value-subtext"></p>
                                    </div>
                                </div>

                                <div id="housingContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Home Price History</p>
                                        <canvas id="homePriceChart" width="400" height="200"></canvas>
                                        <p id="homePriceDescription" class="box-value-subtext"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <!-- Economic Section -->
                        <div id="economicSection">
                            <div id="economicSectionContainer">
                                <p id="workingInZipCodeText" class="section-header-text">Working in 77002</p>
                                <p class="section-title-text">Employment</p>
                                <div id="economicContainer">
                                    <div class="full-horizontal-container-box">
                                        <div>
                                            <p class="box-title">Zip Code Average Income</p>
                                            <p id="zipCodeIncome" class="box-value-text">$78,531</p>
                                            <p id="cityIncome" class="box-value-subtext">Avg. City : $87,150</p>
                                            <p id="stateIncome" class="box-value-subtext">Avg. State : $73,250</p>
                                            <p id="nationalIncome" class="box-value-subtext">Avg. National : $54,190</p>
                                        </div>
                                        <canvas id="incomeHistory" width="400" height="200"></canvas>
                                        <p id="incomeHistoryDescription" class="box-value-subtext"></p>

                                    </div>
                                </div>

                                <div id="economicContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Employment vs Unemployment</p>
                                        <canvas id="employedVsUnemployed" width="400" height="200"></canvas>
                                    </div>
                                </div>
                                <p class="section-title-text">Commute To Work</p>
                                <div id="economicContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Average Commute Time</p>
                                        <p id="zipCodeCommuteTime" class="box-value-text">26.7 minutes</p>
                                        <p id="cityCommuteTime" class="box-value-subtext">Avg. City : 43.8 minutes</p>
                                        <p id="stateCommuteTime" class="box-value-subtext">Avg. State : 32.9 minutes</p>
                                        <p id="nationalCommuteTime" class="box-value-subtext">Avg. National : 1 hour 17 minutes</p>

                                        <canvas id="commuteToWork" width="400" height="200"></canvas>
                                        <p id="commuteDescription" class="box-value-subtext">* People seem to walk to work more in this zip code, this could be an excellent choice to save time and money on public transportation and gas</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <!-- Social Section -->
                        <div id="socialSection">
                            <div id="socialSectionContainer">
                                <p id="peopleInZipCodeText" class="section-header-text">People in 77002</p>
                                <p class="section-title-text">% of People who Stayed/Moved</p>
                                <div id="socialContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Percent of People Who Stayed</p>
                                        <p id="zipCodePeopleStayedSameHome" class="people-stayed-text-style">57% stay in 77002</p>
                                        <p id="zipCodePeopleStayedSameCounty" class="people-stayed-text-style">57% stay in 77002</p>
                                        <p id="zipCodePeopleStayedSameState" class="people-stayed-text-style">57% stay in 77002</p>
                                        <p id="zipCodePeopleStayedDifferentState" class="people-stayed-text-style">57% stay in 77002</p>
                                        <canvas id="residentsStayedOverYears" width="400" height="200"></canvas>
                                        <p id="peopleStayedDescription" class="box-value-subtext">* Note! people seem to be moving out of this zip code for the past 5 years this could be caused for various reasons.</p>
                                    </div>
                                </div>

                                <p class="section-title-text">Demographic</p>

                                <div id="socialContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Race - Demographic</p>
                                        <canvas id="raceDemographicBreakdown" width="400" height="200"></canvas>
                                    </div>
                                </div>
                                <div id="socialContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Age - Demographic</p>
                                        <canvas id="ageDemographicBreakdown" width="400" height="200"></canvas>
                                    </div>
                                </div>
                                <div id="socialContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Education Attainment</p>
                                        <canvas id="educationAttainmentBreakdown" width="400" height="200"></canvas>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <hr>

                        <!-- Natural Disaster Section -->
                        <div id="naturalDisasterSection">
                            <div id="naturalDisasterSectionContainer">
                                <p id="naturalDisastersInCityText" class="section-header-text">Natural Disasters in City</p>
                                <p class="section-title-text">Natural Disasters from 2018 - 2023</p>

                                <div id="naturalDisastersContainer">
                                    <div class="full-horizontal-container-box" id="naturalDisastersTableContainer">

                                    </div>
                                </div>

                            </div>
                        </div>

                        <hr>

                        <!-- Social Section -->
                        <div id="COLSection">
                            <div id="COLSectionContainer">
                                <p id="costOfLivingInZipCodeText" class="section-header-text">Cost of Living in 77002</p>
                                <p id="costBreakDownInZipCodeText" class="section-title-text">Cost breakdown for one person in 77002</p>
                                <div id="COLContainer">

                                    <div class="StyledReceipt">
                                        <div class="reciept-header-text-container">
                                        <p class="reciept-title">Cost of Living</p>
                                        <p id="COLSubText" class="reciept-header-sub-text">How much will you pay on average living in 77002?</p>
                                        </div>
                                        <div class="reciept-horizontal-line"></div>
                                        <table class="COL-table">
                                            <tr>
                                                <td class="reciept-subtitles" style="text-align: left;">Item</td>
                                                <td class="reciept-subtitles" style="text-align: right;">Avg. Price</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">1. Food</td>
                                                <td id="foodCOL" class="reciept-bold-text" style="text-align: right;">$400</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">2. Healthcare</td>
                                                <td id="healthcareCOL" class="reciept-bold-text" style="text-align: right;">$600</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">3. Housing</td>
                                                <td id="housingCOL" class="reciept-bold-text" style="text-align: right;">$1780</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">4. Transportation</td>
                                                <td id="transportationCOL" class="reciept-bold-text" style="text-align: right;">$1780</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">5. Other</td>
                                                <td id="otherCOL" class="reciept-bold-text" style="text-align: right;">$1780</td>
                                            </tr>
                                        </table>
                                        <div class="reciept-horizontal-line"></div>
                                        <table class="COL-table">
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Monthly Taxes</td>
                                                <td id="taxesCOL" class="reciept-bold-text" style="text-align: right;">$2300</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Monthly Total</td>
                                                <td id="monthlyTotalCOL" class="reciept-bold-text" style="text-align: right;">$2300</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Annual Total</td>
                                                <td id="annualTotalCOL" class="reciept-bold-text" style="text-align: right;">$12300</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

    `;

    document.getElementById("mainBody").innerHTML = reportHtml;
}


function renderZipCodeComparisonPremiumReport()
{
    let zipCodeComparisonHtml = `
    
            <div class="reportMenuHeaderContainer">
                <p class="zipCodeHeaderTextStyle">Zip Code Comparison Report</p>
                <button class="pdfButtonStyle" hidden>Export to PDF <i class="fa fa-file-pdf-o"></i></button>
            </div>

            <div class="main-header-container">
                <p id="cityStateText" class="main-header-text">Houston, TX</p>
                <p id="dateRangeText" class="main-header-subtext">01/01/2022 - 06/02/2024</p>
            </div>

            <div class="table-section-container">

                <div class="header-table-section">
                    <table id="zipCodeComparisonHeaderTable" class="header-comparison-table">
                        <tr id="zipCodesColumns">
                            <th></th>
                        </tr>
                    </table>
                </div>

                <div class="table-header-section">
                    <p>Overview</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="descriptionColumns">
                            <th>Description</th>
                        </tr>
                        <tr id="populationColumns">
                            <th>Population</th>
                        </tr>
                        <tr id="avgWeatherColumns">
                            <th>Avg. Weather</th>
                        </tr>
                    </table>
                </div>
                <div class="table-header-section">
                    <p>Living Prices</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="medianRentPriceColumns">
                            <th>Median Rent</th>
                        </tr>
                        <tr id="medianHomePriceColumns">
                            <th>Median Home Price</th>
                        </tr>
                    </table>
                </div>

                <div class="table-header-section">
                    <p>Working Data</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="avgIncomeColumns">
                            <th>Avg. Income</th>
                        </tr>
                        <tr id="employmentColumns">
                            <th>Employment</th>
                        </tr>
                        <tr id="unemploymentColumns">
                            <th>Unemployment</th>
                        </tr>
                        <tr id="avgCommuteTimeColumns">
                            <th>Avg. Commute Time</th>
                        </tr>
                        <tr id="commuteMediumColumns">
                            <th>Preffered Commute Medium</th>
                        </tr>
                    </table>
                </div>

                <div class="table-header-section">
                    <p>Moving vs. Staying (After a Year)</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="sameHomeColumns">
                            <th>Same Home</th>
                        </tr>
                        <tr id="sameCountyColumns">
                            <th>Same County (Moved Homes)</th>
                        </tr>
                        <tr id="sameStateColumns">
                            <th>Same State (Moved Homes)</th>
                        </tr>
                        <tr id="movedOutColumns">
                            <th>Moved Out of State</th>
                        </tr>
                    </table>
                </div>

                <div class="table-header-section">
                    <p>Demographic</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="commonAgeRangeColumns">
                            <th>Most Common Age Range</th>
                        </tr>
                        <tr id="commonEducationColumns">
                            <th>Most Common Education Attainment</th>
                        </tr>
                    </table>
                </div>

                <div class="table-header-section">
                    <p>Natural Disasters</p>
                </div>
                <div class="table-section">
                    <table id="zipCodeComparisonTable" class="comparison-table">
                        <tr id="numberDisastersColumns">
                            <th>Number of Disasters</th>
                        </tr>
                    </table>
                </div>
            </div>
    `;

    document.getElementById("mainBody").innerHTML = zipCodeComparisonHtml;

}

function renderPropertyAnalysisPremiumReport()
{

    let propertyAnalysisReportHtml = `
    
    
    
    `;


    document.getElementById("mainBody").innerHTML = propertyAnalysisReportHtml;
}

function renderFailedPage()
{
    let failedHtml = `
                <div class="loadingBody">
                    <div class="loadingBodySection">
                        <p class="loadingText">Unfortanately there is no data found for this zipcode.</p>
                    </div>
                </div>
    `;

    document.getElementById("mainBody").innerHTML = failedHtml;
}
