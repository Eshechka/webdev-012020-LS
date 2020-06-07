import appAuth from './app-auth.vue';

import { action } from '@storybook/addon-actions';

const methods = {
    onChangeInputPass: action('onChangeInputPass')
}

export default {
    title: 'AppAuth',
}

export const defaultView = () => ({
    components: {appAuth},
    methods,
    template: `
        <appAuth 
            @changeInputPass='onChangeInputPass'
        /> 
    `
});
