
import appAuth from './app-auth.vue';
import { shallowMount } from '@vue/test-utils';

it('имеет кнопку "отправить"', () => {
    const component = shallowMount(appAuth);

    expect(component.contains('button')).toBe(true);
})