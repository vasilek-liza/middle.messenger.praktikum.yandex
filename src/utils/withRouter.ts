import Block from './Block';
import { Router } from './Router';

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {

    constructor(props: any) {
      super({
        ...props,
        router: Router,
      });
    }
  };
}
