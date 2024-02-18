const app=Vue.createApp({
    data(){
        return{
            books:[
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/1.jpg",
                    isFav:false
        
                },
                {
                    name:"Naing Win Ko",
                    age:22,
                    img:"imgs/2.jpg",
                    isFav:false
        
                },
                {
                    name:"Eaint Thinzar Kyaw",
                    age:23,
                    img:"imgs/3.jpg",
                    isFav:false
        
                },  {
                    name:"Thae ",
                    age:22,
                    img:"imgs/2.jpg",
                    isFav:false
        
                },{
                    name:"Eaint Thinzar Kyaw",
                    age:23,
                    img:"imgs/4.jpg",
                    isFav:false
        
                }, 
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/6.jpg",
                    isFav:false
        
                },
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/1.jpg",
                    isFav:false
        
                },
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/4.jpg",
                    isFav:false
        
                },
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/5.jpg",
                    isFav:false
        
                },
                {
                    name:"wyine may zin",
                    age:23,
                    img:"imgs/6.jpg",
                    isFav:false
        
                },
              ],
              showBook:false,
               link:"https://www.google.com"
        }
    },
    methods:{
                clickHandler(book){
                       book.isFav=!book.isFav
                }
    },
    computed:{
        filteredBooks(){
            return this.books.filter(book=>
                {
                    return book.isFav;
                })
        }
    }
})
app.mount('#app');