import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import ListComponent from 'component/list-component'
import PublicRecipeComponent from 'component/public-recipe-component'
import FormComponent from 'component/form-component'
import SelectComponent from 'component/select-component'
import SelectRecipeComponent from 'component/select-recipe-component'
import AddIngredientFormComponent from 'component/add-ingredient-form-component.jsx'
import AddStepFormComponent from 'component/add-step-form-component.jsx'
import TextAreaComponent from 'component/text-area-component.jsx'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class PublicFormRecipeContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            ingredientFormValues: {},
            // Indique si le formulaire doit être affiché
            showForm: 0,
            // Collection d'objet affiché liste
            recipes: [],
            ingredients: [],
            steps: [],
            recipeId: 0
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/recipes', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ recipes: responseObject })
            })
    }

    handleInputOnChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value

            }
        }
            // image: event.target.files
        )
        // console.log(event.target.files[0].name)
    }

    // la liste des ingredients par recette
    handleItemOnClick = (event) => {
        const id = event.target.parentElement.id
        console.log('id clique ' + id)
        fetch('http://localhost:8080/recipes/' + id + '/joins/', { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({
                    ingredients: response,
                    recipeId: id,
                    showForm: 3,
                    formValues: {
                        ...this.state.formValues,
                        recipe_id: id
                    }
                })
                if (response.length < 2) {
                    fetch('http://localhost:8080/ingredients', { method: 'GET' })
                        .then(response => response.json())
                        .then(responseObject => {
                            this.setState({ ingredients: responseObject })
                        })
                    this.setState({ showForm: 2 })
                }
            })
    }

    handleItemDeleteOnClick = (event) => {
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/recipes/' + id, { method: 'DELETE' })
            .then(response => response.json())
            .then(response => {
                this.setState({ recipes: response })
                console.log('Response recipes ' + JSON.stringify(response))
            })
        this.setState({
            formValues: {
                ...this.state.formValues,
                ingredient_id: event.target.value,
                recipe_id: event.target.value
            }
        })
    }

    handleAddOnClick = () => {
        this.setState({
            formValues: {},
            showForm: 1
        })
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        recipes: responseObject
                    })
                })

            this.setState({
                showForm: 0
            })
        }
        if (method === 'PUT') {
            fetch('http://localhost:8080/recipes', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        recipes: responseObject,
                        showForm: 0
                    })
                })
        }
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: 0 })
    }

    handleAddIngredient = (event) => {
        fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                console.log(responseObject)
                this.setState({ ingredients: responseObject })
            })
        this.setState({
            recipeId: event.target.id,
            showForm: 2
        })
    }

    handleIngredientSelectOnChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                ingredient_id: event.target.value,
                recipe_id: this.state.recipeId
            }
        })
        console.log('ingredient id : ' + event.target.value)
        console.log('recipe id : ' + this.state.recipeId)
    }

    handleAddStepOnClick = () => {
        fetch('http://localhost:8080/recipes', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ recipes: responseObject })
            })
        this.setState({
            showForm: 4

        })
    }

    handleRecipesSelectOnChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                ingredient_id: event.target.value,
                recipe_id: event.target.value
            }
        })
        console.log('recipe change ' + event.target.value)
    }

    // ajouter un ingredient dans une recette
    handleOnAddClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/joins/', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        ingredients: responseObject
                    })
                })
        }

        this.setState({
            showForm: 0
        })
    }

    handleOnSaveStepClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/steps', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        steps: responseObject,
                        showForm: 4
                    })
                })
        }
        if (method === 'PUT') {
            fetch('http://localhost:8080/joins', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        steps: responseObject
                    })
                })
        }
    }

    handleOnSaveFavoriteClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/favorites', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        steps: responseObject,
                        showForm: 4
                    })
                })
        }

        console.log('Favorite')
    }

    handleOnSaveGroceryClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/groceries', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        steps: responseObject,
                        showForm: 4
                    })
                })
        }

        console.log('Grocery')
    }

    renderForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Creer une nouvelle recette</h1>
                <FormComponent action='/recipes' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom de recette:' type='text' name='proposed_title' value={this.state.formValues.proposed_title} />
                    <InputComponent onChange={this.handleInputOnChange} label='Description:' type='text' name='proposed_description' value={this.state.formValues.proposed_description} />
                    <InputComponent onChange={this.handleInputOnChange} label='Temps  de preparation:' type='number' name='preparation_time' value={this.state.formValues.preparation_time} />
                    <InputComponent onChange={this.handleInputOnChange} label='Temps de cuisson:' type='number' name='cooking_time' value={this.state.formValues.cooking_time} />
                    <InputComponent onChange={this.handleInputOnChange} min='1' max='20' label='Portions:' type='number' name='portions' value={this.state.formValues.portions} />
                    <InputComponent onChange={this.handleInputOnChange} label='Url image' type='text' name='image' value={this.state.formValues.image} />
                </FormComponent>
            </div>

        )
    }

    renderIngredientForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Ajouter Ingredient</h1>
                <AddIngredientFormComponent action='/joins' onAddClick={this.handleOnAddClick} onCancelClick={this.handleOnCancelClick}>
                    <SelectComponent name='id' label='Ingredient' options={this.state.ingredients} onChange={this.handleIngredientSelectOnChange} />
                    <InputComponent onChange={this.handleInputOnChange} min='1' max='20' step='1' label='Quantite:' type='number' name='quantity' value={this.state.formValues.quantity} />
                </AddIngredientFormComponent>
            </div>

        )
    }

    renderStepForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Creer etapes de preparation</h1>
                <AddStepFormComponent action='/steps' onSaveClick={this.handleOnSaveStepClick} onAddClick={this.handleAddStepOnClick} onCancelClick={this.handleOnCancelClick}>
                    <SelectRecipeComponent name='id' label='Recette' options={this.state.recipes} onChange={this.handleRecipesSelectOnChange} />
                    <InputComponent onChange={this.handleInputOnChange} min='1' max='20' step='1' label="Numero d'etape:" type='number' name='step_no' value={this.state.formValues.step_no} />
                    <TextAreaComponent onChange={this.handleInputOnChange} label='Description:' name='description' value={this.state.formValues.description} />
                </AddStepFormComponent>
            </div>

        )
    }

    renderFavoriteForm () {
        return (
            <div>
                <FormComponent action='/favorites'>
                    <InputComponent min='1' max='20' step='1' label='Recipe id:' type='number' name='recipe_id' value={this.state.formValues.recipeId} />
                </FormComponent>
            </div>

        )
    }

    renderGroceryForm () {
        return (
            <div>
                <FormComponent action='/groceries'>
                    <InputComponent min='1' max='20' step='1' label='Recipe id:' type='number' name='recipe_id' value={this.state.formValues.recipeId} />
                </FormComponent>
            </div>

        )
    }

    renderRecipes () {
        return (
            <div>

                <h1 style={{ textAlign: 'center' }}>Recettes</h1>
                <ListComponent
                    recipes={this.state.recipes}
                    onItemClick={this.handleItemOnClick}
                    onItemDeleteClick={this.handleItemDeleteOnClick}
                    onAddClick={this.handleAddOnClick}
                    onAddIngredientClick={this.handleAddIngredient}
                />
            </div>
        )
    }

    renderRecipe () {
        return (
            <div>

                <PublicRecipeComponent
                    ingredients={this.state.ingredients}
                    onAddIngredientClick={this.handleAddIngredient}
                    onSaveClickFavorite={this.handleOnSaveFavoriteClick}
                    onSaveClickGrocery={this.handleOnSaveGroceryClick}
                />
            </div>
        )
    }

    renderComponent () {
        switch (this.state.showForm) {
        case 0 :return this.renderRecipes()
        case 1 : return this.renderForm()
        case 2:return this.renderIngredientForm()
        case 3:return this.renderRecipe()
        case 4:return this.renderStepForm()
        }
    }

    render () {
        return (
            <div>

                <div>
                    {this.renderComponent()}
                    {console.log('TEST' + this.state.recipeId)}
                </div>
            </div>

        )
    }
}

export default PublicFormRecipeContainer
