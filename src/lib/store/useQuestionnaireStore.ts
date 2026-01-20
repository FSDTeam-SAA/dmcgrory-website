import { create } from "zustand";

export interface QuestionnaireData {
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

interface QuestionnaireState {
  data: QuestionnaireData;
  step: number;
  setStep: (step: number) => void;
  setDealerId: (dealerId: string) => void;
  updateData: (newData: Partial<QuestionnaireData>) => void;
  reset: () => void;
}

const initialData: QuestionnaireData = {
  dealerId: "",
  auction: "",
  vin: "",
  vehicleYear: "",
  mileage: "",
  interiorChoice: "",
  model: "",
  series: "",
  floorPrice: "",
  announcement: "",
  remarks: "",
};

export const useQuestionnaireStore = create<QuestionnaireState>((set) => ({
  data: initialData,
  step: 1,
  setStep: (step) => set({ step }),
  setDealerId: (dealerId) =>
    set((state) => ({
      data: { ...state.data, dealerId },
    })),
  updateData: (newData) =>
    set((state) => ({
      data: { ...state.data, ...newData },
    })),
  reset: () => set({ data: initialData, step: 1 }),
}));
