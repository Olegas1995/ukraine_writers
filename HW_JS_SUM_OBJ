var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "Розбити скло": "200 грн",
  
    price: function() {
      let totalPrice = 0;
      for (let service in this) {
        if (typeof this[service] === 'string' && this[service].includes('грн')) {
          totalPrice += parseFloat(this[service]);
        }
      }
      return totalPrice;
    },
  
    minPrice: function() {
      let minPrice = Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && this[service].includes('грн')) {
          minPrice = Math.min(minPrice, parseFloat(this[service]));
        }
      }
      return minPrice;
    },
  
    maxPrice: function() {
      let maxPrice = -Infinity;
      for (let service in this) {
        if (typeof this[service] === 'string' && this[service].includes('грн')) {
          maxPrice = Math.max(maxPrice, parseFloat(this[service]));
        }
      }
      return maxPrice;
    }
  };
  
 
  console.log("Загальна вартість послуг: " + services.price() + " грн");
  console.log("Мінімальна вартість послуг: " + services.minPrice() + " грн");
  console.log("Максимальна вартість послуг: " + services.maxPrice() + " грн");
  
