
import appAuth from './app-auth.vue';
import { shallowMount } from '@vue/test-utils';


describe('Кнопка "отправить"', () => {
    test('имеет кнопку "отправить"', () => {
        const wrapper = shallowMount(appAuth);

        // expect(wrapper.contains('button[type="submit"]')).toBe(true)
        
        const buttonSubmit = wrapper.find('button[type="submit"]');
        expect(buttonSubmit).toBeDefined();

        // expect(buttonSubmit.is('button[type="submit"]')).toBe(true)
    })
})

describe('Форма имеет все необходимые поля', () => {
    test('имеет поле "логин"', () => {
        const wrapper = shallowMount(appAuth);

        const textInputLogin = wrapper.find('input[type="text"]');
        
        expect(textInputLogin).toBeDefined();

        textInputLogin.setValue('user.name');
        
    })
    test('имеет поле "пароль"', () => {
        const wrapper = shallowMount(appAuth);
        const textInputPassword = wrapper.find('input[type="password"]');

        expect(textInputPassword).toBeDefined();

        textInputPassword.setValue('user.password');
    })
})
