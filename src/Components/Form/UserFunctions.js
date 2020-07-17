import axios from 'axios'

export const register = (newUser) => {
    return axios({
        method: "post",
        url: "http://localhost:5000/users/add",
        data: {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            phoneNumber: newUser.phoneNumber,
            password: newUser.password,
            address: newUser.address,
            city: newUser.city,
            state: newUser.state,
            zip: newUser.zip
        },
        responseType: "json"
    }).then((res) => {
        console.log("registered", res);
        this.props.history.push(`/login`)
    }, (error) => {
        console.log("Axios call back", error);
    });
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = user => {
    return axios
        .get('users/account', {
            //headers: { Authorization: ` ${this.getToken()}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}