import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import ListCategoryComponent from 'component/list-category-component'
import FormCategoryComponent from 'component/form-categry-component.jsx'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class FormCategoryContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            categories: []
        }

        this.handleInputOnChange = this.handleInputOnChange.bind(this)
    }

    componentDidMount () {
        fetch('http://localhost:8080/categories', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                console.log(responseObject)
                this.setState({ categories: responseObject })
            })
    }

    handleInputOnChange (event) {
        this.setState({
            formCategoryValues: {
                ...this.state.formCategoryValues,
                [event.target.name]: event.target.value

            }
        })
    }

    handleItemOnClick = (event) => {
        // Le <span> déclenche l'événement et se trouve à l'intérieur du <li> qui contient l'attribut id
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/categories/' + id, { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    categories: responseObject,
                    showForm: false
                })
            })
    }

    handleItemDeleteOnClick = (event) => {
        const id = event.target.parentElement.id

        fetch('http://localhost:8080/categories/' + id, { method: 'DELETE' })
            .then(response => response.json())
            .then(response => {
                this.setState({ categories: response })
            })
    }

    handleAddOnClick = () => {
        this.setState({
            formCategoryValues: {},
            showForm: true
        })
    }

    handleOnSaveClick = () => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        if (method === 'POST') {
            fetch('http://localhost:8080/categories', buildHeader(method, this.state.formCategoryValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        categories: responseObject,
                        showForm: false
                    })
                })
        }
        if (method === 'PUT') {
            fetch('http://localhost:8080/categories', buildHeader(method, this.state.formCategoryValues))
                .then(response => response.json())
                .then(responseObject => {
                    this.setState({
                        categories: responseObject,
                        showForm: false
                    })
                })
        }
    }

    handleOnCancelClick = () => {
        this.setState({ showForm: false })
    }

    renderForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Creer une nouvelle categorie</h1>
                <FormCategoryComponent action='/categories' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom de categorie:' type='text' name='name' value={this.state.formCategoryValues.name} />
                    <InputComponent onChange={this.handleInputOnChange} label='Description:' type='text' name='description' value={this.state.formCategoryValues.description} />
                </FormCategoryComponent>
            </div>

        )
    }

    renderList () {
        return (
            <div>
                {this.state.categories.length > 1 ? <h1 style={{ textAlign: 'center' }}>Categories</h1> : <h1 style={{ textAlign: 'center' }}>Details d'une categorie</h1>}
                <ListCategoryComponent
                    categories={this.state.categories}
                    onItemClick={this.handleItemOnClick}
                    onItemDeleteClick={this.handleItemDeleteOnClick}
                    onAddClick={this.handleAddOnClick}
                />
            </div>
        )
    }

    render () {
        return (
            <div>
                <nav class='categoryNav'>
                    <a href='#' onClick={this.handleOnCancelClick}>lister categorie</a>
                    <a href='#' onClick={this.handleAddOnClick}>Ajouter categorie</a>
                </nav>
                <div>
                    {this.state.showForm ? this.renderForm() : this.renderList()}
                </div>
            </div>

        )
    }
}

export default FormCategoryContainer
