import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';


export interface BillingAddressSlice {
  user_id: number
  first_name: string
  last_name: string
  phone: string
  email: string
  address: string
  province: string
  disctrict: string
  village: string
  postal_code: string
  neighborhood: string
  address_name: string
}

const initialState: BillingAddressSlice = {

  user_id: 0,
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  address: "",
  province: "",
  disctrict: "",
  village: "",
  postal_code: "",
  neighborhood: "",
  address_name: ""
}

export const siteBillingAddressSlice = createSlice({
  name: 'billingaddress',
  initialState,
  reducers: {
    updateBillingAddress: (state, action: PayloadAction<BillingAddressSlice>) => {
      Object.assign(state, action.payload);
    }
  },
});

export const {
  updateBillingAddress
} = siteBillingAddressSlice.actions;

// Selectors
export const selectBillingAddress = (state: RootState) => state.siteBillingAddressSlice;

export default siteBillingAddressSlice.reducer;
