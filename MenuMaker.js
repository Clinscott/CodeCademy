const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[]
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(appetizerIn){
      this._courses.appetizers = appetizerIn;
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(mainsIn){
      this._courses.mains = mainsIn;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set desserts(dessertsIn){
      this._courses.desserts = dessertsIn
    },
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
        const dish = {
          name: dishName,
          price: dishPrice
        };
        if(typeof dish.name == 'string' && typeof dish.price == 'number'){
          return this._courses[courseName].push(dish);
        }else{
          return `Must be a valid Name and number dipshit.`
        }
      },
      getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
      },
      generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and your price is ${totalPrice}`;
      }
  };
  menu.addDishToCourse('appetizers', 'Caesar Salad', 5);
  menu.addDishToCourse('appetizers', 'House Salad', 4);
  menu.addDishToCourse('appetizers', 'Cheese Sticks', 5);
  menu.addDishToCourse('mains', 'Steak', 22);
  menu.addDishToCourse('mains', 'House Soup', 15);
  menu.addDishToCourse('mains', 'Gezpacho', 16);
  menu.addDishToCourse('desserts', 'Ice Cream', 6);
  menu.addDishToCourse('desserts', 'Boobs', 8);
  menu.addDishToCourse('desserts', 'Cake', 7);
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  