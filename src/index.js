import React from "react";
import { render } from "react-dom";
import RecipeListContainer from "./components/RecipeListContainer";

import "./styles/default.css";

const App = () => <RecipeListContainer />;
render(<App />, document.getElementById("root"));
