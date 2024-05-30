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