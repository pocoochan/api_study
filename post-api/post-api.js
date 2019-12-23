'use strict';

// APIのURL
const urlSignUp = "https://teachapi.herokuapp.com/sign_up";

// Headersの用意
let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// bodyの用意
let myBody = {
  sign_up_user_params: {
    name: "テスト",
    bio: "自己紹介",
    email: "email",
    password: "password",
    password_confirmation: "password"
  }
};
console.log(myBody)
let bodyData = JSON.stringify(myBody);
console.log(bodyData)

// リクエストオプションの用意
let requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: bodyData,
};
console.log(requestOptions)


// fetch実行 問い合わせしてる
fetch(urlSignUp, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))