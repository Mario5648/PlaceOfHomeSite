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

function renderDashboard()
{
    let dashboardHtml = `
                        <div class="dashboard-section-container">
                            <p id="dashboardTitleText" class="dashboard-title-text">Hello</p>
                            <p id="dashboardTierText">Tier</p>
                            <br>
                            <br>
                            <br>
                            <div class="dashboard-boxes-container">
                                <div class="dashboard-box">
                                    <p>Reports Generated</p>
                                    <p id="dashboardReportsGeneratedText"></p>
                                </div>
                            </div>
                        </div>
    `;

    document.getElementById("mainBody").innerHTML = dashboardHtml;

    generateDashboard();
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
                                <p class="input-header-text">Zillow Info</p>
                                <label for="zillowLinkInput">Zillow Property Link:</label>
                                <input style="width:360px;"class="input-field" id="zillowLinkInput" name="zillowLinkInput" type="text"></input>
                                <br>
                                <p class="input-header-text">Property Info</p>
                                <label for="anticipatedRentInput">Anticipated Monthly Rent:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedRentInput" name="anticipatedRentInput" type="number"></input>
                                <br>
                                <label for="anticipatedOccupiedMonthsInput">Anticipated Occupied Months:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedOccupiedMonthsInput" name="anticipatedOccupiedMonthsInput" type="number"></input>
                                <br>
                                <label for="anticipatedExpensesInput">Anticipated Expenses:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedExpensesInput" name="anticipatedExpensesInput" type="number"></input>
                                <br>
                                <p class="input-header-text">Annual Debt Info</p>
                                <label for="anticipatedPrincipleInput">Anticipated Principle:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedPrincipleInput" name="anticipatedPrincipleInput" type="number"></input>
                                <br>
                                <label for="anticipatedInterestInput">Anticipated Interest:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedInterestInput" name="anticipatedInterestInput" type="number"></input>
                                <br>
                                <p class="input-header-text">Purchase Info</p>
                                <label for="anticipatedDownpaymentInput">Anticipated Downpayment:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedDownpaymentInput" name="anticipatedDownpaymentInput" type="number"></input>
                                <br>
                                <label for="anticipatedClosingCostInput">Anticipated Closing Cost:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedClosingCostInput" name="anticipatedClosingCostInput" type="number"></input>
                                <br>
                                <label for="anticipatedRenovationCostInput">Anticipated Renovation Cost:</label>
                                <input style="width:360px;"class="input-field" id="anticipatedRenovationCostInput" name="anticipatedRenovationCostInput" type="number"></input>
                                <br>
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
                                            <p id="dateRangeText" class="report-info-text"></p>
                                        </div>
                                        <div id="reportHeaderAddressContainer">
                                            <div id="reportHeaderAddressContainerBox">
                                                <p class="report-header-text">Zip Code:</p>
                                                <p id="zipCodeText" class="report-info-text"></p>
                                            </div>
                                            <div id="reportHeaderAddressContainerBox">
                                                <p class="report-header-text">City:</p>
                                                <p id="cityStateText" class="report-info-text"></p>
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
                                        <p id="zipCodeOverviewDescription" class="overview-text">- Not Found -</p>
                                    </div>
                                </div>
                                <p class="section-title-text">Quick Stats</p>
                                <div id="overviewContainer">
                                    <div class="thirds-horizontal-container-box">
                                        <div class="thirds-horizontal-container-box-1">
                                            <p class="overview-box-title">Zip Code Population</p>
                                            <p id="zipCodePopulation" class="overview-box-value-text">- Not Found -</p>
                                        </div>
                                        <div class="vl"></div>
                                        <div class="thirds-horizontal-container-box-2">
                                            <p class="overview-box-title">Zip Code Weather</p>
                                            <p id="avgWeather" class="overview-box-value-text">- Not Found -</p>
                                            <p id="springWeather" class="box-value-subtext">- Not Found -</p>
                                            <p id="summerWeather" class="box-value-subtext">- Not Found -</p>
                                            <p id="fallWeather" class="box-value-subtext">- Not Found -</p>
                                            <p id="winterWeather" class="box-value-subtext">- Not Found -</p>

                                        </div>
                                        <div class="vl"></div>
                                        <div class="thirds-horizontal-container-box-3">
                                            <p class="overview-box-title">City Crime</p>
                                            <p class="overview-box-value-text">City Compared to Sate:</p>
                                            <p id="cityStateCrime" class="box-value-subtext">- Not Found -</p>
                                            <p class="overview-box-value-text">City Compared to Nation:</p>
                                            <p id="cityNationCrime" class="box-value-subtext">- Not Found -</p>

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
                                            <p id="zipCodeRent" class="box-value-text">- Not Found -</p>

                                            <p id="cityRent" class="box-value-subtext">- Not Found -</p>
                                            <p id="stateRent" class="box-value-subtext">- Not Found -</p>
                                            <p id="nationalRent" class="box-value-subtext">- Not Found -</p>
                                        </div>
                                        <div class="vl"></div>
                                        <div class="right-horizontal-container-box">
                                            <p class="box-title">Zip Code Median Home Price</p>
                                            <p id="zipCodeHomePrice" class="box-value-text">- Not Found -</p>

                                            <p id="cityHomePrice" class="box-value-subtext">- Not Found -</p>
                                            <p id="stateHomePrice" class="box-value-subtext">- Not Found -</p>
                                            <p id="nationalHomePrice" class="box-value-subtext">- Not Found -</p>
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
                                <p id="workingInZipCodeText" class="section-header-text">Working in</p>
                                <p class="section-title-text">Employment</p>
                                <div id="economicContainer">
                                    <div class="full-horizontal-container-box">
                                        <div>
                                            <p class="box-title">Zip Code Average Income</p>
                                            <p id="zipCodeIncome" class="box-value-text">- Not Found -</p>
                                            <p id="cityIncome" class="box-value-subtext">- Not Found -</p>
                                            <p id="stateIncome" class="box-value-subtext">- Not Found -</p>
                                            <p id="nationalIncome" class="box-value-subtext">- Not Found -</p>
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
                                        <p id="zipCodeCommuteTime" class="box-value-text">- Not Found -</p>
                                        <p id="cityCommuteTime" class="box-value-subtext">- Not Found -</p>
                                        <p id="stateCommuteTime" class="box-value-subtext">- Not Found -</p>
                                        <p id="nationalCommuteTime" class="box-value-subtext">- Not Found -</p>

                                        <canvas id="commuteToWork" width="400" height="200"></canvas>
                                        <p id="commuteDescription" class="box-value-subtext"></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <!-- Social Section -->
                        <div id="socialSection">
                            <div id="socialSectionContainer">
                                <p id="peopleInZipCodeText" class="section-header-text">People in</p>
                                <p class="section-title-text">% of People who Stayed/Moved</p>
                                <div id="socialContainer">
                                    <div class="full-horizontal-container-box">
                                        <p class="box-title">Zip Code Percent of People Who Stayed</p>
                                        <p id="zipCodePeopleStayedSameHome" class="people-stayed-text-style">- Not Found -</p>
                                        <p id="zipCodePeopleStayedSameCounty" class="people-stayed-text-style">- Not Found -</p>
                                        <p id="zipCodePeopleStayedSameState" class="people-stayed-text-style">- Not Found -</p>
                                        <p id="zipCodePeopleStayedDifferentState" class="people-stayed-text-style">- Not Found -</p>
                                        <canvas id="residentsStayedOverYears" width="400" height="200"></canvas>
                                        <p id="peopleStayedDescription" class="box-value-subtext"></p>
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
                                    - Not Found -
                                    </div>
                                </div>

                            </div>
                        </div>

                        <hr>

                        <!-- Social Section -->
                        <div id="COLSection">
                            <div id="COLSectionContainer">
                                <p id="costOfLivingInZipCodeText" class="section-header-text">Cost of Living in</p>
                                <p id="costBreakDownInZipCodeText" class="section-title-text">Cost breakdown for one person in</p>
                                <div id="COLContainer">

                                    <div class="StyledReceipt">
                                        <div class="reciept-header-text-container">
                                        <p class="reciept-title">Cost of Living</p>
                                        <p id="COLSubText" class="reciept-header-sub-text">How much will you pay on average living in?</p>
                                        </div>
                                        <div class="reciept-horizontal-line"></div>
                                        <table class="COL-table">
                                            <tr>
                                                <td class="reciept-subtitles" style="text-align: left;">Item</td>
                                                <td class="reciept-subtitles" style="text-align: right;">Avg. Price</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">1. Food</td>
                                                <td id="foodCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">2. Healthcare</td>
                                                <td id="healthcareCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">3. Housing</td>
                                                <td id="housingCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">4. Transportation</td>
                                                <td id="transportationCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-normal-text">5. Other</td>
                                                <td id="otherCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                        </table>
                                        <div class="reciept-horizontal-line"></div>
                                        <table class="COL-table">
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Monthly Taxes</td>
                                                <td id="taxesCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Monthly Total</td>
                                                <td id="monthlyTotalCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
                                            </tr>
                                            <tr>
                                                <td class="reciept-bold-text" style="text-align: left;">***Annual Total</td>
                                                <td id="annualTotalCOL" class="reciept-bold-text" style="text-align: right;">- Not Found -</td>
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
                        <!--Application Header-->
                        <div class="reportMenuHeaderContainer">
                            <p class="zipCodeHeaderTextStyle">Property Analysis Report</p>
                            <button class="pdfButtonStyle" hidden>Export to PDF <i class="fa fa-file-pdf-o"></i></button>
                        </div>

                        <div class="centerReport">
                            <div class="propertyReportBody">
                                <!--Report Header-->
                                <div class="propertyReportHeaderContainer">
                                    <img src="logo.png" class="report-menu-logo-style"></img>
                                    <div class="reportHeaderStyle">
                                        <p id="generatedDateText" class="reportGeneraionDateText" >Generated on: 06/04/2024</p>
                                        <hr class="reportLineStyle">
                                        <p class="propertyReportHeaderText">Property Analysis Report</p>
                                        <p>By: Place of Home</p>
                                    </div>
                                </div>
                                
                                <br>
                                <br>
                                <!--Property overview header-->
                                <div>
                                    <p class="propertyOverviewReportHeaderText">Property Overview</p>
                                    <p id="propertyAddress">Address:</p>
                                    <p id="propertyCityStateZipCode"></p>
                                </div>
                                <!--property overview data-->
                                <div class="halfContainer">
                                    <div>
                                        <img id="propertyImage" class="propertyPhoto"></img>
                                        <p id="propertyDatePostedText" class="propertyDatePostedText">Date Posted:</p>
                                    </div>

                                    <div class="propertyInfomationContainer">
                                        <p class="propertyInformationText">Property Information</p>
                                        <table id="propertyInformationTable">
                                            <tr>
                                                <th>Price</th>
                                                <td id="propertyPriceText"></td>
                                            </tr>
                                            <tr>
                                                <th>Bedrooms</th>
                                                <td id="propertyBedroomsText"></td>
                                            </tr>
                                            <tr>
                                                <th>Bathrooms</th>
                                                <td id="propertyBathroomsText"></td>
                                            </tr>
                                            <tr>
                                                <th>Stories</th>
                                                <td id="propertyStoryText"></td>
                                            </tr>
                                            <tr>
                                                <th>Living Area</th>
                                                <td id="propertyLivingAreaText"></td>
                                            </tr>
                                            <tr>
                                                <th>Year Built</th>
                                                <td id="propertyYearBuiltText"></td>
                                            </tr>
                                            <tr>
                                                <th>Property Type</th>
                                                <td id="propertyTypeText"></td>
                                            </tr>
                                            <tr>
                                                <th>Price Per SQ FT</th>
                                                <td id="propertyPricePerSqFtText"></td>
                                            </tr>
                                            <tr>
                                                <th>HOA Fee</th>
                                                <td id="propertyHOAText"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <!--Property zillow description-->
                                <br>
                                <br>
                                <div>
                                    <p class="zillowDescriptionHeaderText">Zillow Property Description</p>
                                    <p id="zillowDescriptionsText" class="zillowDescriptionText"></p>
                                </div>

                                <br>
                                <br>
                                <br>
                                <br>
                                <div>
                                    <p class="propertyOverviewReportHeaderText"></p>
                                </div>
                                <br>
                                <br>
                                <!--Area details-->
                                <div class="halfContainer">
                                    <div class="areaDescriptionTextSection">
                                        <p class="areaDescriptionHeaderText">Area Descriptions</p>
                                        <p id="propertyAreaText"></p>
                                    </div>

                                    <div>
                                        <p class="propertyInformationText">Area Information</p>
                                        <table id="propertyInformationTable">
                                            <tr>
                                                <th>Population</th>
                                                <td id="propertyAreaPopulationText"></td>
                                            </tr>
                                            <tr>
                                                <th>Avg. Weather</th>
                                                <td id="propertyAreaWeatherText"></td>
                                            </tr>
                                            <tr>
                                                <th>Median Rent</th>
                                                <td id="propertyAreaRentText"></td>
                                            </tr>
                                            <tr>
                                                <th>Median Home Price</th>
                                                <td id="propertyAreaHomePriceText"></td>
                                            </tr>
                                            <tr>
                                                <th>Avg. Income</th>
                                                <td id="propertyAreaIncomeText"></td>
                                            </tr>
                                            <tr>
                                                <th>Avg. Commute Time</th>
                                                <td id="propertyAreaCommuteText"></td>
                                            </tr>
                                            <tr>
                                                <th>Stayed in Same Home</th>
                                                <td id="propertyAreaSameHomeText"></td>
                                            </tr>
                                            <tr>
                                                <th>Most Common Age Range</th>
                                                <td id="propertyAreaRangeText"></td>
                                            </tr>
                                            <tr>
                                                <th>Number of Natural Disasters</th>
                                                <td id="propertyAreaNaturalDisastersNumberText"></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <br>
                                <!--Area Graphs-->
                                <div>
                                    <p class="propertyInformationText">Growth Since 2018</p>
                                    <div class="halfContainerCharts">
                                        <div>
                                            <canvas id="populationChart" width="400" height="200"></canvas>
                                        </div>
                                        <div>
                                            <canvas id="homePriceChart" width="400" height="200"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p class="propertyOverviewReportHeaderText">Nearby Homes</p>
                                </div>
                                <br>
                                <br>
                                <br>
                                <div>
                                    <p class="propertyInformationText">Nearby Homes For Sale</p>
                                    <table id="nearbyHomesTable"><span id='noNearbyHomesText'><br><center><p>- No Homes Nearby Found -</p></center></span></table>
                                    <p id="nearbyHomesAvgPriceText" class="avgPriceText"></p>
                                </div>

                                <br>
                                <br>
                                <div>
                                    <p class="propertyOverviewReportHeaderText">Property Analytics Calculations Overview</p>
                                </div>
                                <br>
                                <br>
                                <div>
                                <p class="propertyInformationText">Comparison Charts</p>
                                <div class="halfContainerCharts">
                                        <div>
                                            <canvas id="rentPricesComparisonChart" width="400" height="200"></canvas>
                                        </div>
                                        <div>
                                            <canvas id="homePricesComparisonChart" width="400" height="200"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="propertyAnalyticsCalculationContainer">
                                    <p class="propertyInformationText">Property Analytics Calculation</p>
                                    <br>
                                    <br>
                                    <div class="boxedQuickAnalyticsContainer">
                                        <div class="analyticsBox">
                                            <p>Home Price</p>
                                            <p id="homePriceAnalyticsText"></p>
                                        </div>

                                        <div class="analyticsBox">
                                            <p>Rent Per Month</p>
                                            <p id="rentAnalyticsText"></p>
                                        </div>

                                        <div class="analyticsBox">
                                            <p>Expenses</p>
                                            <p id="expensesAnalyticsText"></p>
                                        </div>

                                        <div class="analyticsBox">
                                            <p>Annual Debt Service</p>
                                            <p id="annualDebtServiceText"></p>
                                        </div>
                                    </div>
                                    <br>
                                    <br>
                                    <table id="propertyAnalyticsCalculationTable">
                                        <tr>
                                            <th>Gross Operating Income</th>
                                            <td id="grossOperatingIncomeText"></td>
                                        </tr>
                                        <tr>
                                            <th>Net Operating Income</th>
                                            <td id="netOperatingIncomeText"></td>
                                        </tr>
                                        <tr>
                                            <th>Cap Rate</th>
                                            <td id="capRateText"></td>
                                        </tr>
                                        <tr>
                                            <th>Clash Flow (Before Tax)</th>
                                            <td id="cashFlowText"></td>
                                        </tr>
                                        <tr>
                                            <th>Cash on Cash Returns</th>
                                            <td id="cashOnCashText"></td>
                                        </tr>
                                        <tr>
                                            <th>Gross Rent Multiplier</th>
                                            <td id="grossRentMultiplierText"></td>
                                        </tr>
                                        <tr>
                                            <th>Debt Service Coverage Ratio</th>
                                            <td id="debtServiceCoverageRatio"></td>
                                        </tr>
                                    </table>
                                </div>

                            </div>
                        </div>
    
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

function renderSettingsPage()
{
    let settingsPageHtml = `
    
            <div>
                <div class="main-header-container">
                    <p class="main-header-text">User Settings</p>
                </div>

                <div class="settingsInputSectionContainer">
                    <p class="subscriptionStatusTitle">Subscription Status</p>
                    <p id="subscriptionEndDate" class="subscriptionEndDate">Subscription End Date : </p>
                    <button id="subscriptionStatusButton" class="changeSubscriptionButton" onclick="updateUserSubscriptionStatus()">End Subscription</button>
                </div>
            </div>
    `;


    document.getElementById("mainBody").innerHTML = settingsPageHtml;
    let subEndDate = "Ongoing";
    if(localStorage.getItem("POH_USER_SUBSCRIPTION_END_DATE"))
    {
        subEndDate = localStorage.getItem("POH_USER_SUBSCRIPTION_END_DATE");
        document.getElementById("subscriptionStatusButton").innerHTML = "Enable Subscription";
    }
    
    document.getElementById("subscriptionEndDate").innerHTML = "Subscription End Date : " + subEndDate;
}



function renderPropertyManagementHome()
{
    let propertyManagementHomeHtml = `
    
        <div class="main-header-container">
            <p class="main-header-text">Property Manager</p>
        </div>


        <div class="propertyManagerHomeOptionButtonsContainer">
            <button class="propertyManagerOptionButton" onclick="renderAddProperty()">Add Property</button>
            <button class="propertyManagerOptionButton" onclick="renderPropertyProfileSettings()">Property Managing Settings</button>
        <div>
        <br>
        <br>
        <div id="propertyGridSection" class="propertyGridSection">




        </div>

        <div id="removePropertyModal" class="modal">
            <div class="modal-content">
                <a id="modalCloseX" class="close" onclick="closeModal()">&times;</a>
                <p>Are you sure you want to remove this property?</p>
                <div class="halfContainer">
                    <button class="cancelButton">Cancel</button>
                    <span class="spaceBetween"></span>
                    <button class="removeButton" onclick="removeProperty()">Remove</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("mainBody").innerHTML = propertyManagementHomeHtml;
    getAllUserProperties();

    removeCachedPropertyData();
}


function renderAddProperty()
{
    let addPropertyHtml = `
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
            <p class="main-header-text">Property Manager - Add Property</p>
        </div>

        <br>
        <br>

        <div class="addPropertyForm">
            <p class="addPropertySectionHeaderText">Property Information</p>
            <br>
            <label for="propertyName">Property Name</label><br><br>
            <input type="text" id="propertyName" name="propertyName" class="propertyInfoFieldInput" placeholder="Property 1"></input>
            <br>
            <br>
            <label for="streetAddress">Street Address</label><br><br>
            <input type="text" id="streetAddress" name="streetAddress" class="propertyInfoFieldInput" placeholder="909 Texas Ave"></input>
            <br>
            <br>
            <label for="cityAddress">City</label><br><br>
            <input type="text" id="cityAddress" name="cityAddress" class="propertyInfoFieldInput" placeholder="Houston"></input>
            <br>
            <br>
            <label for="stateAddress">State</label><br><br>
            <input type="text" id="stateAddress" name="stateAddress" class="propertyInfoFieldInput" placeholder="Texas"></input>
            <br>
            <br>
            <label for="zipCodeAddress">Zip Code</label><br><br>
            <input type="number" id="zipCodeAddress" name="zipCodeAddress" class="propertyInfoFieldInput" placeholder="77002"></input>
            <br>
            <br>
            <label for="propertyNumRooms">Property Number of Rooms</label><br><br>
            <input type="number" id="propertyNumRooms" name="propertyNumRooms" class="propertyInfoFieldInput" placeholder="1"></input>
            <br>
            <br>
            <label for="propertyNumBathrooms">Property Number of Bathrooms</label><br><br>
            <input type="number" id="propertyNumBathrooms" name="propertyNumBathrooms" class="propertyInfoFieldInput" placeholder="1"></input>
            <br>
            <br>
            <label for="propertySqFt">Property SqFt</label><br><br>
            <input type="number" id="propertySqft" name="propertySqft" class="propertyInfoFieldInput" placeholder="450"></input>
            <br>
            <br>
            <label>Upload Property Image</label><br><br><br>
            <label for="imageInput" class="fileLabel">Upload Image From Computer</label><br>
            <input type="file" id="imageInput" accept="image/*" onchange="loadFile(event)" hidden><br>
            <img id="output" width="50%" />
            <br>
            <br>
            <hr>
            <p class="addPropertySectionHeaderText">Contract Information</p>
            <br>
            <label for="pricePerMonth">Price Per Month (USD $)</label><br><br>
            <input type="number" id="pricePerMonth" name="pricePerMonth" class="propertyInfoFieldInput" placeholder="1600.00"></input>
            <br>
            <br>
            <label for="contractStartDate">Start Date </label><br><br>
            <input type="date" id="contractStartDate" name="contractStartDate" class="propertyInfoFieldInput"></input>
            <br>
            <br>
            <label for="contractEndDate">End Date </label><br><br>
            <input type="date" id="contractEndDate" name="contractEndDate" class="propertyInfoFieldInput"></input>
            <br>
            <br>
            <hr>
            <p class="addPropertySectionHeaderText">Tenant Information</p>
            <br>
            <label for="mainTenantName">Main Tenant Name</label><br><br>
            <input type="text" id="mainTenantName" name="mainTenantName" class="propertyInfoFieldInput" placeholder="John Doe"></input>
            <br>
            <br>
            <label for="mainTenantEmail">Main Tenant Email</label><br><br>
            <input type="email" id="mainTenantEmail" name="mainTenantEmail" class="propertyInfoFieldInput" placeholder="john@gmail.com"></input>
            <br>
            <br>
            <label for="mainTenantPhoneNumber">Main Tenant Phone Number</label><br><br>
            <input type="text" id="mainTenantPhoneNumber" name="mainTenantPhoneNumber" class="propertyInfoFieldInput" placeholder="(123) 456-7891"></input>
            <br>
            <br>
            <br>

            
            <p class="enablePaymentTitle">Enable online payment for this property</p><br>
            <p id="enableStripeMessage">Please Connect a Stripe Account to Allow Online Payments.</p>
            <input type="checkbox" id="acceptOnlinePayments" name="acceptOnlinePayments"></input>
            <label for="acceptOnlinePayments">Accept Online Payment</label><br><br>

            <br>
            <br>

            <button class="submitPropertyButton" onclick="addProperty()">Submit</button>
            <br>
            <br>
            <br>
            <br>
        </div>
    
    `;

    document.getElementById("mainBody").innerHTML = addPropertyHtml;
    checkForStripeOnlinePayments();
}

function renderEditProperty(pid = null)
{
    let editPropertyHtml = `
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
            <p class="main-header-text">Property Manager - Edit Property</p>
        </div>

        <br>
        <br>

        <div class="addPropertyForm">
            <p class="addPropertySectionHeaderText">Property Information</p>
            <br>
            <label for="propertyName">Property Name</label><br><br>
            <input type="text" id="propertyName" name="propertyName" class="propertyInfoFieldInput" placeholder="Property 1"></input>
            <br>
            <br>
            <label for="streetAddress">Street Address</label><br><br>
            <input type="text" id="streetAddress" name="streetAddress" class="propertyInfoFieldInput" placeholder="909 Texas Ave"></input>
            <br>
            <br>
            <label for="cityAddress">City</label><br><br>
            <input type="text" id="cityAddress" name="cityAddress" class="propertyInfoFieldInput" placeholder="Houston"></input>
            <br>
            <br>
            <label for="stateAddress">State</label><br><br>
            <input type="text" id="stateAddress" name="stateAddress" class="propertyInfoFieldInput" placeholder="Texas"></input>
            <br>
            <br>
            <label for="zipCodeAddress">Zip Code</label><br><br>
            <input type="number" id="zipCodeAddress" name="zipCodeAddress" class="propertyInfoFieldInput" placeholder="77002"></input>
            <br>
            <br>
            <label for="propertyNumRooms">Property Number of Rooms</label><br><br>
            <input type="number" id="propertyNumRooms" name="propertyNumRooms" class="propertyInfoFieldInput" placeholder="1"></input>
            <br>
            <br>
            <label for="propertyNumBathrooms">Property Number of Bathrooms</label><br><br>
            <input type="number" id="propertyNumBathrooms" name="propertyNumBathrooms" class="propertyInfoFieldInput" placeholder="1"></input>
            <br>
            <br>
            <label for="propertySqFt">Property SqFt</label><br><br>
            <input type="number" id="propertySqft" name="propertySqft" class="propertyInfoFieldInput" placeholder="450"></input>
            <br>
            <br>
            <label>Upload New Property Image</label><br><br><br>
            <label for="imageInput" class="fileLabel">Upload Image From Computer</label><br>
            <input type="file" id="imageInput" accept="image/*" onchange="loadFile(event)" hidden><br>
            <img id="output" width="50%" />
            <br>
            <br>
            <hr>
            <p class="addPropertySectionHeaderText">Contract Information</p>
            <br>
            <label for="pricePerMonth">Price Per Month (USD $)</label><br><br>
            <input type="number" id="pricePerMonth" name="pricePerMonth" class="propertyInfoFieldInput" placeholder="1600.00"></input>
            <br>
            <br>
            <label for="contractStartDate">Start Date </label><br><br>
            <input type="date" id="contractStartDate" name="contractStartDate" class="propertyInfoFieldInput"></input>
            <br>
            <br>
            <label for="contractEndDate">End Date </label><br><br>
            <input type="date" id="contractEndDate" name="contractEndDate" class="propertyInfoFieldInput"></input>
            <br>
            <br>
            <hr>
            <p class="addPropertySectionHeaderText">Tenant Information</p>
            <br>
            <label for="mainTenantName">Main Tenant Name</label><br><br>
            <input type="text" id="mainTenantName" name="mainTenantName" class="propertyInfoFieldInput" placeholder="John Doe"></input>
            <br>
            <br>
            <label for="mainTenantEmail">Main Tenant Email</label><br><br>
            <input type="email" id="mainTenantEmail" name="mainTenantEmail" class="propertyInfoFieldInput" placeholder="john@gmail.com"></input>
            <br>
            <br>
            <label for="mainTenantPhoneNumber">Main Tenant Phone Number</label><br><br>
            <input type="text" id="mainTenantPhoneNumber" name="mainTenantPhoneNumber" class="propertyInfoFieldInput" placeholder="(123) 456-7891"></input>
            <br>
            <br>
            <br>

            <p class="enablePaymentTitle">Enable online payment for this property</p><br>
            <p id="enableStripeMessage">Please Connect a Stripe Account to Allow Online Payments.</p>
            <input type="checkbox" id="acceptOnlinePayments" name="acceptOnlinePayments"></input>
            <label for="acceptOnlinePayments">Accept Online Payment</label><br><br>

            <br>
            <br>

            <button class="submitPropertyButton" onclick="savePropertyChanges('${pid}')">Save</button>
            <br>
            <br>
            <br>
            <br>
        </div>

    `;

    document.getElementById("mainBody").innerHTML = editPropertyHtml;

    getSinglePropertyDataEdit(pid, false);
    checkForStripeOnlinePayments();
}

function renderViewProperty(pid = null)
{
    let viewPropertyHtml = `
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
        </div>

        <br>
        <br>

        <div class="propertyMenuOptionsButtons">
            <button class="menuButton" onclick="renderViewProperty('${pid}')">Overview</button>
            <button class="menuButton" onclick="renderPropertyAnalytics('${pid}')">Analytics</button>
            <button class="menuButton" onclick="renderPropertyPayment('${pid}')">Payment</button>
        </div>

        <br>
        <br>

        <div class="propertyInfomationSectionContainer">
            <div class="mainPropertyInformationCard">
                <p class="propertyCardTitleText">Property</p>
                <img class="propertyInformationImage" id="propertyImage"></img>

                <div class="propertyInformationText">
                    <div class="mainPropertyInformationSection">
                        <p id="propertyName" class="propertyCardNameText"></p>
                        <p id="propertyAddress" class="propertyCardAddressText"></p>
                    </div>
                    <div>
                        <p class="propertyCardTypeTitle">Property Type:</p>
                        <p class="propertyCardTypeText">House</p>
                    </div>
                </div>

                <hr>

                <p class="propertyCardSubText">General</p>
                <div class="generalPropertyInfomationSection">
                    <div class="generalPropertyInformationCard">
                        <img class="generalPropertyInformationIcon" src="data:image/png;base64,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">
                        <div class="generalPropertyInformationCardTextSection">
                            <p id="propertyNumRooms" class="generalPropertyText"></p>
                            <p>Rooms</p>
                        </div>
                    </div>
                    <div class="generalPropertyInformationCard">
                        <img class="generalPropertyInformationIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIvUlEQVR4nO2de7BVcxTHv/f0uIr0mHR7ikZJNUPogVRokqkowqQIUY3xyDPKxZgYMyHTwxhFSpKYlMf4I5W5JSQ9FBWRESpFLz1v9x6zzLrmWNa9+7f32Wfv395nf2b2zJ17ztp7/fZvn99v/dZav7WB6NMMwGQALwBoFLYy+c7JADYBSPOxif+XEAIFAN7O6IyKYyF/lhAwDyudUXGMSXojWC4BUFpFh5QB6J10SjA0B7BTdMA+PjL/t5O/m5BDagBYLm58OYBBAK7ivzM/+xxAYdIjuWOqMjxNyPh8gvI5ySTkgGuUm/0p/2oqqA7gE+V7g5Me8ZcWAP4QN3k7gKbKd4sA/CK+uwfA6Umn+EN1/iVk3mCysC6uQuYCAEeFzBfi15TgkaeVIWi0gdx9itxTSS9kx2W8psi8qfMMV+LaSr6Mz5nggVMA/CZu6M8A6rs4R10AP4pz7ADQOOkRdxQAeE+ZNy70cCM7AzgmzvVR4u9yx13K+F8M7zymnO/OLM6XV7QCcEDcvBIA1bI4ZwrAEnHOgwDa+Kh3LEnxzZdriJY+nLu5spZZkWVHx54HlaGF/FR+ca1yfrpmgsJZAA6LmzUrB3fqdXGNIwA6JD3y/9X4SnGjyORtkIMbVQ/ANnGt1ckq/r88rgwlA3L41Pb12YqLFR2VdcIMQ9kuABYAeJUXkm54TVyTdDgHeQ4Fj9aJG7ONhxUnyHu7N0Nurg9D17p8D2g9qUT/+hjI1eBooIyNuKWPEmUknfKSdoqLfJqh7DPKHDDEox7TxHmOsm55twCUsfFthkluvRUP8OwsdDlZGbqWsY55wyjlCR9oINeQI4WZct8DqJOlPgMVfUYgT2jM7pDMxn9gKDtPsYy6+qTXAnHuvZw3HHvmiobvN8yfGqw8xQ/4HLffL84/BzGnm2LV3G0g11RxDC7PgWNwtNLpPRFj98h6xWVhclM/FHIH2E3vN6TLGnGtr1n32CGfPvqldDeQG6o8tWQU5IqLPP6KI0UjZSJ/w0CugZLHuyiA8Kuc5yhvuAlihFx8/WU4kU9T5PwIVplM8Ac9LlojEeeQWwfGejQA7kdwFItrHwfQHjHgfdGwnwCc4CBTE8A3Qm5NwJNrLU47ytSB2hJpeioT8jADubFCpozTeYLmFkX/HogoNPF+qZiQTmZukbJAm4RwIF03CF1WRnUP43XK09XfQG66EsoNc2ftlTlOvAiEAv41SA+qE2fz5JkpNxzhIz3TG6LmDda8p2Q1ObFIyKy3JG+qe8Axf9+Rc8dSA5l+SqNNoodBUaK4fSIxl2gZHb08TJ5LYBeXK+26AhFghbJzyYnhipnbEfYhc8eorVbTRXmKaLtyVdBi7wchMxN2MkBpH7XZWmYp1ojTOHuzkCnNkWvdDwoUD4KtD88/iWqHXbrJyXT8LoB8Xj+5Q+h7mGP91vGIUHS/QfLBAGXuaA+7OUkp42FdsRuykrZ6cHfITTTzEc2KElstWS/9y6VCwXJ2uzutyqMav26v6E4ViqzhRQ8LwalKXm2UKLG1pko1JXltpINMoZJFcjuihZzct9vi35Ixj+MGxSgHCZlDhhnvtlmVMhJqkrSRcyYJpchB6MR8DwkPNrLYgyGTc7a6zIktVLY9k58oDjnKW8JW6DTFuqKIX1X0EjL7Ilylp4libbndyeUrw4QytOp24jkhQwnUUWaLh6hoYPPHDA/eYPJlRZmZNpWAWuYy3JpS5o8zEG1GiPZ8HKYyu4QyTlvB2ip7MCIRdauCDqJNlPoaCicq6w+nybm/hxW97dQUW+zIsKkdhiJtlIxEt0ZANnsDbUJmOLYOQ4nzhBJfGcjcK2QmIh6sFe0KJfzczUPe1TghMx7xYJmHlCff6SyUoI38TtwjZJ5HPFgp2tUpDCXaCSUo1uw2eZnSRuPARtEusiYDp4VQgiY2J64WMu8gHmwT7WoWltlbLkpSVHeZJkT5v1GnhqhmVM57S0LhV5er7toimbo0BtV3zvQwUgQWD6A0UrfjrY0Zim7o7yEeFFgsnerjOjFbyJApHGWeEO2ZEqYyN3lwhVwvZFYhXmuQIWEq01yp8Ok0odURGY7lEUiOq8qwkTW/tHeaBMpmD2WWZEydSrdGEZms8S0sYKKH7EPpdik1SKyzEVnS6VlYwLlCqaOG9XZlotlyW/KaDGmoDFfWVDVd76FSQw+lUsMYRIdimxe50q3+u2GQRtYyKTPY4GNLBvxuD69hClVBegeUE/UVP9Ah3gBqM2OEzrvY4rL6J7zHIEeLOJ87IZ1xHLM417epsj/EysVtPSWBepaLqg/HhWyaU2xsy/mdI3Tcze+6spKRQtlyF1uHB1fyBujt7BFIWei3ouM2WEyKt0HL8dX0rc39RD13uYF0VIh1T05VRoDPLHlQqqSjYp8v43QZE1orSQOyqhwNhTcEWHavUMm4PMK7wCKBjJ2nuY5hykXQZ5yyq1c7trBhkCtSSgHnyL3lrUDxV9Ex2UOY+GXl/SLpABPupijXi2Toua7ybhA6XvKwY7UIwEPKnvZc1kWpxg+DvNbakOt3ZW2zy1efpvnXU8vjL68rB8JK2ADYyP40P6mlOA7T3JbIl4tto2wKrXjSbHyxY1ul+FqF+R1KimguaMWvlUgr1R5ojWEDBbxXRW6XSLPuttZf8UwR5/9qc8DisJLLMpL+llai2yqDXcWRpTa/UU1r+FG2aGgBFhQtOVGjMituepg5VkFyYyVDQ5pvzis5rtPbhR+MyjriAL8EIK+gHbwLHdYXmwA8ygu/bIq7VOME6GI+Z1XXfDeg+vLW0r+SCT8tjj/ZFB3PT28nnmgbsFumJv/dij8byt9dqLyZQTs2Gyb65QUp7pjVBjfO72MDW3qxfGmLHx3Tl31HJn4srwed+y2+lvXeWluoB+BWdkrKl7p4OXYAeJP3qNgW9IocBbz9mIYW2phPzj0a3qiaKcUoyGSmg/6m/9Fn9B36LsmQbCS2X/8NUNIbhBv3RxUAAAAASUVORK5CYII=">
                        <div class="generalPropertyInformationCardTextSection">
                            <p id="propertyNumBathrooms" class="generalPropertyText"></p>
                            <p>Bathrooms</p>
                        </div>
                    </div>
                    <div class="generalPropertyInformationCard">
                        <img class="generalPropertyInformationIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwklEQVR4nOXbvYvUQBjH8a9bKGJ5126taKFgI56FqPy4v0AEtdXiGkELsRVUPHxpFewtxZfO5v4D7a6xsbJSrxL15GTgWVjC5piZnSSTmQemyYZln89OnjxJJgAHgBNUHGvAHvCASkMG4MYmFQO8qXUmyBI/CdyvcSZoDoAaEdQAqA5BCwCqQlALgIsXNRRGtQAcB74BP0tH0AKAo5b8F2AKPCwZQQsANoBtS34WxSJonxpADYVRAQBFIigQwMXHkg4HBQLcsv0/l4KgAICbtu8rYGLJjx5BAQB3gSeW/CxGj6CIGlBUYVQCgFEjKBHAEeDrGA8HJQBwyW8Bv4DXY0NQAoD3lvz6GNtmeQCct+p/sOXz28CFxrbRIMgDYNP2+QAcKq0wyhPgD7Brd4/bZsKiyH4myBPA3R+4GoFwBvidM4ICAAhEcMnvAJ+AZ7kiKBDAF+Gw3U5zya/m3DYrAsAX4Rqw0tiWHYIiAVxcBv6O/eygJQCKQNCSALEIM4DBEZQAIBRh/t8ffCYoEYBvYTy9oAgOWhiVEMAHYWIIzRgMQYkBRlcY1QEAkW0zQ3SM6gggBmHVOsderx3UIUAIwoolv2PXEL1dRapjAF+E68APS34WvSCoB4CQC6hmdI6gngCyPTuoR4Blzg6d3W1WzwAxCOt217mT5w4aACAE4aIlv2XPH5J3jBoIwBfhDvDWkp9FUgQNCJBFYdTAAIMjKAOA2LPDJMVKFWUCEIowsZUqe8uuWVJGACEIT+13uzVLS3WMygzAF+EecKOxLQpBHgCPgX/A9x7Hrv2u5yHJxCDIA+CYffGjAcalQIBgBCVaIpNTTENWuaswgKmtcnc166UPggoD2Lbk3fsOXm2zCgPYsPcd5mNfBBUGENw2qxKAVgTZxiv2xKb08a55OKzNPaWtbZxyAO71+bPWcNQ0zrnc/wM8ZOyYGGAneQAAAABJRU5ErkJggg==">
                        <div class="generalPropertyInformationCardTextSection">
                            <p id="propertySqFt" class="generalPropertyText"></p>
                            <p>SqFt</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="propertyOtherData">
                <div class="otherCardSection">
                    <p class="propertyCardTitleText">Tenant</p>
                    <p id="propertyTenantName" class="tenantNameCardText"></p>
                    <p id="propertyTenantEmail"></p>
                    <p id="propertyTenantPhone"></p>
                    <br>
                    <br>
                </div>

                <div class="otherCardSection">
                    <p class="propertyCardTitleText">Contract</p>
                    <p id="propertyContractAmount" class="contractPriceCardText"></p>
                    <p id="propertyContractDateRange"></p>
                    <br>
                    <br>
                </div>
            </div>

        </div>

    `;

    document.getElementById("mainBody").innerHTML = viewPropertyHtml;

    getFullSinglePropertyData(pid, true);
}

function renderPropertyAnalytics(pid = null)
{
 let propertyAnalyticsHtml = `
 
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
        </div>

        <br>
        <br>

        <div class="propertyMenuOptionsButtons">
            <button class="menuButton" onclick="renderViewProperty('${pid}')">Overview</button>
            <button class="menuButton" onclick="renderPropertyAnalytics('${pid}')">Analytics</button>
            <button class="menuButton" onclick="renderPropertyPayment('${pid}')">Payment</button>
        </div>

        <br>
        <br>


        <div class="propertyAnalyticsContainerSection">

            <!--
                <div class="propertyAnalyticsCard">
                    <p class="propertyCardTitleText">Property Analytics</p>
                    <div class="boxedQuickAnalyticsContainer">
                        <div class="analyticsBox">
                            <p>Home Price</p>
                            <p id="homePriceAnalyticsText"></p>
                        </div>

                        <div class="analyticsBox">
                            <p>Rent Per Month</p>
                            <p id="rentAnalyticsText"></p>
                        </div>

                        <div class="analyticsBox">
                            <p>Expenses</p>
                            <p id="expensesAnalyticsText"></p>
                        </div>
                    </div>
                </div>
            -->

            <br>
            <br>

            <div class="halfContainerPropertyAnalytics">
                <div class="areaDescriptionTextSection">
                    <p class="areaDescriptionHeaderText">Area Descriptions</p>
                    <p id="propertyAreaText"></p>
                    <br>
                    <canvas id="rentPricesComparisonChart" width="400" height="200"></canvas>
                </div>

                <div>
                    <p class="propertyInformationText">Area Information</p>
                    <table id="propertyInformationTable">
                        <tr>
                            <th>Population</th>
                            <td id="propertyAreaPopulationText"></td>
                        </tr>
                        <tr>
                            <th>Median Rent</th>
                            <td id="propertyAreaRentText"></td>
                        </tr>
                        <tr>
                            <th>Median Home Price</th>
                            <td id="propertyAreaHomePriceText"></td>
                        </tr>
                        <tr>
                            <th>Avg. Income</th>
                            <td id="propertyAreaIncomeText"></td>
                        </tr>
                        <tr>
                            <th>Avg. Commute Time</th>
                            <td id="propertyAreaCommuteText"></td>
                        </tr>
                        <tr>
                            <th>Stayed in Same Home</th>
                            <td id="propertyAreaSameHomeText"></td>
                        </tr>
                        <tr>
                            <th>Most Common Age Range</th>
                            <td id="propertyAreaRangeText"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <br>
        <br>
 `;
    document.getElementById("mainBody").innerHTML = propertyAnalyticsHtml;
    populatePropertyAreaAnalytics();
}

function renderPropertyPayment(pid = null)
{
    let propertyPaymentHtml = `
    
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
        </div>

        <br>
        <br>

        <div class="propertyMenuOptionsButtons">
            <button class="menuButton" onclick="renderViewProperty('${pid}')">Overview</button>
            <button class="menuButton" onclick="renderPropertyAnalytics('${pid}')">Analytics</button>
            <button class="menuButton" onclick="renderPropertyPayment('${pid}')">Payment</button>
        </div>

        <br>
        <br>

        <div class="paymentSectionContainer">
            <div class="paymentCard">
                <p class="propertyCardTitleText" >Contract</p>
                <div class="paymentHalfContainer">
                    <div>
                        <p id="propertyContractAmount" class="contractPriceCardText"></p>
                        <p id="propertyContractDateRange"></p>
                    </div>
                    <div>
                        <p>Payment Link</p>
                        <p id="paymentPortalLink">https://poh.com/pay/x52731js</p>
                        <button onclick="copyPaymentPortalLink()" class="copyLinkButton" id="copyLinkButton"><i class="fa fa-copy"></i> Copy Link</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("mainBody").innerHTML = propertyPaymentHtml;
    populatePropertyPaymentsPage();
}


function renderRemoveModal(pid = null)
{
    var modal = document.getElementById("removePropertyModal");
    modal.style.display = "block";

    TO_DELETE_PID = pid;
}

function closeModal()
{
    var modal = document.getElementById("removePropertyModal");
    modal.style.display = "none";
}



function renderWebsiteModal()
{
    var modal = document.getElementById("removeWebsiteModal");
    modal.style.display = "block";
}

function closeWebsiteModal()
{
    var modal = document.getElementById("removeWebsiteModal");
    modal.style.display = "none";
}

function renderPropertyProfileSettings()
{
    let propertyProfileSettings = `
        <div class="main-header-container">
            <a onclick="renderPropertyManagementHome()"><p class="main-header-back-text"><i class="fa fa-arrow-left"></i> Back to Properties</></a>
            <p class="main-header-text">Property Manager - Settings</p>
        </div>

        <br>
        <br>

        <div class="profileSettingsContainer">
            <div>
                <p class="propertySettingsSectionTitle">Payment Details</p>
                <p>Connect to stripe inorder to create payment portals for your tenants to receive payments online.</p>
                <p class="propertySettingsSectionNoteText">NOTE: A website will also be needed when onboarding your account.</p>
                <div id="accountNotConnectedInfoDiv" class="accountNotConnectedInfoDiv">
                    <button class="profileSettingsNormalButton" onclick="createStripeAccount()">Connect to Stripe</button>
                </div>

                <div id="accountConnectedInfoDiv" class="accountConnectedInfoDiv">
                    <p class="propertySettingsAccountConnectedText">Account Successfully Connected!</p>
                    <button class="profileSettingsViewButton">View Dashboard</button>
                </div>
                <br>
                <br>
            </div>
            <hr style="width:100%;">
            <div>
                <p class="propertySettingsSectionTitle">Website</p>
                <p>We provide all premium users with a complimentary website to promote their properties in case they don't already have one.</p>
                <br>
                <p>Please fill in all values to create the website.</p>
                <label for="companyName">Company Name</label><br>
                <input type="text" id="companyName" name="companyName"></input>
                <br>
                <br>

                <label for="city">City</label><br>
                <input type="text" id="city" name="city"></input>
                <br>
                <br>

                <label for="state">State</label><br>
                <input type="text" id="state" name="state"></input>
                <br>
                <br>

                <label for="phoneNumber">Phone Number</label><br>
                <input type="text" id="phoneNumber" name="phoneNumber"></input>
                <br>
                <br>

                <label for="contactEmail">Contact Email</label><br>
                <input type="text" name="contactEmail" id="contactEmail"></input>
                <br>
                <br>

                <div id="websiteNotLiveInfoDiv" class="websiteNotLiveInfoDiv">
                    <button class="profileSettingsNormalButton" onclick="generateWebsite()">Generate Website</button>
                </div>

                <div id="websiteLiveInfoDiv" class="websiteLiveInfoDiv">
                    <div>
                        <p class="propertySettingsWebsiteLiveText">Website is Live!</p>
                        <a id="aTagVisitWebsite" href=""><button class="profileSettingsViewButton">View Website</button></a>
                        <button class="profileSettingsViewButton" onclick="updateWebsite()">Save Changes</button>
                    </div>
                    <br>
                    <button class="profileSettingsDeleteButton" onclick="renderWebsiteModal()">Remove Website</button>
                </div>
            </div>
        </div>

        <div id="removeWebsiteModal" class="modal">
            <div class="modal-content">
                <a id="modalCloseX" class="close" onclick="closeWebsiteModal()">&times;</a>
                <p>Are you sure you want to delete your website?</p>
                <p>Note you can always create another one.</p>
                <div class="halfContainer">
                    <button class="cancelButton">Cancel</button>
                    <span class="spaceBetween"></span>
                    <button class="removeButton" onclick="removeWebsite()">Remove</button>
                </div>
            </div>
        </div>

        <br>
        <br>
    
    `;

    document.getElementById("mainBody").innerHTML = propertyProfileSettings;
    checkWebsiteLive();
    checkStripeAccountConnection();
}