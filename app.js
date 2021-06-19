const app = Vue.createApp({
  data() {
    return {
      values: [],
      title: "",
      describtion: "",
      active: false
    };
  },
  methods: {
    inputTitle(event) {
      this.title = event.target.value;
    },
    inputDescription(event) {
      this.describtion = event.target.value;
    },
    addValue(event) {
      event.preventDefault();
      this.values.push({
        title: this.title || "no title",
        describtion: this.describtion || "no description",
        active: this.active
      });
    },
    deleteValue(index){
        this.values.splice(index, 1);
    },
    changeActive(value,event){
        if(event.target.checked){
            value.active=true
        }
        else if(!event.target.checked){
            value.active=false
        }
        
    }
  },
  computed: {},
  watch: {
      values(newValue,oldValue){
      }
  },
}).mount("#sheryTodo");
