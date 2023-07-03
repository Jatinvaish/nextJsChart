//create a mockData for charts

//bat sataset
export const barData = {
  //labels for bar chart
  //datasets and styles for bar chart
  //barThickness describes the thickness of the bar chart
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Store 1',
    data: [100, 200, 300, 400, 500, 600],
    backgroundColor: 'red',
    barThickness: 12
  },
  {
    label: 'Store 2',
    data: [321, 212, 344, 332, 223, 566],
    backgroundColor: 'green',
    barThickness: 12
  },
  {
    label: 'Store 3',
    data: [123, 200, 232, 400, 232, 23],
    backgroundColor: 'orange',
    barThickness: 12
  },
  {
    label: 'Store 4',
    data: [100, 500, 300, 343, 43, 343],
    backgroundColor: 'purple',
    barThickness: 12
  },
  ]
};
//bar Options
export const barOption = {
  //Tooltip when we hover on chart on the basic of dataset index
  tooltips: {
    mode: 'index',
    callbacks: {
      label: function (toolTipItem: { value: string; }) {
        return ("Revenue: $" + toolTipItem.value)
      }
    }

  },
  scales: {
    //xAxes for bar chart
    xAxes: [
      {
        gridLines: {
          color: 'cyan'
        },
        //describe the labels and there styles
        scaleLabel: {
          labelString: 'Months',
          display: true,
          fontColor: 'blue',
          fontSize: 20
        },
        // stck colors
        ticks: {
          fontColor: 'green'
        }
      }
    ],
    //describes the line style
    yAxes: [
      {
        gridLines: {
          color: 'cyan'
        },
        scaleLabel: {
          labelString: 'Revenue',
          display: true,
          fontColor: 'blue',
          fontSize: 20,
        },
        //we can decide limit of stcks, color of stick and position of stick 
        ticks: {
          beginAtZero: false,
          fontColor: 'green',
        }
      }
    ]
  }
};

//pieChart dataset
export const pieChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    data: [100, 200, 300, 400, 500, 600],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  },
  {
    data: [20, 44, 300, 33, 500, 600],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  },
  {
    data: [22, 200, 444, 400, 500, 30],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  }]
};

//doughnut dataset
export const doughnutChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    data: [100, 200, 300, 400, 500, 600],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  },
  {
    data: [20, 44, 300, 33, 500, 600],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  },
  {
    data: [22, 200, 444, 400, 500, 30],
    backgroundColor: ['red', 'green', 'orange', 'purple', 'cyan', 'blue'],
  }]
};
