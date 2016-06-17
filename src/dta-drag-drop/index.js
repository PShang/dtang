import angular from 'angular'
import { DtaDragDirective } from './dta-drag.directives'
import { DtaDropDirective } from './dta-drop.directives'

export const DtaDragDropModule =

angular.module('dtaDragDrop', [])

  .directive('dtaDrag', DtaDragDirective)
  .directive('dtaDrop', DtaDropDirective)
  .name
