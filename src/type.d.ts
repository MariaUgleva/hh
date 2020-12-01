export type CardType = {
    id: number,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: Array<string>,
    tools: Array<string>
};
export type FilterType = {
    [key: string]: string,
}
export type FilterObjectRedux = {
    role: Array<string>,
    level: Array<string>,
    languages: Array<string>,
    tools: Array<string>
    [key: string]: Array<string>,
}