import template from './list.html';

export default {
  name: 'vg-list',
  template,
  props: {
    items: {
      type: Array,
      required: true
    },
    ordered: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}