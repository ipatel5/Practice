console.log('Question 4')
const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
convertToObject(media_arr)


function convertToObject(array)
{
    
      var obj = {};
      array.forEach(function(data){
         obj[data[0]] = data[1]
      });
      console.log(obj);

}