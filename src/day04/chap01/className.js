let dirtyFoods = document.getElementsByClassName("a");
console.log(dirtyFoods);

// dirtyFoods.forEach(food => {
//     console.log(food.textContent);
// });

for (let food of dirtyFoods) {
    console.log(food.textContent);
}