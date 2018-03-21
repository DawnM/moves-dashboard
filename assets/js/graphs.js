queue()
  .defer(d3.csv, "/assets/data/moves.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
  var ndx = crossfilter(movesData);

  per_country_piechart(ndx);
  provinces_per_country(ndx);
  towns_per_country(ndx);
  suburbs_per_country(ndx);
  living_arrangement_distribution(ndx);
  work_sector_distribution(ndx);
  moves_per_lifestage(ndx);  
  geographical_differences_per_move(ndx);

  dc.renderAll();
}

function per_country_piechart(ndx) {
  //pie chart displaying number of years spent in each country
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));

  dc.pieChart('#per-country-piechart')
    .height(300)
    .width(300)
    .radius(140)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function provinces_per_country(ndx) {
  // bar chart showing unique province count per country
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#unique-provinces')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function towns_per_country(ndx) {
  // bar chart showing unique town count per country
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#unique-towns')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function suburbs_per_country(ndx) {
  // bar chart showing unique town count per country
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#unique-suburbs')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function living_arrangement_distribution(ndx) {
  // stacked bar chart showing housing to sum of months
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#living-arrangements')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function work_sector_distribution(ndx) {
  // stacked bar chart showing ocupation to sum of months (do not include data for "none" or any education category other than "tertiary")
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#industry-sectors')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function moves_per_lifestage(ndx) {
  // bar chart showing count of suburb per life-stage
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart("#lifestage-moves")
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}

function geographical_differences_per_move(ndx) {
  // 3D line chart showing country / province / town / suburb changes per year
  
  // maths goes here
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));
  
  
  // chart specs go here
  dc.pieChart('#geographical-differences')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);
}


