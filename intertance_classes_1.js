class Order {
    constructor(orderId) {
      this.orderId = orderId;
    }
  
    printOrderId() {
      console.log(`Order ID: ${this.orderId}`);
    }
  }
  
  class Product extends Order {
    constructor(orderId, productName) {
      super(orderId); // Call the parent class's constructor
      this.productName = productName;
    }
  
    printProductName() {
      console.log(`Product Name: ${this.productName}`);
    }
  }
  
  var d = new Product("12345", "Mobile Phone");
  d.printOrderId(); // Output: Order ID: 12345
  d.printProductName(); // Output: Product Name: Mobile Phone
  