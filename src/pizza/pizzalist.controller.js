import { Pizza } from './pizza'
export class PizzaListController {
  constructor ($timeout, ListPizzaService) {

    this.$timeout = $timeout
    this.ListPizzaService = ListPizzaService
    // tri par défaut
    this.predicate = 'name'
    // console.log('Start PizzaListController', ListPizzaService)

    ListPizzaService.getPizzas()
    .then(pizzas => {
      this.pizzas = this.initPizzas(pizzas)
    })
  }

  initPizzas (pizzas) {
    return pizzas
          .map(pizza => {
            pizza._toppings = pizza.toppings2string()
            pizza._toppingsLength = (pizza.toppings || []).length
            return pizza
          })
  }

  addPizza () {
    const pizza = new Pizza({
      name: 'new pizza',
      toppings: ['eggs']
    })
    this.ListPizzaService.addPizza(pizza)
    .then((pizzas) => {
      this.pizzas = this.initPizzas(pizzas)
    })
    .catch(err => {
      window.alert('Pb ...')
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

  // editPizzas () {
  //   this.pizza = pizza
  //   this.ListPizzaService.editPizza(pizza)
  // }

  keep () {
    return function (pizza) {
      if (!this.query) return true
      return pizza.name.indexOf(this.query) !== -1 || (pizza.toppings || []).join('').indexOf(this.query) !== -1
    }.bind(this)
  }

  // sortPizzas () {
  //   return function (pizza) {
  //     if (this.predicate === 'name' || this.predicate === 'status') {
  //       return pizza[this.predicate]
  //     }
  //     if (this.predicate === 'toppings') {
  //       return (pizza.toppings || []).length
  //     }
  //     return 1
  //   }.bind(this)
  // }
}


PizzaListController.$inject = ['$timeout', 'ListPizzaService']


