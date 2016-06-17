class PizzaToppingsComponentController {
  constructor ($element) {
    this.$element = $element
  }

  addToppingDUCOMPONENT (topping) {
    this.onAddTopping({
      $event: { topping }
    })
  }
  // EVALUATION DE $ctrl.addToppingDUPIZZACONTROLLER($event)
  // En remplaçant $event par { topping }
  // DONC Appel de $ctrl.addToppingDUPIZZACONTROLLER({ topping: topping })
  delToppingDUCOMPONENT (topping) {
    this.delTopping({
      $event: { topping }
    })
  }


  dropped () {
    this.addToppingDUCOMPONENT(this.draggedTopping)
  }
}
// $onChanges (changes) {
//   if (changes.allToppings && this.allToppings) {
//     console.log(this.allToppings)
//   }


export const PizzaToppingsComponent = {
  bindings: {
    toppings: '<',
    allToppings: '<',
    delTopping: '&',
    onAddTopping: '&'
  },
  controller: PizzaToppingsComponentController,
  template: `
    <div class="row">
    <div class="col-md-6" dta-drop="$ctrl.dropped()" style="border:1px solid red">

    <h4>toppings</h4>
    <ul class="list-group">
    <li class="list-group-item"
    ng-repeat="topping in $ctrl.toppings track by $index">
    <a href ng-click="$ctrl.delToppingDUCOMPONENT($index)">
    {{ topping }}
    </a>
    </li>
    </ul>
    </div>

    <div class="col-md-6">

    <h4>available toppings</h4>
    <ul class = "list-group">
    <li class = "list-group-item"
    ng-repeat="(topping, value) in $ctrl.allToppings track by $index"
    dta-drag = "$ctrl.draggedTopping = topping">
    <a href ng-click="$ctrl.addToppingDUCOMPONENT(topping)">
    {{ topping }}
    </a>
    </li>
    </ul>

    </div>
    </div>
  `
}

 // {{ topping }}
 // <pre>{{ $ctrl.allToppings }}</pre>
// constructor () {
// console.log(this.allToppings)
// <a href ng-click="$ctrl.delTopping(topping)">
//
