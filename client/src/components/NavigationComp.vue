<template>
    <nav class="navigation flex">
        <div class="nav-element">
            <router-link to="/">Employees</router-link>
        </div>
        <div class="nav-element">
            <router-link to="/pastempl">Past employees</router-link>
        </div>
        <div class="nav-element">
            <router-link to="/positions">Positions</router-link>
        </div>
    </nav>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">

.navigation {
    justify-content: center;
    padding: 20px 0;
    margin-bottom: 30px;
    box-shadow: 1px 1px 6px rgb(110, 110, 110);
    background-color: rgb(68, 144, 221);
    .nav-element {
        flex: 1;

        a {
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-weight: bold;
        }

        a:hover {
            text-decoration: underline;
        }
    }
}
    
</style>