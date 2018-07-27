queue()
  .defer(d3.csv, "/assets/data/moves2.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
        var ndx = crossfilter(movesData);
        var country_dim = ndx.dimension(dc.pluck('years'));
        var years_per_country = country_dim.group().reduceSum(dc.pluck('years'));
        dc.pieChart('#per-country-piechart')
            .height(330)
            .radius(90)
            .transitionDuration(1500)
            .dimension(country_dim)
            .group(years_per_countryg );
        


        dc.renderAll();
    }