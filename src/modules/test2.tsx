// 泛型函数
export function identity1(arg: number): number {
    return arg;
}
export function identity2(arg: string): string {
    return arg;
}
export function identityT <T>(arg: T): T {
    return arg;
}
// 泛型接口
export interface GenericIdentityFn {
   <T>(arg: T): T;
}
export interface GenericIdentityFn2<T> {
  (arg: T): T;
}
let myIdentity: GenericIdentityFn = identityT;
// let myIdentity: GenericIdentityFn<number> = identityT;
console.log(myIdentity)
//泛型类
export class GenericNumber<T> {
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber)
let myGenericNumber2 = new GenericNumber<string>();
myGenericNumber2.zeroValue = 'ss';
myGenericNumber2.add = function(x, y) { return x + y; };
console.log(myGenericNumber2)
console.log(myGenericNumber2.add(myGenericNumber2.zeroValue, "test"));