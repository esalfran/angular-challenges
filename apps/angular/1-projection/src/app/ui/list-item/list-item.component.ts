import {
  ChangeDetectionStrategy,
  Component,
  // inject,
  // input,
  output,
} from '@angular/core';
// import { StudentStore } from '../../data-access/student.store';
// import { TeacherStore } from '../../data-access/teacher.store';
// import { CardType } from '../../model/card.model';
// import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  delete = output<void>();

  // private teacherStore = inject(TeacherStore);
  // private studentStore = inject(StudentStore);
  // private cityStore = inject(CityStore);

  // readonly id = input.required<number>();
  // readonly name = input.required<string>();
  // readonly type = input.required<CardType>();

  // delete(id: number) {
  //   const type = this.type();
  //   if (type === CardType.TEACHER) {
  //     this.teacherStore.deleteOne(id);
  //   } else if (type === CardType.STUDENT) {
  //     this.studentStore.deleteOne(id);
  //   } else {
  //     this.cityStore.deleteOne(id);
  //   }
  // }
}
