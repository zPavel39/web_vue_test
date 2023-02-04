<template>
    <div class="app">
        <div class="app__container">
            <div class="app__header">
                <SearchInput/>
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
import SearchInput from './component/ui/searchForm/SearchForm.vue';
import MainTable from './component/main/MainTable.vue';
import { AllUsersList } from './database/userlistDB';
export default {
    components: {
        MainTable, SearchInput,
    },
    data() {
        return {
            usersList: [],
            columns: {
                place: 'Место',
                email: 'Логин',
                confirmed: 'Подтвержденные заказы',
                status: 'Статус',
            }
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