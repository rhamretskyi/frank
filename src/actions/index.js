export const loading = (loading) => {
    return {
        type: 'SET_LOADING',
        loading
    }
}

export const signUp = values => {
    return (dispatch) => {
        console.log(values);
        dispatch(loading(true))
        setTimeout(() => {
            console.log('work')
        }, 2000)
        dispatch(loading(false))
    }
}