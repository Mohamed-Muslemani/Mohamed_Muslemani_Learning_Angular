import { Pipe, PipeTransform } from '@angular/core';
import {Champions} from "../Shared/Modules/champions";

@Pipe({
  name: 'titleName',
  standalone: true
})
export class TitleNamePipe implements PipeTransform {

  transform(champion: Champions | undefined): string {
    return `${champion?.name} ${champion?.title}`
  }

}
