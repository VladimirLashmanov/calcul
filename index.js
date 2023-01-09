const inputANode= document.querySelector('.js-input-a');
const inputBNode= document.querySelector('.js-input-b');
const BtnResaultNode= document.querySelector('.js-btn-result');
const outputNode= document.querySelector('.js-output');

const selectANode= document.querySelector('.js-select-operation');


BtnResaultNode.addEventListener('click',function () {
  const a= Number(inputANode.value);
  const b=Number(inputBNode.value);
  const operation=selectANode.value;

  const result= calculator({
      a,b,operation
  });

    outputNode.innerHTML=result;
});