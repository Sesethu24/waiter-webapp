create table waiters (
	id serial not null primary key,
	name_ text not null,
	days_ text not null
);

create table admins (
	id serial not null primary key,
    days_ text not null,
	waiters_id int,
	foreign key (waiters_id) references waiters(id)
);
