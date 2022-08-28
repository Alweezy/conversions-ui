export interface IMeasurementOption {
  text: string,
  value: string
}

export const initialState = {
  fromOption: {text: "Meters", value:"m"},
  toOption: {text: "Kilometres", value:"km"}
}