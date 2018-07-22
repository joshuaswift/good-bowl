import React, { Component } from "react";
import RecipeItem from "./RecipeItem";

import "../styles/default.css";

class RecipeList extends Component {
  render() {
    const {
      searchText,
      recipeData,
      isVegetarianOnly,
      isVeganOnly,
      isUnderTenIngredients
    } = this.props;

    const recipes = [];

    recipeData.hits.forEach(item => {
      if (item.recipe.label.toLowerCase().indexOf(searchText) === -1) {
        return;
      } else if (
        isVegetarianOnly &&
        !item.recipe.healthLabels.includes("Vegetarian")
      ) {
        return;
      } else if (isVeganOnly && !item.recipe.healthLabels.includes("Vegan")) {
        return;
      } else if (
        isUnderTenIngredients &&
        item.recipe.ingredientLines.length > 10
      ) {
        return;
      } else {
        const name = item.recipe.label.replace(/(recipes)+/g, "");
        recipes.push(
          <RecipeItem
            key={item.recipe.uri}
            name={name}
            image={item.recipe.image}
            ingredients={item.recipe.ingredientLines.length}
            calories={Math.round(item.recipe.calories / item.recipe.yield)}
            recipeUrl={item.recipe.url}
            ingredientLines={item.recipe.ingredientLines}
            servings={item.recipe.yield}
            healthLabels={item.recipe.healthLabels}
            totalNutrients={item.recipe.totalNutrients}
            dailyTotal={item.recipe.totalDaily}
          />
        );
      }
    });

    return <div id="flex-grid">{recipes}</div>;
  }
}

export default RecipeList;
