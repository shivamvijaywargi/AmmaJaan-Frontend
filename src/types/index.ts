export interface IUser {
  avatar: {
    public_id: string;
    secure_url: string;
  };
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: number;
  isActive: boolean;
  loginCount: number;
  addresses: string[];
  createdAt: string;
  updatedAt: string;
}

export interface IAuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
  user: IUser;
}

export interface IProductsResponse {
  success: boolean;
  message: string;
  products: IProduct[];
}

export interface IProductResponse {
  success: boolean;
  message: string;
  products: IProduct;
}

export interface IProduct {
  _id: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  quantity: number;
  inStock: boolean;
  views: number;
  slug: string;
  numOfUnitsSold: number;
  category: null | ICategory;
  createdBy: {
    avatar: {
      public_id: string;
      secure_url: string;
    };
    _id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    role: number;
    isActive: boolean;
    loginCount: number;
    addresses: string[];
    createdAt: string;
    updatedAt: string;
  };
  images: [
    {
      image: {
        public_id: string;
        secure_url: string;
      };
      _id: string;
    }
  ];
  createdAt: string;
  updatedAt: string;
}

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  description: string;
}
