queue()
  .defer(d3.csv, "data/moves2.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
  var ndx = crossfilter(movesData);
  
  /* main pie chart showing years per country */
  var country_dim = ndx.dimension(dc.pluck('country'));
  var years_per_country = country_dim.group().reduceSum(dc.pluck('years'));
  dc.pieChart('#per-country-piechart')
    .height(300)
    .radius(130)
    .transitionDuration(1500)
    .dimension(country_dim)
    .group(years_per_country);
  
  /* pie chart showing years per province */
  var province_dim = ndx.dimension(dc.pluck('province'));
  var years_per_province = province_dim.group().reduceSum(dc.pluck('years'));
  dc.pieChart("#years-per-province")
    .height(330)
    .radius(150)
    .transitionDuration(1500)
    .dimension(province_dim)
    .group(years_per_province);


  /* pie chart showing years per town */
  var town_dim = ndx.dimension(dc.pluck('town'));
  var years_per_town = town_dim.group().reduceSum(dc.pluck('years'));
  dc.pieChart("#years-per-town")
    .height(330)
    .radius(150)
    .transitionDuration(1500)
    .dimension(town_dim)
    .group(years_per_town);
      
  /* pie chart showing years per suburb */
  var suburb_dim = ndx.dimension(dc.pluck('suburb'));
  var years_per_suburb = suburb_dim.group().reduceSum(dc.pluck('years'));
  dc.pieChart("#years-per-suburb")
    .height(330)
    .radius(150)
    .transitionDuration(1500)
    .dimension(suburb_dim)
    .group(years_per_suburb);
      
  
  /* stacked bar chart showing living arrangment distribution */
  /* province_dim already declared */
  
    /* group the segments of data for the stacks */
    var housingMum = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'With Mum') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingDad = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'With Dad') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingFamily = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'Family Other') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingSchool = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'Boarding School') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingShare = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'House Share') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingRental = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'Rental') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var housingReserve = province_dim.group().reduceSum(function (d) {
      if (d.housing === 'Game Reserve') {
          return +d.years;
      } else {
          return 0;
      }
    });
        
  var stackedChart = dc.barChart("#living-arrangements");
  stackedChart
    .width(650)
    .height(450)
    .dimension(province_dim)
    .group(housingMum, "With Mum")
    .stack(housingDad, "With Dad")
    .stack(housingFamily, "Other Family")
    .stack(housingSchool, "Boarding School")
    .stack(housingShare, "House Share")
    .stack(housingRental, "Rental")
    .stack(housingReserve, "Game Reserve")
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .legend(dc.legend().x(480).y(70).itemHeight(10).gap(5))
    .ordering(function(d) { return -d.value; });
  stackedChart.margins().top = 60;
  stackedChart.margins().right = 60;
  stackedChart.margins().bottom = 100;
  stackedChart.margins().left = 60;
  
  /* stacked bar chart showing employment industry distribution */
  /* province_dim already declared */
  
    /* group the segments of data for the stacks */
    var occupationSchool = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'School') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationDesign = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Design') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationTourism = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Tourism') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationIT = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'IT Solutions') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationLogistics = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Logistics') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationSocialCare = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Social Care') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationInsurance = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Insurance') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationBeauty = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Beauty') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationRetail = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Retail') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationRecruitment = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'Recruitment') {
          return +d.years;
      } else {
          return 0;
      }
    });
    
    var occupationCollege = province_dim.group().reduceSum(function (d) {
      if (d.occupation === 'College') {
          return +d.years;
      } else {
          return 0;
      }
    });
        
  var stackedChart = dc.barChart("#industry-sectors");
  stackedChart
    .width(650)
    .height(450)
    .dimension(province_dim)
    .group(occupationSchool, "School")
    .stack(occupationDesign, "Design")
    .stack(occupationTourism, "Tourism")
    .stack(occupationIT, "IT Solutions")
    .stack(occupationLogistics, "Logistics")
    .stack(occupationSocialCare, "Social Care")
    .stack(occupationInsurance, "Insurance")
    .stack(occupationBeauty, "Beauty")
    .stack(occupationRetail, "Retail")
    .stack(occupationRecruitment, "Recruitment")
    .stack(occupationCollege, "College")
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .ordering(function(d) { return -d.value; })
    .legend(dc.legend().x(480).y(70).itemHeight(15).gap(5));
  stackedChart.margins().top = 60;
  stackedChart.margins().right = 60;
  stackedChart.margins().bottom = 100;
  stackedChart.margins().left = 60;



  /* give me all my graphs */
  dc.renderAll();
  
  console.log(movesData);
  console.log("everything ran");
}