/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface T {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page<P> extends Component<T> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
