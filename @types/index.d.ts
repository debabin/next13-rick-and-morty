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

type Url = string;
type Gender = 'female' | 'male' | 'genderless' | 'unknown';
type Status = 'alive' | 'dead' | 'unknown';
interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: CharacterEntity;
  location: CharacterEntity;
  image: string;
  episode: Url[];
  url: Url;
  created: string;
}

interface CharacterFilter {
  page?: number;
  name?: Character['name'];
  status?: Character['status'];
  type?: Character['type'];
  species?: Character['species'];
  gender?: Character['gender'];
}

interface LocationFilter {
  page?: number;
  name?: Location['name'];
  type?: Location['type'];
}

interface EpisodeFilter {
  page?: number;
  name?: Episode['name'];
}

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Url[];
  url: Url;
  created: string;
}

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Url[];
  url: Url;
  created: string;
}
