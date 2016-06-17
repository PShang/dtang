import { Pizza } from './pizza'

const url = 'http://localhost:1337/pizzas'
const urlTopping = 'http://localhost:1337/toppings'

let toppings = null

export class ListPizzaService {
  constructor ($timeout, $http, $q) {
    this.$timeout = $timeout
    this.$http = $http
    this.$q = $q
  }

  getPizzas () {
    return this.$http.get(url)
      .then(({data: pizzas}) => pizzas.map(pizzaJson => new Pizza(pizzaJson)))
  }

  getPizza (id) {
    return this.$http.get(url + '/' + id)
      .then(response => new Pizza(response.data))
  }

  savePizza (pizza) {
    return this.$http.put(url + '/' + pizza.id, pizza)
  }

  addPizza (pizza) {
    return this.$http.post(
      url,
      pizza // ou pizza.json() si besoin
    ).then(response => {
      return this.getPizzas()
    })
  }
  getToppings () {
    if (toppings) {
      return this.$q.resolve(toppings)
    } else {
      return this.$http.get(urlTopping)
        .then(response => {
          toppings = response.data
          return toppings
        })
    }
  }
}

// console.log('toppings')

ListPizzaService.$inject = ['$timeout', '$http', '$q']
