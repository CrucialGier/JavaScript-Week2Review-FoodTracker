import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe ({
  name: "caloriePipe",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Food[], args) {
    var output: Food[] = [];
    var calorieLevel = args[0];
    if (calorieLevel === 'high') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories > 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (calorieLevel === 'low') {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
