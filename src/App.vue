<template>
    <SearchModal
        @close="clickCloseModal"
        @changeFilter="changeFilter"
        :filter="filterValue"
        v-if="showModal === true"
    />
    <div class="app">
        <div class="app__container">
            <div class="app__header">
                <SearchForm
                    @open="clickShowBtn"
                    v-modal:search="search"
                />
            </div>
            <div class="app__main">
                <h2 class="app__title">
                    Таблица Пользователей
                </h2>
                <MainTable
                    :columns="columns"
                    :usersList="usersList"
                    :sort="sort"
                    @selectedSort="selectedSort"
                />
            </div>
        </div>
    </div>
</template>
<script>
import SearchForm from './component/ui/searchForm/SearchForm.vue';
import MainTable from './component/main/MainTable.vue';
import { AllUsersList } from './database/userlistDB';
import SearchModal from './component/ui/searchModal/SearchModal.vue';
export default {
    components: {
        MainTable, SearchForm, SearchModal
    },
    data() {
        return {
            usersList: [],
            columns: {
                place: 'Место',
                email: 'Логин',
                confirmed: 'Подтвержденные заказы',
                status: 'Статус',
            },
            showModal: false,
            filterValue: 'STATUS',
            sort: '',
            search: '',
        }
    },
    methods: {
        clickShowBtn(open) {
            this.showModal = open
        },
        clickCloseModal(close) {
            this.showModal = close
        },
        changeFilter(changeFilter){
            this.filterValue = changeFilter
        },
        selectedSort(selectedSort) {
            const columnsArr = this.columns
            this.sort = Object.keys(columnsArr).find(key => columnsArr[key] === selectedSort)
            const sortValue = this.sort
            if (selectedSort === "Место" || "Подтвержденные заказы") {
                this.usersList.sort((a, b) => {
                    let A = a[sortValue], B = b[sortValue]
                    return A - B
                })    
            }
            if (selectedSort === "Логин" || "Статус") {
                this.usersList.sort((a, b) => {
                    let A = a[sortValue].toLowerCase(), B = b[sortValue].toLowerCase()
                    return A.localeCompare(B)
                })   
            }
            console.log('usersList', this.usersList)
            console.log('sort=',this.sort)
        }
    },
    computed: {
        addUsersList() {
            this.usersList = AllUsersList();
            console.log(this.usersList);
        },
        
    },
    mounted() {
        this.addUsersList()
    },
}
</script>

<style lang="scss">
    @import '@/assets/styles.scss';
</style>