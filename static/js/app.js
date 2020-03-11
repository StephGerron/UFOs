// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create a new function Note- we’re using let instead of var to declare the row variable. That’s because this variable is limited to just this 
// block of code. It’s more appropriate to use var when we want the variable to be available globally, or throughout all of the code.
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
}

// This function will replace your handleClick function
function updateFilters() {

    var date, city, state, country, shape, filteredData;
    // Save the element, value, and id of the filter that was changed
    date = d3.select("#datetime").property("value");
    city = d3.select("#city").property("value");
    state = d3.select("#state").property("value");
    country = d3.select("#country").property("value");
    shape = d3.select("#shape").property("value");
    filteredData = tableData;
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }
  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }
  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  }
  // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
  