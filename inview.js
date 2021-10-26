class inview{
    constructor(a,th)
    {  this.th = window.innerHeight*th;
        this.a= a;
        this.a.forEach(e => {
            e.vis =0;
           e.style.opacity = "0"
            e.style.transition = "all 1s ease-in";
        })
    }
register()
{
  
this.a.forEach(element => {
   var e = element;
   window.addEventListener("scroll",()=>{
     
    if(e.getBoundingClientRect().y <this.th && e.vis==0)
   { 
e.vis=1;
 e.style.transition = "all 1s ease-in";
e.style.opacity = "1"   ;
e.style.transform =  "translateY(-20px)"
}
   
       
    
   });
   
});
}
}
