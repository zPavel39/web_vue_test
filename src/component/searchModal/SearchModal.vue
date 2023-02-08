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
                            value="EMAIL"
                            @change="changeFilter"
                            :checked="filter == 'EMAIL'"
                            v-modal="filter"
                        />
                        По почте
                    </label>
                </div>
                <div class='popup__list'>
                    <label class='popup__label'>
                        <input
                            class='popup__radio'
                            type="radio"
                            value="CONFIRMED"
                            @change="changeFilter"
                            :checked="filter == 'CONFIRMED'"
                            v-modal="filter"
                        />
                        По кол-ву заказов
                    </label>
                </div>
                <div class='popup__list'>
                    <label class='popup__label'>
                        <input
                            class='popup__radio'
                            type="radio"
                            value="STATUS"
                            @change="changeFilter"
                            :checked="filter == 'STATUS'"
                            v-modal="filter"
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
        filter: {
            type: String,
        },
    },
    methods: {
        clickCloseModal() {
            this.showModal = false;
            this.$emit('clickCloseModal', this.showModal)
        },
        changeFilter(event) {
            this.$emit('changeFilter', event.target.value)
        }
    },
}
</script>

<style lang="scss">
    @import './SearchModal.scss';
</style>