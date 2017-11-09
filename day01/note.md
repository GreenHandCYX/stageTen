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

MVVM会将公用的controller的代码进行封装，减轻在处理类似请求时控制层的压力



# 库和框架通常一致

> 框架:大而全
>
> 库：小而精



# VUE概念

> 1. vue专注于view层，是一个**渐进式框架**（只要核心的就可以，其他的按需引入）![v2-cc3ec77bdca6da1a7e276918d894490b_hd](D:\myProjectRoot\github\stageTen\day01\v2-cc3ec77bdca6da1a7e276918d894490b_hd.jpg)
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



![Snipaste_2017-11-09_11-36-35](D:\myProjectRoot\github\stageTen\day01\Snipaste_2017-11-09_11-36-35.png)

npm run dev 运行package.json中的scripts中的自定义 命令dev







# 数据绑定:

## 单向

> 1. 模型变化过后，自动同步到界面上；
> 2. 一般<u>纯展示型的数据会用到单项数据绑定</u>；
> 3. 使用<u>表达式的方式都是单向的</u>



![Snipaste_2017-11-09_14-42-45](D:\myProjectRoot\github\stageTen\day01\Snipaste_2017-11-09_14-42-45.png)



## 双向数据绑定

> 1. <u>两个方向的数据自动同步</u>：
> 2. 模型发生变化自动同步到视图上；
> 3. 视图上的数据发生变化过后自动同步到模型上；



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
        //method用来定义方法
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

