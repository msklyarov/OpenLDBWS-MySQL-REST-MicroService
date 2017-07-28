DROP TABLE IF EXISTS users;

CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `CRS` char(3) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `IDX_FN_LN` (`FirstName`,`LastName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO users(FirstName, LastName, CRS) VALUES('Darren', 'Marsden', 'LDS');
INSERT INTO users(FirstName, LastName, CRS) VALUES('John', 'Smith', 'AGV');
INSERT INTO users(FirstName, LastName, CRS) VALUES('Jane', 'Doe', 'CNN');
