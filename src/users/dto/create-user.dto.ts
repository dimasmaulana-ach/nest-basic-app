export class CreateUserDto {
  email: string;
  name?: string | null;
  password?: string | null;
  rolesId?: number | null;
}
