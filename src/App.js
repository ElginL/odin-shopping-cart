import Home from './pages/Home';

const App = ({ cartProducts, setCartProducts }) => {
    return (
        <Home
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
        />
    );
}

export default App;
