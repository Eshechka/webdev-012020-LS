<template lang="pug">

  .edit-work
    .edit-work__title {{title}}
    .edit-work__content
      form.edit-work__form(
        @submit.prevent='handleWorkForm'
      )
        .edit-work__image
          .edit-work__image-wrapper(for='work-image')(
            :style='{ backgroundImage : `url(${renderedPhoto})` }'
          )
            input#work-image.edit-work__image-load-input(type='file'
              @change='changeFileWorkImg'
            )
            span.edit-work__image-text {{textLoadPhoto}}
            label.edit-work__image-label(for='work-image')
            button.edit-work__image-load Загрузить
        .edit-work__info
          .edit-work__row.edit-work__row_name 
            label.edit-work__label Название
            input.edit-work__input(
              v-model='work.title'
            )
            div.edit-work__error.edit-work__error_name(v-if="editMode && $v.work.title.$invalid")
              span(v-if="!$v.work.title.maxLength") Максимум символов: {{ $v.work.title.$params.maxLength.max }}
              span(v-else-if="!$v.work.title.minLength") Минимум символов: {{ $v.work.title.$params.minLength.min }}
              span(v-else) Обязательно для заполнения

          .edit-work__row.edit-work__row_link 
            label.edit-work__label Ссылка
            input.edit-work__input(
              v-model='work.link'
            )
            div.edit-work__error.edit-work__error_link(v-if="editMode && $v.work.link.$invalid")
              span(v-if="!$v.work.link.url") Требуется url адрес
              span(v-else) Обязательно для заполнения

          .edit-work__row.edit-work__row_desc 
            label.edit-work__label Описание
            textarea.edit-work__input(type="textarea" rows=4 resize='none' 
              v-model='work.description'
            )
            div.edit-work__error.edit-work__error_text(v-if="editMode && $v.work.description.$invalid")
              span(v-if="!$v.work.description.maxLength") Максимум символов: {{ $v.work.description.$params.maxLength.max }}
              span(v-else-if="!$v.work.description.minLength") Минимум символов: {{ $v.work.description.$params.minLength.min }}
              span(v-else) Обязательно для заполнения                

          .edit-work__row.edit-work__row_tags 
            label.edit-work__label Добавление тега
            input.edit-work__input(
              v-model='work.techs'
            )

            .edit-work__added-tags
              .edit-work__added-tag(
                v-for='tag, ndx in tags'
              ) {{tag.replace(/[\s|,]+/g, '').trim()}}
                .edit-work__added-tag-close(
                  @click='removeTag(ndx)'
                )


          .edit-work__row.edit-work__row_buttons    
            button.edit-work__cancel(
              @click='$emit("hideEditForm")'
            ) Отмена
            button.edit-work__submit(type='submit') Сохранить

    
</template>

