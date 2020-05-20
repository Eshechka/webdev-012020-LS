import Vue from 'vue';

new Vue ({
    el: '#form-contacts',
    template: '#contacts-form',

    data() {
      return {
        isOverlay: false,

        isErrorName: false,
        isErrorEmail: false,
        isErrorTextMessage: false,

        textErrorName: 'Некорректное имя',
        textErrorEmail: 'Некорректный e-mail',
        textErrorTextMessage: 'Некорректное сообщение',
   }
    },

    computed: {
      nameInput() { 
        return this.$refs['name-input'];
      },
      emailInput() { 
        return this.$refs['email-input'];
      },
      textMessageInput() { 
        return this.$refs['textMessage-input'];
      },
      emailRegexp() {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      }
    },

    methods: {
      hideOverlay() {
        this.isOverlay = false;
      },
      showOverlay() {
        this.isOverlay = true;
      },

      validateName() {
        let nameInputText = this.nameInput.value;
        if (nameInputText.length < 3) {
          this.textErrorName = 'Короткое имя (менее 3 симоволов)';
          this.isErrorName = true;
        }
        else {
          // console.log('Валидное имя',nameInputText);
          this.isErrorName = false;
        }
        return !this.isErrorName;
      },

      validateEmail() {

        let emailInputText = this.emailInput.value;
        if (emailInputText.length < 8) {
          this.textErrorEmail = 'Короткий email';
          this.isErrorEmail = true;
        }
        else if (!this.emailRegexp.test(emailInputText)) {
          this.textErrorEmail = 'Неверный формат email';
          this.isErrorEmail = true;
        }
        else {
          this.isErrorEmail = false;          
          // console.log('Валидный email',emailInputText);
        }
        return !this.isErrorEmail;
      },

      validateTextMessage() {

        let textMessageInputText = this.textMessageInput.value;
        if (textMessageInputText.length < 15) {
          this.textErrorTextMessage = 'Короткое сообщение';
          this.isErrorTextMessage = true;
        } else {
          this.isErrorTextMessage = false;          
          // console.log('Валидный email',textMessageInputText);
        }
        return !this.isErrorTextMessage;
      },

      submitForm() {
        let isValidName = this.validateName(),
            isValidEmail = this.validateEmail(),
            isValidTextMessage = this.validateTextMessage();

        if (isValidName && isValidEmail && isValidTextMessage) {
          // console.log('Валидация пройдена!');

          let userData = {
            name: this.name,
            name: this.email,
            text: this.text,
          };

          fetch('../src/data/success.txt', {
            method: 'POST',            
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
          }).then( (response) => {
            console.log(response);
            this.nameInput.value = '';
            this.emailInput.value = '';
            this.textMessageInput.value = '';
            this.showOverlay();
            setTimeout(this.hideOverlay,5000)
          });
          
        }
          
        else
          console.log('Валидация не пройдена!');
      },

    },

  })
