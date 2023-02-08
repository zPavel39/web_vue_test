<template>
    <table class="table" v-if="usersList.length > 0">
        <thead class="table__head">
            <tr>
                <th
                :class="columns[sort] === column ? 'table__head_active' : 'table__head_string'"
                v-for="column in columns"
                @click="selectedSort(column)"
                v-modal="sort"
                :key="column"
                >
                    {{ column }}
                </th>
            </tr>
        </thead>
        <tbody class="table__body" >
            <tr
                class="table__body_column"
                v-for="user in usersList"
                :key="user.id"
            >
                <td
                    class="table__body_string"
                    v-for="index in Object.keys(user).splice(1)"
                    :key='user.id'
                >
                    {{user[index]}}
                </td>
            </tr>
        </tbody>
    </table>
    <div class="table__false" v-else="usersList.length = 0">
            <h2 class="table__false_title">Мы никого не нашли</h2>
            <p class="table__false_description">Попробуй скорректировать запрос</p>
    </div>
</template>
<script>

export default {
    props: {
        columns: {
            type: Object,
        },
        usersList: {
            type: Array,
            required: true
        },
        sort: {
            type: String,
        }
    },
    methods: {
        selectedSort(column) {
            this.$emit('selectedSort', Object.keys(this.columns).find(key => this.columns[key] === column))
        },
    },
}
</script>
<style lang="scss">
@import '@/assets/styles.scss';
@import './MainTable.scss';
</style>