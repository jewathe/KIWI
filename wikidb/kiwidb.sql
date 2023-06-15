
/* 
1- Il faut creer la bd et la nommer kiwidb
2- executer les scripts suivants. 
*/

 CREATE TABLE Category 
 (
    id      SERIAL PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    description    VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS recipe(    id  SERIAL PRIMARY KEY ,
    proposed_title VARCHAR(255) DEFAULT NULL,
    proposed_description  TEXT DEFAULT NULL,
    created_at TIMESTAMPTZ DEFAULT Now(),
    updated_at TIMESTAMPTZ DEFAULT Now(),
    user_id integer NULL,
    adopted_title  VARCHAR(255) DEFAULT NULL ,
    adopted_description TEXT ,
    status integer NULL DEFAULT 0,
    preparation_time integer,
    cooking_time integer,
    portions integer
);


CREATE TABLE  IF NOT EXISTS public.ingredient 
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  categoryId INTEGER NOT NULL,
  CONSTRAINT fk_ingredient_category FOREIGN KEY(categoryId) REFERENCES category(id)
);

CREATE TABLE IF NOT EXISTS public.recipe_ingredients
(
    id  SERIAL PRIMARY KEY,
    ingredient_id integer NOT NULL,
    recipe_id integer NOT NULL,
    quantity integer NOT NULL,
    CONSTRAINT fk_ingredientrecipe_ingredient FOREIGN KEY(ingredient_id) REFERENCES ingredient(id),
    CONSTRAINT fk_ingredientrecipe_recipe FOREIGN KEY(recipe_id) REFERENCES recipe(id) ,
    CONSTRAINT uniq_ingredientrecipe UNIQUE(recipe_id, ingredient_id)
);				   

CREATE TABLE IF NOT EXISTS steps
(
   id      SERIAL PRIMARY KEY,
   recipe_id    INTEGER NOT NULL,
   description    VARCHAR(400) NOT NULL,
   step_no INTEGER    NOT NULL UNIQUE,               
   constraint uniq_steps UNIQUE(recipe_id, step_no),
   constraint fk_step_recipe FOREIGN KEY(recipe_id) REFERENCES recipe(id)
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) DEFAULT NULL,
    email  TEXT NOT NULL,
    password  TEXT NOT NULL,
    role   INTEGER  NULL DEFAULT 1
);

ALTER TABLE users 
ADD CONSTRAINT fk_user_role FOREIGN KEY(role) REFERENCES roles(id)
ALTER TABLE users 
ADD CONSTRAINT uniq_email UNIQUE(email)

CREATE TABLE roles(
    id SERIAL PRIMARY KEY,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS image(
    id SERIAL PRIMARY KEY,
    fileName VARCHAR(255) DEFAULT NULL,
    status integer NOT NULL DEFAULT 0,
	recipe_id integer NOT NULL DEFAULT 0,
    constraint fk_recipe_image FOREIGN KEY(recipe_id) REFERENCES image(id),
    user_id integer NOT NULL DEFAULT 0,
    constraint fk_user_image FOREIGN KEY(user_id) REFERENCES image(id)
);

CREATE TABLE IF NOT EXISTS favoris
(
   id      SERIAL PRIMARY KEY,
   recipe_id    INTEGER NOT NULL UNIQUE,
   user_id    INTEGER  NULL,             
   constraint uniq_recipe UNIQUE(recipe_id, user_id),
   constraint fk_favori_recipe FOREIGN KEY(recipe_id) REFERENCES recipe(id),
   constraint fk_favori_user FOREIGN KEY(user_id) REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS groceries
(
   id      SERIAL PRIMARY KEY,
   recipe_id    INTEGER NOT NULL UNIQUE,
   user_id    INTEGER  NULL,             
   constraint uniq_recipe UNIQUE(recipe_id, user_id),
   constraint fk_groceries_recipe FOREIGN KEY(recipe_id) REFERENCES recipe(id),
   constraint fk_groceries_user FOREIGN KEY(user_id) REFERENCES users(id)
);



INSERT INTO category(name,description) VALUES('jus','de tout fruit');
INSERT INTO category(name,description) VALUES('dessert','creme');
INSERT INTO category(name,description) VALUES('diner','tout type');
INSERT INTO category(name,description) VALUES('dejeuner','tout type');



INSERT INTO ingredient (name,categoryId) VALUES('raisin',1);
INSERT INTO ingredient (name,categoryId) VALUES('kiwi',1);
INSERT INTO ingredient (name,categoryId) VALUES('fraise',1);
INSERT INTO ingredient (name,categoryId) VALUES('pomme',1);

INSERT INTO ingredient (name,categoryId) VALUES('lait',2);
INSERT INTO ingredient (name,categoryId) VALUES('chocolat',2);
INSERT INTO ingredient (name,categoryId) VALUES('cafe',2);

INSERT INTO ingredient (name,categoryId) VALUES('poulet',3);
INSERT INTO ingredient (name,categoryId) VALUES('oignon',3);
INSERT INTO ingredient (name,categoryId) VALUES('oeuf',3);

INSERT INTO ingredient (name,categoryId) VALUES('poulet',3);
INSERT INTO ingredient (name,categoryId) VALUES('oignon',3);
INSERT INTO ingredient (name,categoryId) VALUES('oeuf',3);

INSERT INTO recipe(proposed_title, proposed_description,user_id,preparation_time,cooking_time,portions,image) VALUES('Gateau','recette delicieuse',2,30,60,3,'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.femmeactuelle.fr%2Fcuisine%2Fguides-cuisine%2Fidees-decoration-gateau-41644&psig=AOvVaw3QHtxpFD4rQifVivhOw5OI&ust=1683829159347000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD589Cu6_4CFQAAAAAdAAAAABAE');
INSERT INTO recipe(proposed_title, proposed_description,user_id,preparation_time,cooking_time,portions,image) VALUES('sushi','recette japonaise',2,30,60,4,'https://www.pbs.org/food/files/2012/09/Sushi-1-1.jpg');
INSERT INTO recipe(proposed_title, proposed_description,user_id,preparation_time,cooking_time,portions,image) VALUES('couscous','recette du magreb',2,30,60,3,'https://thumbs.dreamstime.com/b/couscous-salad-25219616.jpg');
INSERT INTO recipe(proposed_title, proposed_description,user_id,preparation_time,cooking_time,portions,image) VALUES('spaghetti','spaghetti au boeuf',2,30,60,4,'https://www.olivetomato.com/wp-content/uploads/2022/06/Greek-Spaghetti-with-Ground-Beef-Sauce-recipe-%E2%80%93-Makaronia-me-Kima-2.jpeg');



INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (1, 1, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (2, 1, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (9, 1, 10)

INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (8, 2, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (7, 2, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (9, 2, 10)

INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (8, 3, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (7, 3, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (9, 3, 10)

INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (8, 4, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (7, 4, 10)
INSERT INTO recipe_ingredients (ingredient_id, recipe_id, quantity) VALUES (9, 4, 10)