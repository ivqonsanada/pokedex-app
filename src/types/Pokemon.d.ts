namespace Pokemon {
  type BaseList = {
    count: number;
    next?: string | null;
    previous?: string | null;
    results: BaseName[];
    status: boolean;
    message: string;
  };

  type BaseName = {
    id?: number;
    url: string;
    name: string;
    image?: string;
  };
}
