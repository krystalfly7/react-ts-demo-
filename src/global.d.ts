declare interface User1 {
  name: string
  age: number
}
declare type User2 = {
  name: string
  age: number
};
declare interface SetUser1 {
  (name: string, age: number): void;
}
declare type SetUser2 = (name: string, age: number) => void;

declare interface User3 extends User1 { 
  weight: number
}
declare type User4 = User1 & { weight: number }

declare type Name = string
declare interface Dog {
  wong();
}
declare interface Cat {
  miao();
}
declare type Pet = Dog | Cat // 联合类型
type PetList = [Dog, Pet]// 元组类型
let div = document.createElement('div');//typeof获取实例的 类型
declare type B = typeof div

declare interface User {
  name: string
}
declare interface User {
  age: number
}
declare interface Person {
  readonly name: string;
  gender: number;
  age?: number;
}
declare interface GenericIdentityFn {
   <T>(arg: T): T;
}
//https://github.com/microsoft/TypeScript/issues/22969
//现在几乎不再使用
declare namespace myLib {
  export function identityT <T>(arg: T): T {
    return arg;
  }
}

