import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { StarwarsEffectsEffects } from './starwars-effects.effects';

describe('StarwarsEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: StarwarsEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarwarsEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(StarwarsEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
