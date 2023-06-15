import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import SelectComponent from 'component/select-component'
import FormIngredientComponent from '../component/form-ingredient-component'
import ListIngredientComponent from '../component/list-ingredient-component'
import '../css/style.css'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class FormIngredientContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            ingredients: [],
            categories: []
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/ingredients', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                console.log(responseObject)
                this.setState({ ingredients: responseObject })
            })
    }

    handleInputOnChange (event) {
        this.setState({
            formValues: {
                ...this.state.formValues,
                [event.target.name]: event.target.value

            }
        })
    }

    handleItemOnClick = (event) => {
        // Le <span> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/ingredients/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    ingredients: responseObject,
                    showForm: false
                })
            })
    }

    handleAddOnClick = () => {
        fetch('http://localhost:8080/categories', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    categories: responseObject
                })
            })
        this.setState({
            formValues: {},
            showForm: true
        })
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/ingredients', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        ingredients: responseObject
                    })
                })
            this.setState({
                showForm: false
            })
        }
        if (method === 'PUT') {
            fetch('http://localhost:8080/ingredients', buildHeader(method, this.state.formValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        ingredients: responseObject,
                        showForm: false
                    })
                })
        }
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    handleCategoriesSelectOnChange = (event) => {
        this.setState({
            formValues: {
                ...this.state.formValues,
                category_id: event.target.value
            }
        })
        console.log('recipe change ' + event.target.value)
    }

    renderForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Ingredient</h1>
                <FormIngredientComponent action='/ingredients' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom:' type='text' name='name' value={this.state.formValues.name} />
                    <SelectComponent onChange={this.handleCategoriesSelectOnChange} label='Categorie:' name='category_id' options={this.state.categories} />
                    <InputComponent onChange={this.handleInputOnChange} label='Image:' type='text' name='image' value={this.state.formValues.image} />
                </FormIngredientComponent>
            </div>

        )
    }

    renderList () {
        return (
            <div>
                {this.state.ingredients.length > 1 ? <h1 style={{ textAlign: 'center' }}>Ingredients</h1> : <h1 style={{ textAlign: 'center' }}>Ingredients</h1>}
                <ListIngredientComponent
                    ingredients={this.state.ingredients}
                    onItemClick={this.handleItemOnClick}
                    onAddClick={this.handleAddOnClick}
                />
            </div>
        )
    }

    render () {
        return (
            <div>
                <nav class='ingredientNav'>
                    <a href='#' onClick={this.handleOnCancelClick}>Liste d'ingredients</a>
                    <a href='#' onClick={this.handleAddOnClick}>Ajouter un ingredient</a>
                </nav>
                <div>
                    {this.state.showForm ? this.renderForm() : this.renderList()}
                </div>
            </div>

        )
    }
}

export default FormIngredientContainer
