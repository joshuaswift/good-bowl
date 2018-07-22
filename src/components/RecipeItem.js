import React, { Component } from "react";
import RecipeImage from "./RecipeImage";
import RecipeSummary from "./RecipeSummary";
import Nutrition from "./Nutrition";

import "../styles/default.css";

class RecipeItem extends Component {
  render() {
    return (
      <div id="col">
        <h3 id={"recipeListHeading"}>{this.props.name}</h3>
        <div id="overlayContainer">
          <RecipeImage {...this.props} />
          <Nutrition
            totalNutrients={this.props.totalNutrients}
            servings={this.props.servings}
            recipeUrl={this.props.recipeUrl}
          />
        </div>
        <RecipeSummary
          ingredients={this.props.ingredients}
          calories={this.props.calories}
        />
      </div>
    );
  }
}

export default RecipeItem;
