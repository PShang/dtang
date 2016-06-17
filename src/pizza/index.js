import angular from 'angular'

import {PizzaListController} from './pizzalist.controller'
import {PizzaController} from './pizza.controller'
import { pizzaToppingsFilter } from './pizza-toppings.filter'
import { ListPizzaService } from './ListPizzaService'
import {PizzaToppingsComponent} from './pizzaToppings.component'
import { DtaDragDropModule } from '../dta-drag-drop'

export const PizzaModule =
    angular.module('dtang.pizza', [DtaDragDropModule])
        .controller('PizzaListController', PizzaListController)
        .controller('PizzaController', PizzaController)
        .filter('pizzaToppings', pizzaToppingsFilter)
        // angular.module("pizza", ) module déjà créé!!!
        .service('ListPizzaService', ListPizzaService)
        .component('pizzaToppings', PizzaToppingsComponent)
        .directive('removeTopping', function ($rootScope) {
          return {
            link: function (scope, element, attrs) {
              element.bind('click', function () {
                element.remove()
              })
            }
          }
        })

        // .directive('dtaDrag', function () {
        //   return {
        //     scope: {
        //       dtaDrag: '&'
        //     },
        //     restrict: 'A',
        //     link: function (scope, element, attrs) {
        //       element[0].addEventListener('dragstart', evt => {
        //         scope.$apply(function () {
        //           scope.dtaDrag()
        //         })
        //       }, false)
        //     }
        //   }
        // })

        // .directive('dtaDrop', function () {
        //   return {
        //     scope: {
        //       dtaDrop: '&'
        //     },
        //     restrict: 'A',
        //     link: function (scope, element, attrs) {
        //       element[0].addEventListener('dragover', evt => {
        //         evt.preventDefault()
        //       }, false)
        //       element[0].addEventListener('drop', evt => {
        //         evt.preventDefault()
        //         scope.$apply(function () {
        //           scope.dtaDrop()
        //         })
        //       }, false)
        //     }
        //   }
        // })
        .name
