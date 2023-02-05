<template>
    <div class='popup' @click="clickCloseModal">
            <div className='popup__content' @click.stop >
                <h2 class='popup__title'>Фильтр Поиска</h2>
                <span class='popup__imgClose' @click="clickCloseModal">X</span>
                <div class='popup__list'>
                    <label class='popup__label'>
                        <input
                            class='popup__radio'
                            type="radio"
                            value="ABC"
                            checked="sort == 'ABC'"
                        />
                        По почте
                    </label>
                </div>
                <div class='popup__list'>
                    <label class='popup__label'>
                        <input
                            class='popup__radio'
                            type="radio"
                            value="DATE"
                            checked="sort == 'DATE'"
                        />
                        По кол-ву заказов
                    </label>
                </div>
                <div class='popup__list'>
                    <label class='popup__label'>
                        <input
                            class='popup__radio'
                            type="radio"
                            value="DATE"
                            checked="sort == 'DATE'"
                        />
                        По статусу
                    </label>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        sort: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            showModal: true
        }
    },
    methods: {
        clickCloseModal() {
            this.showModal = false;
            this.$emit('close', this.showModal)
        }
    },
}
</script>

<style lang="scss">
    @import './SearchModal.scss';
</style>