import { defineComponent } from 'vue';
import { FcWaveFilter, FcBubbles } from 'fancy-components';

/* eslint-disable no-new */
new FcWaveFilter(); // 相当于全局注册了组件 注：web components 没有局部注册组件这一说
new FcBubbles(); // 相当于全局注册了组件 注：web components 没有局部注册组件这一说
// 如果对这两个组件感兴趣的话可以去 B 站搜索：前端学不动 这位 up 主
// 他的视频里有讲 css-doodle 和 fancy-components
// 我也是从那里学到的

export default defineComponent(() => () => (
  <>
    <fc-bubbles Click class="fixed inset-0 m-auto w-60 h-60 z-10 cursor-pointer"
      style={{ '--color': '#f7ef66' }}
    >
      <fc-wave-filter color="#E7CF63" delay=".3" class="fixed inset-0 m-auto w-80 h-80">
        <img src="src/assets/logo.svg" />
      </fc-wave-filter>
    </fc-bubbles>

    <css-doodle class="fixed inset-0 m-auto w-11/12">
      @grid: 1 / 90vmin;
      border: 1.2vmin solid #E7CF63;
      background: @svg(
        viewBox: 0 0 200 200;
        preserveAspectRatio: none;
        path {'{'}
          fill: none;
          vector-effect: non-scaling-stroke;
          stroke: #E7CF63;
          stroke-width: 12;
          stroke-linecap: square;

          d: M 6 8     @p(h10 v26 h-10 v-10 h32 v-16 h10 v5 h10 v-5 h42)
            M 6 8     @invert.@lp
            M 194 8   @flipH.@lp
            M 194 8   @flipH.@invert.@lp
            M 194 192 @flip.@lp
            M 194 192 @flip.@invert.@lp
            M 6 192   @flipV.@lp
            M 6 192   @flipV.@invert.@lp
        {'}'}
        );
    </css-doodle>

    <css-doodle class="fixed inset-0 m-auto animate-spin-slow">
      @grid: 1 / 60vmin;
      background: @svg(
        viewBox: -10 -10 20 20;
        fill: none;
        stroke: #E7CF63;
        stroke-width: .22;
        stroke-linecap: square;
        @M2(circle {'{'} r: @pn(9.8, 7.8) {'}'});
        path {'{'}
          d: @M16(
            M @Point(r: 9.3) A @p(10 10 0 0 1) @Point(r: 9.3; rotate: 18)
            M @Point(r: 8.8; rotate: 4) A @lp @Point(r: 8.8; rotate: 18)
            M @Point(r: 8.3; rotate: 4) A @lp @Point(r: 8.3; rotate: 22)
            M @Point(r: 8.8; rotate: 4) L @Point(r: 8.3; rotate: 4)
            M @Point(r: 9.3; rotate: 18) L @Point(r: 8.8; rotate: 18)
            M @Point(r: 8.3; rotate: 22) L @Point(r: 9.3; rotate: 22)
          )
        {'}'}
      );
    </css-doodle>
  </>
));
