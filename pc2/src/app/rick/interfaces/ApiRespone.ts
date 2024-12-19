export interface ApiResponse {
    info: Info;
    results: Character[];
}

export interface Character {
    id: number;
    name: string;
    status: 'Alive' | 'Dead' | 'unknown';
    species: 'Alien' | 'Human';
    type: string;
    gender: 'Male' | 'Female' | 'Genderless' | 'unknown';
    origin : LocationInfo;
    location: LocationInfo;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface LocationInfo{
    name: string;
    url: string;
}
