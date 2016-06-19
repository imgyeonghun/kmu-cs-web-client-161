
$('#pg').hide();
$('#pg2').hide();
$('#pg3').hide();
$('#pg4').hide();
$('#pg5').hide();
$(".showmenu").fadeOut();
$(".panel").slideUp();
$("#panel0").slideUp();
//숨어있어야할 아이들 숨기기
function randomr(n1, n2) {
  return Math.floor( (Math.random() * (n2 - n1 + 1)) + n1 );
}
//n1과 n2사이의 난수생성    
        
        
function mapp(value, srcRange, dstRange){
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN; 
  }
  var srcMax = srcRange[1] - srcRange[0];
    var  dstMax = dstRange[1] - dstRange[0];
var      adjValue = value - srcRange[0];
  return (adjValue * dstMax / srcMax) + dstRange[0];
}
 //value값을 srcRange범위에서 dstRange범위의 값으로 바꿔줌 map
        
var sw=0;       
setTimeout(  $('.sbsg').animate({ opacity : "0"},1000),2000);
setTimeout(  $('.sbsg').animate({top:'-1000px'},30),10);
setTimeout(function(){sw=1;},1000);
// 페이지 처음로드시 페이드인하면서 등장하도록 해줌 (검정 화면에서) 
    
        
        
        
// 메인페이지 날아오는별들 시작     
        
var mt;
var moverx = [];
var movery = [];
var mtr= [];
var l= [];
var o= [];
var opp= [];
var cent=100;
var sp=[];
var  stars=30;
var mtcel=new Array(); 
        
for (var x = 0; x <  stars; x++) {
    sp[x]=randomr(5,20); 
    mtr[x]=randomr(0,50);
    l[x]=randomr(0,20);
    opp[x]= randomr(8,50);
    mtcel[x]= document.createElement('img');
    $(mtcel[x]).attr('class', 'mtt1');
    $(mtcel[x]).attr('src', 'data/star.png');
    document.body.appendChild(mtcel[x]);
    $( mtcel[x]).css('opacity',mapp(l[x],[0,1000],[1,1]));  
       }
       
setInterval(draw,20);            
        
function draw() {
    
    if(sw==1){
       for (var x = 0; x < stars; x++) {
        l[x]+=sp[x];
        moverx[x]=Math.cos(mtr[x])* l[x]+$(window).width()/2;
        movery[x]=Math.sin(mtr[x])* l[x]+($('.img1').offset().top+$('.img1').offset().top/2);
        $( mtcel[x]).css('left',moverx[x]+'px');  
        $( mtcel[x]).css('top',movery[x]+'px');  
        $( mtcel[x]).css('width',l[x]/opp[x]+'px');   
          
           if(l[x]>1500){
               mtr[x]=randomr(0,50);  
               l[x]=0; 
               sp[x]=randomr(8,20); 
                opp[x]= randomr(8,50);
                       }
       }
    }
    
}
        
// 메인페이지 메테오들 끝       
        

        
         $(window).scroll(function(event){
        
        if($(document).scrollTop()<$('.timelineTitle').offset().top){
     $('.sbg').css('opacity','1');
            
             for (var x = 0; x < stars; x++) {
     $( mtcel[x]).css('opacity','1');}
            
        }else{
             $('.sbg').css('opacity','0');   

             for (var x = 0; x < stars; x++) { $( mtcel[x]).css('opacity','0');}
            
        }
    });
        
 // 스크롤바를 내려서 타임라인컨텐츠를 지날때 메인화면 배경(날아오는별들)이 사라지게하고 올라갈떄는 나타나게함      
        
        
          function tohome(){
        $('html, body').animate({
            scrollTop : $('#home').offset().top
        },800);
    }
        
          function totimeline(){
        $('html, body').animate({
            scrollTop : $('#timeline').offset().top
        },800);
    }
        
          function tophilo(){
        $('html, body').animate({
            scrollTop : $('#philosophy').offset().top
        },800);
    }
        
          function tomore(){
        $('html, body').animate({
            scrollTop : $('#more').offset().top
        },800);
    }
        
 // 메뉴를 누르면 해당탭으로 스크롤 애니메이팅       
        
        

var vid=document.getElementById("v0");;     
var sksw=0;     





