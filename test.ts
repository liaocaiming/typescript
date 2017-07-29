// 定义数组
let list: number[] = [1, 2, 3];
let arr: Array<number> = [1, 2, 3];

// 定义元祖;
let x: [string, number];
x = ['vvv', 66, 888, 9999]; // 元祖可以跨界, 但是跨界的元素必须是string和number;

// 枚举;
enum color { Red = 1, Green, blue };
let c = color.Green;
let colorName: string = color[2];
console.log(color[1]);
console.log(colorName);

// any 
let notsure:any = 9999 // 用any不会做任何检测;
notsure.toFixed(2) 

// void;
function test ():void {
	console.log(666)
}
let aa:void = undefined; // 定义aa:void的变量赋值只能付给undefined,  原文有误, 不能付给null;

// never 永远不存在值的类型, 是任何类型的子类;
function error():never {
	throw new Error('6666');
}

// 类型断言: 你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型;
let aaa:string = 'liaocaiming';
let len:number = (<string>aaa).length;
let leng:number = (aaa as string).length;

//变量声明;
let a = 10; // 不能同一个作用申明两次, 如 let a = 20;  会报错的;
let [, second, , fourth] = [1, 2, 3, 4];
console.log(second, fourth, '666')

// 赋值;
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults }; // 后面的会覆盖前面的;
console.log(search, 'search')

// 交叉类型（Intersection Types）
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

let target = extend({a: 1}, {b: 2})

// 联合类型（Union Types）
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
			  console.log(Array(padding + 1), 11)
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
var a1 = padLeft("Hello world", 4)
console.log(a1)


