<template>
    <nav class="navigation flex">
        <div class="logo flex">
            <img src="../assets/logo-white.png" alt="Vue logo">
        </div>
        <div class="nav-content flex">
            <div class="nav-element flex">
                <router-link to="/">Employees</router-link>
            </div>
            <div class="nav-element flex">
                <router-link to="/pastempl">Past employees</router-link>
            </div>
            <div class="nav-element flex">
                <router-link to="/positions">Positions</router-link>
            </div>
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

    .logo {
        flex: 1;
        justify-content: center;

        img {
            width: 30px;
        }
    }

    .nav-content {
        flex: 7;
        justify-content: flex-start;
    }

    .nav-element {
        margin-right: 50px;
        justify-content: center;
        align-items: center;

        .router-link-active {
            color: rgb(255, 255, 255);
        }

        a {
            text-decoration: none;
            color: rgb(230, 228, 228);

            &:hover {
                color: rgb(255, 255, 255);
            }
        }
    }
}
    
</style>