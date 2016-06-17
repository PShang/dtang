export function DtaDragDirective () {
  return {
    scope: {
      dtaDrag: '&'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      element[0].setAttribute('draggable', true)
      element[0].addEventListener('dragstart', evt => {
        scope.$apply(function () {
          scope.dtaDrag()
        })
      }, false)
    }
  }
}
