queue()
  .defer(d3.csv, "./moves2.csv")
  .await(makeGraphs);

// function makeGraphs(error, movesData) {
//         var ndx = crossfilter(movesData);
//         var country_dim = ndx.dimension(dc.pluck('years'));
//         var years_per_country = country_dim.group().reduceSum(dc.pluck('years'));
//         dc.pieChart('#per-country-piechart')
//             .height(330)
//             .radius(90)
//             .transitionDuration(1500)
//             .dimension(country_dim)
//             .group(years_per_countryg );
        


//         dc.renderAll();
//     }

function makeGraphs(error, data) {//first param is error and not data
  console.log(data);
  console.log("everything ran");
 };