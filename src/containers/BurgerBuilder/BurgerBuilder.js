import React from 'react';
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
  salad: 10,
  bacon: 25,
  cheese: 20,
  meat: 30,
};

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 0,
    purchaseable: false,
    isModalOpen: false,
  };

  addIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  updatePurchaseState = updatedIngredients => {
    const ingredients = {
      ...updatedIngredients,
    };

    const sum = Object.keys(ingredients)
      .map(ing => ingredients[ing])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchaseable: sum > 0 });
  };

  orderNowHandler = () => {
    this.setState({ isModalOpen: true });
  };

  orderCancelHandler = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const disabledButtons = {
      ...this.state.ingredients,
    };

    for (let key in disabledButtons) {
      disabledButtons[key] = disabledButtons[key] <= 0;
    }
    return (
      <Aux>
        <div className='columns'>
          <div className='column is-5'>
            <Burger ingredients={this.state.ingredients} />
          </div>
          <div className='column is-5'>
            <BuildControls
              ingredientsAdded={this.addIngredientsHandler}
              ingredientsRemoved={this.removeIngredientsHandler}
              disabled={disabledButtons}
              totalPrice={this.state.totalPrice}
              purchaseable={this.state.purchaseable}
              orderNow={this.orderNowHandler}
            />
          </div>
        </div>
        <Modal show={this.state.isModalOpen} orderCancel={this.orderCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} />
        </Modal>
      </Aux>
    );
  }
}

export default BurgerBuilder;
