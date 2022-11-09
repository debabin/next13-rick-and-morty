interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Result<Data> {
  info: Info;
  results: Array<Data>;
}

interface CharacterEntity {
  name: string;
  url: string;
}

interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
