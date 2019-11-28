create table waiters (
	id serial not null primary key,
	name_ text
);

create table waiterDays (
   id serial not null primary key,
   days_ text not null
);

create table admins (
	id serial not null primary key,
    days_ text,
	waiters_id int references waiters(id) ON DELETE CASCADE ON UPDATE CASCADE,
	waiterDays_id int references waiterDays(id) ON DELETE CASCADE ON UPDATE CASCADE 
);
