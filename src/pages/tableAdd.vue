<template>
    <div class="container">
        <h1 class="gameName">按公式计算</h1>
        <h2 class="level">第 {{level}} 关{{total}}次计算</h2>
        <p class="description">说明：按提示公式依序填入结果，大于等于10的数字减10。</p>
  
        <div class="flex">
            <ul>
                <li class="bt"></li>
                <li class="bt"></li>
                <li
                    v-for="(item,index) in datas"
                    style="color:#999;font-size:12px"
                    :key="index"
                    class="bt"
                    :class="index==col?'wild':''"
                >{{index+1}}</li>
            </ul>
        </div>
        <div class="flex">
            <ul>
                <li>a</li>
                <li>{{datas[0].data[0]}}</li>
                <li v-for="(item,index) in datas" :key="index" :class="index==col?'wild':''">
                    <input
                        v-if="index==col"
                        v-focus
                        type="number"
                        :placeholder="index===0 ? 'a+b':''"
                        v-model="item.result[0]"
                    />
                    <span v-else :class="index==col-1?'current':''">{{item.result[0]}}</span>
                </li>
            </ul>
        </div>
        <div class="flex">
            <ul>
                <li>b</li>
                <li>{{datas[0].data[1]}}</li>
                <li v-for="(item,index) in datas" :key="index" :class="index==col?'wild':''">
                    <input
                        v-if="index==col"
                        type="number"
                        :placeholder="index===0 ? 'a':''"
                        v-model="item.result[1]"
                    />
                    <span v-else :class="index==col-1?'current':''">{{item.result[1]}}</span>
                </li>
            </ul>
        </div>
        <div class="flex">
            <ul>
                <li>c</li>
                <li>{{datas[0].data[2]}}</li>
                <li v-for="(item,index) in datas" :key="index" :class="index==col?'wild':''">
                    <input
                        v-if="index==col"
                        type="number"
                        :placeholder="index===0 ? 'd':''"
                        v-model="item.result[2]"
                    />
                    <span v-else :class="index==col-1?'current':''">{{item.result[2]}}</span>
                </li>
            </ul>
        </div>
        <div class="flex">
            <ul>
                <li>d</li>
                <li>{{datas[0].data[3]}}</li>
                <li v-for="(item,index) in datas" :key="index" :class="index==col?'wild':''">
                    <input
                        v-if="index==col"
                        type="number"
                        :placeholder="index===0 ? 'c+d':''"
                        v-model="item.result[3]"
                    />
                    <span v-else :class="index==col-1?'current':''">{{item.result[3]}}</span>
                </li>
            </ul>
        </div>
        <div class="btnBox">
            <van-button type="primary" v-if="success<total" @click="check" class="btn">提交</van-button>
            <van-button
                type="primary"
                v-if="success>=total && level<5"
                @click="init"
                class="btn"
            >{{answer}}</van-button>
            <van-button type="default" @click="init">刷新</van-button>
        </div>
              <div class="resultBox">
            <span v-show="success>0">
                答对
                <strong style="color:coral">{{level*2+1+success}}</strong> 次
            </span>
            <span v-show="fail>0">
                / 错
                <strong style="color:peru">{{fail}}</strong>次
            </span>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    name: 'OrderClick',
    data() {
        return {
            level: 0,
            datas: [{ data: [], result: {} }],
            col: 0,
            answer: '',
            success: 0,
            fail: 0,
            total: 3,
            timer: null,
            beginTime: null
        };
    },
    mounted: function() {
        this.init();
    },

    methods: {
        createNumbers(len = 3) {
            let result = [];
            do {
                result[len] = Math.ceil(Math.random() * 9);
                len--;
            } while (len >= 0);
            return result;
        },
        init: function() {
            this.datas = [{ data: this.createNumbers(), result: new Array(4) }];
            this.col = 0;
            this.answer = '';
            this.success = 0;
            this.level = this.level + 1;
            this.beginTime = new Date();
            if (this.level > 1) {
                this.total = this.total + 2;
            }else{                
                 this.fail = 0;
            }
            this.timer = setInterval(this.timeUpdate, 1000);
        },
        check: function() {
            let data = this.datas[this.col];
            if (data.result.includes(undefined)) {
                return;
            }
            let resultA = data.data[0] + data.data[1],
                resultB = data.data[2] + data.data[3];
            resultA = resultA > 9 ? resultA - 10 : resultA;
            resultB = resultB > 9 ? resultB - 10 : resultB;
            if (
                data.result[0] == resultA &&
                data.result[1] == data.data[0] &&
                data.result[2] == data.data[3] &&
                data.result[3] == resultB
            ) {
                this.success = this.success + 1;
                if (this.success >= this.total) {
                    this.answer = `恭喜你答对${this.total}次,可以升级了！`;
                } else {
                    Toast.success('答对了');
                    const newData = [
                        resultA,
                        data.data[0],
                        data.data[3],
                        resultB
                    ];
                    this.datas.push({ data: newData, result: new Array(4) });
                    this.col = this.col + 1;
                }
            } else {
                Toast.fail('答错了');
                this.fail = this.fail + 1;
            }
        },
        timeUpdate: function() {
            if (this.finished) {
                clearInterval(this.timer);
            }
            let mss = new Date().valueOf() - this.beginTime.valueOf();
            var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((mss % (1000 * 60)) / 1000);
            this.resultTime = minutes + '分' + seconds + '秒';
        }
    },
    beforeDestroy: function() {
        clearInterval(this.timer);
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function(el) {
                el.focus();
            }
        }
    }
};
</script>
<style scoped lang="scss">
@import '../assets/base.scss';
ul {
    display: flex;
    border-left: 1px solid #999;
    li {
        width: 32px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #999;
        border-right: 1px solid #999;
        text-align: center;
        overflow: hidden;
        font-size: 20px;
        color: #999;
        .current {
            color: $color-text-blue-l;
        }
        &.bt {
            border-top: 1px solid #999;
        }
        &.wild {
            width: 60px;
        }
        input {
            width: 60px;
            border: 40px;
            border: none;
            line-height: 40px;
            text-align: center;
            font-size: 20px;
        }
    }
}
.ct {
    text-align: center;
}
.resultBox {
    display: flex;
}
.btnBox {
    margin: 10px 0;
    display: flex;
    .btn {
        flex: 1;
        margin-right: 10px;
    }
}
</style>