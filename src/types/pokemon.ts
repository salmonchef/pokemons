
export interface IPokemon {
    name: string;
    weight: number;
    height: number;
    image: string;
    versions: string[];
}

export enum SearchStatusEnum {
    initial = "initial",
    searching = "searching",
    notFound = "notFound",
    found = "found",
}