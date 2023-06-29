export type Listener<T extends unknown[] = any[]> = (...args: T) => void;
export type MapInterface<P> = P[keyof P];

export class EventBus<
  E extends Record<string, string> = Record<string, string>,
  M extends Record<MapInterface<E>, any> = Record<string, any[]>
> {
  private listeners: { [K in MapInterface<E>]?: Listener<M[K]>[] } = {};

  on<Event extends MapInterface<E>>(event: Event, callback: Listener<M[Event]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]!.push(callback);
  }

  off<Event extends MapInterface<E>>(event: Event, callback: Listener<M[Event]>) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback
    );
  }

  emit<Event extends MapInterface<E>>(event: Event, ...args: M[Event]) {
    if (!this.listeners[event]) {
      throw new Event(`Нет события: ${event}`);
    }

    (this.listeners[event] ?? []).forEach( listener => {
      listener(...args);
    });
  }
}