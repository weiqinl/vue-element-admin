import componentTabs from '../views/components/tabs.vue'
import componentDirectives from '../views/components/directives.vue'

export default [{
  path: 'tabs',
  name: 'componentTabs',
  component: componentTabs,
  meta: ['tabs组件'],
}, {
  path: 'directives',
  name: 'componentDirectives',
  component: componentDirectives,
  meta: ['directives组件'],
}]
