<template lang="pug">

  .edit-review
    .edit-review__title {{title}}
    .edit-review__content
      form.edit-review__form(
        @submit.prevent='handleReviewForm'
      )
        .edit-review__image
          div.edit-review__error.edit-review__error_photo(v-if="editMode && $v.renderedPhoto.$invalid")
            span Прикрепите фото автора отзыва
          label.edit-review__image-load-label(for='review-image')
            span.edit-review__image-text {{textLoadPhoto}}
            vue-dropzone(ref='myVueDropzone' id='dropzone-review' 
                :options='dropzoneOptions'
              )      
            input#review-image.edit-review__image-load(type='file'
              @change='changeFileReviewImg'
            )
          .edit-review__image-place(
            :style='{ backgroundImage : `url(${renderedPhoto})` }'
          )


        .edit-review__info
          .edit-review__row
            .edit-review__group.edit-review__group_name
              label.edit-review__label Имя автора
              input.edit-review__input(
                v-model='review.author'
              )
              div.edit-review__error.edit-review__error_name(v-if="editMode && $v.review.author.$invalid")
                span(v-if="!$v.review.author.maxLength") Максимум символов: {{ $v.review.author.$params.maxLength.max }}
                span(v-else-if="!$v.review.author.minLength") Минимум символов: {{ $v.review.author.$params.minLength.min }}
                span(v-else) Обязательно для заполнения

            .edit-review__group.edit-review__group_occupation
              label.edit-review__label Титул автора
              input.edit-review__input(
                v-model='review.occ'
              )
              div.edit-review__error.edit-review__error_occupation(v-if="editMode && $v.review.occ.$invalid")
                span(v-if="!$v.review.occ.maxLength") Максимум символов: {{ $v.review.occ.$params.maxLength.max }}
                span(v-else-if="!$v.review.occ.minLength") Минимум символов: {{ $v.review.occ.$params.minLength.min }}
                span(v-else) Обязательно для заполнения

          .edit-review__row.edit-review__row_textarea
            .edit-review__group.edit-review__group_review
              label.edit-review__label Отзыв
              textarea.edit-review__input.edit-review__input_textarea(type="textarea" rows=3 resize='none' 
                v-model='review.text'
              )
              div.edit-review__error.edit-review__error_review(v-if="editMode && $v.review.text.$invalid")
                span(v-if="!$v.review.text.maxLength") Максимум символов: {{ $v.review.text.$params.maxLength.max }}
                span(v-else-if="!$v.review.text.minLength") Минимум символов: {{ $v.review.text.$params.minLength.min }}
                span(v-else) Обязательно для заполнения

          .edit-review__row.edit-review__row_buttons    
            button.edit-review__cancel(
              @click='$emit("hideEditForm")'
            ) Отмена
            button.edit-review__submit(type='submit') Сохранить

</template>

