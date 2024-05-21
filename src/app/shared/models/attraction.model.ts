export interface Attraction {
  id: number,
  name: string,
  description: string,
  images: string[],
  latitude: string,
  longitude: string,
  cityId: number,
  city: any
}