<script>
    import { renderer } from '../helpers/picture'

    import requests from '../requests';
    const baseUrl = requests.defaults.baseURL;

    import { mapState, mapActions } from 'vuex';
    import { required, url, minLength, maxLength } from 'vuelidate/lib/validators';


    export default {
      props: {        
        editMode: String,
      },
            
      data() {
        return {
          title: 'Новая работа',
          textLoadPhoto: 'Перетащите или нажмите для загрузки изображения',
          renderedPhoto: '',

          work: {
            title: '',
            photo: '',
            link: '',
            techs: '',
            description: '',
          },
        }
      },

      computed: {
        ...mapState('works', {
          currentWork: state => state.currentWork
        }),

        tags() {          
          return this.work.techs.match(/[a-zа-яё0-9.-]+[\s|,]*/gi);          
        },

      },

      validations: {
        work: {
          title: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30),
          },
          link: {
            required,
            url,
          },
          description: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(1000),
          },
        },
      },

      watch: {
        currentWork() {
          if (this.editMode === 'edit') {             
            this.setChangedWork();              
          }
          else if (this.editMode === 'new') {
            this.clearWork();              
          }
        },

      },

      created() {
        if (this.editMode === 'edit') {
          this.setChangedWork();
        }
      },

      methods: {

        clearWork() {         
          this.work = {
            title: '',
            photo: '',
            link: '',
            techs: '',
            description: '', 
          };
          this.textLoadPhoto = 'Перетащите или нажмите для загрузки изображения';
          this.title = 'Новая работа';
          this.renderedPhoto = '';
        },

        setChangedWork() {         
          this.work = {...this.currentWork};
          this.renderedPhoto = `${baseUrl}/${this.work.photo}`;
          this.work.photo = '';
          this.textLoadPhoto = 'Изменить фото работы';
          this.title = 'Редактирование работы';
        },

        changeFileWorkImg(e) {
          this.work.photo = e.target.files[0];

          renderer(this.work.photo).then(pic => {
            this.renderedPhoto = pic;
          })
        },

        removeTag(ndx) {
          this.tags.splice(ndx, 1);         
          this.work.techs = this.tags.join('');
        },

        ...mapActions('works', ['addWork', 'changeWork']),

        handleWorkForm() {

          if (this.$v.$invalid) {
            console.log('INVALID FORM');                
            return;
          };

          const formData = new FormData();

          formData.append('photo', this.work.photo);
          formData.append('title', this.work.title);
          formData.append('link', this.work.link);
          formData.append('techs', this.work.techs);
          formData.append('description', this.work.description);

          if (this.editMode==='new') {            
            this.addNewWork(formData);
          }
          else if (this.editMode==='edit') {            
            this.editWork(formData, this.work.id);
          }

          this.$emit("hideEditForm");
        },

        async addNewWork(newWork) {
          try {
            await this.addWork(newWork);
          }
          catch (error) {
            alert('исправь потом меня, я ошибка из addNewWork: ' + error.message);
          }
          finally {
            // disable кнопке
          }
        },

        async editWork(renewWorkData, changedWorkId) {
          try {
            await this.changeWork({ renewWorkData, changedWorkId });
          }
          catch (error) {
            alert('исправь потом меня, я ошибка из editWork: ' + error.message);
          }
          finally {
            // disable кнопке
          }
        },

      },
    }
</script>

