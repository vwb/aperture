# Schema Information

## photos
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
title         | string    | not null
url           | string    | not null
user_id	      | integer   | not null, foreign key (references users), indexed
collection_id | integer   | foreign key (references collection), indexed
price 				| integer 	| not null, default 0

## collections
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null

## tags
column name   | data type | details
------------  |-----------|-----------------------
id            | integer   | not null, primary key
name          | string    | not null
taggable_id   | integer		|
taggable_type | string    | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email					  | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
