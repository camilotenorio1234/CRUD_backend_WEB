
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `createdAt` varchar(70) NOT NULL,
  `updatedAt` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `Libros`;
CREATE TABLE `Libros` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) NOT NULL,
  `tipo` varchar(30) DEFAULT NULL,
  `editorial` varchar(30) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `createdAt` varchar(70) NOT NULL,
  `updatedAt` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `Musica`;
CREATE TABLE `Musica` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) NOT NULL,
  `tipo` varchar(30) DEFAULT NULL,
  `disquera` varchar(30) DEFAULT NULL,
  `year` year(4) DEFAULT NULL,
  `autor` varchar(30) DEFAULT NULL,
  `createdAt` varchar(70) NOT NULL,
  `updatedAt` varchar(70) NOT NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

use libreria;

INSERT INTO `Libros` VALUES (1,'bno7','TAOCP','GG',1999,'Knuth'),(3,'bno6','TAOCP','GG',1999,'Knuth');
INSERT INTO `Musica` VALUES (1,'bno7','TAOCP','GG',1999,'Knuth'),(3,'bno6','TAOCP','GG',1999,'Knuth');