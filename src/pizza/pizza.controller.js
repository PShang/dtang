// import { Pizza } from './pizza'
// import {toppings} from './toppings'
export class PizzaController {
  constructor (ListPizzaService, $routeParams, $location) {
    this.ListPizzaService = ListPizzaService
    this.$location = $location

    this.ListPizzaService.getPizza($routeParams.id)
    .then(pizza => {
      this.pizza = pizza
    })

    this.ListPizzaService.getToppings()
    .then(toppings => {
      this.toppings = toppings
    })
  }

// timeout Topping


  addToppingDUPIZZACONTROLLER ({topping}) {
    this.pizza.addTopping(topping)
  }

  delToppingDUPIZZACONTROLLER ({topping}) {
    // console.log('PizzaController')
    this.pizza.delTopping(topping)
  }

  savePizza (form) {
    if (form.$invalid) return
    this.PizzaService.savePizza(this.pizza)
      .then(() => {
        this.$location.path('/')
      })
  }
}
PizzaController.$inject = ['ListPizzaService', '$routeParams', '$location']

