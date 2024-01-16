/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type DeviceRegistrationInput = {
  Nickname: string,
  Lat: number,
  Long: number,
};

export type DeviceConfiguration = {
  __typename: "DeviceConfiguration",
  DeviceId: string,
  Nickname?: string | null,
  BatteryLife?: number | null,
  Location?: DeviceLocation | null,
};

export type DeviceLocation = {
  __typename: "DeviceLocation",
  Lat?: number | null,
  Long?: number | null,
  LocationName?: string | null,
  LocationKey?: string | null,
};

export type AuthInput = {
  Username?: string | null,
  Password?: string | null,
  RefreshToken?: string | null,
};

export type AuthGrant = {
  __typename: "AuthGrant",
  AccessToken: string,
  IdToken: string,
  RefreshToken?: string | null,
};

export type PlantSearch = {
  id?: string | null,
  name?: string | null,
};

export type Plant = {
  __typename: "Plant",
  id: string,
  common_name?: string | null,
  scientific_name?: Array< string | null > | null,
  other_name?: Array< string | null > | null,
  family?: string | null,
  origin?: Array< string | null > | null,
  type?: string | null,
  dimensions?: PlantDimensions | null,
  cycle?: string | null,
  attracts?: Array< string | null > | null,
  propagation?: Array< string | null > | null,
  hardiness?: PlantHardiness | null,
  watering?: string | null,
  watering_period?: string | null,
  watering_general_benchmark?: PlantWateringInfo | null,
  sunlight?: Array< string | null > | null,
  pruning_month?: Array< string | null > | null,
  growth_rate?: string | null,
  thorny?: boolean | null,
  indoor?: boolean | null,
  care_level?: string | null,
  flowers?: boolean | null,
  flowering_season?: string | null,
  flower_color?: string | null,
  leaf?: boolean | null,
  leaf_color?: Array< string | null > | null,
  poisonous_to_humans?: boolean | null,
  poisonous_to_pets?: boolean | null,
  description?: string | null,
};

export type PlantDimensions = {
  __typename: "PlantDimensions",
  type?: string | null,
  min_value?: number | null,
  max_value?: number | null,
  unit?: string | null,
};

export type PlantHardiness = {
  __typename: "PlantHardiness",
  min?: number | null,
  max?: number | null,
};

export type PlantWateringInfo = {
  __typename: "PlantWateringInfo",
  value?: string | null,
  unit?: string | null,
};

export type HourlyReading = {
  __typename: "HourlyReading",
  DateTime?: string | null,
  EpochDateTime?: number | null,
  WeatherIcon?: number | null,
  IconPhrase?: string | null,
  HasPrecipitation?: boolean | null,
  IsDaylight?: boolean | null,
  Temperature?: Reading | null,
  RealFeelTemperature?: Reading | null,
  RealFeelTemperatureShade?: Reading | null,
  WetBulbTemperature?: Reading | null,
  DewPoint?: Reading | null,
  RelativeHumidity?: number | null,
  IndoorRelativeHumidity?: number | null,
  UVIndex?: number | null,
  UVIndexText?: string | null,
  PrecipitationProbability?: number | null,
  ThunderstormProbability?: number | null,
  RainProbability?: number | null,
  SnowProbability?: number | null,
  IceProbability?: number | null,
  TotalLiquid?: Reading | null,
  Rain?: Reading | null,
  Snow?: Reading | null,
  Ice?: Reading | null,
  CloudCover?: number | null,
  Evapotranspiration?: Reading | null,
  SolarIrradiance?: Reading | null,
};

export type Reading = {
  __typename: "Reading",
  Value?: number | null,
  Unit?: string | null,
  UnitType?: number | null,
  Phrase?: string | null,
};

export type SensorDataSearch = {
  DeviceId: string,
  range: SensorSearchRange,
  page?: string | null,
};

// Query [Inputs]
export enum SensorSearchRange {
  RECENT = "RECENT",
  HOURLY = "HOURLY",
  DAILY = "DAILY",
}


export type SensorReadings = {
  __typename: "SensorReadings",
  page?:  Array<SensorReading | null > | null,
  nextToken?: string | null,
};

export type SensorReading = {
  __typename: "SensorReading",
  DeviceId: string,
  Timestamp: number,
  SoilTemperature: number,
  SoilMoisture?: number | null,
  AirTemperature: number,
  Humidity: number,
  Light: number,
  VisibleLight: number,
  InfraredLight: number,
};

