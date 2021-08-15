import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
