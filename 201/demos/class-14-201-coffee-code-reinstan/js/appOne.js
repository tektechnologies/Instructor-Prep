'use strict';
console.log('app one connected.');
if(localStorage.pizzas){
  const pizzaFromLS = JSON.parse(localStorage.pizzas);

  for(let i = 0; i < pizzaFromLS.length; i++){
    new Pizza(pizzaFromLS[i].pizzaType);
    allPizzas[i].render();
  }
}

pizzaForm.addEventListener('submit', handlePizzaSubmit);
