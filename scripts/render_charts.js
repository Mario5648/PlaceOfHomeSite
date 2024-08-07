function renderPopulationHistoryChart(data = null)
{
    let populationHistoricalData = [];
    years = Object.keys(data["pastData"]["zipCode"]["DEMOGRAPHIC"])
    for(let yearIndex = 0; yearIndex < years.length; yearIndex+=1)
    {
        populationHistoricalData.push(parseInt(data["pastData"]["zipCode"]["DEMOGRAPHIC"][years[yearIndex]]["Total population"].replace(",","")))
    }

    var data = {
        labels: years,
        datasets: [{
            axis: 'x',
            label: 'Population History',
            data: populationHistoricalData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('populationChart').getContext('2d');
    const populationChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Population History',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderCrimeBreakdownChart(data = null)
{
    let cityCrimeData = [];
    let stateCrimeData = [];
    let nationalCrimeData = [];

    cityCrimeData.push(parseInt(data["crimeData"]["city"]["violentCrime"]))
    cityCrimeData.push(parseInt(data["crimeData"]["city"]["propertyCrime"]))

    stateCrimeData.push(parseInt(data["crimeData"]["state"]["violentCrime"]))
    stateCrimeData.push(parseInt(data["crimeData"]["state"]["propertyCrime"]))

    nationalCrimeData.push(parseInt(data["crimeData"]["nation"]["violentCrime"]))
    nationalCrimeData.push(parseInt(data["crimeData"]["nation"]["propertyCrime"]))

    var data = {
        labels: ["Violent Crime", "Property Crime"],
        datasets: [{
            axis: 'x',
            label: 'City Crime Breakdown',
            data: cityCrimeData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        },
        {
            axis: 'x',
            label: 'Avg. State Crime Breakdown',
            data: stateCrimeData,
            fill: false,
            backgroundColor: ['rgba(10,34,48,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        },
        {
            axis: 'x',
            label: 'Avg. National Crime Breakdown',
            data: nationalCrimeData,
            fill: false,
            backgroundColor: ['rgba(80,110,121,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }
        ]
        };
    const ctx = document.getElementById('crimeBreakdownChart').getContext('2d');
    const crimeBreakdownChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'City Crime Vs. State & National Averages',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderRentHistoryChart(data = null)
{
    let rentHistoricalData = [];
    years = Object.keys(data["pastData"]["zipCode"]["HOUSING"])
    for(let yearIndex = 0; yearIndex < years.length; yearIndex+=1)
    {
        rentHistoricalData.push(parseInt(data["pastData"]["zipCode"]["HOUSING"][years[yearIndex]]["Rent_Median (dollars)"].replace(",","")))
    }

    var data = {
        labels: years,
        datasets: [{
            axis: 'x',
            label: 'Rent History',
            data: rentHistoricalData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('rentChart').getContext('2d');
    const rentChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Rent History',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderHomePriceHistoryChart(data = null)
{
    let homePriceHistoricalData = [];
    years = Object.keys(data["pastData"]["zipCode"]["HOUSING"])
    for(let yearIndex = 0; yearIndex < years.length; yearIndex+=1)
    {
        homePriceHistoricalData.push(parseInt(data["pastData"]["zipCode"]["HOUSING"][years[yearIndex]]["House_Median (dollars)"].replace(",","")))
    }

    var data = {
        labels: years,
        datasets: [{
            axis: 'x',
            label: 'Home Prices History',
            data: homePriceHistoricalData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('homePriceChart').getContext('2d');
    const homePriceChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Home Prices History',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderIncomeHistory(data=null)
{
    let incomeHistoricalData = [];
    years = Object.keys(data["pastData"]["zipCode"]["ECONOMIC"])
    for(let yearIndex = 0; yearIndex < years.length; yearIndex+=1)
    {
        incomeHistoricalData.push(parseInt(data["pastData"]["zipCode"]["ECONOMIC"][years[yearIndex]]["Mean household income (dollars)"].replace(",","")))
    }

    var data = {
        labels: years,
        datasets: [{
            axis: 'x',
            label: 'Income History',
            data: incomeHistoricalData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('incomeHistory').getContext('2d');
    const incomeHistoryChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Income History',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}
function renderEmploymentChart(data = null)
{
    let employmentData = [parseInt(data["zipCode"]["ECONOMIC"]["Employed"].replace(",","")), parseInt(data["zipCode"]["ECONOMIC"]["Unemployed"].replace(",",""))];


    var data = {
        labels: ["Employed","Unemployed"],
        datasets: [{
            axis: 'x',
            label: 'Employment',
            data: employmentData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('employedVsUnemployed').getContext('2d');
    const employmentChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Employment',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderCommuteChart(data = null)
{
    let commuteData = [
                            parseInt(data["zipCode"]["ECONOMIC"]["Car, truck, or van -- drove alone"].replace(",","")), 
                            parseInt(data["zipCode"]["ECONOMIC"]["Public transportation (excluding taxicab)"].replace(",","")),
                            parseInt(data["zipCode"]["ECONOMIC"]["Walked"].replace(",","")),
                            parseInt(data["zipCode"]["ECONOMIC"]["Worked from home"].replace(",","")),

                         ];


    var data = {
        labels: ["Driving","Public Transportation", "Walked", "Worked from Home"],
        datasets: [{
            axis: 'x',
            label: 'Commute to Work',
            data: commuteData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('commuteToWork').getContext('2d');
    const commuteChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Commute to Work',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderResidentsStayedChart(data = null)
{
    let residentsStayedHistoricalData = [];
    years = Object.keys(data["pastData"]["zipCode"]["SOCIAL"])
    for(let yearIndex = 0; yearIndex < years.length; yearIndex+=1)
    {
        residentsStayedHistoricalData.push(parseInt(data["pastData"]["zipCode"]["SOCIAL"][years[yearIndex]]["Population 1 year and over"].replace(",","")))
    }

    var data = {
        labels: years,
        datasets: [{
            axis: 'x',
            label: 'Residents that Stayed',
            data: residentsStayedHistoricalData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('residentsStayedOverYears').getContext('2d');
    const residentsStayedOverYearsChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Residents that Stayed',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderIndustryDemographicChart(data = null)
{
    let industryData = [];

    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Agriculture, forestry, fishing and hunting, and mining"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Construction"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Manufacturing"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Wholesale trade"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Retail trade"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Transportation and warehousing, and utilities"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Information"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Finance and insurance, and real estate and rental and leasing"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Professional, scientific, and management, and administrative and waste management services"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Educational services, and health care and social assistance"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Arts, entertainment, and recreation, and accommodation and food services"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Other services, except public administration"].replace(",","")));
    industryData.push(parseInt(data["zipCode"]["ECONOMIC"]["Public administration"].replace(",","")));

    var data = {
        labels: ["Agriculture, forestry, fishing and hunting, and mining", "Construction", "Manufacturing", "Wholesale trade", "Retail trade", "Transportation and warehousing, and utilities", "Information", "Finance and insurance, and real estate and rental and leasing", "Professional, scientific, and waste management services", "Educational services, and health care and social assistance", "Arts, entertainment, and food services", "Other services, except public administration", "Public administration"],
        datasets: [{
            axis: 'y',
            label: 'Industry Demographic',
            data: industryData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'end'
            }
        }]
        };
    const ctx = document.getElementById('industryDemographicBreakdown').getContext('2d');
    const industryDemographicChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'y', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Industry Demographic',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderAgeDemographicChart(data = null)
{
    let ageData = [];

    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["Under 5 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["5 to 9 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["10 to 14 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["15 to 19 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["20 to 24 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["25 to 34 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["35 to 44 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["45 to 54 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["55 to 59 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["60 to 64 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["65 to 74 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["75 to 84 years"].replace(",","")))
    ageData.push(parseInt(data["zipCode"]["DEMOGRAPHIC"]["85 years and over"].replace(",","")))

    var data = {
        labels: ["Under 5 years", "5 to 9 years", "10 to 14 years", "15 to 19 years", "20 to 24 years", "25 to 34 years", "35 to 44 years", "45 to 54 years", "55 to 59 years", "60 to 64 years", "65 to 74 years", "75 to 84 years", "85 years and over"],
        datasets: [{
            axis: 'y',
            label: 'Age Demographic',
            data: ageData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'end'
            }
        }]
        };
    const ctx = document.getElementById('ageDemographicBreakdown').getContext('2d');
    const ageDemographicChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'y', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Age Demographic',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderEducationAttainmentChart(data = null)
{
    let educationAttainmentData = [];

    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Less than 9th grade"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["9th to 12th grade, no diploma"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["High school graduate (includes equivalency)"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["High school graduate or higher"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Some college, no degree"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Associate's degree"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Bachelor's degree"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Bachelor's degree or higher"].replace(",","")))
    educationAttainmentData.push(parseInt(data["zipCode"]["SOCIAL"]["Graduate or professional degree"].replace(",","")))

    var data = {
        labels: ["Less than 9th grade", "9th to 12th grade, no diploma", "High school graduate (includes equivalency)", "High school graduate or higher", "Some college, no degree", "Associate's degree", "Bachelor's degree", "Bachelor's degree or higher", "Graduate or professional degree"],
        datasets: [{
            axis: 'y',
            label: 'Education Attainment',
            data: educationAttainmentData,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'end'
            }
        }]
        };
    const ctx = document.getElementById('educationAttainmentBreakdown').getContext('2d');
    const educationAttainementChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'y', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Education Attainment',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}


function renderRentComparisonChart(data = null)
{

    //zipCode Median, your rent
    let rentComparisonData = [];

    
    rentComparisonData.push(parseInt(data['zipCodeData']['zipCode']['HOUSING']['Rent_Median (dollars)'].replace(',', '')).toString());
    rentComparisonData.push(data['propertyAnalyticsCalculations']['anticipatedRent'].toString());

    var data = {
        labels: ['Zip Code Median', 'Your Anticipated Rent'],
        datasets: [{
            axis: 'x',
            label: 'Rent Comparison',
            data: rentComparisonData,
            fill: false,
            backgroundColor: ['rgb(9, 34, 48, 0.6)', 'rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('rentPricesComparisonChart').getContext('2d');
    const rentComparisonChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Rent Comparison',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderHomePriceComparisonChart(data = null)
{

    //zipCode Median, your rent
    let homePriceComparisonData = [];

    homePriceComparisonData.push(parseInt(data['zipCodeData']['zipCode']['HOUSING']['House_Median (dollars)'].replace(',', '')).toString());
    homePriceComparisonData.push(data['zillowData']['price'].toString());

    var data = {
        labels: ['Zip Code Median', 'Anticipated Home Price'],
        datasets: [{
            axis: 'x',
            label: 'Home Price Comparison',
            data: homePriceComparisonData,
            fill: false,
            backgroundColor: ['rgb(9, 34, 48, 0.6)','rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('homePricesComparisonChart').getContext('2d');
    const homePriceComparisonChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Home Price Comparison',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderPropertyAreaRentComparisonChart(data = null)
{

    //zipCode Median, your rent
    let rentComparisonData = [];

    
    rentComparisonData.push(parseInt(data['zipCodeData']['zipCode']['HOUSING']['Rent_Median (dollars)'].replace(',', '')).toString());
    rentComparisonData.push(data['properties'][0]['propertyContractPrice'].toString());

    var data = {
        labels: ['Zip Code Median', 'Your Anticipated Rent'],
        datasets: [{
            axis: 'x',
            label: 'Rent Comparison',
            data: rentComparisonData,
            fill: false,
            backgroundColor: ['rgb(9, 34, 48, 0.6)', 'rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'end',
                align: 'top'
            }
        }]
        };
    const ctx = document.getElementById('rentPricesComparisonChart').getContext('2d');
    const rentComparisonChart = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Rent Comparison',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderPriceRangesChart(data = null)
{
    

    let priceRangesCount = [];

    // Check if the chart instance exists
    if (PRICE_RANGES_CHART) {
        // Destroy the existing chart
        PRICE_RANGES_CHART.destroy();
    }
    

    const priceRanges = Object.keys(data["currentMarketAnalytics"]["liveMarketData"]["soldPricesList"]).sort((a, b) => {
        const minValueA = parseInt(a.substring(1).split('-')[0].replace(/,/g, ''));
        const minValueB = parseInt(b.substring(1).split('-')[0].replace(/,/g, ''));
        return minValueA - minValueB;
    });

    for(let priceRangeIndex = 0; priceRangeIndex < priceRanges.length; priceRangeIndex+=1)
    {
        priceRangesCount.push(data["currentMarketAnalytics"]["liveMarketData"]["soldPricesList"][priceRanges[priceRangeIndex]].length)
    }

    var data = {
        labels: priceRanges,
        datasets: [{
            axis: 'x',
            label: 'Recently Sold Price Ranges',
            data: priceRangesCount,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
            datalabels: {
                color: 'rgb(16,36,52)',
                anchor: 'center',
                align: 'center'
            }
        }]
        };
    const ctx = document.getElementById('soldPriceRangesChart').getContext('2d');
    PRICE_RANGES_CHART = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    plugins :[ChartDataLabels],
                                    options: {
                                                onClick: (e, activeEls) => {
                                                    let datasetIndex = activeEls[0].datasetIndex;
                                                    let dataIndex = activeEls[0].index;
                                                    let datasetLabel = e.chart.data.datasets[datasetIndex].label;
                                                    let value = e.chart.data.datasets[datasetIndex].data[dataIndex];
                                                    let label = e.chart.data.labels[dataIndex];

                                                    generateSoldHomeGrid(label);
                                                },
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'y', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },
                                                        title: {
                                                            display: true,
                                                            text: 'Recently Sold Price Ranges',
                                                            font: {
                                                                size: 16
                                                            }
                                                        },
                                                        
                                                    }
                                                }
                                            
                                    });
}


function renderMortgageOvetimeChart(data = null)
{

    // Check if the chart instance exists
    if (MORTGAGE_OVERTIME_CHART) {
        // Destroy the existing chart
        MORTGAGE_OVERTIME_CHART.destroy();
    }
    
    let principle = parseFloat(ANTICIPATED_PRINCIPLE);
    let interestRate = parseFloat(ANTICIPATED_INTEREST);
    let loanPeriodYears = parseFloat(ANTICIPATED_MORTGAGE_DURATION);
    let extraMonthlyPayment = parseFloat(ANTICIPATED_EXTRA_MONTHLY_PAYMENT);

    let loanPeriodMonths = loanPeriodYears * 12;

    let totalLoanAmount = principle + (principle * (interestRate / 100));
    let monthlyPayment = totalLoanAmount / loanPeriodMonths;

    let loanAmountLeftYear = []
    let yearLabels = []
    let loanAmountLeft = totalLoanAmount;

    for(let year = 0; year < loanPeriodYears; year +=1)
    {
        loanAmountLeft -= ((monthlyPayment * 12) + (extraMonthlyPayment * 12))
        if(loanAmountLeft > 0)
        {
            loanAmountLeftYear.push(loanAmountLeft)
        }else
        {
            loanAmountLeftYear.push(0)
        }
        yearLabels.push("Year "+(year+1))
    }

    var data = {
        labels: yearLabels,
        datasets: [{
            axis: 'x',
            label: 'Mortgage Overtime',
            data: loanAmountLeftYear,
            fill: false,
            backgroundColor: ['rgba(243,108,54,0.6)'],
            borderWidth: 1,
        }]
        };
    const ctx = document.getElementById('mortgageOvertimeChart').getContext('2d');
    MORTGAGE_OVERTIME_CHART = new Chart(ctx, {
                                    type: 'bar',
                                    data: data,
                                    options: {
                                                responsive: true,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {
                                                    y: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    },
                                                    x: {
                                                        ticks: {
                                                            beginAtZero: true,
                                                        }
                                                    }
                                                    },
                                                    plugins: {
                                                        legend: {
                                                            display: false
                                                        },

                                                        
                                                    }
                                                }
                                            
                                    });
}

function renderIncomeBreakdownChart(data = null)
{
    
    let principle = parseFloat(ANTICIPATED_PRINCIPLE);
    let interestRate = parseFloat(ANTICIPATED_INTEREST);
    let loanPeriodYears = parseFloat(ANTICIPATED_MORTGAGE_DURATION);
    let loanPeriodMonths = loanPeriodYears * 12;

    let totalLoanAmount = principle + (principle * (interestRate / 100));
    let monthlyPayment = totalLoanAmount / loanPeriodMonths;

    let totalYearlyExpenses = (ANTICIPATED_EXPENSES * 12) + ANTICIPATED_YEARLY_TAX + (monthlyPayment * 12);
    let totalYearlyEarnings = (ANTICIPATED_RENT * 12) + (ANTICIPATED_EXTRA_MONTHLY_PAYMENT * 12);


    var data = {
        labels: ["Monthly Expenses", "Monthly Property Tax", "Monthly Mortgage Payment", "Monthly Rent"],
        datasets: [{
            label: 'Income Breakdown',
            data: [ANTICIPATED_EXPENSES, ANTICIPATED_YEARLY_TAX / 12 , monthlyPayment, ANTICIPATED_RENT],
            backgroundColor: ['rgb(61,150,186)','rgb(0,175,130)', 'rgb(243,188,0)', 'rgb(243,108,54)'],
        }]
        };
    const ctx = document.getElementById('incomeBreakdownChart').getContext('2d');
    let incomeBreakdownChart = new Chart(ctx, {
                                    type: 'doughnut',
                                    data: data,
                                    options: {
                                                responsive: false,
                                                maintainAspectRatio: true,
                                                indexAxis: 'x', // This will make the bar chart horizontal
                                                scales: {},
                                                plugins: {
                                                    legend: {
                                                        position: 'top',
                                                    },
                                                }
                                                }
                                            
                                    });
}