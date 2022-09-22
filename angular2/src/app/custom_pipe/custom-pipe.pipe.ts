import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  pure:false
  
})
export class CustomPipePipe implements PipeTransform {

  transform(value:any,searchvalue:string) {
    return value.filter(function(search){
      return search.firstname.indexOf(searchvalue) >-1
    })




    // if (value != '') {
    //   return value.substr(0, limit) + ' ...';
    // }
    // else return value;
  }


  




}
