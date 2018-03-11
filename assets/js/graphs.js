queue()
  .defer(d3.csv, "/assets/data/moves.csv")
  .await(makeGraphs);

function makeGraphs(error, movesData) {
  var ndx = crossfilter(movesData);

//pie chart displaying number of years spent in each country
  var country_dim = ndx.dimension(dc.pluck('country'));
  var total_time_per_country = country_dim.group().reduceSum(dc.pluck('months'));

  dc.pieChart('#per-country-piechart')
    .height(300)
    .radius(130)
    .transitionDuration(1000)
    .dimension(country_dim)
    .group(total_time_per_country);

  dc.renderAll();
}

function show_lifeStage_distribution(ndx) {

    function lifeStageByCountry(dimension, stage) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if (v.stage === stage) {
                    p.match++;
                };
                return p;
            },
            function (p, v) {
                p.total--;
                if (v.stage === stage) {
                    p.match--;
                };
                return p;
            },
            function () {
                return { total: 0, match: 0 };
            }
        );
    };

    var dim = ndx.dimension(dc.pluck("country"));
    var infantByCountry = lifeStageByCountry(dim, "Infant");
    var childByCountry = lifeStageByCountry(dim, "Child");
    var teenByCountry = lifeStageByCountry(dim, "Teen");
    var youngAdultByCountry = lifeStageByCountry(dim, "YoungAdult");
    var adultByCountry = lifeStageByCountry(dim, "Adult");

    dc.barChart("#per-lifeStage-moves")
        .width(350)
        .height(250)
        .dimension(dim)
        .group(infantByCountry, "Infant")
        .stack(childByCountry, "Child")
        .stack(teenByCountry, "Teen")
        .stack(youngAdultByCountry, "YoungAdult")
        .stack(adultByCountry, "Adult")
        .valueAccessor(function (d) {
            if(d.value.total > 0) {
                return (d.value.match / d.value.total) * 100
            } else {
                return 0;
            }
            return d.value.percent * 100;
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Country")
        .legend(dc.legend().x(270).y(170).itemHeight(15).gap(5))
        .margins({top: 10, right: 100, bottom: 30, left: 30});

      dc.renderAll();
}