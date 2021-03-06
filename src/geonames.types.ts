export interface GeonamesConfig {
  lan: string
  encoding: string
  formatted: boolean
  style: string
  username: string | null
  token: string | null  
}

export interface GeonamesOptions extends Partial<GeonamesConfig> {
  username: string | null
  token: string | null  
}
