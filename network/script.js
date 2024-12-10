import * as cmb from './combinatorics.js';

let flag = 0;                //도로의 수가 입력되면 road_flag = 1
let road_num = 0, car_num = 0;
let error_count = 0;
let road_func_ary = [];
let car_ary = [];
let car_base_ary = [];
let time_ary = [];

const road = document.getElementById("road_num")
const car = document.getElementById("car_num");

const road_input_div = document.getElementById("road_input_div");

//canvas width : 570, height : 760;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


//함수 부분 코드


//canvas위에 원A, 원B 그리는 함수
function canvas_setting() 
{
  ctx.moveTo(40, 360)
  ctx.beginPath();
  ctx.arc(40, 360, 20, 0, Math.PI * 2);
  ctx.fillstyle() = "red";
  ctx.fill();
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Hello Canvas", 40, 360); // 텍스트 출력

  ctx.moveTo(530, 360)
  ctx.beginPath();
  ctx.arc(530, 360, 20, 0, Math.PI * 2);
  ctx.fillstyle() = "blue";
  ctx.fill();
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Hello Canvas", 530, 360); // 텍스트 출력
}

//각각 input에서 함수 입력받아 road_func_ary에 저장하는 함수
function input_road_func(i) 
{
  const input = document.getElementById("road" + i.toString());
  const func = input.value;
  road_func_ary.push(func);
  if (road_func_ary == road_num) 
  {
    flag = 1;
  }
}


//각각의 도로의 해당하는 함수 입력받는 input생성
function gen_road_input() 
{
  road_input_div.innerHTML = '';
  for (let i = 0; i < road_num; i++) 
  {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "road_input";
    input.id = "road_input" + i.toString();
    input.placeholder = "${i+1}번째 수식을 입력하세요."
    input.onclick(input_road_func(i));
    road_input_div.appendChild(input);
  }
}


//canvas위에 도로 그려주는 함수
function draw_road() 
{
  road_func_ary = [0][2];
  gap = Math.round((720 / road_num));

  for (let i = 0; i < road_num; i++) 
  {
    ctx.beginPath();
    ctx.moveTo(40, 360);
    ctx.lineTo(265, 720 - (gap * i));
    ctx.lineTo(530, 360);
  }
}


//배열의 합을 구하는 함수
function sum(ary)
{
  const res = ary.reduce((initial,i) => initial + i, 0);
  return res;
}

//car_ary를 여러개의 순열로 나누기
function make_car_ary()
{
  let temp_ary = cmb.combinatioin(car_base_ary,road_num);
  for(let i = 0; i < temp_ary.length(); i++)
  {
    if(sum(temp_ary[i]) == car_num)
    {
      const temp = cmb.permutation(temp_ary[i]);
      for(let j = 0; j < temp.length(); j++)
      {
        car_ary.push(temp[j]);    
      }
    }
  }
}


//도로수와 차량 수 입력받는 함수
function get_num(text) 
{
  const cmd = text;

  if (cmd == "road") 
  {
    road_num = road.value;
    gen_road_input();
    draw_road();
  }

  else 
  {
    car_num = car.value;
    for(let i = 1; i <= car_num; i++)
    {
      car_base_ary.push(i);
    }
    make_car_ary();
  }
}


//알림(재미)
function alert_error() 
{
  if (error_count >= 10) 
  {
    error_count = 0;
    alert("입력하고 다시하라고;\n수학 4등급보다 멍청하노");
  }
  else 
  {
    if (road_num)                    //도로의 수만 입력하고 계산하기를 눌렀을 때
    {
      alert("차의 수는 0보다 커야합니다!\n차의 수를 입력하고 다시 생성버튼을 눌러주시기 바랍니다!");
      error_count += 1;
    }

    else if (car_num)                            //차의 수만 입력하고 계산하기를 눌렀을 때
    {
      alert("도로의 수는 0보다 커야합니다!\n도로의 수를 입력하고 다시 생성버튼을 눌러주시기 바랍니다!");
      error_count += 1;
    }

    else if (road_func_ary.length() != road_num) 
    {
      alert("각각의 도로의 차가 x대 지나갈때 걸리는 시간(f(x))를 \n입력하고 계산하기 버튼을 눌러주시기 바랍니다!");
      error_count += 1;
    }
  }
}


//결과값 계산하는 함수
function cal_res() 
{
  if (flag) 
  {
    for(let i = 0; i < car_ary.length(); i++)
    {
      let time = 0;
      for(let j = 0; j < road_num; j++)
      {
        const x = car_ary[i][j];
        const t = eval(road_func_ary[j]);
        time += t;
      }

      time_ary.push(t)
    }
  }

  else
  {
    alert_error();
  }
}