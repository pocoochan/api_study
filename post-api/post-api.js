"use strict";

// APIのURL
const urlSignUp = "https://teachapi.herokuapp.com/sign_up";
const urlSignIn = "https://teachapi.herokuapp.com/sign_in";
const urlUsers = "https://teachapi.herokuapp.com/users";

// Headersの用意
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const sign_up = () => {
  const user_name = document.getElementById("user_name").value;
  const user_bio = document.getElementById("user_bio").value;
  const user_email = document.getElementById("user_email").value;
  const user_password = document.getElementById("user_password").value;
  const user_password_confirmation = document.getElementById("user_password_confirmation").value;

  // bodyの用意
  const bodyData = {
    sign_up_user_params: {
      name: user_name,
      bio: user_bio,
      email: user_email,
      password: user_password,
      password_confirmation: user_password_confirmation,
    }
  };
  const myBody = JSON.stringify(bodyData);

  // リクエストオプションの用意
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: myBody,
  };

  // fetch実行
  fetch(urlSignUp, requestOptions)
    .then(response => response.json())
    .then(result => {
      localStorage.token = json.token;
    })
    .catch(error => console.error(`Error: ${error}`));
}

const sign_in = () => {
  const user_email = document.getElementById("user_email").value;
  const user_password = document.getElementById("user_password").value;
  const user_password_confirmation = document.getElementById("user_password_confirmation").value;

  // bodyの用意
  const bodyData = {
    sign_in_user_params: {
      email: user_email,
      password: user_password,
      password_confirmation: user_password_confirmation,
    }
  };
  const myBody = JSON.stringify(bodyData);

  // リクエストオプションの用意
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: myBody,
  };

  // fetch実行
  fetch(urlSignIn, requestOptions)
    .then(response => response.json())
    .then(json => {
      localStorage.token = json.token;
      if (localStorage.token) {
        document.getElementById('login_data').innerHTML = 'ログイン中！<br> <a href="" onclick="log_out();" class="btn btn-danger btn mb-4">ログアウト</a>';
      }
    })
    .catch(error => console.log(`Error: ${error}`));
}

const log_out = () => {
  // ローカルストレージのtokenを削除
  localStorage.removeItem('token');
}

const get_users = () => {
  // トークンがなかったらログイン画面に遷移
  if (!localStorage.token) {
    window.location.href = 'login.html';
  }

  // トークン読み込み
  const myToken = localStorage.getItem('token');
  myHeaders.append("Authorization", `Bearer ${myToken}`);

  // リクエストオプションの用意
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  // fetch実行
  fetch(urlUsers, requestOptions)
    .then(response => response.json())
    .then(json => {
      let userText = "";
      json.forEach(element => {
        userText += `<li>${element.name}</li>\n`;
      });
      document.getElementById('users').innerHTML = userText;
    })
    .catch(error => console.log(`Error: ${error}`));
}