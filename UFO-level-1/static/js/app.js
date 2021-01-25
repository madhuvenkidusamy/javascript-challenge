// from data.js
var tableData = data;




// ADDING DATA TO TABLE:

// Getting a reference to the table. We don't need this (just for reference)
var table = d3.select("#ufo-table");
// Getting a reference to the table body
var tbody = d3.select("tbody");

// Append rows to table. Each object in array object data (tableData) is appended
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });







// FILTERING BY DATE:

// Getting a reference to the button and form
var button = d3.select("#filter-btn");
var form = d3.select("form");


// function runEnter will run when button is clicked, or user hits enter
button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {
    // Prevent the page from refreshing when user hits enter
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node. From id=datetime
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // Filter data according to datetime inputed by user and save as filteredData
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Clear all data already within tbody so we can append filtered data to empty table
    tbody.html("");

    // Appending filtered data. Repeat same for loop as above, but only iterating through filteredData instead of all data (tableData)
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });

};