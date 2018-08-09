import template from './button.html';

export default {
    name: 'vg-button',
    template,
    props: {
      text: {
        type: String,
        required: false,
        default: 'Click Me!'
      }
    },
    data: () => ({
      interactCount: 0
    }), 
    methods: {
      interact: function() {
        this.interactCount += 1;
      }
    }
};