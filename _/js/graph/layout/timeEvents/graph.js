"use strict";var myDiagram;function init(e,n,i,o){var t=new Date(o.getFullYear(),0,0,0,0,0,0),a=240,r=go.GraphObject.make;(myDiagram=r(go.Diagram,"myDiagramDiv_timeEvents",{"animationManager.isEnabled":!1,"toolManager.hoverDelay":200,initialAutoScale:go.Diagram.Uniform,isReadOnly:!0,grid:r(go.Panel,"Grid",{gridCellSize:new go.Size(a,80),gridOrigin:new go.Point(0,-55)},r(go.Shape,"LineH",{stroke:"lightgray"})),"draggingTool.isGridSnapEnabled":!0,"resizingTool.isGridSnapEnabled":!0,scrollMode:go.Diagram.InfiniteScroll,positionComputation:function(e,n){var i=n.y;return(e.documentBounds.height<e.viewportBounds.height||(i=Math.min(i,e.documentBounds.bottom-e.viewportBounds.height))<0)&&(i=0),new go.Point(n.x,i)},linkTemplate:r(go.Link,{zOrder:1,fromEndSegmentLength:150,toEndSegmentLength:150,adjusting:go.Link.End,selectionAdorned:!1},new go.Binding("zOrder","isSelected",function(e){return e?3:1}).ofObject(),r(go.Shape,{opacity:1,isPanelMain:!0,stroke:"#000",strokeWidth:1,fill:"#000"},new go.Binding("fill","d_fill"),new go.Binding("stroke","d_stroke"),new go.Binding("strokeWidth","width"),new go.Binding("stroke","isSelected",function(e,n){return e?"#167cF3":n.part.data.d_stroke}).ofObject()),r(go.Panel,"Auto",r(go.Shape,{fill:"#fff",stroke:"gray"},new go.Binding("fill","isSelected",function(e){return e?"#FFC106":"#fff"}).ofObject()),r(go.TextBlock,{margin:3,text:"描述"},new go.Binding("text","text"))),r(go.Shape,{name:"link_arrow",toArrow:"standard",stroke:"#000",fill:"#000"},new go.Binding("stroke","isSelected",function(e,n){return e?"#167cF3":n.part.data.d_stroke}).ofObject(),new go.Binding("fill","isSelected",function(e,n){return e?"#167cF3":n.part.data.d_stroke}).ofObject())),ModelChanged:function(e){e.isTransactionFinished},"undoManager.isEnabled":!0})).nodeTemplateMap.add("",r(go.Node,"Auto",{zOrder:2,height:10,selectionAdorned:!1,layerName:"Background",dragComputation:function(){},resizable:!0,resizeAdornmentTemplate:r(go.Adornment,"Spot",r(go.Placeholder),r(go.Shape,{alignment:go.Spot.Right,cursor:"col-resize",desiredSize:new go.Size(8,8),fill:"dodgerblue"})),toolTip:r("ToolTip",r(go.TextBlock,new go.Binding("text","",function(e){return e.text})))},new go.Binding("position","",function(e){return new go.Point((e.date.valueOf()-t.valueOf())/15e3-8,s(e.row)+20)}).makeTwoWay(function(e,n){var i;n.row=(i=e.y,Math.floor(i/10)+1),n.date=(e=e.x,new Date(t.valueOf()+15e3*e))}),new go.Binding("width","length",function(e){return 10}).makeTwoWay(function(e){return e/a}),r(go.Shape,"Ellipse",{fill:"white",stroke:null},new go.Binding("fill","d_fill")))),myDiagram.nodeTemplateMap.add("RowHeader",r(go.Node,"Vertical",{selectionAdorned:!1,layerName:"Foreground",width:300},r(go.Shape,"Ellipse",{fill:"white",width:30,height:30,stroke:null},new go.Binding("fill","fill")),r(go.Picture,{width:15,height:15,margin:new go.Margin(-22,0,10,0)},new go.Binding("source","icon",function(e){return"./icon/"+e+".svg"})),r(go.TextBlock,new go.Binding("text"))));r(go.Overview,"myOverviewDIV_timeEvents",{observed:myDiagram,contentAlignment:go.Spot.Center,minScale:.05});var g,d,l=r(go.Diagram,"myRowHeadersDiv",{isReadOnly:!0,"animationManager.isEnabled":!1,allowHorizontalScroll:!1,contentAlignment:go.Spot.TopRight,padding:0,ViewportBoundsChanged:function(e){myDiagram.position=new go.Point(myDiagram.viewportBounds.x,e.diagram.position.y)},nodeTemplate:r(go.Part,"Vertical",{selectionAdorned:!1},new go.Binding("position","row",function(e){return new go.Point(0,s(e)+4)}),r(go.Shape,"Ellipse",{fill:"white",width:30,height:30},new go.Binding("fill","fill")),r(go.TextBlock,new go.Binding("text")))}),m=r(go.Diagram,"myColumnHeadersDiv",{isReadOnly:!0,"animationManager.isEnabled":!1,initialContentAlignment:go.Spot.TopLeft,allowHorizontalScroll:!1,allowVerticalScroll:!1,allowZoom:!1,padding:new go.Margin(0,10,0,0)});function s(e){return 80*((e=Math.max(e,1))-1)}g=r(go.Part,"Graduated",{layerName:"Grid",position:new go.Point(0,0),graduatedTickUnit:a},r(go.Shape,{geometryString:"M0 0 H3600"}),r(go.Shape,{geometryString:"M0 0 V20",interval:24}),r(go.TextBlock,{font:"10pt sans-serif",interval:24,alignmentFocus:new go.Spot(0,0,-2,0),graduatedFunction:function(e){var n=new Date(t);n.setDate(n.getDate()+e/5760);return n.toLocaleDateString("zh-cn",{weekday:"short",month:"short",day:"2-digit",year:"numeric"})}})),d=r(go.Part,"Graduated",{layerName:"Grid",position:new go.Point(0,20),graduatedTickUnit:a},new go.Binding("graduatedTickUnit",function(e){return 10}),r(go.Shape,{geometryString:"M0 30 H3600"}),r(go.Shape,{geometryString:"M0 0 V20"}),r(go.TextBlock,{name:"columText",font:"7pt sans-serif",segmentOffset:new go.Point(7,7),graduatedFunction:function(e){return(e=e/a%24)<0&&(e+=24),Math.floor(e).toString()}})),m.add(g),m.add(d),myDiagram.addDiagramListener("InitialLayoutCompleted",function(e){var n={source:"timingEvents",events_name:"updateScale",events_id:1,scale:myDiagram.scale};window.parent.postMessage(n,"*"),l.model.nodeDataArray.map(function(e){var n=e;n.isRow=1,n.row_=e.row,n.category="RowHeader",myDiagram.model.addNodeData(n)}),myDiagram.nodes.each(function(e){e.data.isRow?e.position=new go.Point(myDiagram.viewportBounds.x+0,s(e.data.row_)+4):e.position.x<myDiagram.viewportBounds.x+300?e.part.visible=!1:e.part.visible=!0}),myDiagram.zoomToFit()}),myDiagram.addDiagramListener("ViewportBoundsChanged",function(e){var n=myDiagram.viewportBounds;g.graduatedMin=n.x,g.graduatedMax=n.x+n.width,g.elt(0).width=m.viewportBounds.width,d.graduatedMin=n.x,d.graduatedMax=n.x+n.width,d.elt(0).width=m.viewportBounds.width;n={source:"timingEvents",events_name:"updateScale",events_id:1,scale:4*myDiagram.scale};window.parent.postMessage(n,"*")}),myDiagram.addDiagramListener("ViewportBoundsChanged",function(e){}),myDiagram.addDiagramListener("DocumentBoundsChanged",function(e){}),myDiagram.model.nodeDataArray=n,myDiagram.model.linkDataArray=i,l.model=new go.Model(e),myDiagram.scrollMode=go.Diagram.InfiniteScroll}