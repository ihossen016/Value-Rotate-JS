// endpoint1 = "https://jsonmock.hackerrank.com/api/countries?page=<Page Number>"
// endpoint2 = "https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>"

fetch("https://jsonmock.hackerrank.com/api/countries?page=24")
  .then(response => {
    return response.json();
  })
  .then(allData => {
    // console.log(allData.data);
    const data = allData.data;
    let name = data.map(x => {
      if (x.alpha2code === "AF") {
        return x.name;
      }
    });

    console.log(name);
  });
