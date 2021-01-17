-- MySQL dump 10.13  Distrib 5.7.24, for Win32 (AMD64)
--
-- Host: localhost    Database: clientes
-- ------------------------------------------------------
-- Server version	5.7.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(1000) NOT NULL,
  `empresa` varchar(200) NOT NULL,
  `celular` tinytext NOT NULL,
  `correo` varchar(200) NOT NULL,
  `creador` int(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (38,'Cerro azul','fwliugwbv','15516889594','manuel@correo.com',8),(46,'tequila','fwliugwbv','15516889594','asfae@jhgvki.com',8),(49,'cerro azul','sdaefwf','24323454645','hola@hola.com',12),(54,'tequila','fwliugwbv','15516889594','hola@hola.com',7),(55,'brayan garcía','rewghtrhg','5542241353','correo@correo.com',7),(56,'primer archivo','fwliugwbv','15516889594','correo2@correo.com',7),(57,'tequila','Brayas','5542241353','correo2@correo.com',8),(58,'oscar','Jumex','5566377288','correo2@correo.com',8),(59,'oscar','Modelo','5542241353','oscar@gmail.com',13);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuentas`
--

DROP TABLE IF EXISTS `cuentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cuentas` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentas`
--

LOCK TABLES `cuentas` WRITE;
/*!40000 ALTER TABLE `cuentas` DISABLE KEYS */;
INSERT INTO `cuentas` VALUES (7,'Brayan','brayan@gmail.com','$2a$10$qE8XRs1ki.e3xFKK.Ul05.7JbSwvyHTrsFW/BOCvr0.atUaUIvRk2'),(8,'Oscar','oscar@gmail.com','$2a$10$J8O7HNI.ekSC6qpPWJ3ldeTlCAhqYND7bu4eCCKovTTrmT78HekPe'),(10,'Maria Jimenez','maria@gmail.com','$2a$10$DABvmiN5GyAxzJJtaXZ8ReS2YxYfwX91cgIs9HO3eZAV0t7HZsRQ2'),(11,'jose','jose@gmail.com','$2a$10$YCLXMjGnOcpokgOdNOD7eubcpAlDKmCjXHuCz0VwNVlamXhG0eSOy'),(12,'Yael','yael@gmail.com','$2a$10$YNrT1pPYH9VFHExu4RTob.q/QH7RRfhIkthx6LRZdpHgYEpyHVY2C'),(13,'Miguel Hernandez 22','miguel@gmail.com','$2a$10$sW/rXi0VZYnHrCcacGTMG.yhOfj/3dd9jKviIJBHojhVyTiNo2VHK');
/*!40000 ALTER TABLE `cuentas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-16 18:02:21
