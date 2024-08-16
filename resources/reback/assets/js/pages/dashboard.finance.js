var options={series:[{name:"Revenue",type:"area",data:[34,65,46,68,49,61,42,44,78,52,63,67]},{name:"Expenses",type:"line",data:[8,12,7,17,21,11,5,9,7,29,12,35]}],chart:{height:280,type:"line",toolbar:{show:!1}},stroke:{dashArray:[0,8],width:[2,2],curve:"smooth"},fill:{opacity:[1,1],type:["gradient","solid"],gradient:{type:"vertical",inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,70]}},markers:{size:[0,0,0],strokeWidth:2,hover:{size:4}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{min:0,tickAmount:4,labels:{formatter:function(e){return e+"k"},offsetX:-15},axisBorder:{show:!1}},grid:{show:!0,strokeDashArray:3,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:-10,right:-2,bottom:-10,left:-5}},legend:{show:!1},colors:["#7f56da","#22c55e"],tooltip:{shared:!0,y:[{formatter:function(e){return void 0!==e?"$"+e.toFixed(2)+"k":e}},{formatter:function(e){return void 0!==e?"$"+e.toFixed(2)+"k":e}}]}};(chart=new ApexCharts(document.querySelector("#dash-revenue-chart"),options)).render();var chart={series:[{name:"2024",data:[2.7,2.2,1.3,2.5,1,2.5,1.2,1.2,2.7,1,3.6,2.1]},{name:"2023",data:[-2.3,-1.9,-1,-2.1,-1.3,-2.2,-1.1,-2.3,-2.8,-1.1,-2.5,-1.5]}],chart:{toolbar:{show:!1},type:"bar",fontFamily:"inherit",foreColor:"#ADB0BB",height:280,stacked:!0,offsetX:-15},colors:["var(--bs-primary)","var(--bs-info)"],plotOptions:{bar:{horizontal:!1,barHeight:"80%",columnWidth:"25%",borderRadius:[3],borderRadiusApplication:"end",borderRadiusWhenStacked:"all"}},dataLabels:{enabled:!1},legend:{show:!1},grid:{show:!0,strokeDashArray:3,padding:{top:-10,right:0,bottom:-10,left:0},borderColor:"rgba(0,0,0,0.05)",xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}},yaxis:{tickAmount:4,labels:{formatter:function(e){return e+"k"}}},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]}};(chart=new ApexCharts(document.querySelector("#daily-expenses"),chart)).render();options={chart:{height:205,type:"donut"},legend:{show:!1,position:"bottom",horizontalAlign:"center",offsetX:0,offsetY:-5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},stroke:{width:0},plotOptions:{pie:{donut:{size:"70%",labels:{show:!0,total:{showAlways:!0,show:!0}}}}},series:[140,125,85],labels:["Online","Offline","Direct"],colors:["var(--bs-primary)","var(--bs-info)","var(--bs-light)"],dataLabels:{enabled:!1}};(chart=new ApexCharts(document.querySelector("#revenue-sources"),options)).render();