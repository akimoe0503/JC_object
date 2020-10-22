console.log('--------------関数--------------');
// 関数の書き方
// function 関数名(){
// 	処理
// }
function myalert(){
// 	alert('自作関数からhello');
// アラートを表示したあとにも自由に処理を追加できる

	let hantei = confirm('このボタンを押してもいいですか？');
	console.log(hantei);


// 問題
// OKボタンが押されたら、「大丈夫」、
// キャンセルが押されたら「やり直し」
// とコンソールに表示しましょう


// 文字の変え方
let messageSpan = document.getElementById('message');
// messageSpan.textContent = '大丈夫';

// 問題
// OKボタンが押されたら、「大丈夫」、
// キャンセルが押されたら「やり直し」
// とid="message"のspanタグの部分に表示しましょう

if (hantei === true) {
	console.log('大丈夫');
	messageSpan.textContent = '大丈夫';
	messageSpan.style.color = 'blue';
	message.style.fontSiza = '18px';

} else {
	console.log('やり直し');
	messageSpan.textContent = 'やり直し';
	messageSpan.style.color = 'red';
	message.style.fontSiza = '24px';
}

}

console.log('--------------関数(引数付き)--------------');
// 関数の書き方
// function 関数名(引数1,引数2,...){
// 	処理
// }
// 関数とは複数の処理を一つにまとめて名前をつけたもの
// 引数とは処理を行うために必要な情報
// alert(表示したい文字)　この場合、表示したい文字が引数に当たる

function myalert2(displayMessage){
	alert(displayMessage);
}

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:printHoge
// 処理内容：「Hoge」とコンソールに表示する

function printHoge(msg){
	console.log(msg);
}
// 作った関数を実行
printHoge('Hoge'); 

// 下記もありだが上記がgood
// function printHoge(){
// console.log('Hoge');

// // 作った関数を実行
// printHoge(); 

// ---------------------------------
// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:prinNum
// 引数：1つの数値
// 処理内容：引数で受け取った数値をコンソールに表示する


function prinNum(msg){
	console.log(msg);
}
prinNum(1);

// ---------------------------------
// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:printkuku
// 引数：1つの数値
// 処理内容：引数で受け取った数値の九九(1から9までかけた数)をコンソールに表示する
// 引数に1を指定したら、1の段の計算結果がコンソールに表示されるようにする
// 引数に2を指定したら、2の段の計算結果がコンソールに表示されるようにする
// for文は1個でOK (使わなくてもOK)

function printkuku(kuku){
	for (let i =1; i <=9; i++){
		console.log(i * kuku);
	}
}
printkuku(3);

// ------------------
// function printkuku(kuku){
// 	let kotae = kuku * 1;
// 	console.log(kotae);
// 	kotae = kuku *2;
// 	console.log(kotae);

// ---------------------------------
// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:printkakezan
// 引数：2つの数値
// 処理内容：引数で受け取った2つの数値の掛け算の答えをコンソールに表示する

function printkakezan(num1,num2){
	console.log(num1 * num2);
}

printkakezan(200,4);

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:prontIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力され、
// 奇数の場合は「奇数です」と出力する

function prontIsEven(num){
if (num % 2 === 0){
	console.log('偶数です。');
} else {
	console.log('奇数です。');
}

}

prontIsEven(2);
prontIsEven(9);

// 以下の関数を作成して、作成した関数を実行してください。

// 関数名:prontMessage
// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する
// どらえもん,4 　を指定したら、以下が正解
// どらえもん
// どらえもん
// どらえもん
// どらえもん

function prontMessage(dora, num){
	for(let i =1; i <= num; i++){
		console.log(dora);
	}
}

prontMessage('どらえもん',7);