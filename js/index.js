/*******first required *******/
//event to select a random color from clolrs array to show it in class pallete
const btn=document.querySelector('#btn-random');
const pallete=document.querySelector('#pallete');
const input=document.querySelector('#color');
btn.addEventListener('click',function(){
 input.value = colors[Math.floor(Math.random() * colors.length)];
 pallete.style.color=input.value;
 input.style.backgroundColor=input.value;

 
});
//event to remove the value of input when the user click on
input.addEventListener('click',function(){
input.value='';
});
/*******second required *******/
//event to put the color from the input in the pallete class
input.addEventListener("keydown",function(key){
//code to prevent the ueser to enter more than 6 character
  let characters = input.value.split('');
  if(characters.length > 5){this.value = this.value.slice(0,5);} 
 });
input.addEventListener('keyup',function(key){
//code to prevent the user enter chracters except the hexa char([0-9],a,b,c,d,e,f)
if(!(key.keyCode==65||key.keyCode==66||key.keyCode==67||key.keyCode==68||key.keyCode==69||key.keyCode==70||key.keyCode==48||key.keyCode==49||key.keyCode==50||key.keyCode==51||key.keyCode==52||key.keyCode==53||key.keyCode==54||key.keyCode==55||key.keyCode==56||key.keyCode==57||key.keyCode==96||key.keyCode==97||key.keyCode==98||key.keyCode==99||key.keyCode==100||key.keyCode==101||key.keyCode==102||key.keyCode==103||key.keyCode==104||key.keyCode==105)){
  let m=input.value.slice(0,this.value.length-1);
  input.value=m;
  }
  // put the hexa code in the style
  pallete.style.color='#'+input.value;
  console.log(pallete.style.color);
  //apply the color to the input font when the use type a hexa color isnide the input.
  input.style.backgroundColor='#'+input.value;

 });
 