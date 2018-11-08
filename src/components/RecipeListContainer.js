import React, { Component } from "react";

import "../styles/default.css";

import Header from "./Header.js";
import RecipeList from "./RecipeList.js";
import RecipeFilter from "./RecipeFilter.js";

const data = require("../../mock-data.json");

class RecipeListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeData: data,
      searchText: "",
      isVegetarianOnly: false,
      isVeganOnly: false,
      isUnderTenIngredients: false
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleVegetarianChange = this.handleVegetarianChange.bind(this);
    this.handleVeganChange = this.handleVeganChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleSearchTextChange(searchText) {
    this.setState({
      searchText: searchText
    });
  }

  handleVegetarianChange(isVegetarianOnly) {
    this.setState({
      isVegetarianOnly: isVegetarianOnly
    });
  }

  handleVeganChange(isVeganOnly) {
    this.setState({
      isVeganOnly: isVeganOnly
    });
  }

  handleIngredientsChange(isUnderTenIngredients) {
    this.setState({
      isUnderTenIngredients: isUnderTenIngredients
    });
  }

  getJSON() {
    fetch(
      "https://api.edamam.com/search?q=buddha+bowl&from=0&to=50&app_id=fdea9892&app_key=ce636c3e46768b2f33b75c59b25d6a2b",

      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(
        result => {
          console.log("JSON RETURNED");
          this.setState({
            recipeData: result
          });
        },
        //Handle errors
        error => {
          this.setState({
            error
          });
        }
      );
  }

 

  render() {
    let recipeData = this.state.recipeData;

    return (
      <div>
        <Header name="GoodBowl" />
        <RecipeFilter
          searchText={this.state.searchText}
          isVegetarianOnly={this.state.isVegetarianOnly}
          isVeganOnly={this.state.isVeganOnly}
          isUnderTenIngredients={this.state.isUnderTenIngredients}
          onSearchTextChange={this.handleSearchTextChange}
          onVegetarianChange={this.handleVegetarianChange}
          onVeganChange={this.handleVeganChange}
          onIngredientsChange={this.handleIngredientsChange}
        />
        <RecipeList
          recipeData={this.state.recipeData}
          searchText={this.state.searchText}
          isVegetarianOnly={this.state.isVegetarianOnly}
          isVeganOnly={this.state.isVeganOnly}
          isUnderTenIngredients={this.state.isUnderTenIngredients}
          onListChange={this.handleListChange}
        />
      </div>
    );
  }
}

export default RecipeListContainer;
