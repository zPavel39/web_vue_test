<template>
    <table class="table">
        <thead class="table__head">
            <tr>
                <th :class="columns[sort] === column ? 'table__head_active' : 'table__head_string'"  v-for="column in columns" :key="column" @click="selectedSort(column)" v-modal="sort">
                    {{ column }}
                </th>
            </tr>
        </thead>
        <tbody class="table__body">
            <tr class="table__body_column" v-for="user in usersList" >
                <td class="table__body_string" v-for="index in Object.keys(user).splice(1)" :key='user.id'>
                    {{user[index]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>

export default {
    props: {
        columns: {
            type: Object,
            required: true
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
            this.$emit('selectedSort', column)
            console.log(column)
        }
    },
}
</script>
<style lang="scss">
@import '@/assets/styles.scss';
@import './MainTable.scss';
</style>