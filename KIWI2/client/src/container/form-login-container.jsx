/* import React, { Component } from 'react'

import InputComponent from 'component/input-component'
import FormLoginComponent from '../component/form-login-component'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class FormLoginContainer extends Component {
    constructor (props) {
        super(props)

        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            ingredients: []
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
                        ingredients: responseObject,
                        showForm: false
                    })
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

    renderForm () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <FormLoginComponent action='/users' onSaveClick={this.handleOnSaveClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom:' type='text' name='name' value={this.state.formValues.name} />
                    <InputComponent onChange={this.handleInputOnChange} label='Role:' type='text' name='role' value={this.state.formValues.role} />

                    <InputComponent onChange={this.handleInputOnChange} label='Password:' type='text' name='password' value={this.state.formValues.password} />
                </FormLoginComponent>
            </div>

        )
    }

    render () {
        return (
            <div />

        )
    }
}

export default FormLoginContainer */
