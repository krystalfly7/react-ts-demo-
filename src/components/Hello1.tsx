// import * as React from "react";
import React from 'react'
import * as _ from "lodash";
import { identityT } from '../modules/test2';
let output1: GenericIdentityFn = identityT

export interface HelloProps {
  compiler: string,
  framework: string,
  onClick? (event: React.MouseEvent<HTMLDivElement>): void,
}
export type UserState =  {
  name: string,
  age: number
}

export interface HelloState extends UserState{
  inputValue?: string
}

// 'HelloProps' describes the shape of props.
// 'HelloState describes the shape of state.
export default class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
      super(props);
      this.state = {
        name: 'krystal',
        age: 10,
      };
    }

    addOneAge = () => {
      this.setState({ age: this.state.age  + 1 });
    }
    // React 的声明文件提供了 Event 对象的类型声明
    handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      this.setState({ inputValue: value });
    }

    testParams = (params: UserState) : number => {
      console.log(params)
      return 1
    }

    // 泛型，使用this.testTparams<string>('sss') 或不指定类型this.testTparams('sss')
    testTparams = <T extends {}> (value: T) => {
      return value;
    }

    testLodash = (): string => {
      const other = _.concat([], 2, [3]);
      console.log(other)
      return other.join();
    }

    render() {
        const { name, age, inputValue } = this.state;
        return (
          <div>
            <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
            <div>我的名字是{name}，我今年{age}岁</div>
            <div onClick={this.addOneAge}>增加一岁</div>
            <div>输入框的值是{inputValue}</div>
            <input type="text" onChange={(e) => this.handleInput(e)}></input>
            <div onClick={this.props.onClick}>触发父组件的click事件</div>
            <div>请给我我给你的值{this.testTparams(2)}</div>
            <div>测试第三方包的引入lodash{this.testLodash()}</div>
          </div>
        );
   }
}
