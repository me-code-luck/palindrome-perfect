
const Perfect = (max)=>{
    let toplam=0;

    
    for (let i = 1; i < (max/2)+1; i++){

        toplam += (max%i==0)&& i;
        
    }
    
    if (toplam ==1) {
        toplam=0;
    }

   
    return (toplam==max)&& toplam;
}


const PalindromeandPerfect = (min,max)=>{
    let list = [];
    let list2=[];
    for (let i = min; i < max+1; i++) {
        if (String(i)==String(i).split("").reverse().join(""))
        {
            list.push(i);
        }

        Perfect(i)&& list2.push(i);


        
    }
    
    return [list,list2]
    
}

 

 

 document.querySelector("button").addEventListener("click",()=>{
    
   let palindrome= document.querySelector("#palindrome");
   let perfect= document.querySelector("#perfect");
   let min=Number(document.querySelector("#min").value);
   let max=Number(document.querySelector("#max").value);
    if (max<min || max==min || min<0 ) {
        alert("Lütfen min sayısı max sayısından küçük şeçin!")
        palindrome.innerHTML="";
        perfect.innerHTML="";
        return 
    }
    palindrome.innerHTML="";
    perfect.innerHTML="";
    let result=PalindromeandPerfect(min,max);

    
   
    result[0].map((i)=>{
        palindrome.innerHTML+=`${i}\n`;
    });
    result[1].map((i)=>{
        perfect.innerHTML+=`${i}\n`;
    });
 })

 document.querySelector("#copyperfect").addEventListener("click",()=>{
    navigator.clipboard.writeText(perfect.innerHTML);
 })

 document.querySelector("#copypalindrome").addEventListener("click",()=>{
    navigator.clipboard.writeText(palindrome.innerHTML);
 })
