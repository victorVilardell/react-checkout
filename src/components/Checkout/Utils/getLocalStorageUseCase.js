const getLocalStorageUseCase = (property) => property && window.localStorage.getItem(property)

export default getLocalStorageUseCase;