var ctx = document.getElementById('generationalMoving').getContext('2d');
var generationalMoving = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Gen Z Adults', 'Gen Y (Millennials)', 'Gen X', 'Baby Boomers'],
        datasets: [{
            label: '% of Movers per Generation',
            data: [17, 11, 8, 8],
            backgroundColor: 'rgba(243, 108, 54, 1)',
            borderColor: 'rgba(243, 108, 54, 1)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 11,
                        yMax: 11,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 2,
                        label: {
                            content: 'Average for all ages - 11%',
                            enabled: true,
                            position: 'end'
                        }
                    }
                }
            }
        }
    }
});