var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calcTotalSalesData(salesData) {
  var total = 0;
  for (var j = 0; j < salesData.length; j++) {
    total += salesData[j];
  }
  return total;
}

function calculateSalesTax(companySalesData, salesTaxRates) {
  var totalSalesData = {};

  for (var i = 0; i < companySalesData.length; i++) {
    var name = companySalesData[i].name;
    var totalSales = calcTotalSalesData(companySalesData[i].sales);
    if (!totalSalesData[name]) {
      totalSalesData[name] = {};
      totalSalesData[name].totalSales = totalSales;
      totalSalesData[name].totalTaxes = calcTax(totalSales, companySalesData[i].province);
    } else {
      totalSalesData[name].totalSales += totalSales;
      totalSalesData[name].totalTaxes += calcTax(totalSales, companySalesData[i].province);
    }
  }
    return(totalSalesData);

  function calcTax(totalSalesData, province) {
    return totalSalesData * salesTaxRates[province];
  }

}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);