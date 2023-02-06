<template>
    <form class='form' @submit.prevent>
        <div class='form__left'>
            <img class='form__img' src="./../../../assets/image/search.svg"/>
            <input
                class='form__input'
                placeholder='Поиск...'
                type='text'
                :value="search"
                @input="inputSearch"
            />
        </div>
        <button class='form__btn' @click="clickShowBtn">
            <img src="../../../assets/image/vector_2.svg"/>
        </button>
    </form>
</template>
<script>
export default {
    props: {
        search: [String, Number]
    },
    data(){
        return {
            showModal: false,
        }
    },
    methods: {
        clickShowBtn() {
            this.showModal = true
            this.$emit('open', this.showModal)
        },
        inputSearch(event) {
            this.$emit('update:search', event.target.value)
            console.log(search)
        }
    },
}
</script>
<style lang="scss">
    @import '@/assets/styles.scss';
    @import './SearchForm.scss';
</style>