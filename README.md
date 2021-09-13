<div align="center">
  <h1>
    项目说明
  </h1>
</div>

该项目是我个人在公司搭建 `Vue3` 的 `Vite` 项目时提取出来的公用模板，在为公司搭建项目时发现了许多项目都存在相同的配置，比如：eslint、stylelint、commitlint、ts、tailwind、husky、postcss、commitizen、tsx 等一大堆十分繁琐的配置…

每次新建一个项目都要配这么一大堆玩意真是令人头秃，vite 创建出来的 vue 项目目前只是一个非常简陋的模板，它不像 vue-cli 那样每次创建项目时可以自己选择你想要的配置然后再为我们生成一个比较完整的项目。但其实每次我选的都是那几项，虽说 vue-cli 以后可能会用 vite 来进行重构，让我们在搭建 vite 项目时也能自己选装配。但目前看来还是遥遥无期，因为前段日子我看 vue-cli 正在测试的新版本是用 webpack5 来作为底层的，我这个项目倒也不是想填补 vue-cli 到 vite 这段期间的空白，只是为了自己再新建个什么项目的时候不用再配那么一大堆麻烦的东西而已。但我觉得我配的这些东西也许其他人也用得到，所以特意写一下用法：

> npx degit GetKnowledgeByGitHub/vite 自己的项目名

比方说我们想在桌面创建一个叫 my-fxxking-app 的项目

那么我们就打开命令行并来到 desktop 这个文件夹，输入：`npx degit GetKnowledgeByGitHub/vite my-fxxking-app`即可。接下来再来到`my-fxxking-app`这个文件夹内，`npm install`安装依赖就行。

虽然`GetKnowledgeByGitHub`这一串字母看起来很多，但其实并不难记，相信做前端的都能记得住`getElementById`吧？其实就是把`Element`换成了`Knowledge`、把`Id`换成了`GitHub`而已，本意也是希望可以通过`GitHub`获取到更多的知识。

