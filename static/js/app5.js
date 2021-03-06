var tableData = data;
var tbody = d3.select("tbody");

updateTable(tableData);
    console.log(tableData);

    // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);


    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    updateTable(filteredData);

})
    
    
    function updateTable(tableData) {
        tbody.html('');

    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
        });
    }


