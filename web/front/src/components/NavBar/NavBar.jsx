import "./Navbar.css";

import { Search, ShoppingCart, User } from "lucide-react";

function Navbar() {
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

        <button>

          Produtos

        </button>

        <button>

          <ShoppingCart size={20} />

          <span>0</span>

        </button>

        <button>

          <User size={20} />

          Login

        </button>

      </nav>

    </header>
  );
}

export default Navbar;