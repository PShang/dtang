import { Pizza } from './pizza'
export class PizzaListController {
  constructor ($timeout) {
    this.$timeout = $timeout
    this.predicate = 'name'
    // console.log('Start PizzaListController')
    this.pizzas = [
      new Pizza({ name: 'Pizza 1', status: 'not cooked', toppings: ['eggs', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 2', status: 'not cooked', toppings: [] }),
      new Pizza({ name: 'Pizza 3', status: 'not cooked', toppings: ['eggs', 'eggs', 'mushrooms'] }),
      new Pizza({ name: 'Pizza 4', status: 'not cooked' }),
      new Pizza({ name: 'Pizza 5', status: ' cooked' })
    ].map(pizza => {
      pizza.str = pizza.toppings2string()
      return pizza
    })
  }

  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    return this.$timeout(() => {
      pizza.status = 1
    }, 2000)
  }

  cookPizzas () {
    const pizza = this.pizzas.find(p => p.status === 0)
    if (!pizza) return
    this.cookPizza(pizza)
      .then(this.cookPizzas.bind(this))
  }
  keep () {
    return function (pizza) {
      if (!this.query) return true
      return pizza.name.indexOf(this.query) !== -1
        || (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }

  sortPizzas () {
    return function (pizza) {
    if(this.predicate ==='name' || this.predicate ==='status') {
      return pizza[this.predicate]
  }
  if (this.predicate === 'toppings'){
    return (pizza.toppings || []).length
  }
  return 1 
}.bind(this)
}
}


