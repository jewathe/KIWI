import React, { Component } from 'react'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
import InputComponent from 'component/input-component'
// import ListComponent from 'component/list-component'
import FormRecipeContainer from 'container/form-recipe-container'
import FormCategoryContainer from 'container/form-category-container'
import Login from '../component/Login'
import FormIngredientContainer from 'container/form-ingredient-container'
// import SearchbarComponent from '../component/searchbar-component'
import Carouseeel from '../component/Carouseeel'
// import ListEpicerie from '../component/ListEpicerie'
import RecipeListComponent from '../component/recipe-list-component'
import FavoriComponent from 'component/favori-component'
import GroceryListComponent from 'component/grocery-list-component'
import FormSigupComponent from 'component/form-sigup-component.jsx'
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
            choix: ''
        }
    }

    componentDidMount () {
        fetch('http://localhost:8080/favorites', { method: 'GET' })
            .then(response => response.json())
            .then(responseObject => {
                this.setState({ recipes: responseObject })
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
        // console.log(event.target.files[0].name)
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
                <Login action='/users' onClick={this.handleOnClick} onCancelClick={this.handleOnCancelClick}>
                    <InputComponent onChange={this.handleInputOnChange} label='Email:' type='email' name='email' value={this.state.formValues.email} />
                    <InputComponent onChange={this.handleInputOnChange} label='Mot de passe:' type='password' name='password' value={this.state.formValues.password} />
                </Login>
            </div>
        )
    }

    renderComponent () {
        switch (this.state.choix) {
        case 'recette':return <FormRecipeContainer />
        case 'ingredient': return <FormIngredientContainer />
        case 'category':return <FormCategoryContainer />
        case 'login':return this.renderLogin()
        case 'signup':return this.renderSigUp()
        case 'myrecipes':return <RecipeListComponent recipes={this.state.myrecipes} />
        case 'mygroceries':return <GroceryListComponent groceries={this.state.myGroceries} />
        case 'accueil' :return (
            <div>
                <Carouseeel />
                <FavoriComponent
                    recipes={this.state.recipes}
                />
            </div>
        )
        default :return (
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
                        <ul>
                            <li><a id='accueil' onClick={this.handleOnClick}>Accueil</a></li>
                            <li><a id='recette' onClick={this.handleOnClick}>Recette</a></li>
                            <li><a id='ingredient' onClick={this.handleOnClick}>Ingredient</a></li>
                            <li><a id='category' onClick={this.handleOnClick}>Category</a></li>
                            <li><a id='myrecipes' onClick={this.handleOnRecipeMenuClick}>Mes recettes </a></li>
                            <li><a id='mygroceries' onClick={this.handleOnGroceryMenuClick}>Mes épiceries </a></li>
                            <li><a id='login' onClick={this.handleOnClick}>Login</a></li>
                        </ul>
                    </nav>

                </header>

                <body>
                    {this.renderComponent()}
                    {console.log('Favories ' + JSON.stringify(this.state.recipes))}
                </body>

            </div>
        )
    }
}

export default Home
