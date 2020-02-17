<template>
    <div class="container">
        <h1 class="gameName">数字按序点击</h1>
        <p class="description">说明：在随机生成的方框中按顺序点击从1到25，准确且用时越短越好。</p>
        <div class="btnBox">
            <van-button type="primary" size="large" @click="init">生成</van-button>
        </div>
        <div class="resultBox">
            <div class="result">{{resultTime}}</div>
            <div class="tempResult">
                <span :style="answer=='顺序正确'?{color:'green'}:{color:'red'}">{{answer}}</span>
            </div>
        </div>
        <ul v-show="datas.length>0" class="box">
            <li v-for="(item,index) in datas" :key="index">
                <van-button
                    type="primary"
                    @click="check(item)"
                    :class="item<result?'clicked':''"
                >{{item}}</van-button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'OrderClick',
    data() {
        return {
            level: 0,
            datas: [],
            result: 1,
            col: 0,
            answer: '',
            success: 0,
            fail: 0,
            time: '',
            begiTime: null,
            timer: null,
            finished: false,
            resultTime: ''
        };
    },
    methods: {
        init: function() {
            if (this.timer) {
                clearInterval(this.timer);
            }
            let i = 1;
            let numbers = [];
            do {
                numbers.push(i);
                i++;
            } while (i < 26);
            let arr = new Array(25);
            for (let i = 0; i < 25; i++) {
                const random = Math.floor(Math.random() * numbers.length);
                arr[i] = numbers[random];
                numbers.splice(random, 1);
            }

            this.datas = arr;
            this.answer = '';
            this.finished = false;
            this.level = this.level + 1;
            this.beginTime = new Date();
            this.time = new Date();
            this.resultTime = '';
            this.result = 1;
            this.timer = setInterval(this.timeUpdate, 1000);
        },
        check: function(i) {
            if (i < this.result) {
                return false;
            }
            if (i == this.result && this.result == 25) {
                console.log(`清除定时器`);
                clearInterval(this.timer);
                this.answer = '本局完成';
                this.result++;
                this.success = this.success + 1;
                this.finished = true;
            } else {
                if (i == this.result) {
                    this.answer = '顺序正确';
                    this.result++;
                    this.success = this.success + 1;
                } else {
                    this.answer = '不对';
                    this.fail = this.fail + 1;
                }
                setTimeout(() => {
                    this.answer = '';
                }, 1000);
            }
        },
        timeUpdate: function() {
            if (this.finished && this.timer) {
                clearInterval(this.timer);
            } else {
                let mss = new Date().valueOf() - this.beginTime.valueOf();
                var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((mss % (1000 * 60)) / 1000);
                this.resultTime = minutes + '分' + seconds + '秒';
            }
        }
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    }
};
</script>
<style scoped lang="scss">
@import '../assets/base.scss';
.box {
    display: flex;
    align-items: center;
    align-content: center;
    text-align: center;
    line-height: 75px;
    flex-wrap: wrap;
    list-style: none;
    font-size: 16px;
    padding: 0;
    margin: 0;
    li {
        width: 70px;
        padding: 0;
        padding-right: 1px;
        padding-bottom: 1px;
        height: 75px;
        text-align: center;
        list-style: none;
        margin: 0;
        overflow: hidden;
        button {
            border: none;
            width: 69px;
            height: 100%;
            padding: 0;
            margin: 1px 1px 0 0;
            border: none;
            font-size: 24px;
            &.clicked {
                background-color: #f2f2f2;
                color: #999;
            }
        }
    }
}

.btn {
    width: 240px;
    height: 80px;
    margin: 20px 0px;
    font-size: 32px;
}
.resultBox {
    display: flex;
}
.result {
    font-size: 26px;
    color: orangered;
    width: 50%;
}
</style>