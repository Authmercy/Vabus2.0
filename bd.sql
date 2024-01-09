-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: BanqueCS
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Client`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Category` (
 `idCategory`  int  NOT NULL AUTO_INCREMENT,
  `nom` varchar NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 


LOCK TABLES `Category` WRITE;

UNLOCK TABLES;


DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Reservation` (
  `idReservation` int NOT NULL AUTO_INCREMENT,
  `Date` datetime NOT NULL,
  `nom` varchar(100) NOT NULL,
  `tarif` double DEFAULT NULL,
  `idBus` int NOT NULL,
  `nmPlace` int NOT NULL,
   `idCategory`  int  NOT NULL,
  PRIMARY KEY (`idReservation`),
  KEY `Compte_FK` (`idAgence`),
  KEY `Compte_FK_1` (`idCategory`),
  CONSTRAINT `Compte_FK` FOREIGN KEY (`idAgence`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Compte_FK_1` FOREIGN KEY (`idCategory`) REFERENCES `Category` (`idCategory`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 


LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Compte` DISABLE KEYS */;
/*!40000 ALTER TABLE `Compte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Retrait`
--

DROP TABLE IF EXISTS `Quartier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Quartier` (
  `idQuartier` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `ville` datetime NOT NULL,
  `nomAgence` varchar NOT NULL,
 
  
 
  CONSTRAINT `Retrait_FK` FOREIGN KEY (`nomAgence`) REFERENCES `Agence` (`idAgence`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 
/*!40101 SET character_set_client = @saved_cs_client */;

--CREATE TABLE `BusDeVoyage` (
  `idBBus` int NOT NULL AUTO_INCREMENT,
  `nmPlace` int NOT NULL,
  `depart` datetime NOT NULL,
    `Villedepart` varchar(100) NOT NULL,
     `Villedestination` varchar(100) NOT NULL,
      `Date` Date NOT NULL,
  `idAgence` int NOT NULL,
   `idCategory` int NOT NULL, 
  PRIMARY KEY (`idBBus`),
  CONSTRAINT `Bus_FK` FOREIGN KEY (`idAgence`) REFERENCES `Agence` (`idAgence`),
 CONSTRAINT `Bus_FK2` FOREIGN KEY (`idCategory`) REFERENCES `Category` (`idCategory`)

) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table `Retrait`
--

LOCK TABLES `Quartier` WRITE;
/*!40000 ALTER TABLE `Retrait` DISABLE KEYS */;
/*!40000 ALTER TABLE `Retrait` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TypeCompte`
--

DROP TABLE IF EXISTS `Bus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Bus` (
  `Bus` int NOT NULL AUTO_INCREMENT,
  `idAgence` int DEFAULT NULL,
  `idCategory` int DEFAULT NULL,
  `nmPlace` double NOT NULL,
  
  PRIMARY KEY (`idBus`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 C
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TypeCompte`
--

LOCK TABLES `Bus` WRITE;
/*!40000 ALTER TABLE `TypeCompte` DISABLE KEYS */;
/*!40000 ALTER TABLE `TypeCompte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Versement`
--

DROP TABLE IF EXISTS `Utilisateur`;

CREATE TABLE `Versement` (
  `idUtilisateur` int NOT NULL AUTO_INCREMENT,
  `mail` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,

  PRIMARY KEY (`idUtilisateur`),
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Versement`
--

LOCK TABLES `Agence` WRITE;
/*!40000 ALTER TABLE `Versement` DISABLE KEYS */;
/*!40000 ALTER TABLE `Versement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Virement`
--

DROP TABLE IF EXISTS `Agence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Virement` (
  `idAgence` int NOT NULL AUTO_INCREMENT,
  `nomAgence` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
   `direction` varchar(100) NOT NULL,

  PRIMARY KEY (`idAgence`),
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Virement`
--

LOCK TABLES `Agence` WRITE;
/*!40000 ALTER TABLE `Virement` DISABLE KEYS */;
/*!40000 ALTER TABLE `Virement` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-19  8:33:59
