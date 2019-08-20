import React from 'react';
import Main from './pages/main';
import Header from './components/Header';
import './styles.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Rocketseat - Danilo Righetto</h1>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//     <div className="App">
//       <h1>Hello Rocketseat - Danilo Righetto - Component</h1>
//     </div>
//     );
//   }
// }

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
