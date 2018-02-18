function wbztable(tablecaption="wbznull",header=[11,12,13],rows=[[11],[22],[23]],footer="wbznull"){
//alert("pp");
document.write("<div class=\"table\">  ");
		if(!(tablecaption=="wbznull")){
			document.write("<h2 class='table-caption'>"+tablecaption+"</h2>");  

		};
        document.write("<div class='table-column-group'> ");
			for (var i=0;i<header.length;i++)
				{
				document.write("<div class='table-column'></div>"  );
				}
        document.write("</div>");
        document.write("<div class='table-header-group'> "); 
            document.write("<ul class=\"table-row\">  ");
				for(var i=0;i<header.length;i++){
					document.write("<li class='table-cell' id=\"h_"+i.toString()+"\">"+header[i]+"</li> ");
					}					
           document.write("</ul>  ");
        document.write("</div>  ");

		if(!(footer=="wbznull")){
        document.write("<div class=\"table-footer-group\"> "); 
           document.write(" <ul class=\"table-row\"> "); 
				for(var i=0;i<footer.length;i++){
					document.write(" <li class=\"table-cell\">"+footer[i]+"</li> "); 
				}
            document.write("</ul>  "); 
        document.write("</div>  ");
		}; 		

        document.write("<div class=\"table-row-group\">"); 
//alert("99")
			for(var i=0;i<rows.length;i++){
				document.write("<ul class=\"table-row\">"); 
				for(var j=0;j<rows[i].length;j++){
					//document.write("<li class=\"table-cell\" id=\""+j+"\">"+rows[i][j]+"</li>  "); 
					document.write("<li class=\"table-cell\" id=\"r_"+i.toString()+"_"+j.toString()+"\">"+rows[i][j]+"</li>  "); 
				//alert("<li class=\"table-cell\" id=\"r_"+i.toString()+"_"+j.toString()+"\">"+rows[i][j]+"</li>  ");
				}
				document.write("</ul>  "); 
			}
		document.write("</div>  "); 
    document.write("</div>"); 
};