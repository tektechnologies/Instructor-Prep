'use strict';
console.log('app connected.');
let allPizzas = [];
let pizzaForm = document.getElementById('pizzaForm');
let pizzaList = document.getElementById('pizzaList');

function Pizza(pizzaType){
  this.pizzaType = pizzaType;
  this.render = function(){
    const listItem = document.createElement('li');
    listItem.textContent = this.pizzaType;
    pizzaList.appendChild(listItem);
  },
  allPizzas.push(this);
}

function handlePizzaSubmit(event){
  event.preventDefault();
  const newPizza = new Pizza(event.target.pizzaInput.value);
  pizzaForm.reset();
  newPizza.render();
  localStorage.pizzas = JSON.stringify(allPizzas);
  console.log(localStorage.pizzas);
}




//one
  // const arrayString = JSON.stringify(allPizzas);
  // console.log(arrayString);
  // localStorage.setItem('pizza', arrayString);
//two
  //localStorage.setItem('pizza', JSON.stringify(allPizzas));
  //three