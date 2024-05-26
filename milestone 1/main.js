const app = Vue.createApp({
  data() {
    return {
      contatti: [
        { nome: 'Marco', immagine: 'img/avatar_1.jpg' },
        { nome: 'Mirko', immagine: 'img/avatar_2.jpg' },
        { nome: 'Giovanni', immagine: 'img/avatar_3.jpg' },
        { nome: 'Giacomo', immagine: 'img/avatar_4.jpg' },
        { nome: 'Michele', immagine: 'img/avatar_5.jpg' },
        { nome: 'Laura', immagine: 'img/avatar_6.jpg' },
        { nome: 'Alberto', immagine: 'img/avatar_7.jpg' },
      ]
    };
  }
});

app.mount('#app');

app.config.globalProperties.created = function() {
  console.log(this.contatti);
};