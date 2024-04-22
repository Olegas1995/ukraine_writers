const myObject = {
  name: 'John',
  age: 30,
  city: 'New York',

  getInfo: function() {
      let info = '';
      for (let key in this) {
          if (typeof this[key] !== 'function') { 
              info += `${key}: ${this[key]}\n`;
          }
      }
      console.log(info);
  }
};


myObject.getInfo();


myObject.newProperty = 'Новая особенность';


myObject.getInfo();
