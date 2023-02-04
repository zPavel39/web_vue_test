<template>
    <form class='form' @submit.prevent>
        <div class='form__left'>
            <img class='form__img' src="./../../../assets/image/search.svg"/>
            <input
                class='form__input'
                placeholder='Поиск...'
                type='text'
            />
        </div>
        <button class='form__btn'>
            <img src="../../../assets/image/vector_2.svg"/>
        </button>
    </form>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    @import './SearchForm.scss';
</style>