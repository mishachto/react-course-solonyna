export interface ITodo {
  id?: number;
  title: string;
  createAt: Date;
  completed: boolean;
}

export interface ITodosFilterSettings {
  completed: null | boolean;
}

export interface ITodosState {
  todos: ITodo[];
  error: null | string;
  loading: boolean;
  todo: ITodo | null;
  filterSettings: ITodosFilterSettings;
}
