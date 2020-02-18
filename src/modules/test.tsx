export interface Box {
    width: number;
}
export interface Box {
    height: number;
}
//等价
export interface Box {
    width: number;
    height: number;
}

export namespace Shape {
    export function square(x: number){
        return x * x
    }
}
export namespace Shape {
    const pi = Math.PI
    export function cricle(r: number){
        return pi * r ** 2
    }
}
// 等价
// export namespace Shape {
//     export function square(x: number){
//         return x * x
//     }
//     const pi = Math.PI
//     export function cricle(r: number){
//         return pi * r ** 2
//     }
// }
export class Album {
    test?: string;
    label!: Album.AlbumLabel;
}
export namespace Album {
    export class AlbumLabel { }
}

export function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}
export namespace buildLabel {
    export let suffix = "";
    export let prefix = "Hello, ";
}
//console.log(buildLabel("Sam Smith"));
// 上述合并常用于创建函数、类稍后扩展它增加一些属性


// interface Cloner {
//     clone(animal: Animal): Animal;
// }

// interface Cloner {
//     clone(animal: Sheep): Sheep;
// }

// interface Cloner {
//     clone(animal: Dog): Dog;
//     clone(animal: Cat): Cat;
// }

export namespace Animal {
    let haveMuscles = true;
    export function animalsHaveMuscles() {
        return haveMuscles;
    }
}
export namespace Animal {
    export function doAnimalsHaveMuscles() {
        return haveMuscles;  // Error, because haveMuscles is not accessible here
    }
}

export function identityT <T>(arg: T): T {
    return arg;
}
