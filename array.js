const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj)

function convertToArray(obj)
{
    
      var a = [];
    for( var i in obj ) {
         a.push([i,obj[i]]);
        
      };
      console.log(a);

}