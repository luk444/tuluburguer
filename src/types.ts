export type SizeKey = 'simple' | 'doble' | 'triple';
export type PaymentMethod = 'efectivo' | 'transferencia' | 'mercadopago';

export interface SizeOption {
  key: SizeKey;
  label: string;
  price: number;
}

export interface PriceOption {
  label: string;
  price: number;
}

export interface AddOnOption {
  id: string;
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'clasicas' | 'especiales' | 'extras';
  image: string;
  sizes?: SizeOption[];
  priceOptions?: PriceOption[];
  singlePrice?: number;
  badge?: string;
}

export interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  image: string;
  optionLabel: string;
  price: number;
  quantity: number;
}
