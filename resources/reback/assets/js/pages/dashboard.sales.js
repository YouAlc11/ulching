var options={series:[{name:"Revenue",type:"area",data:[34,65,46,68,49,61,42,44,78,52,63,67]},{name:"Orders",type:"line",data:[8,12,7,17,21,11,5,9,7,29,12,35]}],chart:{height:369,type:"line",toolbar:{show:!1}},stroke:{dashArray:[0,8],width:[2,2],curve:"smooth"},fill:{opacity:[1,1],type:["gradient","solid"],gradient:{type:"vertical",inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,70]}},markers:{size:[0,0,0],strokeWidth:2,hover:{size:4}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisTicks:{show:!1},axisBorder:{show:!1}},yaxis:{min:0,labels:{formatter:function(e){return e+"k"}},axisBorder:{show:!1}},grid:{show:!0,xaxis:{lines:{show:!1}},yaxis:{lines:{show:!0}},padding:{top:0,right:-2,bottom:15,left:15}},legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},plotOptions:{bar:{columnWidth:"30%",barHeight:"70%",borderRadius:3}},colors:["#7f56da","#22c55e"],tooltip:{shared:!0,y:[{formatter:function(e){return void 0!==e?"$"+e.toFixed(2)+"k":e}},{formatter:function(e){return void 0!==e?"$"+e.toFixed(2)+"k":e}}]}},chart=new ApexCharts(document.querySelector("#dash-overview-chart"),options);chart.render();options={chart:{height:250,type:"donut"},legend:{show:!1,position:"bottom",horizontalAlign:"center",offsetX:0,offsetY:-5,markers:{width:9,height:9,radius:6},itemMargin:{horizontal:10,vertical:0}},stroke:{width:0},plotOptions:{pie:{donut:{size:"80%",labels:{show:!0,total:{showAlways:!0,show:!0}}}}},series:[140,125,85,60],labels:["Electronics","Grocery","Clothing","Other"],colors:["#f9b931","#ff86c8","#4ecac2","#7f56da"],dataLabels:{enabled:!1}};(chart=new ApexCharts(document.querySelector("#sales-category-chart"),options)).render();