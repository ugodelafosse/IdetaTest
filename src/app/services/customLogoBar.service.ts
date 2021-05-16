import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { State } from './storeInterface';
import { of } from 'rxjs';

@Injectable()
export class CustomLogoBarService extends ObservableStore<State> {
  constructor() {
    super({ trackStateHistory: true });
    this.initState();
  }

  initState() {
    const initialState = {
      logo: null,
    };
    this.setState(initialState, 'init_state');
  }

  getFullState() {
    const fullState = this.getState().logo;
    return of(fullState);
  }

  setImageState(type: string, param: string) {
    let state = this.getState().logo;
    if (type === 'background') {
      this.setState(
        {
          logo: {
            background: param,
          },
        },
        'update_background'
      );
    }
    if (type === 'fontColor') {
      state['fontColor'] = param;
      this.setState({
        logo: state,
      });
    }
  }
}