其实有和我相同想法(*搭建一个比较完整的 vite 项目模板*)的人不在少数，我也并不是第一批使用 vite 的人，所以已经有很多可以用的模板了，他们都在 [Awesome Vite](https://github.com/vitejs/awesome-vite#templates) 里，如果觉得我的模板不能满足你的需求或是信不过我的话，也可以直接进入到 [Awesome Vite](https://github.com/vitejs/awesome-vite#templates) 里自行寻找。

> 由于本项目是要在我们公司内部使用的，所以当我们发现 bug 或者哪些不太好用的地方时也会及时的进行更新维护。

本项目可以使用 `Vue3` 的 `jsx/tsx` 写法(*本人比较喜欢 tsx 语法*)，但并不影响大家写`.vue`文件，都已经配置好了，甚至可以混用。

> ⚠️ 本项目默认没添加任何的 css 预处理器，如有需要直接 `npm i sass` 或 `npm i less` 即可。

# 强烈安利

相信很多朋友已经听说过`tailwindcss`了，没听过也不要紧，它的字面意思是`顺风CSS`。光听名字可能猜不到这是干嘛的，其实就是`原子化CSS`。它的口碑两极分化很严重，喜欢它的特别喜欢、讨厌它的又特别讨厌：

```html
<!-- 正常写法 -->
<template>
  <h1 class="title">GetKnowledgeByGitHub</h1>
</template>

<style scoped>
  .title {
    margin: auto;
    color: white;
    font-size: italic;
  }
</style>
```

用了 `tailwindcss` 后的写法：

```html
<!-- tailwindcss 写法 -->
<template>
  <h1 class="m-auto text-white italic">GetKnowledgeByGitHub</h1>
</template>
```

其实刚开始看到这种写法时我是拒绝的，这简直太蠢了！我跟好多人的想法一样：这不就是把本该写在`<style>`标签里的 css 写在了`html`里嘛！那当样式复杂时岂不是会变成这样：

```html
<!-- tailwindcss 写法 -->
<template>
  <a class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-500 rounded-md
    cursor-pointer
    hover:bg-indigo-600">Button</a>
</template>
```

跟个什么一样！所以一开始是我属于反对派的。直到后来我接盘了个项目，这个项目的特点是样式不用大改，但经常是这个字体小一点、那个行高大一点、这边边距加个2、那边边框变个色啥的… 有时候碰到很庞大的好几百行的组件，每次一改样式可要了我的老命：先在最顶上找到 DOM，然后再用鼠标滚动到最底下，有类名的就直接去那个类名里面改。但这一改不要紧，居然把别的地方样式也给影响了，原来是因为这个类在别的 DOM 上也有用到。那就给它起个新的类名吧！想来想去也不知道起啥名好：无非就是变个色或者加个外边距，于是乎起了个类名叫：mt-2，意为`margin-top: 2px`。

后来这样的类多了，写在 vue 组件里实在是冗余，于是就提取出来成为公共 css。一方面是很麻烦，另一方面其他同事也很可能不会去看你的 `global.css`，那么当同事碰到类似的事时，相同的一幕又会重复上演…

于是乎我想起了曾为人诟病的`tailwindcss`，用过一段时间后发现原来以前是我误会它了，以前我们大家都以为样式就必须写在`html`标签中：

```html
<!-- tailwindcss 写法 -->
<template>
  <a class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-500 rounded-md
    cursor-pointer
    hover:bg-indigo-600">Button</a>
</template>
```

但实际上它并不影响我们写成这样：

```html
<!-- tailwind 也可以这样写 -->
<template>
  <h1 class="title">GetKnowledgeByGitHub</h1>
</template>

<style scoped>
  .title {
    margin: auto;
    color: white;
    font-size: italic;
  }
</style>
```

它不过就是相当于为我们定义了一大堆常用的全局`css`而已，想用就用：

```html
<!-- 想用的话就在 h1 标签的 class 属性里加入 tailwind 定义好的类名 -->
<template>
  <h1 class="title mt-2">GetKnowledgeByGitHub</h1>
</template>

<style scoped>
  .title {
    margin: auto;
    color: white;
    font-size: italic;
  }
</style>
```

不想用就拉倒，对我们的项目没有什么侵入性。而当这种情况时也是有对应的解决方案的：

```html
<!-- tailwindcss 写法 -->
<template>
  <a class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out
    bg-indigo-500 rounded-md
    cursor-pointer
    hover:bg-indigo-600">Button</a>
</template>
```

解决方案：

```html
<template>
  <a class="btn">Button</a>
</template>

<style scoped>
  .btn {
    @apply inline-block px-4 py-3
      text-sm font-semibold text-center
      text-white uppercase transition
      duration-200 ease-in-out
      bg-indigo-500 rounded-md
      cursor-pointer
      hover:bg-indigo-600;
  }
</style>
```

虽然这样看上去并不是个好主意，但也是可选的嘛！而且这样可以封装常用样式制成 `tailwind` 的插件，比如我比较喜欢的一个：[daisy-ui](https://daisyui.com/)。

而且`tailwind`的`treeshaking`我已经配好了，如果你不用的话最终只会生成一小部分必要的全局CSS，如：去掉浏览器给各种标签加的外边距、去掉`li`标签默认的小圆点等… 这本来也是我们所需要的。而当你用了`tailwind`的话，最终只会把你用到的那部分打包进去，当然肯定会有人担心`心智负担`的问题，如果屏幕前的你用的是`vscode`的话，直接在插件市场里搜`tailwind`，排在第一的`Tailwind CSS IntelliSense`就是，直接安装即可，会有智能提示的。

`tailwindcss`中文官网：[www.tailwindcss.cn](https://www.tailwindcss.cn/docs/box-sizing)

同时还推荐安装`vscode`的`eslint`及`stylelint`插件，考虑到本项目使用的 `airbnb` 规范(*一种较为严格的 eslint 规范*)可能会让一些人不太适应，比如：必须写分号、箭头函数哪怕只有一个参数也要用小括号括起来等…

所以在本项目的根目录下的`.vscode`文件夹的`setting.json`里配置了当文件保存时自动修复，当我们习惯了不写分号的写法时，不写也没关系，只要一保存文件自动就给加上分号，CSS 文件也是一样。如果你不喜欢这样可以直接删掉`.vscode`这个文件夹。
