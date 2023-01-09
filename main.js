  
  
  document.getElementById('main-wrapper')
	.style.display = '';
let postHeaderClass = document
	.getElementsByClassName(
		'post-header');
let ourpostHeaderElement =
	postHeaderClass[0];
let descOfProg =
	"<p style='color:white;text-align:center'> Find &amp; Replace Text is a Web Tool created by Yunus Emre Vurgun. This tool lets you find and replace certain keywords within your text.</p><br/><br/>";
 
ourpostHeaderElement.innerHTML =
	'<div style="padding-top:1vw;color: white; text-align: center;  text-shadow: orange 1px 1px 1px, blue 0px 1px 1px, rgb(0, 0, 0) 2px 1px 1px;"> <h1 style="color:#fff; " class="post-title" id="titleBig"> &nbsp; Find &amp; Replace Text</h1>' +
	
  
  descOfProg  +
  
 ' <p>Your text: (max 100.000 char)</p><textarea id="textInput" style="resize:none" cols="55" rows="20" maxlength="100000"></textarea><br/><br/><p>Keyword/phrase to Find:  (max 50 char)</p>'+
  
  
 ' <textarea id="tofind" style="resize:none" cols="20" rows="4" maxlength="50"></textarea><br/><br/>'
  
+   ' <p>Keyword/phrase to Replace it With:  (max 50 char)</p><textarea id="toput" style="resize:none" cols="20" rows="4" maxlength="50"></textarea><br/><br/>'

  
  +'<button onclick="getAndFindData()" href="#">Replace</button><br/><br/><br/><br/> ' +
  
  ' <p>Your results: </p><textarea id="resultbox" style="resize:none" cols="55" rows="20" readonly></textarea><br/>'
  
+	'</div>';
 

  
    function getAndFindData(){
    
 
    let content = document.getElementById('textInput').value;
    
    let kwToFind = document.getElementById('tofind').value;
    
    let kwToPut = document.getElementById('toput').value;
      
    let resultBox = document.getElementById('resultbox').value;
      
      
    if(content.includes(kwToFind)==true){
    
     
      let matchesReplace= content.replaceAll(kwToFind , kwToPut);
       resultbox.value=matchesReplace;
    
    }else{
    
    alert('your text does NOT contain your keyword.');
    
    }  
  
  }
  
 
  
