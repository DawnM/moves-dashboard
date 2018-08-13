queue()
  .defer(d3.csv, "data/moves2.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
  var countryColors = d3.scale.ordinal().range(["#ffc107", "#17a2b8"]);
  
  var barColors = [
    "#f53023", "#f27c32", "#fbe63d", "#b1d641", "#3fb34f",  "#34add3", "#1981c3", "#11539c", "#1b1862", "#ea257a", "#8e1f6f", 
  ];
  
  var ndx = crossfilter(movesData);
  
  /* main pie chart showing years per country */
  var country_dim = ndx.dimension(dc.pluck('country'));
  var years_per_country = country_dim.group().reduceSum(dc.pluck('years'));
  dc.pieChart('#per-country-piechart')
    .height(250)
    .radius(120)
    .transitionDuration(1500)
    .dimension(country_dim)
    .group(years_per_country)
    .colors(countryColors);
  
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
  
  /* stacked bar chart showing living arrangment per age group */
  var ageGroup_dim = ndx.dimension(dc.pluck('age'));

  /* group the segments of data for the stacks */
  var housingMum = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'With Mum') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingDad = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'With Dad') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingFamily = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'Family Other') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingSchool = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'Boarding School') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingShare = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'House Share') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingRental = ageGroup_dim.group().reduceSum(function (d) {
    if (d.housing === 'Rental') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var housingReserve = ageGroup_dim.group().reduceSum(function (d) {
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
    .dimension(ageGroup_dim)
    .group(housingMum, "With Mum")
    .stack(housingDad, "With Dad")
    .stack(housingFamily, "Other Family")
    .stack(housingSchool, "Boarding School")
    .stack(housingShare, "House Share")
    .stack(housingRental, "Rental")
    .stack(housingReserve, "Game Reserve")
    .x(d3.scale.ordinal())
    .xUnits(dc.units.ordinal)
    .ordinalColors(barColors)
    .legend(dc.legend().x(500).y(30).itemHeight(13).gap(5))
    .ordering(dc.pluck('age'));
  stackedChart.margins().top = 40;
  stackedChart.margins().right = 40;
  stackedChart.margins().bottom = 40;
  stackedChart.margins().left = 40;
  
  /* stacked bar chart showing employment industry per age group */
  /* ageGroup_dim already declared */

  /* group the segments of data for the stacks */
  var occupationSchool = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'School') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationDesign = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Design') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationTourism = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Tourism') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationIT = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'IT Solutions') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationLogistics = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Logistics') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationSocialCare = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Social Care') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationInsurance = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Insurance') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationBeauty = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Beauty') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationRetail = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Retail') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationRecruitment = ageGroup_dim.group().reduceSum(function (d) {
    if (d.occupation === 'Recruitment') {
        return +d.years;
    } else {
        return 0;
    }
  });
  
  var occupationCollege = ageGroup_dim.group().reduceSum(function (d) {
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
    .dimension(ageGroup_dim)
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
    .ordinalColors(barColors)
    .xUnits(dc.units.ordinal)
    .legend(dc.legend().x(500).y(30).itemHeight(13).gap(5))
    .ordering(dc.pluck('age'));
  stackedChart.margins().top = 40;
  stackedChart.margins().right = 40;
  stackedChart.margins().bottom = 40;
  stackedChart.margins().left = 40;



  /* give me all my graphs */
  dc.renderAll();
  
  console.log("everything ran");
}