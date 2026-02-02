import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  output,
  TemplateRef,
} from '@angular/core';
import { CardRowDirective } from './card-row.directive';
// import { ListItemComponent } from '../list-item/list-item.component';
// import { CardType } from '../../model/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [NgTemplateOutlet],
  host: {
    class: 'flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
  items = input.required<T[]>();
  add = output<void>();

  rowTemplate = contentChild.required(CardRowDirective, { read: TemplateRef });

  // readonly list = input<any[] | null>(null);
  // readonly type = input.required<CardType>();
  // readonly customClass = input('');
}
