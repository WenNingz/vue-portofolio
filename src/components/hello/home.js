import template from './home.html';
import button from 'app/components/button/button';
import list from 'app/components/list/list';

export default {
    name: 'vg-home',
    template,
    components: {
      [button.name]: button,
      [list.name]: list
    },
    data: () => ({
      items: ['Foo', 'Bar', 'Buz']
    }),
};