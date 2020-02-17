<template>
    <div class="container">
        <h1 class="gameName">数字抄写</h1>
        <p class="description">说明：一次记一组，抄到纸上，正确率越高越好。</p>
        <div>
            <ul class="flex">
                <li v-for="(item,index) in datas" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="btnBox">
            <van-button type="primary" size="large" @click="init">刷新</van-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OrderClick',
    data() {
        return {
            total: 30,
            len: 7,
            datas: []
        };
    },
    mounted: function() {
        this.init();
    },
    methods: {
        createString: function() {
            let str = '',
                len = this.len;
            do {
                str += '' + Math.floor(Math.random() * 10);
                len--;
            } while (len > 0);
            return str;
        },

        init: function() {
            let result = [],
                total = this.total;
            do {
                result[total - 1] = this.createString();
                total--;
            } while (total > 0);
            this.datas = result;
        }
    }
};
</script>
<style scoped lang="scss">
@import '../assets/base.scss';
.flex {
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    li {
        width: 33%;
        margin-bottom: 18px;
        font-size: 20px;
        text-align: center;
    }
}
</style>