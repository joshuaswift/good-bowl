import React, { Component } from "react";

export default class RecipeImage extends Component {
  render() {
    return (
      <a href={this.props.recipeUrl} target="_blank">
        <img alt="recipe" src={this.props.image} id={"recipeImg"} />
      </a>
    );
  }
}
