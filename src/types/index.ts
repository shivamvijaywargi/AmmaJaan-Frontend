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

export interface IProductResponse {
  success: boolean;
  message: string;
  product: IProduct;
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
  category: null | string;
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

/**
 * "success": true,
    "message": "Product fetched successfully",
    "product": {
        "_id": "640ec0a892cfbf6f4dbdd6ea",
        "title": "Product 1",
        "description": "This is my first product description",
        "originalPrice": 5555,
        "quantity": 10,
        "inStock": true,
        "views": 1,
        "slug": "product-1-b2cbc",
        "numOfUnitsSold": 0,
        "category": null,
        "createdBy": {
            "avatar": {
                "public_id": "vjshivam5@gmail.com",
                "secure_url": "https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg"
            },
            "_id": "640ec04192cfbf6f4dbdd6d6",
            "fullName": "Shivam Vijaywargi",
            "email": "vjshivam5@gmail.com",
            "phoneNumber": "9999999989",
            "role": 1550,
            "isActive": true,
            "loginCount": 182,
            "addresses": [
                "640ee3894747fdce0484f575"
            ],
            "createdAt": "2023-03-13T06:18:41.365Z",
            "updatedAt": "2023-06-28T02:54:51.701Z",
            "__v": 0
        },
        "images": [
            {
                "image": {
                    "public_id": "eCommerce/products/fzjjhicqx9kepsogsl7j",
                    "secure_url": "https://res.cloudinary.com/dipyrwyip/image/upload/v1678688433/eCommerce/products/fzjjhicqx9kepsogsl7j.jpg"
                },
                "_id": "640ec0b292cfbf6f4dbdd6ec"
            }
        ],
        "createdAt": "2023-03-13T06:20:24.312Z",
        "updatedAt": "2023-06-28T02:54:52.517Z",
        "__v": 1
    }
 */
