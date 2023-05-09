export const validate = (data) =>{
    const regexActivity = /^[a-zA-Z\s]*$/;
    const regexCheckNumber = /[1-9]+$/;

    var obj ={
        name: false,
        duration: false,
        difficulty: false,
        allokay: false,
        country: false,
        choosenSeason: false,
    }

    if(regexActivity.test(data.name) && data.name.length > 0 && data.name.length < 12)
    obj.name = true; 

    if(regexCheckNumber.test(data.difficulty) && data.difficulty > 0 && data.difficulty <= 3)
    obj.difficulty = true;

    if(regexCheckNumber.test(data.duration) && data.duration > 0 && data.duration <= 24)
    obj.duration = true;

    console.log(data)
   
    if (data.countries.length > 0) {
        obj.country = true;
      } else {
        obj.country = false;
      }

    
      if (data.choosenSeason.length > 0) {
        obj.choosenSeason = true;
      } else {
        obj.choosenSeason = false;
      }


    if(obj.name && obj.difficulty && obj.duration)
    obj.allokay = true;
    else obj.allokay = false;
    return obj;
}