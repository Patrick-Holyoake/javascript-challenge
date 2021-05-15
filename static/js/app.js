// from data.js
var tableData = data;

let tbody = d3.select("tbody")

// Function Build Table
function buildTable(data){

    tbody.html("")

    data.forEach((x) => {

        let row = tbody.append("tr");

        Object.values(x).forEach((val) => {

            let cell = row.append("td");
            cell.text(val);
        }); 

    })
}

// Click button function
function handleClick() {
   // Prevent refreshing
   d3.event.preventDefault();
   // Select html element
   let data = d3.select("#datatime").property("Value");
   let filterData = tableData;

   //Check Date
   if (date) {
       filterData = filterData.filter((row) => row.datetime === date);
   }
   buildTable(filterData);

}

//Attach on function to event
d3.selectAll('#filter-btn').on("click", handleClick);
// Building table
buildTable(tableData);