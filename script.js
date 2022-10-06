"use strict";

const newData = pokemons.map((item) => {
  return {
    isName: item.name,
    img: item.img,
    type: item.type,
    weight: item.weight,
    age: item.candy_count,
  };
});

// Dynamic option\

const types = [];

function type() {
  newData.forEach((e) => {
    e.type.forEach((i) => {
      if (!types.includes(i)) {
        types.push(i);
      }
    });
  });
}
type();

types.forEach((e) => {
  const option = createElement("option", "select_option", e);

  $(".filter-type").appendChild(option);
});

$(".filter-type").addEventListener("change", (e) => {
  renderData(e.target.value);
});



// Sort option

let newSortData = newData;

$(".filter-name").addEventListener("change", (e) => {
  renderData(e.target.value);
});

function compare(a, b) {
  if (a.isName < b.isName) {
    return -1;
  }
  if (a.isName > b.isName) {
    return 1;
  }
  return 0;
}



renderData();
// Render all data
function renderData(query = "all") {
  $(".wrapper").innerHTML = "";


  // Sort option
  if (query === "aa-zz") {
    newData.sort(compare).forEach((e) => {
      const card = createElement(
        "div",
        "card",
        `
            <img class="card_img" src="${e.img}" alt="${e.isName}" >
            <hr class="line">
            <div class="card_body">
                <h4 class="card_title mb-1"><strong>${e.isName}</strong></h4>
                <h6 class="card_type mb-3"><strong>${e.type}</strong></h6>
        
                <div class="card_info d-flex justify-content-between">
                    <h4><strong>${e.weight}</strong></h4>
                    <h4><strong>${
                      e.age == undefined ? "none" : `${e.age} age`
                    }</strong></h4>
                </div>
            
            </div>
            `
      );

      $(".wrapper").appendChild(card);
    });
  }
  if (query === "zz-aa") {
    newData
      .sort(compare)
      .reverse()
      .forEach((e) => {
        const card = createElement(
          "div",
          "card",
          `
        <img class="card_img" src="${e.img}" alt="${e.isName}" >
        <hr class="line">
        <div class="card_body">
            <h4 class="card_title mb-1"><strong>${e.isName}</strong></h4>
            <h6 class="card_type mb-3"><strong>${e.type}</strong></h6>
    
            <div class="card_info d-flex justify-content-between">
                <h4><strong>${e.weight}</strong></h4>
                <h4><strong>${
                  e.age == undefined ? "none" : `${e.age} age`
                }</strong></h4>
            </div>
        
        </div>
        `
        );

        $(".wrapper").appendChild(card);
      });
  }


   // Filter option

  let filterData = [];
  newData.filter((e) => {
    return e.type.filter((i) => {
      if (query === "all") {
        filterData = newData;
      }
      if (i === query) {
        filterData.push(e);
      }
    });
  });

  filterData.forEach((e) => {
    const card = createElement(
      "div",
      "card",
      `
        <img class="card_img" src="${e.img}" alt="${e.isName}" >
        <hr class="line">
        <div class="card_body">
            <h4 class="card_title mb-1"><strong>${e.isName}</strong></h4>
            <h6 class="card_type mb-3"><strong>${e.type}</strong></h6>
    
            <div class="card_info d-flex justify-content-between">
                <h4><strong>${e.weight}</strong></h4>
                <h4><strong>${
                  e.age == undefined ? "none" : `${e.age} age`
                }</strong></h4>
            </div>
        
        </div>
        `
    );

    $(".wrapper").appendChild(card);
  });
}
