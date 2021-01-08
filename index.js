"use strict";

function todayoutput() {
  let todayDate = new Date();//今日の時間を取得
  let year = todayDate.getFullYear();//今日の年だけを取得
  let month = todayDate.getMonth() + 1;//今日の月だけを取得
  let date = todayDate.getDate();//今日の日にちだけを取得

  //目的の桁数に足りていない場合、戦闘にゼロを表示させる関数
  let toTwoDigits = function (num,digit) {
    num += "";
    if (num.length < digit) {
      num = "0" + num;
    }
    return num;
  }

  //以下、桁数を合わせるように、toTwoDigits関数を呼び出している
  let yyyy = toTwoDigits(year, 4);
  let mm = toTwoDigits(month, 2);
  let dd = toTwoDigits(date, 2);

  let sumToday = yyyy + "-" + mm + "-" + dd;//今日の日付の表示

  document.getElementById("today").value = sumToday;//dateに入れている
};

const taskforms = document.getElementById("js-taskforms");//js-taskformsのid属性を持つ要素を取得
const task = document.getElementById("task");//タスク内容の取得
const add = document.getElementById("add");//追加ボタンの取得
const taskLevels = document.getElementById("task-level");//優先度のフォームidの取得
const LimitTime = document.getElementById("today");//期限の取得

//タスク数の初期値の設定
let taskNumber = 0;
const taskItem = document.getElementById("taskItem");
taskItem.innerText = `${taskNumber}個`;

//タスクと優先度と期限を追加する処理
function getContents(tasks) {
  const taskLevel = taskLevels.level.value;//優先度で選択された値の取得
  const listItem = document.createElement("div");//div要素を作成
  const listItems = document.createElement("div");//div要素を作成
  const InputForm = document.createElement("div");//div要素を作成
  const taskformFlex = document.createElement("div");//div要素を作成
  const taskLevelLimit = document.createElement("form");//form要素を作成
  const taskEditButton = document.createElement("button");//編集ボタンの作成
  const taskDeleteButton = document.createElement("button");//削除ボタンの作成
  taskEditButton.classList.add("btn", "btn-primary","inputDate-button-type");//編集ボタンにクラスを付与
  taskEditButton.innerText = "編集";//編集ボタンに「編集」を表示
  taskDeleteButton.classList.add("btn", "btn-secondary");//削除ボタンにクラスを付与
  taskDeleteButton.innerText = "削除";//削除ボタンに「削除」を表示
  const taskFnishcheck = document.createElement("input");//完了を示すチェックボックスを作成
  taskFnishcheck.setAttribute("type", "checkbox");//input要素をCheckBoxとした
  taskFnishcheck.classList.add("inputDate-button-type");//CheckBoxにクラスを付与
  
  taskformFlex.id = "js-taskformFlex";//taskformFlexにid属性を追加
  taskformFlex.classList.add("excution");//taskformFlexにclass属性を追加

  listItems.setAttribute("id","js-listItems");//listItemsに"js-listItem"のid属性を追加
  InputForm.setAttribute("id","js-inputForm");//listItemsに"js-listItem"のid属性を追加


  taskLevelLimit.innerText = `【優先度】：${taskLevel}   【期限】：${LimitTime.value}`// div要素の中に入力したタスク内容を追加
  listItem.innerText = `【タスク内容】：${tasks}`;//div要素の中に入力したタスク内容を追加
  listItems.prepend(taskLevelLimit);//"taskforms"のid属性を持つ親要素内に追加
  listItems.prepend(listItem);//"listItems"のid属性を持つ親要素内に追加
  InputForm.prepend(taskDeleteButton);//InputFormにtaskDeleteButtonを追加
  InputForm.prepend(taskEditButton);//InputFormにtaskEditButtonを追加
  InputForm.prepend(taskFnishcheck);//InputFormにtaskFnishcheckを追加
  taskformFlex.prepend(InputForm);//taskformFlexにInputForm要素を追加
  taskformFlex.prepend(listItems);//taskformFlexにlistItems要素を追加
  taskforms.prepend(taskformFlex);//taskformsにtaskformFlexを追加

  taskDeleteButton.addEventListener("click", function () {
    deleteTask(taskDeleteButton);
    taskNumber--;//削除ボタンがクリックされたときにタスク数を位置減らす
    taskItem.innerText = `${taskNumber}個`;
  });

}

//追加ボタンを押したときにタスク内容を取得する関数
function addTask() {
  //追加ボタンをクリックしたときに各種入力データの取得イベント
  add.addEventListener("click", function () {
    if (task.value) {
      const tasks = task.value;//入力したタスク内容を"tasks"に追加
      getContents(tasks);//"getContents"メソッドの呼び出し
      task.value = "";//タスクの入力フォームを空にする
  
      taskNumber++;//追加がクリックされたときにタスク数を1追加
      taskItem.innerText = `${taskNumber}個`;
    } else {
      return;
    }
  })
};

//入力した値の削除イベント
function resetTask() {
  let reset = document.getElementById("reset");//リセットボタンの取得

  reset.addEventListener("click", function () {
    document.textform.reset();//タスク内容の削除
    document.levelform.reset();//優先度の初期化（"高"に戻る）
    todayoutput();//期限の初期化（"今日の日付"に戻る）
  })
};

//タスクを削除する関数
const deleteTask = taskDeleteButton => {
  const deleteTaskItem = taskDeleteButton.closest("#js-taskformFlex");
  taskforms.removeChild(deleteTaskItem);
};

const addtaskNumber = () => {
  let taskNumber = 0;

}

todayoutput();
addTask();
resetTask();
