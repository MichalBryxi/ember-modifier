<% if (modifierType === 'function') { %>import { modifier } from 'ember-modifier';

export default modifier(function <%= camelizedModuleName %>(element/*, positional, named*/) {

}, { eager: false });<% } else { %>import Modifier from 'ember-modifier';

export default class <%= classifiedModuleName %>Modifier extends Modifier {
  modify(element/*, positional, named*/) {}
}<% } %>
