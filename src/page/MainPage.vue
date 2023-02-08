<template>
    <search-modal
        @clickCloseModal="clickCloseModal"
        @changeFilter="setFilterValue"
        :filter="filterValue"
        v-if="showModal === true"
    />
    <div class="main">
        <div class="main__container">
            <div class="main__header">
                <search-form
                    :showModal="showModal"
                    @clickShowBtn="clickShowBtn"
                    @updateSearch="setInputValue"
                />
            </div>
            <h2 class="main__title">
                    Таблица Пользователей
            </h2>
            <div class="main__table">
                <main-table
                    :columns="columns"
                    :usersList="userSearch"
                    :sort="sort"
                    @selected="setSort"
                />
            </div>
        </div>
    </div>
</template>
<script>
import SearchForm from '@/component/searchForm/SearchForm.vue';
import MainTable from '@/component/mainTable/MainTable.vue';
import SearchModal from '@/component/searchModal/SearchModal.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    components: {
        MainTable, SearchForm, SearchModal
    },
    data() {
        return {
            showModal: false,
        }
    },
    methods: {
        ...mapMutations({
            setUsersList: 'setUsersList',
            setInputValue: 'setInputValue',
            setFilterValue: 'setFilterValue',
            setSort: 'setSort',
        }),
        ...mapActions({
            fetchUserList: 'fetchUserList',
        }),
        clickShowBtn(open) {
            this.showModal = open 
        },
        clickCloseModal(close) {
            this.showModal = close
        },        
    },
    watch: {
        sort(sort) {
             this.$router.push(`/MainPage/${this.filterValue}/${sort}`)
        },
        filterValue(filterValue) {
            this.$router.push(`/MainPage/${filterValue}/${this.sort}`)
        }
    },
    computed: {
        ...mapState({
            usersList: state => state.usersList,
            columns: state => state.columns,
            filterValue: state => state.filterValue,
            inputValue: state => state.inputValue,
            sort: state => state.sort,
        }),
        ...mapGetters({
            userSearch: 'userSearch',
            usersSort: 'usersSort'
        }),
    },
    mounted() {
        this.setFilterValue(this.$route.params.filter)
        this.setSort(this.$route.params.sort)
        this.fetchUserList()
    },
}
</script>

<style lang="scss">
    @import './MainPage.scss';
</style>