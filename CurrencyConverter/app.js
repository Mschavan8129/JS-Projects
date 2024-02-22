const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";



const dropdowns=document.querySelectorAll(".dropdown select");
const btn1=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg1=document.querySelector(".msg");
for(let select of dropdowns){
    for(currCode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
        

    }
 select.addEventListener("change",(evt)=>{
    updateFlag(evt.target)
 })
}

const updateFlag=(element)=>{
    let code=element.value;
    let countryCode=countryList[code];
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=element.parentElement.querySelector("img");
  img.src=newSrc;

    console.log(countryCode);
}

const updateExchange=async()=>{
    let amount=document.querySelector("#amount");
let amountVal=amount.value;
if(amountVal===" " || amountVal<1)
{
    amountVal=1;
    amount.value="1";
}
const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
let data=await response.json();
let rate=data[toCurr.value.toLowerCase()];
let finalAmount=amountVal*rate;
//let message=`1${fromCurr.value}=${data.inr}${toCurr.value}`
msg1.innerText=`${amountVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;
console.log(finalAmount);
//console.log(response);
//console.log(fromCurr.value.toLowerCase(),toCurr.value.toLowerCase());

}
btn1.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchange();
})
// btn1.addEventListener("click",async(evt)=>{
// evt.preventDefault();
// let amount=document.querySelector("#amount");
// let amountVal=amount.value;
// if(amountVal===" " || amountVal<1)
// {
//     amountVal=1;
//     amount.value="1";
// }
// const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
// let response=await fetch(URL);
// let data=await response.json();
// let rate=data[toCurr.value.toLowerCase()];
// let finalAmount=amountVal*rate;
// //let message=`1${fromCurr.value}=${data.inr}${toCurr.value}`
// msg1.innerText=`${amountVal}${fromCurr.value}=${finalAmount}${toCurr.value}`;
// console.log(finalAmount);
// //console.log(response);
// //console.log(fromCurr.value.toLowerCase(),toCurr.value.toLowerCase());
// })
window.addEventListener("load",()=>{
    updateExchange();
})

