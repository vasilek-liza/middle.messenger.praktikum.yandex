import { State } from '../types';
import Block from '../utils/Block';
import EventBus from '../utils/EventBus';
import set from '../utils/set';


enum StorageEvent {
    UpdateState = 'update',
}

class Store extends EventBus {
    private state: State = {};

    getState() {
        return this.state
    }

    set(path: string, value: unknown) {
        set(this.state, path, value);
        this.emit(StorageEvent.UpdateState, this.state)
    }
}

export const store = new Store();

export function withStore(mapStateProps: (state: State) => any) {
    return (Component: typeof Block) => {
        return class extends Component {
            constructor(props: any) {
                const propsFromState = mapStateProps(store.getState());
                console.log(propsFromState)
                super({ ...props, ...propsFromState });

                store.on(StorageEvent.UpdateState, () => {
                    const propsFromState = mapStateProps(store.getState());
                    this.setProps(propsFromState)
                })
            }
        }
    }
}