<style lang="postcss">

   @import "normalize.css";
   @import "../../styles/mixins.pcss";
   @import "../../styles/layout/base.pcss";
   @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");


  .edit-work {

    background-color: $white-color;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);

    &__title {
      margin: 11px;
      padding: 0 11px;
      padding-top: 20px;
      padding-bottom: 20px;
      color: $base-color;
      font-size: 18px;
      line-height: 34px;
      font-weight: 700;
      border-bottom: 1px solid rgba(#1f232d, 0.5);

      @include tablets {        
        padding-top: 24px;
        padding-bottom: 24px;
      }
      @include phones {
        padding-left: 0px;
        margin-left: 0;
      }
    }

    &__content {
      padding: 30px;
      padding-top: 36px;

      @include tablets {
        padding-top: 20px;
      }

      @include phones {
        padding-left: 0;
        padding-right: 0;
        padding-top: 20px;
      }
    }

    &__form {
      display: flex;

      @include tablets {
        flex-direction: column;
        align-items: center;
      }
    }

    &__image {
      width: calc(53% - 30px);
      height: 276px;
      margin-right: 30px;

      @include tablets { 
        width: 70%;
        margin-right: 0;
        height: 370px;
        padding-bottom: 70px;
      }    
      @include phones { 
        width: 84%;
        height: 220px;
        padding-bottom: 40px;
      }
    }

    &__image-wrapper {
      width: 100%;
      height: 100%;
      background-color: rgba(#dee4ed, 0.5);
      border: 1px dashed #d5d7da;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      background-size: cover;

      &:hover, &:active, &:focus {        
        .edit-work__image-load {
          background: $admin-base-color;
        }
      }
    }

    &__image-label {
      width: 100%;
      height: 100%;
      position: absolute;
      cursor: pointer;
    }

    &__image-load-input {
      display: none;
    }

    &__image-text {
      color: rgba($base-color, 0.95);
      font-size: 16px;
      line-height: 34px;
      font-weight: 600;
      width: 45%;
      text-align: center;
    
      @include tablets {
        display: none;
      }
    }

    &__image-load {
      text-transform: uppercase;
      background-image: $admin-base-gradient;
      border-radius: 40px;
      padding: 19px;
      color: $white-color;
      min-width: 180px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      outline: none;
      margin-top: 30px;

      &:hover, &:active, &:focus {
        background: $admin-base-color;
      }

      @include tablets {
        position: absolute;
        bottom: -70px;
        margin-top: 0;
      }
      @include phones {
        position: absolute;
        bottom: -60px;
      }
    }


    &__info {
      width: 50%;

      @include tablets { 
        width: 75%;
        margin-top: 35px;
      }
      @include phones { 
        width: 90%;
      }
    }

    &__row {
      margin-bottom: 25px;

      @include phones {
        margin-bottom: 30px;
      }

      &_buttons {
        justify-content: flex-end;
        text-align: right;
        margin-top: 45px;
        margin-bottom: 0;

        @include tablets {
          margin-top: 48px;
          text-align: center;
        }
        @include phones {
          justify-content: space-around;
          display: flex;
        }
      }

      &_desc {
        margin-bottom: 15px;

      }
      &_link {
        
        @include phones {
          margin-bottom: 18px;
        }
      }
    }

    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 30px;
      color: rgba($base-color, 0.95);
    }

    &__input {
      @include admin-input();
      width: 100%;

      &[type='textarea'] {
        resize: none;
        border: 1px solid $color-light;
        padding: 20px;
        line-height: 28px;

        @include tablets {
          margin-top: 18px;
          line-height: 32px;        
        }
        @include phones {
          padding-bottom: 10px;
          padding-top: 10px;
          height: 240px;
        }
      }

      @include tablets {
        padding-bottom: 17px;
      }
    }

    &__error {
      span {
        color: red;
        font-size: 12px;
      }
    }
    
    &__added-tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 20px;
    }  
    &__added-tag {
      margin-right: 10px;
      margin-bottom: 10px;
      padding: 8px 33px 8px 19px;
      font-size: 12px;
      line-height: 1;
      position: relative;
      background-color: rgba(#dee4ed, 0.5);
      border-radius: 30px;


      @include tablets {
        padding: 11px 40px 11px 19px;
        font-size: 14px;
      }
    }

    &__added-tag-close {
      cursor: pointer;
      position: absolute;
      right: 14px;
      top: 50%;      
      transform: translateY(-50%);
      height: 10px;
      width: 10px;
      padding: 0;
      background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-middle});
      background-repeat: no-repeat;
      background-size: 10px 10px;
      background-position: center;

      @include tablets {
        height: 12px;
        width: 12px;
        background-size: 12px 12px;
      }

      &:hover {
        background-image: svg-load('remove.svg', width=100%, height=100%, fill=#{$color-red});
      }
    }

    &__cancel {
      color: $admin-base-color;
      font-size: 16px;
      line-height: 34px;
      font-weight: 700;
      background-color: transparent;
      margin-right: 60px;

      &:hover, &:active, &:focus {
        color: rgba($admin-base-color, 0.8);
        outline: none;
      }


      @include phones {
        margin-right: 0;
      }
    }

    &__submit {
      text-transform: uppercase;
      background-image: $admin-base-gradient;
      border-radius: 40px;
      padding: 19px;
      color: $white-color;
      min-width: 180px;
      font-size: 16px;
      font-weight: bold;
      border: none;
      outline: none;

      &:hover, &:active, &:focus {
        background: $admin-base-color;
      }

      @include tablets {
        font-size: 18px;
        padding: 23px 46px;
      }
    }

  }

</style>