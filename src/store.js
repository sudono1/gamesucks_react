import createStore from "unistore";
import devtools from "unistore/devtools"
import axios from "axios"
import persistStore from "unissist"
import localStorageAdapter from "unissist/integrations/localStorageAdapter"

const initialState = {
    listItems: [],
    item:[],
    userListItems:[],
    userItems:[],
    token: '',
    is_login: false,
    type: '',
    cart: []
}

const store = 
process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

const adapter = localStorageAdapter();
persistStore(store, adapter)

const actions = store => ({
   
    signUpHandle: async (state, name, username, email, password, address, phone) => {
        const url = "https://gamesucks.herokuapp.com/api/users/register"

        const body = {
            name: name,
            username: username,
            email: email,
            password: password,
            address: address,
            phone: phone
        }
        // console.log(name)
        await axios
        .post(url, body)
        .then((response) => {
            alert("You have signed up successfully")
            store.setState({
                token: response.data.token,
                is_login: true
            })
            console.log("Response signup: ", response)
        })
        .catch((err) => {
            alert("Sign Up Failed")
            console.log(err)
        })
    },

    handleLogout: (state) => {
        store.setState({
            token: '',
            is_login: false
        })
        alert("Logged Out Successfully")
    },

    signInHandle: async (state, username, password) => {
        const url = "https://gamesucks.herokuapp.com/api/users/login"

        const body = {
            username: username,
            password: password
        }
        await axios
        .post(url, body)
        .then((response) => {
            alert("Sign in Success")
            store.setState({
                token: response.data.token,
                is_login: true
            })
            console.log("Response: ", response)
        })
        .catch((err) => {
            alert("Credentials do not match our database")
            console.log(err)
        })
    },
    getUserListItems: async (state, token) => {
        const url = "https://gamesucks.herokuapp.com/api/users/items"
        const auth = "Bearer " + token
        // console.log(auth)
        await axios
        .get(url, { headers: { "Authorization": auth } })
        .then((response) => {
            // console.log(response)
            store.setState({
                userListItems: response.data.data
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getItem: async (state, id) => {
        const url = "https://gamesucks.herokuapp.com/api/public/items/" + id
        await axios
        .get(url)
        .then((response) => {
            store.setState({
                item: response.data.data,
            })
            console.log("Response: ", response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    getCartData: async (state, token) => {   
        let url = "https://gamesucks.herokuapp.com/api/users/transaction"
        let auth = "Bearer " + token
        // console.log(auth)
        
        await axios
        .get(url, { headers: { "Authorization": auth } })
        .then((response) => {
            store.setState({
                cart: response.data
            })
            // console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    updateCart: async (state, id, token, action) => {
        let url = "https://gamesucks.herokuapp.com/api/users/transaction/" + id
        let auth = "Bearer " + token
        let body = {
            "action": action
        }
        let header = { 
            headers: { 
                "Authorization": auth 
            } 
        }
        await axios
        .patch(url,body ,header)
        .then((response) => {
            let cart = state.cart
            let data = cart.data
            data.map((item, key) => {
                if(item['game.id'] == id){
                    if(action == 'add_qty'){
                            cart.data[key].qty += 1
                            cart.total_qty += 1
                            cart.total_price += 1 * cart.data[key].price
                    }
                    else if(action == 'substract_qty' && cart.data[key].qty > 1){
                        cart.data[key].qty -= 1
                        cart.total_qty -= 1
                        cart.total_price -= 1 * cart.data[key].price
                    }
                    else if(action == "delete"){
                        cart.total_qty -= cart.data[key].qty
                        cart.total_price -= cart.data[key].qty * cart.data[key].price
                        cart.data.splice(key, 1)
                    }
                    store.setState({
                        cart: cart
                    })
                    console.log(response)
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
    },

    perubahanQty: (state, id, action) => {
        let cart = state.cart
        let data = cart.data
        data.map((item, key) => {
            if(item['game.id'] == id){
                if(action == 'add_qty'){
                        cart.data[key].qty += 1
                        cart.total_qty += 1
                        cart.total_price += 1 * cart.data[key].price
                }
                else if(action == 'substract_qty' && cart.data[key].qty > 1){
                    cart.data[key].qty -= 1
                    cart.total_qty -= 1
                    cart.total_price -= 1 * cart.data[key].price
                }
                else if(action == "delete"){
                    cart.total_qty -= cart.data[key].qty
                    cart.total_price -= cart.data[key].qty * cart.data[key].price
                    cart.data.splice(key, 1)
                }
                store.setState({
                    cart: cart
                })
                console.log(state.cart)
            }
        })
    },

    addCart: async (state, id, token) => {
        let url = "https://gamesucks.herokuapp.com/api/users/transaction/" + id
        let auth = "Bearer " + token
        let body = {}
        let header = { 
            headers: { 
                "Authorization": auth 
            } 
        }
        await axios
        .post(url, body ,header)
        .then((response) => {
            alert('Items added to cart successfully')
        })
        .catch((err) => {
            console.log(err)
        })
    }

})


export { store, actions }