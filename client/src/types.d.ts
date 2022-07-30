export interface cityDataToSearch{
    name:string,
    country:string,
    state:string,
    lon:number,
    lat:number,
    msg?:string,
  }

export interface  cityDataToShowTypes{
    name:string,
    base:string,
    feels_like:number,
    humidity:number,
    pressure:number,
    temp:number,
    main:string,
    description:string,
    speed:number,
    lat:number,
    lon:number
}