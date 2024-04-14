export interface AuthRequest {
    username: string;
    password: string;
    roleListName: string[];
}

export interface LoginRequest{
    username: string,
    password: string
}

export interface AlbumnsData{
    userId: number;
    title: string;
}

export interface TodosData{
    completed : boolean;
    title: string;
    userId: number;
}

export interface UsuarioData{
    body: string;
    email: string;
    name: string;
    postId: number;
}

export interface PostData{
    body: string;
    title: string;
    userId: number;
}

export interface DataPhotos{
    albumId: number;
    thumbanailUrl: boolean;
    title: string;
    url: string;
}

interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Geo{
    lat: string;
    lng: string;
}

export interface DataMyUser{
    address: Address;
    company: Company;
    email: string;
    geo: Geo;
    name: string;
    phone: string;
    username: string;
    website: string;
}


