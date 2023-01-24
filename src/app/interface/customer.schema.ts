export interface ICarData {
  _id: string;
  repairs: {
    is_confirmed: false;
    total_amount: 0;
    car: {
      registration_number: string;
      brand: string;
      model: string;
    };
    to_do: [];
  };
}
