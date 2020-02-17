<template>
    <div id="app">
        <header>
            <!-- router-link 定义点击后导航到哪个路径下 -->
            <router-link to="/" class="link">按顺序点击</router-link>
            <router-link to="/tableAdd" class="link">表格加计算</router-link>
            <router-link to="/transcribe" class="link">数字抄写</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style lang="scss" scoped>
@import './assets/base.scss';
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 18px;
    height: 100%;
}
header {
    height: 40px;
    padding: 10px 10px 0 10px;
    line-height: 40px;
    display: flex;

    .link {
        padding: 5px;
        display: block;
        background: #f2f2f2;
        line-height: 2;
        flex: 1;
        text-align: center;
    }
    .router-link-exact-active {
        color: #fff;
        background: $color-background-green;
    }
}
</style>
