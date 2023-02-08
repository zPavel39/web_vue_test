import { createStore } from "vuex";
import { AllUsersList } from '../database/userslistDB.js';


export default createStore({
    state: () => {
        return {
            usersList: [],
            columns: {
                place: 'Место',
                email: 'Логин',
                confirmed: 'Подтвержденные заказы',
                status: 'Статус',
            },
            filterValue: 'EMAIL',
            inputValue: '',
            sort: 'noSort',
        } 
    },
    getters:{
        userSearch(state, getters) {
            if (state.inputValue.length > 0) {
                if (state.inputValue && !isNaN(state.inputValue)) {
                    return getters.usersSort.filter(item => String(item[state.filterValue.toLowerCase()]).includes(state.inputValue))
                } else {
                    return getters.usersSort.filter(item => item[state.filterValue.toLowerCase()].toLowerCase().includes(state.inputValue))
                }         
            } else {
                return getters.usersSort
            }
        },
        usersSort(state) {
            const columnArr = state.columns
            const keyColumn = state.sort
            if (state.sort === 'noSort') {
                return state.usersList
            }
            if (columnArr[keyColumn] === "Статус") {
                return state.usersList.sort((a, b) => {
                    return a[keyColumn].toLowerCase().localeCompare(b[keyColumn].toLowerCase())
                })
            }
            if (columnArr[keyColumn] === "Логин") {
                return state.usersList.sort((a, b) => {
                    return a[keyColumn].toLowerCase().localeCompare(b[keyColumn].toLowerCase())
                })
            }
            if (columnArr[keyColumn] === "Место") {
                return state.usersList.sort((a, b) => {
                    return a[keyColumn] - b[keyColumn]
                })
            }
            if (columnArr[keyColumn] === "Подтвержденные заказы") {
                return state.usersList.sort((a, b) => {
                    return a[keyColumn] - b[keyColumn]
                })
            }
            return state.usersList
        }
    },
    mutations: {
        setUsersList(state, users) {
            state.usersList = users;
        },
        setInputValue(state, search) {
            state.inputValue = search
        },
        setFilterValue(state, changeFilter){
            state.filterValue = changeFilter
        },
        setSort(state, sort) {
            state.sort = sort
        },
    },
    actions: {
        fetchUserList({commit}) {
            commit('setUsersList', AllUsersList())
        },
    }
})