const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${Object.values(order.address)}`);
};

customerInfo(order);

let itensPedido = '';
let valorDoPedido = 0;

const orderModifier = (order) => {
    if (order.order.pizza.marguerita.amount > 0) {
        itensPedido += 'marguerita,';
        valorDoPedido += order.order.pizza.marguerita.amount * order.order.pizza.marguerita.price;
    }
    if (order.order.pizza.pepperoni.amount > 0) {
        itensPedido += ' pepperoni';
        valorDoPedido += order.order.pizza.pepperoni.amount * order.order.pizza.pepperoni.price;
    }
    if (order.order.drinks.coke.amount > 0) {
        itensPedido += ' e Coca-Cola Zero';
        valorDoPedido += order.order.drinks.coke.amount * order.order.drinks.coke.price;
    }
    
  console.log(`Olá ${order.name}, o total do seu pedido de ${itensPedido} é R$ ${valorDoPedido},00.`);
};

orderModifier(order);
