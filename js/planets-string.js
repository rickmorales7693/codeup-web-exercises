(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|")

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    planetsString = planetsArray.join("<br>")

    console.log(planetsString);

    planetsString = planetsArray.join("<ul><li>Mercury</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>")

//     let planetsUnorderdList = [];
//     planetsArray.forEach(planet => {
//         planetsUnorderdList.push(`<li>${planet}</li>`);
//     })
//     planetsUnorderdList.unshift("<ul>");
//     planetsUnorderdList.push("</ul>");
//     console.log(planetsUnorderdList.join(""));
//     inner.innerHTML = planetsUnorderdList.join("");
//     })();

    // const unorderedPlanetList = (arr) => {
    //     let planetStringB = arr.join(`</li><li>`);
    //     console.log('Planet String B =>', planetStringB);
    //     return `<ul><li>${planetStringB}</li></ul>`
    // };

    // console.log(planetsString)

})();