/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const plants = /* GraphQL */ `query Plants($where: PlantSearch!) {
  plants(where: $where) {
    id
    common_name
    scientific_name
    other_name
    family
    origin
    type
    dimensions {
      type
      min_value
      max_value
      unit
      __typename
    }
    cycle
    attracts
    propagation
    hardiness {
      min
      max
      __typename
    }
    watering
    watering_period
    watering_general_benchmark {
      value
      unit
      __typename
    }
    sunlight
    pruning_month
    growth_rate
    thorny
    indoor
    care_level
    flowers
    flowering_season
    flower_color
    leaf
    leaf_color
    poisonous_to_humans
    poisonous_to_pets
    description
    __typename
  }
}
` as GeneratedQuery<APITypes.PlantsQueryVariables, APITypes.PlantsQuery>;
export const weather = /* GraphQL */ `query Weather($location: ID!) {
  weather(location: $location) {
    DateTime
    EpochDateTime
    WeatherIcon
    IconPhrase
    HasPrecipitation
    IsDaylight
    Temperature {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    RealFeelTemperature {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    RealFeelTemperatureShade {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    WetBulbTemperature {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    DewPoint {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    RelativeHumidity
    IndoorRelativeHumidity
    UVIndex
    UVIndexText
    PrecipitationProbability
    ThunderstormProbability
    RainProbability
    SnowProbability
    IceProbability
    TotalLiquid {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    Rain {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    Snow {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    Ice {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    CloudCover
    Evapotranspiration {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    SolarIrradiance {
      Value
      Unit
      UnitType
      Phrase
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.WeatherQueryVariables, APITypes.WeatherQuery>;
export const readings = /* GraphQL */ `query Readings($where: SensorDataSearch!) {
  readings(where: $where) {
    page {
      DeviceId
      Timestamp
      SoilTemperature
      SoilMoisture
      AirTemperature
      Humidity
      Light
      VisibleLight
      InfraredLight
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ReadingsQueryVariables, APITypes.ReadingsQuery>;
export const devices = /* GraphQL */ `query Devices($where: DeviceSearch!) {
  devices(where: $where) {
    DeviceId
    Nickname
    BatteryLife
    Location {
      Lat
      Long
      LocationName
      LocationKey
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.DevicesQueryVariables, APITypes.DevicesQuery>;
