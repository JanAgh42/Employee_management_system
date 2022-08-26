<template>
    <div class="btn-cont flex">
        <router-link to="/employee/add/new">
            <button class="button primary-button" id="new-entry-button">+ new position</button>
        </router-link>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
    .btn-cont{
        justify-content: center;

        #new-entry-button {
            position: absolute;
            top: 25px;
            right: 60px;
            font-size: 1rem;
            padding: 10px 25px;
            background-color: rgb(255, 255, 255);

            &:hover {
                background-color: rgb(236, 236, 236);
            }
        }
    }
</style>