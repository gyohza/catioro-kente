export class LaraResource<T> {
  data: T[];
  links: {
    first: URL;
    last: URL;
    prev: URL;
    next: URL;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: URL;
      label: number;
      active: boolean;
    }[];
  };
  path: URL;
  per_page: number;
  to: number;
  total: number;
}
