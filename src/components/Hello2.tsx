import * as React from "react";

interface HelloBox {
    width: number;
    height: number;
    pickCard(x: number): number;
}
interface HelloBox {
    //Subsequent property declarations must have the same type.  
    //Property 'height' must be of type 'number', but here has type 'string'
    //height: string;
    scale: number;
    pickCard(x: string): string;
}
let box: HelloBox = {
    height: 5,
    width: 6,
    scale: 10,
    pickCard: (x: any) => x
};


// namespace Animals {
//     export class Zebra { }
// }
// namespace Animals {
//     export interface Legged { numberOfLegs: number; }
//     export class Dog { }
// }
// //等同于
// // namespace Animals {
// //     export interface Legged { numberOfLegs: number; }
// //     export class Zebra { }
// //     export class Dog { }
// // }
// let test: Animals.Legged = { numberOfLegs: 1 };


export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello2 extends React.Component<HelloProps, {}> {

    render() {
        console.log(box.pickCard(2))
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
   }
}