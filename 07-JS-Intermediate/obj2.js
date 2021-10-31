function getObjectValue(obj, a) {
    const path = a.split(".")
    let hasil = obj
    for (let i = 0; i < path.length; i++) {
        if (hasil === null){
            break;
        }
        const objVal = path[i]
        const valObj = hasil[objVal]
        if (valObj !== undefined)  {
            hasil = valObj
        } else {
            hasil = null
        }
    }
        return hasil;
  }

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark",
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }

  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan);

