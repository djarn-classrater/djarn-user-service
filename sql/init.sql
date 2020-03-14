create database users;

create table if not exists users.User
(
	id int auto_increment
		primary key,
	studentId varchar(256) null,
	firstNameTH varchar(256) null,
	firstNameEN varchar(256) null,
	lastNameTH varchar(256) null,
	lastNameEN varchar(256) null,
	organizationNameTH varchar(256) null,
	organizationNameEN varchar(256) null,
	constraint user_studentId_uindex
		unique (studentId)
);
