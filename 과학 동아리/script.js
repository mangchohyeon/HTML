const ary_skin = 
[
    "dry_skin",
    "combination_skin",
    "oily_skin",
    "dehydrated_oily_skin", 
    "sensitive_skin",
    "acne-prone_skin"
];

const ary_trouble =
[
    "winkle",
    "sebum",
    "oily and dry",
    "dehydrating",
    "sensitive",
    "black/white head"
];


let message = null,skin_index = [],trouble_index = [];

//class="radio_skin"인 radio 버튼을 선택
const radio_skin = document.querySelectorAll('.radio_skin');

// 각 radio_skin 버튼에 change 이벤트 리스너를 추가합니다.
radio_skin.forEach(radio => {
  radio.addEventListener('change', () => {
    // 선택된 radio 버튼의 value 값을 가져옵니다.
    const selectedValue = radio.value;
    for(let i = 0; i<6; i++)
    {
        if(selectedValue == ary_skin[i])
        {
            skin_index.push(i+1);
        }
    }
  });
});

// 모든 class="a"인 radio 버튼을 선택합니다.
const radio_trouble = document.querySelectorAll('.radio_trouble');

// 각 radio 버튼에 change 이벤트 리스너를 추가합니다.
radio_trouble.forEach(radio => {
  radio.addEventListener('change', () => {
    // 선택된 radio 버튼의 value 값을 가져옵니다.
    const selectedValue = radio.value;
    for(let i = 0; i<6; i++)
    {
        if(selectedValue == ary_trouble[i])
        {
            trouble_index.push(i+1);
        }
    }
  });
});


// 상태별 조건을 함수로 저장
const ary_condition = 
[
    ph,skin_index => skin_index = 0 && ph >= 4.2 && ph <= 5.6,
    ph,skin_index => skin_index = 1 && ph >= 4.2 && ph <= 5.6,
    ph,skin_index => skin_index = 2 && ph >= 4.2
];
  

 
  

function print_res(ph)
{
    
}

const input_ph = document.getElementById("input_ph");
let ph = null;

function get_ph()
{
    ph = input_ph.value;
    print_res(ph);
};

input_ph.addEventListener("change", get_ph);


