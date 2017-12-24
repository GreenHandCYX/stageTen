#单页web应用 SPA（vue,angular,react）
1. 同一页面的<u>部分内容</u>更新实现单个页面的交互,<u>加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序</u>
2. 利用了hash,在**URL中采用#号来作为当前视图的地址**,<u>改变#号后的参数，页面并不会重载</u>
3. 一旦页面<u>加载完成</u>了，SPA<u>不会因为用户的操作而进行页面的重新加载或跳转</u>。
4. 而是<u>利用 JavaScript 动态的变换HTML</u>（采用的是div切换显示和隐藏），从而实现UI与用户的交互。
5. 由于<u>避免了页面的重新加载</u>，SPA 可以提供较为流畅的用户体验。<u>得益于ajax，我们可以实现无跳转刷新</u>，又多亏了浏览器的<u>histroy机制</u>，我们用<u>hash的变化</u>从而可以实现推动界面变化。

#单页应用优缺点:(前端渲染)
> ## 优点:

> 1、<u>分离前后端</u>关注点，前端负责界面显示，后端负责数据存储和计算，各司其职，不会把前后端的逻辑混杂在一起；

> 2、<u>减轻服务器压力</u>，服务器只用出数据就可以，不用管展示逻辑和页面合成，吞吐能力会提高几倍；

> 3、<u>同一套后端程序代码</u>，不用修改就可以用于Web界面、手机、平板等多种客户端；
>
> 4、速度：更好的用户体验，让用户<u>在web app感受native app</u>的速度和流畅，



> ## 缺点：

> 1、SEO问题,有可能页面尚未加载完毕

> 2、前进、后退、地址栏等，需要程序进行管理；



# 监听hash值的变化加载不同内容

> ![Snipaste_2017-11-11_09-19-51](.\img\Snipaste_2017-11-11_09-19-51.png)



> ![Snipaste_2017-11-11_09-23-02](.\img\Snipaste_2017-11-11_09-23-02.png)







#MVC与MVVM的区别
> ##MVC:
> ###优点:

- 耦合性低
- 重用性高
- 成本低
- 部署快
- 可维护性高
- 有利于软件工程化管理

> ###缺点:

- 没有明确的定义
- **不适合小型，中等规模的应用程序**
- **增加系统结构和实现的复杂性**
- **视图与控制器间的过于紧密的连接**
- **视图对模型数据的低效率访问**
- **一般高级的界面工具或构造器不支持模式**

![01](E:\电脑\培训\就业班\11 vue\vue-day01\资料\vue资料\images\01.jpg)

> ## MVVM(M V VM C)减轻控制器压力

![02](D:\myProjectRoot\github\stageTen\day01\vue资料\images\02.jpg)

> ### 优点:

> **1. 低耦合**。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
>
> **2. 可重用性**。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
>
> **3. 独立开发**。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码。
>
> **4. 可测试**。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。



# MVVM相较于MVC框架的优势指:

mvc是单向数据绑定,mvvm是双向数据绑定(数据层与视图层的交互不需要通过中间层，模型发生变化自动同步到视图上,视图上的数据发生变化过后自动同步到模型上)

MVVM会将公用的controller的代码进行封装，减轻在处理类似请求时控制层的压力



# 库和框架通常一致

> 框架:大而全，可以减少Dom操作
>
> 库：小而精



# VUE概念

