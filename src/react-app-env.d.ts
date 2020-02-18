// 一个 /// <reference types="..." />指令则声明了对某个包的依赖。
//对这些包的名字的解析与在 import语句里对模块名的解析类似。 可以简单地把三斜线类型引用指令当做 import声明的包
//react-scripts 是一个生成的项目所需要的开发依赖
//react-scripts 是唯一的 额外的 构建依赖在你的package.json中，你的运行环境将有每一个你需要用来构建一个现代React app应用程序。
//你需要的依赖，和在配置文件中编写的配置代码，react-scripts 都帮你写了，比如：react-scripts帮你自动下载需要的
//webpack-dev-server 依赖，然后react-scripts自己写了一个nodejs服务端的脚本代码 start.js来 实例化 WebpackDevServer ，
//并且运行启动了一个使用 express 的Http服务器，现在你只需要专心写src源代码就可以了
/// <reference types="react-scripts" />


declare function myLib(a: string): string;
declare function myLib(a: number): number;

declare interface myLib {
    name: string;
    length: number;
    extras?: string[];
}
declare namespace myLib {
    //~ We can write 'myLib.timeout = 50;'
    let timeout: number;
    //~ We can access 'myLib.version', but not change it
    const version: string;
    //~ There's some class we can create via 'let c = new myLib.Cat(42)'
    //~ Or reference e.g. 'function f(c: myLib.Cat) { ... }
    class Cat {
        constructor(n: number);
        //~ We can read 'c.age' from a 'Cat' instance
        readonly age: number;
        //~ We can invoke 'c.purr()' from a 'Cat' instance
        purr(): void;
    }
    //~ We can declare a variable as
    //~   'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
    interface CatSettings {
        weight: number;
        name: string;
        tailLength?: number;
    }
    //~ We can write 'const v: myLib.VetID = 42;'
    //~  or 'const v: myLib.VetID = "bob";'
    type VetID = string | number;
    //~ We can invoke 'myLib.checkCat(c)' or 'myLib.checkCat(c, v);'
    function checkCat(c: Cat, s?: VetID);
}