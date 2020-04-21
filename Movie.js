var val=['image1.jpg','image2.jpg','img3.jpg','image4.jpg','image5.jpg','img2.jpg'];
var new1=['image2.jpg','img1.jpg','image5.jpg','img2.jpg','image1.jpg','img3.jpg'];
var up=['img0.jpg','image5.jpg','img2.jpg','image3.jpg','img4.jpg','image5.jpg'];
var s=document.querySelectorAll(".space");

function movie(){
for(var i=0;i<s.length;i++)
	{
		s[i].style.backgroundImage = "url("+ new1[i] + ")";		
	}
}
movie();
var hol=document.querySelector("#up");
var bol=document.querySelector("#top");
hol.addEventListener("click",function(){
for(var i=0;i<s.length;i++)
{
		s[i].style.backgroundImage = "url("+ up[i] + ")";	
		s[i].style.display="block";	
}
});
bol.addEventListener("click",function(){ 
for(var i=0;i<s.length;i++)
	{
		s[i].style.backgroundImage = "url("+ val[i] + ")";	
	}	
});

