import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const flowUpAnimation =
  trigger('flowUpAnimation', [
    transition(':enter, :increment', [
      query(
        '.flow-up',
        [
          style({ opacity: 0, transform: "translateY(50px)" }),
          stagger(100,
            [
              animate('1s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
            ])
        ],
        { optional: true }
      ),
    ]),
  ]);
