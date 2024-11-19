export interface UserBody {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  username: string;
  email: string;
  roles: string[];
  isVerified: boolean;
  userImagePath: string | null;
  hasError: boolean;
  error: string | null;
  jwToken: string;
}

export interface UserState
{
  
}