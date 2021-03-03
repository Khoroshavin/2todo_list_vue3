Vue.createApp({
  data() {
    return {
      title_app: 'Todo list',
      placeholderTask: 'Enter name of task',
      inputValue: '',
      notes: ['note 1', 'note 2'],

    };
  },

  methods: {
    // inputChangeHandler() {
    //   this.inputValue = event.target.value
    // },
    addNewNote() {
      if (this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    // inputKeyPress (event){
    //   if (event.key === 'Enter') {
    //     this.addNewNote()
    //   }
    // },
    removeNote(idx) {
      this.notes.splice(idx, 1)
    }

  },

  computed: {
    doubleCount() {
      return this.notes.length *2;
      console.log('doubleCount')
    }
  },

  watch: {
    inputValue(value) {
      console.log('changr', value)
    }
  },

}
).mount('#app');