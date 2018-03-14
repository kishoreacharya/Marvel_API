

$(function(){
var marvelAPI = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=9aa7e7bc2747a95b3800ec6bd3df4d84&hash=6c9777b819af78bdc997e9be3a0b2037';
$.getJSON( marvelAPI).done(function( response ) {
      var results = response.data.results;
      //console.log(results);
      var resultsLen = results.length;
      var output = '<ul>'; 
      
      for(var i=0; i<resultsLen; i++){
       
var imgPath = results[i].thumbnail.path + '/portrait_fantastic.jpg';

     
      if(imgPath!=''){
        output += '<li><img src="' + imgPath + '"><br>'+results[i].name+'</li>';
        console.log(results[i]);
         }  
      }  
      output += '</ul>'
      $('#results').append(output);
  });
   
});