$(window).scroll(function(event){
    
 var st = parseInt($(document).scrollTop(),10);
var sk = parseInt($("#v0").offset().top, 10);

       if(st+400>sk&&sksw==0){
vid.play();
           sksw=1;
       }
    
      if(st<100&&sksw==1){
         
vid.currenttime=0;
           vid.play();
          vid.pause();
           sksw=0;
       }
// 스크롤바를 내려 해당 부분으로 가면 동영상 자동재생 
    
var arbox1 = parseInt($("#otherbox1").offset().top, 10);
var arsw1=0;
       if(st+600>arbox1&&arsw1==0){
$("#otherbox1").animate({ opacity: 1},1000)
           arsw1=1;
       }
    
var arbox2 = parseInt($("#otherbox2").offset().top, 10);
var arsw2=0;
       if(st+450>arbox2&&arsw2==0){
$("#otherbox2").animate({ opacity: 1},1000)
           arsw2=1;
       }
    
    var arbox3 = parseInt($("#otherbox3").offset().top, 10);
var arsw3=0;
       if(st+500>arbox3&&arsw3==0){
$("#otherbox3").animate({ opacity: 1},1000)
           arsw3=1;
       }
    
    var arbox4 = parseInt($("#otherbox4").offset().top, 10);
var arsw4=0;
       if(st+550>arbox4&&arsw4==0){
$("#otherbox4").animate({ opacity: 1},1000);
           arsw4=1;
       }
    
 // 스크롤바를 내려 해당 부분으로 가면 등장 (실험적인 특이한 컨트롤러부분)
    
    
    
 hihi =parseInt($(document).scrollTop(),10);
 if( hihi<100){
   $(".show-box").css( 'z-index', '90');
   $(".top-box").fadeIn(1000);
   $(".showmenu").hide(700);
 }else{
        $(".show").css( 'opacity', '1');
         $(".show-box").css( 'z-index', '900000');
       $(".top-box").fadeOut(1000);
        
            $(".showmenu").show(700);
        }
   // 상단메뉴 스크롤하면 숨기기 제일 위로가면 다시 나타나기         
    
})


 $(".showmenu").click(function(){
     $(".top-box").fadeIn(1000);
      $(".top-box").css( 'z-index', '900004');
      $(".showmenu").hide(700);
      $(".show-box").css( 'z-index', '90');
 });
   // 나타나는 버튼 누르면 메뉴 다시 나타나기
        
        
        
   
$('#fami').click(function(){
    $('#pg').toggle(700);
})

$('#fami2').click(function(){
    $('#pg2').toggle(700);
})
$('#fami3').click(function(){
    $('#pg3').toggle(700);
})
$('#fami4').click(function(){
    $('#pg4').toggle(700);
})
$('#fami5').click(function(){
    $('#pg5').toggle(700);
})

$('#pg1clo').click(function(){
    $('#pg').toggle(700);
})

$('#pg2clo').click(function(){
    $('#pg2').toggle(700);
})

$('#pg3clo').click(function(){
    $('#pg3').toggle(700);
})

$('#pg4clo').click(function(){
    $('#pg4').toggle(700);
})
$('#pg5clo').click(function(){
    $('#pg5').toggle(700);
})

   // 타임라인의 조이스틱 클릭시 확대 페이지 보이기와 닫기버튼으로 숨기기



$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideDown(1000);
    });
});
         
        $(document).ready(function(){
    $("#flip0").click(function(){
        $("#panel0").slideToggle(1000);
    })
    
    
    ;}) 
        
        $(document).ready(function(){
    $("#flip1").click(function(){
        $("#panel1").slideToggle(1000);
    })
    ;})
        
             $(document).ready(function(){
    $("#flip2").click(function(){
        $("#panel2").slideToggle(1000);
    })
    ;})        
                  $(document).ready(function(){
    $("#flip3").click(function(){
        $("#panel3").slideToggle(1000);
    })
    ;})            
                       $(document).ready(function(){
    $("#flip4").click(function(){
        $("#panel4").slideToggle(1000);
    })
    ;})
                       
                       
         // 아코디언메뉴들 숨김 나타남 처리
                     

          $(document).ready(function(){
    $("#cbg1").click(function(){
        $(".contents-box2r2").animate({ opacity: 1},1000);
         $(".contents-box2r3").animate({ opacity: 0},1000);
    })    ;})   
          
          $(document).ready(function(){
       $("#cbg2").click(function(){
        $(".contents-box2r2").animate({ opacity: 0},1000);
            $(".contents-box2r3").animate({ opacity: 1},1000);
    }) ;})   
          
          
     $(document).ready(function(){
      $("#cbg3").click(function(){
        $(".contents-box2r2").animate({ opacity: 0},1000);
            $(".contents-box2r3").animate({ opacity: 0},1000);
    })  ;}) 
     
          // 배경투명도로 전환하기
    
      $(document).ready(function(){
       $("#s3-1").mouseenter(function(){
        $("#s3-1").animate({ opacity: 1},500);
    
    })
      
       $("#s3-1").mouseleave(function(){
        $("#s3-1").animate({ opacity: 0.2},500);
    
    })
       
       
            $("#s3-2").mouseenter(function(){
        $("#s3-2").animate({ opacity: 1},500);
               
    
    })
      
       $("#s3-2").mouseleave(function(){
        $("#s3-2").animate({ opacity: 0.2},500);
    
    })
       
       ;})   
      
          // 철학글에 마우스대면 투명도 낮추기
                 
      
    //퀴즈
         $(document).ready(function(){
      $("#oxox").click(function(){
       if($("#x1").is(":checked")){
          $('#txt1').text("정답입니다.");
      }else{ $('#txt1').text("틀렸습니다.");}
      
    
       if($("#o2").is(":checked")){
          $('#txt2').text("정답입니다.");
      }else{ $('#txt2').text("틀렸습니다.");}
           
           
       if($("#o3").is(":checked")){
          $('#txt3').text("정답입니다.");
      }else{ $('#txt3').text("틀렸습니다.");}
                   
                      
       if($("#o4").is(":checked")){
          $('#txt4').text("정답입니다.");
      }else{ $('#txt4').text("틀렸습니다.");}
                           
                              
       if($("#x5").is(":checked")){
          $('#txt5').text("정답입니다.");
      }else{ $('#txt5').text("틀렸습니다.");}
    
        }) 
             
              ;})
      
      
                       

        
        
