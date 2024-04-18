const productsData = [
    {
      id: 1,
      name: "Antiparra Motocross",
      bid: 49.999,
      category: "MOTO",
      cardImg: "./assets/product01-antiparra.png",
    },
    {
      id: 2,
      name: "Casco Motocross FOX ",
      bid: 119.999,
      category: "MOTO",
      cardImg: "./assets/product02-casco.png",
    },
    {
      id: 3,
      name: "Guantes Motocross FOX ",
      bid: 15.999,
      category: "MOTO",
      cardImg: "./assets/product03-guantes.png",
    },
    {
      id: 4,
      name: "Bota Motocross Fox",
      bid: 249.999,
      category: "MOTO",
      cardImg: "./assets/product04-botas.png",
    },
    {
      id: 5,
      name: "Jersey Motocross Fox",
      bid: 15.999,
      category: "MTB",
      cardImg: "./assets/product05-camiseta.png",
    },
    {
      id: 6,
      name: "Pantalon Motocross FOX",
      bid: 29.999,
      category: "MTB",
      cardImg: "./assets/product06-pantalon.png",
    },
    {
      id: 7,
      name: "Bolso Motocross FOX",
      bid: 44.999,
      category: "MTB",
      cardImg: "./assets/product07-bolson.png",
    },
    {
      id: 8,
      name: "Medias Fox - Fri Thick",
      bid: 4.799,
      category: "MTB",
      cardImg: "./assets/product08-media.png",
    },
    {
      id: 9,
      name: "CODERAS FOX - TITAN ",
      bid: 94.999,
      category: "LFT",
      cardImg: "./assets/product09-rodillera.png",
    },
    {
      id: 10,
      name: "Rodillera FOX - LAUNCH D3O",
      bid: 59.999,
      category: "LFT",
      cardImg: "./assets/product10-rodillera.png",
    },
    {
      id: 11,
      name: "Buzo Fox - Honda HRC 360",
      bid: 29.999,
      category: "LFT",
      cardImg: "./assets/product11-jacket.png",
    },
    {
      id: 12,
      name: "Buzo Fox - KARRERA",
      bid: 37.999,
      category: "LFT",
      cardImg: "./assets/product12-buzo.png",
    },
    {
      id: 13,
      name: "Gorra FOX - ORIGINAL SPEED",
      bid: 7.999,
      category: "SHIFT",
      cardImg: "./assets/product13-gorra.png",
    },
    {
      id: 14,
      name: "Gorra Fox - Hellion ",
      bid: 8.499,
      category: "SHIFT",
      cardImg: "./assets/product14-gorra.png",
    },
    {
      id: 15,
      name: "Bota Motocross Fox Racing",
      bid: 7.46,
      category: "SHIFT",
      cardImg: "./assets/product15-bota.png",
    },
  ];


  const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < productsData.length; i += size) {
      dividedProducts.push(productsData.slice(i, i + size))
    }
    return dividedProducts;
  };
  
  const productsController = {
    dividedProducts: splitProducts(9),
    nextProductsIndex: 1,
    productsLimit: splitProducts(9).length,
  }
  
  