var timer=setInterval("AutoPlay()",1000);//全局变量，定义定时器，每隔1000毫秒执行一次AutoPlay()函数
var p=1;//全局变量，存储当前播放的第几张图片
var xdspan=document.getElementById("xd").getElementsByTagName("span");//获取xd下的所有span标签
var xdspanlength=xdspan.length;//获取span标签的数量
for(var i=0;i<xdspanlength;i++){
    xdspan.item(i).onclick=function(){//通过for循环为所有span标签添加点击事件
        for(var i=0;i<xdspanlength;i++){//通过for循环为所有span标签设置class="xd1"
            xdspan.item(i).className="xd1";
            }
        this.className="xd2";//设置点击的span标签class="xd2"
        for(var i=0;i<xdspanlength;i++){
            if(xdspan.item(i).className=="xd2"){//通过for循环判断当前点击的是第几个小圆点，然后修改图片地址
                document.getElementById("imgs").src='image/b'+(i+1)+'.jpg';
                p=i+1;////全局变量，存储当前播放的第几张图片，以便从当前图片开始播放下一张图片
                }
            }
        }
    }
function AutoPlay(){//自动播放函数
    if(p>=4){p=1;}//只有4张图片，当p大于等于4时就从第一张图片开始
    for(var i=0;i<xdspanlength;i++){//通过for循环为所有span标签设置class="xd1"
            xdspan.item(i).className="xd1";
            }
    xdspan.item(p-1).className="xd2";//设置当前播放的span标签class="xd2"
    document.getElementById("imgs").src='image/b'+p+'.jpg';//修改图片地址
    p++;
    }
document.getElementById("banner").onmouseover=function(){clearInterval(timer);}//当鼠标移入轮播区域时，停止自动播放
document.getElementById("banner").onmouseout=function(){timer=setInterval("AutoPlay()",1300);}//当鼠标移出轮播区域时，继续自动播放
