import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export interface VerifyDealerPayload {
  dealerId: string;
}

export interface VerifyDealerResponse {
  success: boolean;
  message: string;
  exists: boolean;
  data: {
    dealerId: string;
    dealerName: string;
    email: string;
  };
}

// submissions/verify-dealer
export async function verifyDealer(
  data: VerifyDealerPayload,
): Promise<VerifyDealerResponse> {
  try {
    const res = await api.post("/submissions/verify-dealer", data);
    return res.data;
  } catch (err) {
    console.error("Error verifying dealer:", err);
    throw new Error("Failed to verify dealer");
  }
}

export interface SubmitDealerFormResponse {
  success: boolean;
  message: string;
}

export interface SubmitDealerFormPayload {
  dealerId: string;
  auction: string;
  vin: string;
  vehicleYear: number | string;
  mileage: number | string;
  interiorChoice: string;
  model: string;
  series: string;
  floorPrice: number | string;
  announcement: string;
  remarks?: string;
}

// submissions/submit-dealer-form
export async function submitDealerForm(
  data: SubmitDealerFormPayload,
): Promise<SubmitDealerFormResponse> {
  try {
    const res = await api.post("/submissions", data);
    return res.data;
  } catch (err) {
    console.error("Error submitting dealer form:", err);
    throw new Error("Failed to submit dealer form");
  }
}
