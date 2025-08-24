//closure
//add new item （if arr>=5 print"你的购物车满了"）
//print arr (编号形式输出)
//delete the last item
//check if one item  is in the arr
//create a shopping obj,name+price+quantity

function shoppingList() {
  let shoppingList = ["Milk", "Egg", "Bread"];

  const newItem = (newItem) => {
    if (shoppingList.length >= 5) {
      console.log("Sorry, your cart is full. Please delete one item first.");
      return;
    }
    shoppingList.push(newItem);
  };

  const getList = () => {
    shoppingList.forEach((item, index) => {
      console.log(`${index+1}. ${item}`);
    });
  };

  const removeLastItem = () => {
    shoppingList.pop();
  };

  const isListed = (searchItem) => {
    console.log(shoppingList.includes(searchItem));
  };

  const createItemObj = (item, price = 0, quantity = 1) => {
    if (!shoppingList.includes(item)) {
      console.log("Failed to create shopping item. It is not in the list.");
      return;
    }

    return { name: item, price, quantity };
  };

  return { newItem, getList, removeLastItem, isListed, createItemObj };
}

const shoppinglist = shoppingList();
shoppinglist.getList();
shoppinglist.isListed("Milk");
shoppinglist.isListed("Stone");
shoppinglist.newItem("Jacket");
shoppinglist.newItem("Chips");
shoppinglist.newItem("Ramen");
shoppinglist.removeLastItem();
shoppinglist.getList();
const item = shoppinglist.createItemObj("Milk");
console.log(item);
