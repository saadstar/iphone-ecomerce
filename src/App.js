import './App.css';
import { Header } from './component/Header';
import { Home } from './component/Home';
import { Products } from './component/Products';
import { Contact } from './component/Contact';
import { About } from './component/About';
import {ProductDetails} from "./component/ProductDetails"
import { Footer } from './component/Footer';
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUp } from './component/SignUp';
import { CartDisplay } from './component/cartDisplay';
import { LogIn } from './component/Login';
import { AuthContextProvider } from './Context/AuthContext';
function App() {
  return (
    <div className="App">
      <Header />
      <AuthContextProvider>
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:id" component={ProductDetails}></Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart" component={CartDisplay}></Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Redirect path="/" />
        </Switch>
      </AuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
