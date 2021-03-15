module.exports = {
  createProductTable: `
  create table if not exists product (
   id UUID PRIMARY KEY,
   name varchar NOT NULL
   size NUMERIC NOT NULL,
   color varchar NOT NULL,
   description varchar NOT NULL
   owner_username varchar NOT NULL
   user_id uuid REFERENCES user_info NOT NULL,
   created_at TIMESTAMPTZ default now(),
   updated_at TIMESTAMPTZ default now(),
   rating NUMERIC
  );
  `,

  insertProduct: `
    INSERT INTO product 
        ( id, name, size, color, description, owner_username, user_id ) 
      VALUES ($1, $2, $3)
    RETURNING *;
  `,

  fetchProductById: 'SELECT * FROM product WHERE id = $1',

  updateProductById: `
    UPDATE product
    SET 
      name = $1,
      updated_at=NOW()
    WHERE id = $2
    RETURNING *;
  `,

  deleteProductById: 'DELETE FROM product WHERE id = $1',

  fetchProducts: 'SELECT * FROM product',

  fetchSingleUserProducts: 'SELECT * FROM product WHERE user_id = $1',

};
