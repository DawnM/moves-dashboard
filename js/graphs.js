queue()
  .defer(d3.csv, "data/moves2.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
        var ndx = crossfilter(movesData);
        
        /* main pie chart showing years per country */
        var country_dim = ndx.dimension(dc.pluck('country'));
        var years_per_country = country_dim.group().reduceSum(dc.pluck('years'));
        dc.pieChart('#per-country-piechart')
            .height(330)
            .radius(150)
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

        dc.renderAll();
        
        console.log(movesData);
        console.log("everything ran");
    }