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

/**
 * "success": true,
    "message": "User Logged in successfully",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQwZWMwNDE5MmNmYmY2ZjRkYmRkNmQ2Iiwicm9sZSI6MTU1MCwiaWF0IjoxNjg3NTkwMzc2LCJleHAiOjE2ODc1OTIxNzZ9.1zdOQevzfonEtqRDedpC9YSoPk5ZfwsaQrmty8hM2OQ",
    "user": {
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
        "loginCount": 163,
        "addresses": [
            "640ee3894747fdce0484f575"
        ],
        "createdAt": "2023-03-13T06:18:41.365Z",
        "updatedAt": "2023-06-24T07:06:16.702Z",
    }
 */
