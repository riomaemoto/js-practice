console.log('----------------練習問題----------------');


console.log('----------------1. 偶数、奇数----------------');
/**
 * 変数iが偶数の場合は偶数です。
 * 変数iが奇数の場合は奇数です。
 * と表示されるプログラムを書いてください。
 * ※条件分岐を使用します。
 * ※偶数は「2で割り切れる(2で割ったあまりが0と表すことができます)」
 */


// if文で答える場合
let i = 2;

if (i % 2 === 0) {
	console.log(`${i}は偶数です`);
}else {
	console.log(`${i}は奇数です`);
}


// switch文で答える方法
switch (i % 2 === 0){
	case true :
	console.log(i + "は偶数です");
	break;
	default:
	console.log(i + "奇数です");
	break;
}





console.log('----------------2. 合格判定----------------');
/**
 * 英語と数学の点数がそれぞれ60点以上かつ、
 * 合計点が140点以上の場合は、合格、
 * それ以外の場合は、不合格
 * と表示するプログラムを書いてください。
 */
let math = 65;
let english = 96;
let total = math + english;

if (math >=60 && english >=60 && total>=140) {
	console.log("合格");
}else {
	console.log("不合格");
}





console.log('----------------3. 数を数える----------------');
/**
 * 配列numbersの中に数字の3が何個あるか画面に表示するプログラム
 * を書いてください。
 * ※繰り返し文とif文を使用します。
 */

let numbers = [1, 3, 4, 5, 8, 9, 3, 3];
let res = 0;
for ( let number of numbers) {
	if(number === 3){
		res++;
		// res++; は res + 1; と同じ
	}
}
console.log(res);

let fruits = ["りんご", 3, "りんご", 5, 8, 9, "りんご", 3];
for (let i = 0; i <=fruits.length; i++){
	if (fruits[i] === "りんご") {
		res = res++;
	}
}
console.log(res);





console.log('----------------4. 3倍した数を表示する----------------');
/**
 * 1から10までの数字をそれぞれ3倍した数字を表示するプログラムを書いてください。
 * 3 6 9 ... 30 までが表示されればOKです
 */


for (let i = 1; i <=10; i++) {
	console.log(i * 3);
}




console.log('----------------5. FizzBuzz----------------');
/**
 * 1から100までの数字を出力するプログラムを書いてください。
 * 但し、
 * 3の倍数の場合はFizz
 * 5の倍数の場合はBuzz
 * 3と5の両方の倍数の場合はFizzBuzz
 * と表示するようにしてください。
 */

for (let i = 1; i <=100; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("FizzBuzz");
	}else if (i % 5 === 0) {
		console.log("Buzz");
	}else if (i % 3 === 0) {
		console.log("Fizz");
	}else {
		console.log(i);
	}
}



console.log('----------------6.九九----------------');
/**
 * 九九を表示するプログラムを書いてください。
 */
for (let i = 1; i <= 9; i++) {
	console.log(`-------${i}の段--------`);
	for (let j = 1; j <= 9; j++) {
		let res = i * j;
		console.log(`${i}×${j}=${res}`);
	}
}









console.log('----------------7. 繰り返しの中断、スキップ----------------');
/**
 * 九九の中で答えが30未満の数値だけ表示してください。
 */

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let res = i * j;
    if (res >= 30) {
    	continue;
    }
    console.log(res);
  }
}




// チャレンジ問題
console.log('----------------1. 女湯問題----------------');
/**
 * 顧客の年齢と性別から顧客が女湯に入れるか判断するプログラムを書いてください。
 * 顧客を表す変数customerを定義してください
 * 変数customerにはkey ageと、key genderをもつ連想配列を代入してください。
 * ageには任意の数字を入れてください。
 * genderは male, female, otherのいずれかにしてください。
 * 女湯に入れる場合は「入れます」、入れない場合は「入れない」と表示してください。
 */


let customer = {age: 28, gender: "male"};

if (customer["gender"] === "female") {
	console.log("入れます");
}else {
if(customer["age"] <= 3) {
	console.log("入れます");
}else {
	console.log("入れません");
	}
}




console.log('----------------2. 素数を表示するプログラム----------------');
/**
 * 100以下の素数を表示してください。
 * 1は素数には含みません。
 * 素数とは1とその数以外では割り切れない数です。
 * 言い方をかえると約数が2つしかない数です。
 */