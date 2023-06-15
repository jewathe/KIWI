import React, { Component } from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import InputComponent from 'component/input-component'
// import ListComponent from 'component/list-component'
import PublicFormRecipeContainer from 'container/public-form-recipe-container'
// import FormCategoryContainer from 'container/form-category-container'
import Login from '../component/Login'
// import FormIngredientContainer from 'container/form-ingredient-container'

import Carouseeel from '../component/Carouseeel'
// import ListEpicerie from '../component/ListEpicerie'
// import RecipeListComponent from '../component/recipe-list-component'
import FavoriComponent from 'component/favori-component'
// import GroceryListComponent from 'component/grocery-list-component'
import FormSigupComponent from 'component/form-sigup-component.jsx'
import PrivateHome from 'container/private-home.jsx'
import '../css/style.css'
// import Footer from '../component/Footer'
// import Newsletter from '../component/Newsletter'

function buildHeader (method, body) {
    return {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // Les champs du formulaire
            formValues: {},
            // Indique si le formulaire doit être affiché
            showForm: false,
            // Collection d'objet affiché liste
            recipes: [],
            ingredients: [],
            myrecipes: [],
            myGroceries: [],
            choix: '',
            user: [],
            isHidden: false,
            isMenuHidden: false,
            userName: ''
        }
    }

    componentDidMount () {
        fetch('http://localhost:8080/favorites', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({
                    recipes: responseObject,
                    choix: '',
                    isMenuHidden: false,
                    userName: '',
                    user: []
                })
            })
    }

    handleOnClick = (event) => {
        this.setState({ choix: event.target.id })
        console.log(event.target.id)
    }

    handleOnRecipeMenuClick = (event) => {
        this.setState({ choix: event.target.id })
        fetch('http://localhost:8080/groceries', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ myrecipes: responseObject })
            })
    }

    handleOnGroceryMenuClick = (event) => {
        this.setState({ choix: event.target.id })
        fetch('http://localhost:8080/groceries-details', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ myGroceries: responseObject })
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
        console.log(event.target.value)
    }

    handleOnSaveAccountClick = (event) => {
        const method = this.state.formValues.id ? 'PUT' : 'POST'
        this.setState({ choix: event.target.id })
        if (method === 'POST') {
            fetch('http://localhost:8080/users', buildHeader(method, this.state.formValues))
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
    }

    handleOnConnectClick = () => {
        fetch('http://localhost:8080/users/' + this.state.formValues.email, { method: 'GET' })
            .then(response => response.json())
            .then(response => {
                this.setState({ user: response.rows })
                console.log('password genere : ' + response)
                console.log('password genere : ' + response.rows[0].password)
                if (response.rows[0].password === this.state.formValues.password) {
                    console.log('password correct')
                    this.setState({
                        choix: 'private',
                        isMenuHidden: true,
                        userName: response.rows[0].name
                    })
                }
            })
    }

    renderSigUp () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Créer  compte</h1>
                <FormSigupComponent action='/users' onSaveClick={this.handleOnSaveAccountClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Nom :' type='text' name='name' value={this.state.formValues.name} />
                    <InputComponent onChange={this.handleInputOnChange} label='Email:' type='email' name='email' value={this.state.formValues.email} />
                    <InputComponent onChange={this.handleInputOnChange} label='Mot de passe:' type='password' name='password' value={this.state.formValues.password} />
                </FormSigupComponent>
            </div>
        )
    }

    renderLogin () {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>Connecter</h1>
                <Login action='/users' onClick={this.handleOnClick} onConnectClick={this.handleOnConnectClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Email:' type='email' name='email' value={this.state.formValues.email} />
                    <InputComponent onChange={this.handleInputOnChange} label='Mot de passe:' type='password' name='password' value={this.state.formValues.password} />
                </Login>

            </div>

        )
    }

    renderComponent () {
        switch (this.state.choix) {
        case 'recette':
            return <PublicFormRecipeContainer />
        case 'login':
            return this.renderLogin()
        case 'signup':
            return this.renderSigUp()
        case 'private':
            return <PrivateHome />
        case 'accueil' :
            return (
                <div>
                    <Carouseeel />
                    <FavoriComponent
                        recipes={this.state.recipes}
                    />
                </div>
            )
        default :
            return (
                <div>
                    <Carouseeel />
                    <FavoriComponent
                        recipes={this.state.recipes}
                    />

                </div>
            )
        }
    }

    render () {
        return (
            <div>
                <header>
                    <nav class='homeNav'>
                        {this.state.isMenuHidden
                            ? <h5>{}</h5>
                            : <ul><li><a id='accueil' onClick={this.handleOnClick}>Accueil</a></li><li><a id='recette' onClick={this.handleOnClick}>Recettes</a></li><li><a id='login' onClick={this.handleOnClick}>Login</a></li></ul>}
                    </nav>

                </header>

                <body>
                    {this.renderComponent()}
                    {console.log('Menu cache : ' + this.state.isMenuHidden)}

                </body>

                {/* <footer style={{ height: '40px', border: 'solid 2px blue', backgroundColor: 'red' }} /> */}

            </div>
        )
    }
}

export default Home