<script>

    import requests from '../requests';
    const baseUrl = requests.defaults.baseURL;

    import { renderer } from '../helpers/picture'

    import { mapState, mapActions } from 'vuex';
    import { required, minLength, maxLength } from 'vuelidate/lib/validators';
    
    import vue2Dropzone from 'vue2-dropzone';
    import 'vue2-dropzone/dist/vue2Dropzone.min.css';

    export default {
      components: {
        vueDropzone: vue2Dropzone,
      },

      props: {
        editMode: String,
      },        
      
      data() {
        return {
          title: 'Новый отзыв',
          textLoadPhoto: 'Добавить фото',
          renderedPhoto: '',

          review: {
            photo: '',
            author: '',
            occ: '',
            text: '',  
          }, 

          dropzoneOptions: {
            url: 'https://httpbin.org/post',
            maxFilesize: 1.5,
            maxFiles: 1,
            chunking: false,
            addRemoveLinks: false,
          }
        }
      },

      computed: {
        ...mapState('reviews', {
          currentReview: state => state.currentReview
        }),
      },

      validations: {
        review: {
          author: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30),
          },
          occ: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(30),
          },
          text: {
            required,
            minLength: minLength(10),
            maxLength: maxLength(200),
          },
        },
        renderedPhoto: {
          required,
        },

      },

      watch: {
        currentReview() {
          if (this.editMode === 'edit') {             
            this.setChangedReview();              
          }
          else if (this.editMode === 'new') {
            this.clearReview();              
          }
        },
      },

      created() {
        if (this.editMode === 'edit') {
          this.setChangedReview();
        }
      },

      methods: {

        clearReview() {         
          this.review = {
            photo: '',
            author: '',
            occ: '',
            text: '',  
          };
          this.textLoadPhoto = 'Добавить фото';
          this.title = 'Новый отзыв';
          this.renderedPhoto = '';
        },
        setChangedReview() {         
          this.review = {...this.currentReview};
          this.renderedPhoto = `${baseUrl}/${this.review.photo}`;
          this.review.photo = '';
          this.textLoadPhoto = 'Изменить фото';
          this.title = 'Редактирование отзыва';
        },

        changeFileReviewImg(e) {
          this.review.photo = e.target.files[0];

          renderer(this.review.photo).then(pic => {
            this.renderedPhoto = pic;
          })
          this.textLoadPhoto = 'Изменить фото';
        },


        ...mapActions('reviews', ['addReview', 'changeReview']),

        handleReviewForm() {

          if (this.$v.$invalid) {
            console.log('INVALID FORM');                
            return;
          };

          const formData = new FormData();

          formData.append('photo', this.review.photo);
          formData.append('author', this.review.author);
          formData.append('occ', this.review.occ);
          formData.append('text', this.review.text);

          if (this.editMode==='new') {
            this.addNewReview(formData);
          }
          else if (this.editMode==='edit') {             
            this.editReview(formData, this.review.id);
          }

          this.$emit("hideEditForm");
        },


        async addNewReview(newReview) {
          try {
            await this.addReview(newReview);
          }
          catch (error) {
            alert('исправь потом меня, я ошибка из addNewReview: ' + error.message);
          }
          finally {
            // disable кнопке
          }
        },

        async editReview(renewReviewData, changedReviewId) {
          try {
            await this.changeReview({ renewReviewData, changedReviewId });
          }
          catch (error) {
            alert('исправь потом меня, я ошибка из editReview: ' + error.message);
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


  .edit-review {

    background-color: $white-color;
    box-shadow: 4px 3px 20px 0px rgba(0, 0, 0, 0.07);
    padding-bottom: 24px;

    &__title {
      margin: 11px;
      padding: 20px 11px 20px;
      color: $base-color;
      font-size: 18px;
      line-height: 34px;
      font-weight: 700;
      border-bottom: 1px solid rgba(#1f232d, 0.5);

      @include tablets {
        padding-top: 24px;
        padding-bottom: 24px;
      }
    }

    &__content {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &__image {
      width: 200px;
      margin-right: 30px;
      position: relative;

      @include tablets {
        width: 260px;
      }
      @include phones {
        margin-right: 0;
        width: unset;
        margin-bottom: 38px;
      }
    }

    &__image-load-label {
      display: flex;
      flex-direction: column-reverse;
      position: absolute;
      cursor: pointer;
      width: 200px;
      height: 255px;
      border-radius: 50% 50% 0 0;
      overflow: hidden;

      &:hover, &:active, &:focus {

        .edit-review__image-text {
          color: rgba($color-blue, 0.8);
        }
      }
    }

    &__image-place {
      width: 200px;
      height: 200px;
      background-color: #dee4ed;
      border-radius: 50%;
      margin-bottom: 21px;
      background-size: cover;

      @include tablets {
        width: 230px;
        height: 230px;
      }
    }

    #dropzone-review {
      width: 100%;
      height: 15.9375rem;
      opacity: 0;
      border-radius: 50%;
      }

    &__image-load {
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }

    &__image-text {
      color: $color-blue;
      font-size: 16px;
      line-height: 34px;
      font-weight: 600;
      display: block;
      width: 100%;
      text-align: center;
      text-decoration: none;
    }

    &__info {
      width: calc(100% - 200px - 30px);
      max-width: 610px;
      
      @include phones {
        width: 100%;
      }
    }

    &__form {
      padding: 30px;
      padding-top: 34px;
      display: flex;

      @include tablets {
        padding-top: 40px;
        padding-bottom: 10px;
      }
      @include phones {
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
      }
    }

    &__row {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 32px;

      @include tablets {
        flex-direction: column;
      }
      @include phones {
        margin-bottom: 22px;
      }

      &_textarea {
        margin-bottom: 32px;
      }

      &_buttons {
        justify-content: flex-end;
        text-align: right;
        margin-bottom: 0;

        @include tablets {
          flex-direction: row;
        }
        @include phones {
          justify-content: space-around;
        }
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
        margin-right: 0px;
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


    &__group {
      display: flex;
      flex-direction: column;
      width: calc( (100% - 30px) / 2);

      @include tablets {
        width: 70%;
      }
      @include phones {
        width: 100%;
      }

      &_name {

        @include tablets {
          margin-bottom: 40px;
        }
        @include phones {
          margin-bottom: 26px;
        }
      }
      &_review {
        width: 100%;
      }
    }

    &__label {
      display: block;
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      color: rgba(#base-color, 0.95);

      @include tablets {
        line-height: 32px;
      }
    }

    &__input {
      @include admin-input;
      padding-bottom: 10px;

      &[type='textarea'] {
        padding: 10px 20px 12px 20px;
        resize: none;
        border: 1px solid $color-light;
        line-height: 30px;
        margin-top: 16px;

        @include tablets {
          line-height: 36px;
          height: 170px;
        }
        @include phones {
          line-height: 29px;
          font-size: 16px;
          padding-right: 10px;
        }
      }

      @include tablets {
        padding-bottom: 15px;
      }
    }

    &__error {
      span {
        color: red;
        font-size: 12px;
      }
    }
  }

</style>