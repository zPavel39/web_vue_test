<template>
    <form class='form' @submit.prevent>
        <div class='form__left'>
            <img class='form__img' src="./../../assets/image/search.svg"/>
            <input
                class='form__input'
                placeholder='Поиск...'
                type='text'
                v-modal="search"
                @input="inputSearch"
            />
        </div>
        <button class='form__btn' @click="clickShowBtn">
            <img src="../../assets/image/vector_2.svg"/>
        </button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            search: ''
        }
    },
    methods: {
        clickShowBtn() {
            this.showModal = true
            this.$emit('clickShowBtn', this.showModal)
        },
        inputSearch(event) {
            this.search = event.target.value.toLowerCase()
            this.$emit('updateSearch', this.search)
        }
    },
}
</script>
<style lang="scss">
    @import '@/assets/styles.scss';
    @import './SearchForm.scss';
</style>