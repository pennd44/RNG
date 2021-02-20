export const login = () => {
    return {
        type: "LOGIN",
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}
export const setUser = (user) => {
    return {
        type: "SETUSER",
        payload: user
    }
}