> 1. vue专注于view层，是一个**渐进式框架**（只要核心的就可以，其他的按需引入）![v2-cc3ec77bdca6da1a7e276918d894490b_hd](.\img\v2-cc3ec77bdca6da1a7e276918d894490b_hd.jpg)
>
> 2. vue和react都是组件化开发.angular是模块化
>
> 3. ##### 特点
>
>    - 组件化开发                                 减少部署成本，提高开发效率。
>    - 声明式渲染
>    - 生命周期思想
>    - 可复用性强
>    - 可组合性强
>
>
> 1. ##### 兼容性:
>
> - Vue.js 不支持 IE8 及其以下版本，因为 Vue.js 使用了 IE8 不能模拟的 ECMAScript 5 特性。Vue.js 支持所有[兼容 ECMAScript 5 的浏览器](http://caniuse.com/#feat=es5)







nrm利于更改镜像

<!--npm install nrm -g-->   

<!--nrm use-->

<!--nrm test-->

<!--nrm ls-->





npm init -y (-y指之后所有的选项都是yes)



npm install vue --save-dev

-dev 指package.json中的devDependencies



# 



![Snipaste_2017-11-09_11-36-35](.\img\Snipaste_2017-11-09_11-36-35.png)

npm run dev 运行package.json中的scripts中的自定义 命令dev







# 数据绑定:

## 单向

> 1. 模型变化过后，自动同步到界面上；
> 2. 一般<u>纯展示型的数据会用到单项数据绑定</u>；
> 3. 使用<u>表达式的方式都是单向的</u>



![Snipaste_2017-11-09_14-42-45](.\img\Snipaste_2017-11-09_14-42-45.png)



## 双向数据绑定

> 1. <u>两个方向的数据自动同步</u>：
>
> 2. 模型发生变化自动同步到视图上；
>
>    ![Snipaste_2017-11-11_19-17-05](.\img\Snipaste_2017-11-11_19-17-05.png)
>
> 3. 视图上的数据发生变化过后自动同步到模型上；
>
>    ![Snipaste_2017-11-11_10-08-26](.\img\Snipaste_2017-11-11_10-08-26.png)



document.querySelectorAll('[v-model]');可以获取元素属性为v-model的元素



> 
>
> # 使用步骤

```html
<!-- 1.引入包文件 -->
<script src="./vue.js"></script>

<script>
    //2.创建实例化对象
    var obj = {
        msg:'我是中国人'
    }
   var vm = new Vue({
        data:function(){
            return obj;
        }
    })

    //3.$mount指告诉vue渲染到哪一部分区域
    //参数是一个选择器
    vm.$mount('#app')
</script>
```



# 指令:

在vue中,用v-开头的属性叫指令 



## v-text

```vue
<h1>v-text一般用于正常显示的标签,input除外</h1>
<span v-text='msg'></span>
<!-- v-text内部可以写js表达式 -->
<p v-text='1+1'></p>
<p v-text="'1'+1"></p>
<!-- v-text内部可以写函数 -->
<p v-text='Math.random()'></p>
<p v-text="typeof JSON.stringify({a:1,b:3})"></p>
<p v-text="JSON.stringify({a:1,b:3})"></p>

<!-- v-text内部不能使用bom以及bom对象的属性 -->
<!-- <p v-text="window.location.href"></p> -->
<!-- window全局定义的属性也不能用,除非是data方法返回的对象中的属性 -->
<!-- <p v-text="alert(111)"></p> -->
<p v-text="'name'+1"></p>
<p v-text="name+1"></p>
```



## 插值表达式 

注:vue中的插值表达式不能用于属性中,angular中的插值表达可以在属性中使用

```vue
 <p>{{msg}}</p>
    {{name}}
<!-- 插值表达式相当于v-text -->
<!-- 插值表达式不能用于属性中，除了属性以外的渲染区域内的地方都可以用-->
<!-- <p v-text='{{msg}}'></p> -->
<!-- <p {{msg}}></p> -->
```



## v-html

```vue
<p v-text='msg'></p>
<p v-text='name'></p>
v-html(innerHTML)和v-text(innerText)的区别就在于是否可以解析html标签
<br>
<p v-html='msg'></p>
<p v-html='name'></p>
```



## v-bind(缩写’:‘)

作用:为了获取data中的value值

```vue
<body>
    <div id="app">
        <!-- <p aa='msg内容'></p> -->
        <p v-bind:aa='msg'></p>
        <!-- v-bind指将aa属性的值绑定为vue的全局变量，再取其对应的值 -->
   
        <img v-bind:src="imgPath" alt="">
        <div v-bind:class="color">这是一个div</div>
        <div v-bind:yy='1+1'>adsfasdf</div>
        <div v-bind:yy='Math.random()'>这是一个div</div>
        <!-- <div v-bind:yy='alert(111)'>这是一个div</div> -->
    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        data:function(){
            return {
                color:'red',
                msg:'msg内容',
                imgPath:'./img/demo01.jpeg'
            }
        }
    })
    vm.$mount('#app');
</script>
```

```vue
v-bind:class绑定一个对象时可以用于控制多个类名

<style>
        .red{
            color:red;
        }
        .size{
            font-size: 40px;
           }
        .yellow{
            background-color: yellow
        }
</style>

<body>
    <div id="app">
    
        <div v-bind:class="colorObj">这是一个div</div>
        <!-- v-bind后属性值可以是变量也可以是对象，
            但不能写逻辑判断
            如下面的代码不会生效
         -->
        <!-- <div v-bind:class="sex===1">这是一个div</div> -->
    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        data:function(){
            return {
                sex:2,
                msg:'msg内容',
                colorObj:{
                    red:true,
                    size:false,
                    yellow:true
                }
            }
        }
    })
    vm.$mount('#app');
</script>
```



## v-if-else

```vue
v-if的值如果为true,标签正常显示,为false则标签被干掉
v-else在使用时必须和v-if连用,并且不需要判断条件
<h1>v-if的使用</h1>
<h1 v-if='msg'>这是h1标签</h1>
<!-- 在v-if为False时会将元素转为注释文本并彻底删去 -->
<h1>v-else的使用</h1>
<h1 v-if='msg'>这是h1标签</h1>
<h1 v-else>这是else部分</h1>
```



## v-show

```vue
  <!-- 与v-if不同v-show为false时则相当于display:none,并不会删去元素 -->
  <h1>v-show的使用</h1>
  <h1 v-show='msg'>这是show标签</h1>
```







## v-on(缩写'@')

```vue
<style>
  .red{
    color:red;
  }
</style>

<body>
    <div id="app">
        <h1>v-on是用来定义事件</h1>
        <button  v-on:click='hello'>按钮</button>
        <br>
        <button  v-on:click='hello(1,2,3,{a:1,b:1})'>按钮		    </button>
        <br>

        <form action="" v-on:click='hello'>
                <!-- 事件修饰符.stop的作用可以阻止冒泡 -->
                <button  v-on:click.stop='hello'>按钮					    </button>
        </form>

        <!-- v-on可以简写为@ -->
        <button @click='hello'>sdadas</button>
        <!-- v-bind:可以简写为: -->
        <div :yy='1+1'>sdad</div>
    </div>
</body>
</html>
<script src="./vue.js"></script>
<script>
    var vm = new Vue({
        //data方法内不能写方法,一般写数据
        data:function(){
            return {
               
            }
        },
        //methods用来定义方法
        methods:{
            hello:function(){
                // window.alert(111)
                console.log(arguments);
            }
        }
    })
    vm.$mount('#app');
</script>
```



# v-for

```vue
  <div id="app">
       {{msg}}
       <h1>v-for的使用</h1>
       <div v-for="item in list">
           <p>{{item}}</p>
       </div>
       <!-- 注意：给谁加v-for就遍历谁 -->
       <!-- vue2.0索引在后面 -->
       <div v-for="(item,index) in list">
        <p>{{item}}-----{{index}}</p>
        </div>
        <!-- 也可以遍历字符串输出每一个字符 -->
       <ul>
           <li v-for='item in "asdasd fasdf"'>{{item}}</li>
       </ul>
       <!-- 遍历数字从一开始 -->
       <ul>
            <li v-for='item in 8'>{{item}}</li>
       </ul>

       <ul>
           <li v-for='item in user'>{{item}}</li>
       </ul>

       <!-- 对象也可以有索引值 -->
       <!-- 值 - 键 - 索引 -->
       <ul>
        <li v-for='(item,key,index) in user'>{{item}}---{{key}}---{{index}}</li>
       </ul>
   </div>
```





# v-model

```vue
 <div id="app">
        <h1>v-model的使用</h1>
        <!-- v-model可以实现双向数据绑定 -->
        <h2>基础用法</h2>
        <input type="text" v-model='msg'>
        <textarea name="" v-model='msg' id="" cols="30" rows="10"></textarea>
   

        <!-- 多选，单选都是判断v-model与value的值是否相等来确定选中,checkbox时的单选框可以单独使用v-model -->
        <h2>单选</h2>
        <input type="radio" name="" id="" v-model='sex' value="1">男
        <input type="radio" name="" id="" v-model='sex' value="2">女


        <h2>多选 一个</h2>
        <input type="checkbox" name="" v-model='isTrue' id="">你是?



        <h2>多选 多个</h2>
        <input type="checkbox" name="" value="01" v-model='hobby' id="">吃饭
        <input type="checkbox" name="" value="02" v-model='hobby' id="">睡觉
        <input type="checkbox" name="" value="03" v-model='hobby' id="">打豆豆
        <input type="checkbox" name="" value="04" v-model='hobby' id="">男人
        <input type="checkbox" name="" value="05" v-model='hobby' id="">女人

        {{hobby}}
  </div>



   <script>
        var vm = new Vue({
            el:'#app',
            data:function(){
                return {
                    msg:'sdf',
                    sex:1,
                    isTrue:true,
                    hobby:[
                        '03','04'
                    ]
                }
            }
        })
    </script>
```





# ref

```vue
    <div id="app">
        <input type="text" v-model='msg'>
        <!-- 为dom元素加一个别名便于之后在vue实例中操作该元素 -->
        <button ref='btn'>{{msg}}</button>
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        var vm = new Vue({
            el:'#app',
            data:function(){
                return {
                    msg:'你好'
                }
            },
            updated:function(){
                //this指当前绑定的要渲染vue元素
                alert(this.$refs.btn);
            }
            ,
            //在vue对象中在mounted方法里面获取dom元素
            //在vue渲染时就会加载执行
            mounted:function(){
                const _this = this
                setTimeout(function(){
                    _this.$refs.btn.innerHTML = 'SSDSADAS'
                    // $refs代表别名对应元素组成的数组，在react中不带$
                },3000)
               
            }
        })
    </script>
```





# 管道(|):

> 先进先出
>
> 由上一个的输出流向下一个的输入





# filter(对要渲染到的页面的数据进行处理)

```vue
   <div id="app">
        {{birthday | getAge}}
        <!-- {{msg | upper}} -->
        {{msg | upperStr}}
        {{name | lowerStr}}
    </div>
    <div id="app1">
        {{name1 | upperStr}}
    </div>
         
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        //过滤器：指对通过管道流入的数据进行处理然后再渲染到页面上
        //分为实例内的私有过滤器(只能本身实例使用),公有过滤器(所有实例共享)

        //公有过滤器  参数为要过滤的值,只能单独一个个的设置的过滤器
        Vue.filter('upperStr',function(val) {
           return val.toUpperCase();
        })

        var vm1 = new Vue({
            el:'#app1',
            data:function(){
                return {
                    name1:'sdjfosif'
                }
            }
        });

        var vm = new Vue({
            el:'#app',
            data:function(){
                return {
                    birthday:'2007/12/7',
                    msg:'dsjofjsoifsof',
                    name:'JOGJSOIDFsdsfsfISF'
              }
            },
            //私有过滤器：可以同时定义多个
            //以键值对的形式存在，键为过滤器名，值为过滤器的具体处理方法(参数为要过滤的值)
            //需要返回处理后的值
          //过滤器如果要传参数则实际在处理函数中是从第二个形参开始，第一个形参为要处理的数据
            filters:{
                getAge:function(val){
                    var birthday = new Date(val).getFullYear();
                    var now = new Date().getFullYear();
                    return now - birthday;
                },
                lowerStr:function(val){
                    return val.toLowerCase();
                }
            }
        })
    </script>
</body>
```



# computed:

```vue
 <div id="app">
        {{msg}}

        <input type="text" v-model="msg">
        <input type="text" v-model="name">
        <!-- 直接通过计算规则名即可调用 -->
        {{myMsg}}
        {{myName}}
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        //computed用于对data中的数据进行监听
        var vm = new Vue({
            el:'#app',
            data:function () {
                return {
                    msg:'你好',
                    name:'hello'
                }
            },
            // 计算属性
            // 参数一: 名称
            // 参数二 :方法体(或对象)
            computed:{
                //可以是函数
                myMsg:function(){
                    //通过this获取该vue实例代理的属性
                    return this.msg + ',cyx';
                },
                //可以是对象
              
                myName:{
                    //处理代理值
                    // get:function () {
                    //     return this.name + '.heima'
                    // },
                    //修改时设置值,参数为修改后的值
                    // set:function(val){
                    //     this.name = val
                    // }


                    //也可以在读取的时候就设置，这样就不需要set了
                     get:function () {
                        return this.name +',cyx';
                    }
                }

            }
        });
    </script>
```





# filter与computed的区别

> 计算属性computed可以监听data中值的变化
>
> 而filter是对data取出后操作







通常项目目录中src中存源码,dist存发布的代码







data:{}只能在vue组件中(new Vue({}))使用，其他组件只能通过data:{}



# vue生命周期的钩子方法（实例化vue对象时就存在了）

> vue生命周期的钩子方法触发的条件是vue实例化对象了，vue的声明周期开始执行
>
> 1. beforeCreate方法是在实例化对象代理data,methods,computed等属性之前调用的方法，此时不可发送请求，methods等属性还未加载
>
> 2. created是在beforeCreate方法调用之后调用的方法,此时已完成实例化对象的代理,  可发送请求了
>
>    但dom还未生成,$el属性还不可见
>
> 3. vue程序执行的时候，是先从Dom中获取的vue语法规定的指令或者{{}},这时并没有解析，只有在vue加载完成时才会将这些语法读取并解析相应的值,而在这之前会调用beforeMount(挂载之前)
>
> 4. 往页面挂载完毕后会触发mounted,  el 被新创建的 this.$el 替换，并挂载到实例上去
>
> 5. 一旦有数据的改变会走更新的方法，在走更新方法之前会调用下面的方法beforeUpdate
>
> 6. 更新之后会触发updated
>
> 7. 在当前组件被干掉之前调用的方法beforeDestroy（用于释放资源）
>
> 8. 当当前组件被销毁时调用的方法destroyed

> ### 实例化对象代理：
>
> 将data,methods,computed内部属性或方法交由vue实例管理（所以代理后就可在computed等中使用this.data等的属性）
>
> 
>
> ![lifecycle-标注版本](.\img\lifecycle-标注版本.png)
>
> ![lifeCycle1](.\img\lifeCycle1.png)
>
> ### create 和 mounted 相关:
>
> ![Snipaste_2017-11-11_21-50-17](.\img\Snipaste_2017-11-11_21-50-17.png)
>
> ![Snipaste_2017-11-11_21-50-55](.\img\Snipaste_2017-11-11_21-50-55.png)
>
> ### update 相关
>
> 这里我们在 chrome console里执行以下命令
>
> ```
> app.message= 'yes !! I do';
> ```
>
> ![Snipaste_2017-11-11_21-53-08](.\img\Snipaste_2017-11-11_21-53-08.png)
>
> #### destroy 相关
>
> 有关于销毁，暂时还不是很清楚。我们在console里执行下命令对 vue实例进行销毁。销毁完成后，我们再重新改变message的值，vue不再对此动作进行响应了。但是原先生成的dom元素还存在，可以这么理解，执行了destroy操作，后续就不再受vue控制了。
>
> ```
> app.$destroy();
> ```
>
> ![Snipaste_2017-11-11_21-54-16](.\img\Snipaste_2017-11-11_21-54-16.png)
>
> ![Snipaste_2017-11-11_21-55-14](.\img\Snipaste_2017-11-11_21-55-14.png)
>
> ```vue
>   <div id="app">
>         {{msg}}
>         <button v-on:click="hello">按钮</button>
>         <input type="text" v-model="msg">
>     </div>
>     <script src="./node_modules/vue/dist/vue.js"></script>
>     <script>
>         //vue实例化时会开始其生命周期，并会伴随一系列的钩子方法
>          // 1. vue的生命周期开始执行
>       var vm = new Vue({
>           el: '#app',
>           data: function () {
>               return {
>                   msg:'haha'
>               }
>           },
>           methods:{
>             hello: function () {
>
>             }
>           },
>           //2.在实例化对象代理data,methods,computed等属性之前会触发beforeCreate
>           beforeCreate: function () {
>             console.log('beforeCreate')
>             console.log(this.msg)//此时并没有实例化对象代理
>       
>           },
>           //3.created方法是在beforeCreate方法调用之后调用的方法
>           // 在这个方法里面,vm实例化对象已经对data,methods,computed等属性的内容进行了代理
>           //但dom还未生成,$el属性还不可见
>           created: function () {
>             console.log('created')
>             console.log(this.msg)
>             console.log(this.$el)
>           }, 
>           // 4.程序执行的时候,其实是先从dom中获取vue语法规定的指令或者是{{}},这个时候没有对其进行解析
>           // vue加载完成之后,会读取这些语法,进行解析,但是解析之前会调用这个方法.
>           beforeMount:function () {
>             console.log('beforeMount')
>               window.alert(11111)
>            
>           },
>           // 5.往页面上挂载之后,会调用mounted方法
>           //el 被新创建的 this.$el 替换，并挂载到实例上去
>           mounted:function () {
>             console.log('mounted')
>             console.log(this.$el)
>           },
>           // 6.如果一旦有数据的改变,就会走更新的方法,再走更新方法之前
>           // 会调用下面的方法
>           beforeUpdate:function () {
>             console.log('beforeUpdate')
>               window.alert(11111)
>           
>           },
>           // 7.beforeUpdate走完之后,会调用这个方法:
>           updated:function () {
>             console.log('updated')
>           },
>           // 8.在当前组件被干掉之前调用的方法
>           beforeDestroy:function () {
>               console.log('beforeDestroy')
>           },
>           // 9.当当前组件被销毁以后调用的方法
>           destroyed : function () {
>             console.log('destroyed')
>           }
>         })
>     </script>
> ```
>
> 



# watch

```vue
  	   <div id="app">
            {{msg}}
            <input type="text" v-model="msg">
        </div>
    
        <script src="./node_modules/vue/dist/vue.js"></script>
        <script>
            var vm = new Vue({
                el:'#app',
                // 可以这样写,但是不推荐:
                // data:{
    
                // },
                data: function () {
                    return {
                        msg:'你好中国'
                    }
                },
                // watch提供了一个观察的方式,用于监听data中数据的变化
                watch:{
                    // 两个参数:
                    // 1: 你要观察对象的名称,
                    // 2: 你要采取的措施


                   //computed有缓存机制(获取data时是先储存在缓存中，然后修改缓存的数据再更改到页面中),
                   //而watch没有,相当于直接对数据进行操作；
                   //所以最好使用computed而不使用watch
                    'msg':function () {
                        window.alert(11111)
                    }
                }
            })
        </script>
```



# computed与watch的区别

> 1.   computed有缓存机制(获取data时是先储存在缓存中，然后修改缓存的数据再更改到页面中),
> 2.   而watch没有,相当于直接对数据进行操作；
> 3.   所以最好使用computed而不使用watch
> 4.   但是在进行ajax操作时应用watch直接监听数据的变化







# Axios（发送请求/vue-resource,代替ajax） 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

> ### Features
>
> - 从浏览器中创建 [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
> - 从 node.js 创建 [http](http://nodejs.org/api/http.html) 请求
> - 支持 [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API
> - 拦截请求和响应
> - 转换请求数据和响应数据
> - 取消请求
> - 自动转换 JSON 数据
> - 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
>
> ### 安装
>
> 使用 npm:
>
> ```
> $ npm install axios
>
> ```
>
> 使用 bower:
>
> ```
> $ bower install axios
>
> ```
>
> 使用 cdn:
>
> ```
> <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
> ```
>
> ### Example
>
> ##### 执行 `GET` 请求
>
> ```javascript
> // 为给定 ID 的 user 创建请求
> axios.get('/user?ID=12345')
>   .then(function (response) {
>     console.log(response);
>   })
>   .catch(function (error) {
>     console.log(error);
>   });
>
> // 可选地，上面的请求可以这样做
> axios.get('/user', {
>     params: {
>       ID: 12345
>     }
>   })
>   .then(function (response) {
>     console.log(response);
>   })
>   .catch(function (error) {
>     console.log(error);
>   });
> ```
>
> ##### 执行 `POST` 请求
>
> ```javascript
> axios.post('/user', {
>     firstName: 'Fred',
>     lastName: 'Flintstone'
>   })
>   .then(function (response) {
>     console.log(response);
>   })
>   .catch(function (error) {
>     console.log(error);
>   });
> ```
>
> ##### 执行多个并发请求
>
> ```javascript
> function getUserAccount() {
>   return axios.get('/user/12345');
> }
>
> function getUserPermissions() {
>   return axios.get('/user/12345/permissions');
> }
>
> axios.all([getUserAccount(), getUserPermissions()])
>   .then(axios.spread(function (acct, perms) {
>     // 两个请求现在都执行完成
>   }));
> ```
>
> 



# vscode的json-server插件可以模拟服务器响应数据:

> 使用方法：
>
> 1.npm install --save-dev json-server
>
> 2.建立一个data.json文件用来模拟数据(对象形式的json,每个键代表一张表,对应值为表中的数据)（非关系型数据库）
>
> ```json
> {
>     "user":[
>         {"name":"meihao","age":20},
>         {"name":"xiaoming","age":16}
>     ]
> }
> ```
>
> 3.配置package.json文件(scripts中)
>
> "scripts": {
>   "dev": "json-server ./data.json", // 新加行
>   "test": "..."
> }
>
> 4.在package.json所在位置处运行npm run dev
>
> ![Snipaste_2017-11-11_17-25-37](.\img\Snipaste_2017-11-11_17-25-37.png)
>
> 
>
> 





# component组件

在vue里使用单闭合标签后再使用一个双闭合标签只会显示一个，所以一般不推荐使用单闭合标签

vue在定义组件时如果组件名中含有大写,实际调用时需将大写字母转为小写并在前面加-

```vue
  <div id="app">
        <!-- 1.全局组件的调用和标签的调用形式一样
             2.在vue里使用单闭合标签后再使用一个双闭合标签只会显示一个，所以一般不推荐使用单闭合标签
             
             3.自定义组件中间不要加入内容,例如这里的1111,因为最终整个区域都会被覆盖掉
-->
        <hello>11111</hello>
<!-- 
        4.vue在定义组件时如果组件名中含有大写,实际调用时需将大写字母转为小写并在前面加- -->

        <my-component></my-component>
    </div>
    <script src="./components/node_modules/vue/dist/vue.js">
    </script>
    <script>
        //全局组件
        Vue.component('myComponent',{
            data:function(){
                return {
                    world:'hello world'
                }
            },
            template:'<strong>{{world}}</strong>'
        })

        new Vue({
            el:'#app',
            data:function(){
                return {
                    msg:"你好"
                }
            },
            // 这里用来定义各个私有组件
            // 定义组件需要有两个参数:
            // 1.组件的名称
            // 2.组件的内容
            //私有组件,在vue实例不传值的情况下只能访问自身的data
            components:{
                hello:{
                    data:function(){
                        return {
                            home:'搜索'
                        }
                    },
                    //组件中的模板
                    template:'<h1>{{home}}</h1>'
                }
            }
        })
    </script>
```



### 在实际开发中经常利用webpack将component,vue实例,页面进行分离后再打包管理

> import 是es6新增的导入文件的方式,类似于nodejs的require模块,需要指定一个别名；在template中必须只有一个跟标签
>
> vue中规定组件文件需以.vue结尾
>
> 用webpack将vue实例的入口文件(实例化的文件)和组件文件(.vue文件)转为浏览器可以识别的文件（浏览器不识别es6），最后引入html



























# webpack

把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

webpack可以将es6转为es5：通过babel-loader

webpack使用步骤:

1. 全局安装webpack

   > npm install webpack -g

2. 本地安装

   > npm install webpack --save-dev

3. 使用:创建一个webpack.config.js文件,对webpack进行配置,通过运行这个文件来加载webpack

   > webpack

4. 在实际开发中通常将原始文件放入src文件中,而将打包后的文件放入dist文件中

加载器(loader)在文件导入之前对不识别的文件类型做预处理

webpack.config.js

```javascript
//导入路径模块
var path =require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')

module.exports = {
    //第一部分 入口和出口的设置
    // entry:'./src/main.js',
    entry:{
        app:'./src/main.js',
        //用来处理公用的js文件
        vendor:['vue']
    },
    output:{
        path:path.join(__dirname+'/dist'),
        filename:'bundle.js'
    },
    //第二部分,加载器的添加
    module:{
        rules:[
            //第一个加载器,解析.vue文件的vue-loader
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            //第二个加载器,解析css的css-loader
            // {
            //     test: /\.css$/,
            //     use: [ 'style-loader', 'css-loader' ]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: "css-loader"
                })
              }
        ]
    },
    //配置开发服务器，用来监听src源文件的变化，如果源文件有变化，自动进行打包处理，显示结果
    //文件放在内存中
    devtool:'eval',
    devServer:{
        //告诉当前服务器监听的区域
        contentBase:__dirname + '/src',
        hot:true, //是否提供热更新功能
        open:true,//是否自动打开浏览器
        port:8080,//端口号的配置
        host:'localhost',
        openPage:""
    },

    //第三部分 插件
    plugins:[
         //需要安装并引入
    //自动生成html文件和指明需要依赖的相关css和js文件
    new HtmlWebpackPlugin({
        //指定以哪个作为模板进行生成
        template: './src/index.html',
        htmlWebpackPlugin: {
          "files": {//指明需要依赖的相关css和js文件
            "css": ["app.css"],
            "js": ["bundle.js",'vendor.js']
          }
        },
         //webpack -p压缩代码
        // 压缩 情怀至上
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true
        }
    }),

    //将css从合并后的bundle.js文件中拆分出来
    new ExtractTextPlugin('app.css'),

    //提取公共js代码
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor',filename:'vendor.js'}),
    ]
}
```



在实际开发一般分为webpack.develop.config.js和webpack.puiblish.config.js两个配置文件（注意此时不能使用webpack.config.js）

需配置:

```json	
   "develop":"webpack --config webpack.develop.config.js -p",
    "publish":"webpack --config webpack.publish.config.js"
```



#### 补充点:

> 
>
> url-loader的limit配置项用来规定打包前图片小于某个临界值时转为base64格式加载图片，否则按图片本身加载,
>
> 这个值的单位是bite,注8bite=1byte,1B = 1byte 
>
> 
>
> babel-loader是webpack中的用于把es6转为es5的加载器
>
> 
>
> 常用的服务器插件:
>
> webpack-dev-server可以监听文件的变化以实现自动打包
>
> 
>
> socket是ip+端口号
>
> 
>
> webpack插件分两种:自身模块(optimize中,不需要引入)，第三方需要引入
>
> 
>
> #### 加载器是在打包前运行,插件是在打包后运行
>
> 
>
> ExtractTextPlugin将css从合并后的bundle.js文件中拆分出来
>
> 
>
>  webpack.optimize.CommonsChunkPlugin提取公共js代码











# 父子组件传值，子组件需要在父组件中引用并声明

### 父组件给子组件传值

```vue
<template>
  <div>
    <!-- <img src="./images/demo.jpg" alt=""> -->
      <!-- 引用子组件,并以属性的形式传入父组件的值 -->
      <Son :yy="1" :aa="msg"></Son>
      App.vue
  </div>
  <!-- 注意：模板必须有一个根元素 -->
</template>

<script>
//引入子组件
import Son from "./Son.vue";
export default {
  //将组件内的变量等暴露出去
  
  data:function(){
    return {
      msg:'给son的礼物'
    }
  },
  components:{
    //需在父组件中声明子组件
    // Son:Son//别名一致可以只写一个
    Son
  }
}
</script>

<style>
div{
    color:red;
}
</style>
```

```vue
<template>
  <div>Son.vue</div>
</template>
<script>
export default {
  data:function(){
      return {

      }
  },
  //将父组件传来的值绑定在子组件上
  props:['yy','aa'],
  created:function(){
      //实例化代理后获取
      console.log(this.aa,this.yy)
  }
}
</script>
```





### 子组件给父组件传值

```vue
<template>
  <div>
      Son.vue
      <!-- 点击向父组件以事件标识的方式传递值 -->
    <button @click='hello'>按钮</button>

  </div>
</template>
<script>
export default {
  data:function(){
      return {
          msg:'发给App的数据'
      }
  },

  methods:{
      hello:function(){
          //利用该实例的$emit方法传递一个事件标识，值为子组件的数据
          this.$emit('sendApp',this.msg)
      }
  }
  
}
</script>
```

```vue
<template>
  <div>
      <!-- 接受子组件传来的标识 -->
      <Son @sendApp="world"></Son>
      App.vue
  </div>
  <!-- 注意：模板必须有一个根元素 -->
</template>

<script>
//引入子组件
import Son from "./Son.vue";
export default {
  //将组件内的变量等暴露出去

  methods:{
    //子组件标识的事件,参数为子组件的数据
    world:function(data){
      console.log(data)
    }
  },
  components:{
    //需在父组件中声明子组件
    // Son:Son//别名一致可以只写一个
    Son
  }
}
</script>

<style>
div{
    color:red;
}
</style>
```





# 兄弟组件传值

需要一个邻居对象作为数据传输的中介者

bus.js

```javascript
//兄弟组件之间传值需要另一个实例
import Vue from 'vue'
var bus = new Vue()
export default bus
```

由A组件传向B组件

BrotherA

```vue
<template>
 <div>
     BrotherA
     <button @click="sendToB">传递给兄弟组件的值</button>
</div>
</template>
<script>
//引入邻居实例
import Bus from './bus'

export default {
    methods:{
        sendToB:function(){
            //借由中间实例bus将数据传过去
            Bus.$emit('flag','1111') 
        }
    }
}
</script>
```

BrotherB

```vue
<template>
  <div>
      BrotherB
      </div>
</template>

<script>
//引入邻居实例
import Bus from './bus'

export default {
    //在页面实例化后触发
    created:function(){
        //接受中间实例中传递的值
        //第一个参数为标识
        //第二个回调函数的参数是传递过来的值
        Bus.$on('flag',function(data){
            console.log(data)
        })
    }
}
</script>
```









# vue-router可以监听hash的变化实现单页应用的页面的切换

> //通过path匹配对应组件
>
> //在vue实例中通过router属性匹配vue-router,可以简写
>
> //vue-router会给所有组件添加一个"坑"--router-view
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <meta http-equiv="X-UA-Compatible" content="ie=edge">
>     <title>Document</title>
> </head>
> <body>
>     <div id="app">
>         <a href="#/news">跳转到news</a>
>         <a href="#/share">跳转到share</a>
>         <!-- 使用vue-router 提供的router-view来占位 -->
>         <router-view></router-view>
>     </div>
>     <script src="./node_modules/vue/dist/vue.js"></script>
>     <!-- vue-router依赖vue -->
>     <script src="./node_modules/vue-router/dist/vue-router.js"></script>
>
>     <script>
>     var news = Vue.component('news',{
>         template:"<h1>我是news页面</h1>"
>     })
>     var share = Vue.component('share',{
>         template:"<h1>我是share页面</h1>"
>     })
>
>    
>     //创建路由监听页面hash值的变化以切换到不同的组件
>     var router = new VueRouter({
>         routes:[
>             //通过path匹配不同的组件
>             {name:'news',path:'/news',component:news},
>             {name:'share',path:'/share',component:share},
>         ]
>         
>     })
>
>     var vm = new Vue({
>         el:'#app',
>         //需要引入当前实例所需的路由
>         router,
>         data:function(){
>             return {
>                 
>             }
>         }
>     }) 
>     </script>
> </body>
> </html>
> ```
>

> 
>
> 路由后可以接受参数（/参数）,在设置path时通过/:形参表示,同时可以在对应path匹配的组件中通过 this.$route.params.形参 访问
>
> ```html
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0">
>     <meta http-equiv="X-UA-Compatible" content="ie=edge">
>     <title>Document</title>
> </head>
> <body>
>     <div id="app">
>         <a href="#/news/123">跳转到news</a>
>         <a href="#/share">跳转到share</a>
>         <!-- 使用vue-router 提供的router-view来占位 -->
>         <router-view></router-view>
>     </div>
>     <script src="./node_modules/vue/dist/vue.js"></script>
>     <!-- vue-router依赖vue -->
>     <script src="./node_modules/vue-router/dist/vue-router.js"></script>
>
>     <script>
>     var news = Vue.component('news',{
>         created:function(){
>             //可以获取调用该组件的路由传来的参数
>             console.log(this.$route.params)
>         },
>         template:"<h1>我是news页面</h1>"
>     })
>     var share = Vue.component('share',{
>         template:"<h1>我是share页面</h1>"
>     })
>
>    
>     //创建路由监听页面hash值的变化以切换到不同的组件
>     var router = new VueRouter({
>         routes:[
>             //通过path匹配不同的组件,在路由中传参数
>             {name:'news',path:'/news/:id',component:news},
>             {name:'share',path:'/share',component:share},
>         ]
>         
>     })
>
>     var vm = new Vue({
>         el:'#app',
>         //需要引入当前实例所需的路由
>         router,
>         data:function(){
>             return {
>                 
>             }
>         }
>     }) 
>     </script>
> </body>
> </html>
> ```
>
> 
>
> router中的linkActiveClass可以设置router-link点中时的样式
>
> 在路由中配置子组件:{name:'share',path:'/share',component:share,children:[组件1,组件2]}
>
> router-link可以代表a标签（仅仅指href中为hash值#/asdas），在路由传值时，需要按如下方式写
>
> <router-link v-bind="{to:'请求地址/'+变量}"></router-link>
>
> 



















# Mint-ui（Element-UI）是基于vue的组件,而Mui是一个静态的框架直接引入就可以

# mockPlus是做原型图的





在es6中形如methods:{getMax:function(){}}可以简写为methods:{getMax () {}}



# vue-resource:相当于axios，可以进行数据请求

> 只要全局导入所有组件就都可以用
>
> ```javascript
> import VueResource from 'vue-resource'
> Vue.use(VueResource)
> ```
>
> 
>
> 子组件通过this.$http.get(url).then()可以请求
>
> get请求:
>
> - this.$http.get(url,{params:{参数}},{emulateJSON:true}).then()
>
> - this.$http.get(url?参数).then()
>
>
> post请求:
>
> - this.$http.post(url,{参数}，{emulateJSON:true}).then()
>
> - jsonp请求:
>
>
> this.$http.jsonp(url).then()
>











在vue中用v-for渲染列表数据时需要给一个key值以提高性能

在style标签中设置scoped可以限制样式只在当前组件内生效









# **background-repeat**扩展 

> round：
>
> 背景图像自动缩放直到适应且填充满整个容器。（CSS3）
>
> space：
>
> 背景图像以相同的间距平铺且填充满整个容器或某个方向。
>
> 
>
> 





#  render:createElement => createElement(App)可以直接将模板渲染至页面而不需要在页面里面引入模板标签(router-view)







# Console.warn()

向 web 控制台输出一条警告信息











# 使用moment.js组件处理时间格式，也可以处理时差

moment(val).format(formatStr)











# Flex

> `align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
>
> `flex-grow`默认为0指默认空间剩余盒子不会放大,设置为2时会占一半
>
> `order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为0
>
> `flex-shrink`默认为1指默认超出空间时会缩小，设置为0保持原先大小不会改变
>
> `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小













# 混合开发的一种:

> 前端辅助:在app上加载web前端页面需要在webview(浏览器内核，没办法调用底层功能)中写,调用底层时是向后台发送一个假请求,webview可以监听页面内发送的所有请求,ios或android后台就可以通过这些假请求调用底层设备
>
> 前端独立开发:
>
> 调用设备底层需要借由5+Runtime![Snipaste_2017-11-18_10-56-15](D:\myProjectRoot\github\stageTen\笔记\img\Snipaste_2017-11-18_10-56-15.png)
>
> 或者使用cordoya（phogap）













# Ping++支付控件https://www.pingxx.com/docs/

![charge_paymentflow](D:\myProjectRoot\github\stageTen\笔记\img\charge_paymentflow.png)

```
pingpp.createPayment(charge, function(result, err){
    console.log(result);
    console.log(err.msg);
    console.log(err.extra);
    if (result == "success") {
        // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
    } else if (result == "fail") {
        // charge 不正确或者微信公众账号支付失败时会在此处返回
    } else if (result == "cancel") {
        // 微信公众账号支付取消支付
    }
});
```









# tcp

## tcp连接的特性:

> 稳定可靠
>
> 传输慢
>
> 三次握手（连接）（你好，你好，我准备好了）
>
> 四次挥手(断开)（再见，再见，拜拜，拜拜）
>
> 所有的链接的基本都是tcp链接



## udp连接的特性:

> 不稳定
>
> 传输快
>
> 常用于公屏软件(不停的拍照，将照片分割，然后不停的打包，然后输送，不停的的接收，没有三次招手，四次挥手，出现了马赛克，就是丢包现象。)







# 推送

> 推送是长连接(只指移动端，只有关机才会断掉)，普通请求是短链接（连接）
>
> 苹果只允许自身服务器推送,第三方若要推送则先发给苹果服务器再由其推送







# im功能

> 腾讯云，阿里云，百度云，网易云，极光IM







# 懒加载是加载停留的当前显示页面的图片，在滚动过程中并不会显示









# 手机端页面跳转方式:

2号页面撤出称为pop,1号页面推入(2号页面被销毁)

1号页面撤出，2号页面推入称为push(1号页面被推入了缓存栈而未被销毁)

返回上一页this.$router.go(-1)









# 在事件中设置路由(匹配的是路由设置中的name)

this.$router.push({name:'',params:参数})









# 贝塞尔曲线:

> 越抖越快http://cubic-bezier.com/
>
> cubic-bezier(.3,.93,.91,.08)
>









# vue过渡动画预设的钩子方法

```vue
<transition
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"
  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
>
  <!-- ... -->
</transition>
```

```javascript
methods: {
  // --------
  // 进入中
  // --------
  beforeEnter: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  enter: function (el, done) {
    // ...done执行后就会立即完成动画
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },
  // --------
  // 离开时
  // --------
  beforeLeave: function (el) {
    // ...
  },
  // 此回调函数是可选项的设置
  // 与 CSS 结合时使用
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

> 这些钩子函数可以结合 CSS `transitions/animations` 使用，也可以单独使用。
>
> 1. 当只用 JavaScript 过渡的时候，** 在 enter 和 leave 中，回调函数 done 是必须的 **。否则，它们会被同步调用，过渡会立即完成。
> 2. 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。
> 3. 注意：钩子函数只会触发一次，所以若想让enter反复触发，必须在其中声明一个变量
>

# 











# ES6 模块export default(或export var,export function )与 CommonJS 模块moudle.exports完全不同。

> 它们有两个重大差异。
>
> - CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
> - CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
>
> 第二个差异是因为 CommonJS 加载的是一个对象（即`module.exports`属性），该对象只有在脚本运行完(node的模块)才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成











# vuePicturePreview[移动端Vue.js图片预览插件](https://segmentfault.com/a/1190000009060116)

```vue
  <lg-preview class="preview"></lg-preview>
  	<img id="pre" v-for="(img,index) in imgs" v-preview="img" :src="img" :key="index">
```













# v-cloak(解决闪烁问题)

**用法：**

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 模板标签直到实例准备完毕。

**示例：**

```html
[v-cloak] {
display: none;
} 
<div v-cloak>
{{ message }}
</div>
```

<div> 不会显示，直到编译结束。

**原理：**

带有v-clock的的元素设置为display:none，隐藏掉，在等到vue解析到带有v-clock的节点时候，会把attribute和class同时remove掉，这样就可以实现防止节点的闪烁。

**实例：**

```html
//example1:
<span>{{price}}</span>
//example2: 
<span v-bind="price"></span>
//example3: 
<span v-cloak>{{price}}</span>
```



上例子2和例子3实现的效果是一样的，而例子1在vuejs解析{{price}}之前，用户是可以看到"{{price}}"这个字符串的。而例子2和例子3不会有这种闪烁的情况。







# 监听路由变化来判断是否显示返回按钮

```js
	watch:{
		//监听路由的新的跳转值,不是/home则都应该有返回上一页
		'$route':function(newVal,oldVal){
			// console.log(newVal)
			// console.log(oldVal)
			if(newVal.path != '/home'){
				this.isShow = true;
				// console.log(this.isShow)
			}else{
				this.isShow = false;
			}
		}
	}
```

