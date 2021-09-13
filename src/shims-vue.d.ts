/* eslint-disable */
declare namespace JSX {
  interface IntrinsicAttributes extends ReservedProps {
    class?: string | (string | { [p: string]: boolean })[],
    style?: Record<string, any>
  }
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.png' {
  const content: ElementAttrs<ImgHTMLAttributes>
  export default content
}

declare module "snabbdom-to-html/modules/style" {
  import {Module} from "snabbdom-to-html-common";
  let styleModule: Module;
  export = styleModule;
}

declare module "snabbdom-to-html/modules/class" {
  import {Module} from "snabbdom-to-html-common";
  let classModule: Module;
  export = classModule;
}

declare module "snabbdom-to-html/modules/attributes" {
  import {Module} from "snabbdom-to-html-common";
  let attrModule: Module;
  export = attrModule;
}

declare module "snabbdom-to-html/init" {
  import {VNode, Module, ModuleIndex} from "snabbdom-to-html-common";
  function init (modules: Module[]): (vnode: VNode) => string;
  export = init
}
