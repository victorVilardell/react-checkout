const setLocalStorageUseCase = (property, newState={}) => property && window.localStorage.setItem(property, JSON.stringify(newState))

export default setLocalStorageUseCase;