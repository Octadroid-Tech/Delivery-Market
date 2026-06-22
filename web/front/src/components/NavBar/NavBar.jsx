import {useState} from "react";
import "./Navbar.css";
import { Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
  const [active, setActive] = useState("products");
  return (
    <header className="navbar">

      <div className="navbar-logo">

        <div className="logo">

          MP

        </div>

        <h2>Mercado Pronto</h2>

      </div>

      <div className="navbar-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Pesquisar produtos..."
        />

      </div>

      <nav className="navbar-menu">

        <button
          className={`btn ${active === "products" ? "active" : ""}`}
          onClick={() => setActive("products")}
        >

          Produtos

        </button>

        <button
          className={`btn ${active === "orders" ? "active" : ""}`}
          onClick={() => setActive("orders")}
        >

          <ShoppingCart size={20} />

          <span>0</span>

        </button>

        <button
          className={`btn ${active === "account" ? "active" : ""}`}
          onClick={() => setActive("account")}
        >

          <User size={20} />

          Login

        </button>

      </nav>

    </header>
  );
}

export default Navbar;