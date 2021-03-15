module.exports = {
  createUserTable: `
    CREATE TABLE IF NOT EXISTS user_info (
      id uuid PRIMARY KEY,
      first_name varchar not null,
      last_name varchar not null,
      username varchar unique not null
      email varchar unique not null,
      password varchar not null,
      gender varchar,
      is_admin boolean default 'false',
      created_at TIMESTAMPTZ default now(),
      updated_at TIMESTAMPTZ default now(),
    );
  `,

  // const userArray = [
  //   {
  //     id: '719a6c77-f46e-43ba-bbdb-fd7fa890af71',
  //     firstName: 'lani',
  //     lastName: 'juyitan',
  //     username: 'lan',
  //     email: 'lani@yahoo.com',
  //     password: '12345678',
  //     gender: 'male',
  //     isAdmin: true,
  //   },
  // ];

  insertUser: `
    insert into user_info (
        id,
        first_name,
        last_name,
        email,
        password,
        gender
    ) values ($1, $2, $3, $4, $5, $6)
    RETURNING id, first_name, last_name, email, created_at, is_admin, gender;
  `,

  fetchUserByEmail: 'SELECT * FROM user_info WHERE email = $1',
  fetchUserById: 'SELECT * FROM user_info WHERE id = $1',
};
