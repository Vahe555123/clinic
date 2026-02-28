import axios from 'axios';

const authProvider = {
    login: async ({ username, password }) => {
        console.log(username , password);
        
        try {
            const response = await axios.post('http://localhost:3000/api/login/login', {
                username,
                password,
            });

            localStorage.setItem('authToken', response.data.token);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error.response?.data?.error || 'Login failed');
        }
    },
    logout: () => {
        localStorage.removeItem('authToken');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('authToken')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),
    checkError: (error) => {
        if (error.status === 401) {
            localStorage.removeItem('authToken');
            return Promise.reject();
        }
        return Promise.resolve();
    },
};

export default authProvider;