export type DeviceSearch = {
  DeviceId: string,
};

export type RegisterDeviceMutationVariables = {
  device?: DeviceRegistrationInput | null,
};

export type RegisterDeviceMutation = {
  registerDevice?:  {
    __typename: "DeviceConfiguration",
    DeviceId: string,
    Nickname?: string | null,
    BatteryLife?: number | null,
    Location?:  {
      __typename: "DeviceLocation",
      Lat?: number | null,
      Long?: number | null,
      LocationName?: string | null,
      LocationKey?: string | null,
    } | null,
  } | null,
};

export type SigninMutationVariables = {
  user: AuthInput,
};

export type SigninMutation = {
  signin:  {
    __typename: "AuthGrant",
    AccessToken: string,
    IdToken: string,
    RefreshToken?: string | null,
  },
};

export type PlantsQueryVariables = {
  where: PlantSearch,
};

export type PlantsQuery = {
  plants?:  Array< {
    __typename: "Plant",
    id: string,
    common_name?: string | null,
    scientific_name?: Array< string | null > | null,
    other_name?: Array< string | null > | null,
    family?: string | null,
    origin?: Array< string | null > | null,
    type?: string | null,
    dimensions?:  {
      __typename: "PlantDimensions",
      type?: string | null,
      min_value?: number | null,
      max_value?: number | null,
      unit?: string | null,
    } | null,
    cycle?: string | null,
    attracts?: Array< string | null > | null,
    propagation?: Array< string | null > | null,
    hardiness?:  {
      __typename: "PlantHardiness",
      min?: number | null,
      max?: number | null,
    } | null,
    watering?: string | null,
    watering_period?: string | null,
    watering_general_benchmark?:  {
      __typename: "PlantWateringInfo",
      value?: string | null,
      unit?: string | null,
    } | null,
    sunlight?: Array< string | null > | null,
    pruning_month?: Array< string | null > | null,
    growth_rate?: string | null,
    thorny?: boolean | null,
    indoor?: boolean | null,
    care_level?: string | null,
    flowers?: boolean | null,
    flowering_season?: string | null,
    flower_color?: string | null,
    leaf?: boolean | null,
    leaf_color?: Array< string | null > | null,
    poisonous_to_humans?: boolean | null,
    poisonous_to_pets?: boolean | null,
    description?: string | null,
  } | null > | null,
};

export type WeatherQueryVariables = {
  location: string,
};

export type WeatherQuery = {
  weather?:  Array< {
    __typename: "HourlyReading",
    DateTime?: string | null,
    EpochDateTime?: number | null,
    WeatherIcon?: number | null,
    IconPhrase?: string | null,
    HasPrecipitation?: boolean | null,
    IsDaylight?: boolean | null,
    Temperature?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    RealFeelTemperature?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    RealFeelTemperatureShade?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    WetBulbTemperature?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    DewPoint?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    RelativeHumidity?: number | null,
    IndoorRelativeHumidity?: number | null,
    UVIndex?: number | null,
    UVIndexText?: string | null,
    PrecipitationProbability?: number | null,
    ThunderstormProbability?: number | null,
    RainProbability?: number | null,
    SnowProbability?: number | null,
    IceProbability?: number | null,
    TotalLiquid?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    Rain?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    Snow?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    Ice?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    CloudCover?: number | null,
    Evapotranspiration?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
    SolarIrradiance?:  {
      __typename: "Reading",
      Value?: number | null,
      Unit?: string | null,
      UnitType?: number | null,
      Phrase?: string | null,
    } | null,
  } | null > | null,
};

export type ReadingsQueryVariables = {
  where: SensorDataSearch,
};

export type ReadingsQuery = {
  readings?:  {
    __typename: "SensorReadings",
    page?:  Array< {
      __typename: "SensorReading",
      DeviceId: string,
      Timestamp: number,
      SoilTemperature: number,
      SoilMoisture?: number | null,
      AirTemperature: number,
      Humidity: number,
      Light: number,
      VisibleLight: number,
      InfraredLight: number,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type DevicesQueryVariables = {
  where: DeviceSearch,
};

export type DevicesQuery = {
  devices?:  Array< {
    __typename: "DeviceConfiguration",
    DeviceId: string,
    Nickname?: string | null,
    BatteryLife?: number | null,
    Location?:  {
      __typename: "DeviceLocation",
      Lat?: number | null,
      Long?: number | null,
      LocationName?: string | null,
      LocationKey?: string | null,
    } | null,
  } | null > | null,
};
