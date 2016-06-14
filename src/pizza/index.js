import angular from 'angular'
import {PizzaListController} from './pizzalist.controller'
// import {Pizza} from './pizza'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
export const PizzaModule =
  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    // .filter('toto', function () {

    // mon filtre toto
    //   return function (input) {
    //     return parseInt(input) + 10
    //   }

    // })

    // .filter('toppings', function () {
    //   return function (pizza) {
    //     console.log(typeof pizza)
    //     console.log(pizza instanceof Pizza)
    //     if (!pizza.toppings) return ''
    //     return pizza.toppings2string(',')
    //   }
    // })

    .filter('pizzaToppings', pizzaToppingsFilter)

    .name


