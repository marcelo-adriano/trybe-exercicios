// import Greeting from './Greeting';
// import Image from './Image';
import React from 'react';
import './App.css';
// import UserProfile from './UserProfile';
// import Order from './Order';
import Lista from './Lista';

class App extends React.Component {
  render() {
  // const joao = {
  //   id: 102,
  //   name: "João",
  //   email: "joao@gmail.com",
  //   avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
  // };

  // const amelia = {
  //   id: 77,
  //   name: "Amélia",
  //   email: "amelia@gmail.com",
  //   avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
  // };

  // const headphone = {
  //   id: 102,
  //   user: "cena@gmail.com",
  //   product: "Razer Headphone",
  //   price: {
  //     value: 99.99,
  //     currency: "dollars"
  //   }
  // };

  // const energyDrink = {
  //   id: 77,
  //   user: "cena@gmail.com",
  //   product: "Monster 500mL",
  //   price: {
  //     value: 9.99,
  //     currency: "dollars"
  //   }
  // };

  return (
    <div className="App">
      {/* <Greeting name='my' lastName='friend' /> */}
      {/* <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Foto de um gato filhote, em cima de uma pedra, olhando para cima. Ao fundo, há uma vegetação, provavelmente arvores, desfocada.' /> */}
        {/* <UserProfile user={joao} />
        <UserProfile user={amelia} /> */}
      {/* <h1> Orders recently created </h1>
      <Order order={headphone} />
      <Order order={energyDrink} /> */}
      <Lista />
    </div>
  );
}
}

export default App;
