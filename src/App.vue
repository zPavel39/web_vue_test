<template>
    <SearchModal
    @close="clickCloseModal"
    v-if="showModal === true"
    :sort="sort"
    />
    <div class="app">
        <div class="app__container">
            <div class="app__header">
                <SearchForm
                @open="clickShowBtn"
                />
            </div>
            <div class="app__main">
                <h2 class="app__title">
                    Таблица Пользователей
                </h2>
                <MainTable
                :columns="columns"
                :usersList="usersList"
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
            sort: 'DATE',
        }
    },
    methods: {
        clickShowBtn(open) {
            this.showModal = open
            console.log(open)
        },
        clickCloseModal(close) {
            this.showModal = close
            console.log(close)
        }
    },
    computed: {
        addUsersList() {
            this.usersList = AllUsersList();
            console.log(Object.keys(this.usersList))
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