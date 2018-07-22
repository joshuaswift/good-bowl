import React, { Component } from "react";

class RecipeFilter extends Component {
  constructor(props) {
    super(props);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleVegetarianChange = this.handleVegetarianChange.bind(this);
    this.handleVeganChange = this.handleVeganChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  handleVegetarianChange(e) {
    this.props.onVegetarianChange(e.target.checked);
  }

  handleVeganChange(e) {
    this.props.onVeganChange(e.target.checked);
  }

  handleIngredientsChange(e) {
    this.props.onIngredientsChange(e.target.checked);
  }

  render() {
    const searchText = this.props.searchText;
    const isVegetarianOnly = this.props.isVegetarianOnly;
    const isVeganOnly = this.props.isVeganOnly;
    const isUnderTenIngredients = this.props.isUnderTenIngredients;
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search..."
            id="search"
            value={searchText}
            onChange={this.handleSearchTextChange}
          />
          <br />
          <input
            type="checkbox"
            id="vegetarianFilter"
            name="vegetarian"
            checked={isVegetarianOnly}
            onChange={this.handleVegetarianChange}
          />
          <label htmlFor="vegetarian">Vegetarian</label>
          <input
            type="checkbox"
            id="veganFilter"
            name="vegan"
            checked={isVeganOnly}
            onChange={this.handleVeganChange}
          />
          <label htmlFor="vegan">Vegan</label>
          <input
            type="checkbox"
            id="ingredientsFilter"
            name="ingredients"
            checked={isUnderTenIngredients}
            onChange={this.handleIngredientsChange}
          />
          <label htmlFor="ingredients">Under 10 Ingredients</label>
        </form>
      </div>
    );
  }
}

export default RecipeFilter;
