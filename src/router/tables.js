import Basictable from '../views/tables/basic.vue'
import Fixedheadertable from '../views/tables/fixedheader.vue'

export default [{
    path: 'basic',
    name: 'basictable',
    component: Basictable,
    meta: ['基础表格']
}, {
    path: 'fixedheader',
    name: 'fixedheadertable',
    component: Fixedheadertable,
    meta: ['固定标头表格']
}]
