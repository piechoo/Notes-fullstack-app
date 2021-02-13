-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: notes
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notes` (
  `NoteID` int NOT NULL AUTO_INCREMENT,
  `isDeleted` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`NoteID`,`createdAt`)
) ENGINE=InnoDB AUTO_INCREMENT=143 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` VALUES (22,1,'2021-02-09 21:24:23','2021-02-10 12:13:48'),(28,0,'2021-02-10 13:05:51','2021-02-10 13:05:51'),(29,0,'2021-02-10 13:42:35','2021-02-10 13:42:35'),(67,0,'2021-02-11 14:35:18','2021-02-11 14:35:18'),(68,0,'2021-02-11 15:12:24','2021-02-11 15:12:24'),(70,0,'2021-02-11 17:35:55','2021-02-11 17:35:55'),(71,0,'2021-02-11 17:48:11','2021-02-11 17:48:11'),(72,0,'2021-02-11 17:48:12','2021-02-11 17:48:12'),(73,0,'2021-02-11 17:48:13','2021-02-11 17:48:13'),(74,0,'2021-02-11 17:48:13','2021-02-11 17:48:13'),(75,0,'2021-02-11 17:48:13','2021-02-11 17:48:13'),(76,0,'2021-02-11 17:48:14','2021-02-11 17:48:14'),(77,0,'2021-02-11 17:48:14','2021-02-11 17:48:14'),(78,0,'2021-02-11 17:48:15','2021-02-11 17:48:15'),(79,0,'2021-02-11 17:48:16','2021-02-11 17:48:16'),(80,0,'2021-02-11 17:48:17','2021-02-11 17:48:17'),(81,0,'2021-02-11 17:48:17','2021-02-11 17:48:17'),(82,0,'2021-02-11 17:48:17','2021-02-11 17:48:17'),(83,0,'2021-02-11 17:48:18','2021-02-11 17:48:18'),(84,0,'2021-02-11 17:48:18','2021-02-11 17:48:18'),(85,0,'2021-02-11 17:48:19','2021-02-11 17:48:19'),(86,0,'2021-02-11 17:48:19','2021-02-11 17:48:19'),(87,0,'2021-02-11 17:48:19','2021-02-11 17:48:19'),(88,0,'2021-02-11 17:48:20','2021-02-11 17:48:20'),(89,0,'2021-02-11 17:48:20','2021-02-11 17:48:20'),(90,0,'2021-02-11 17:48:20','2021-02-11 17:48:20'),(91,0,'2021-02-11 17:48:21','2021-02-11 17:48:21'),(92,0,'2021-02-11 17:48:21','2021-02-11 17:48:21'),(93,0,'2021-02-11 17:48:21','2021-02-11 17:48:21'),(94,0,'2021-02-11 17:48:22','2021-02-11 17:48:22'),(95,0,'2021-02-11 17:48:22','2021-02-11 17:48:22'),(96,0,'2021-02-11 17:48:23','2021-02-11 17:48:23'),(97,0,'2021-02-12 09:53:09','2021-02-12 09:53:09'),(98,0,'2021-02-12 09:53:28','2021-02-12 09:53:28'),(99,1,'2021-02-12 09:53:35','2021-02-12 10:14:33'),(138,0,'2021-02-12 10:59:43','2021-02-12 10:59:43'),(139,1,'2021-02-12 10:59:44','2021-02-12 10:59:44'),(140,0,'2021-02-12 11:00:12','2021-02-12 11:00:12'),(141,1,'2021-02-12 11:00:12','2021-02-12 11:00:12'),(142,0,'2021-02-12 14:30:00','2021-02-12 14:30:00');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `noteversions`
--

DROP TABLE IF EXISTS `noteversions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `noteversions` (
  `version` int NOT NULL,
  `NoteID` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`version`,`NoteID`),
  KEY `noteid_idx` (`NoteID`),
  CONSTRAINT `noteid` FOREIGN KEY (`NoteID`) REFERENCES `notes` (`NoteID`) ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `noteversions`
--

LOCK TABLES `noteversions` WRITE;
/*!40000 ALTER TABLE `noteversions` DISABLE KEYS */;
INSERT INTO `noteversions` VALUES (1,22,'22','11','2021-02-09 21:24:23','2021-02-09 21:24:23'),(1,28,'Notatka z postmana','Mariusz Pudzianowski','2021-02-10 13:05:51','2021-02-10 13:05:51'),(1,29,'sprawdzam status','Polish mountain','2021-02-10 13:42:35','2021-02-10 13:42:35'),(1,67,'Ale to jest nowa','notatka z 14;35','2021-02-11 14:35:18','2021-02-11 14:35:18'),(1,68,'Kiedy pytaja mnie jak to jest byc programistą','Moim zdaniem to nie ma tak, że dobrze albo że niedobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ekhm… Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem. I dziękuję życiu. Dziękuję mu, życie to śpiew, życie to taniec, życie to miłość. Wielu ludzi pyta mnie o to samo: ale jak ty to robisz?, skąd czerpiesz tę radość? A ja odpowiadam, że to proste, to umiłowanie życia, to właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro… kto wie, dlaczego by nie, oddam się pracy społecznej i będę ot, choćby sadzić… doć… marchew.','2021-02-11 15:12:24','2021-02-11 15:12:24'),(1,70,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  ','But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?','2021-02-11 17:35:55','2021-02-11 17:35:55'),(1,71,'Robie bardzo długie','nazwa','2021-02-11 17:48:11','2021-02-11 17:48:11'),(1,72,'Robie bardzo długie','nazwa','2021-02-11 17:48:12','2021-02-11 17:48:12'),(1,73,'Robie bardzo długie','nazwa','2021-02-11 17:48:13','2021-02-11 17:48:13'),(1,74,'Robie bardzo długie','nazwa','2021-02-11 17:48:13','2021-02-11 17:48:13'),(1,75,'Robie bardzo długie','nazwa','2021-02-11 17:48:13','2021-02-11 17:48:13'),(1,76,'Robie bardzo długie','nazwa','2021-02-11 17:48:14','2021-02-11 17:48:14'),(1,77,'Robie bardzo długie','nazwa','2021-02-11 17:48:14','2021-02-11 17:48:14'),(1,78,'Robie bardzo długie','nazwa','2021-02-11 17:48:15','2021-02-11 17:48:15'),(1,79,'Robie bardzo długie','nazwa','2021-02-11 17:48:16','2021-02-11 17:48:16'),(1,80,'Robie bardzo długie','nazwa','2021-02-11 17:48:17','2021-02-11 17:48:17'),(1,81,'Robie bardzo długie','nazwa','2021-02-11 17:48:17','2021-02-11 17:48:17'),(1,82,'Robie bardzo długie','nazwa','2021-02-11 17:48:17','2021-02-11 17:48:17'),(1,83,'Robie bardzo długie','nazwa','2021-02-11 17:48:18','2021-02-11 17:48:18'),(1,84,'Robie bardzo długie','nazwa','2021-02-11 17:48:18','2021-02-11 17:48:18'),(1,85,'Robie bardzo długie','nazwa','2021-02-11 17:48:19','2021-02-11 17:48:19'),(1,86,'Robie bardzo długie','nazwa','2021-02-11 17:48:19','2021-02-11 17:48:19'),(1,87,'Robie bardzo długie','nazwa','2021-02-11 17:48:19','2021-02-11 17:48:19'),(1,88,'Robie bardzo długie','nazwa','2021-02-11 17:48:20','2021-02-11 17:48:20'),(1,89,'Robie bardzo długie','nazwa','2021-02-11 17:48:20','2021-02-11 17:48:20'),(1,90,'Robie bardzo długie','nazwa','2021-02-11 17:48:20','2021-02-11 17:48:20'),(1,91,'Robie bardzo długie','nazwa','2021-02-11 17:48:21','2021-02-11 17:48:21'),(1,92,'Robie bardzo długie','nazwa','2021-02-11 17:48:21','2021-02-11 17:48:21'),(1,93,'Robie bardzo długie','nazwa','2021-02-11 17:48:21','2021-02-11 17:48:21'),(1,94,'Robie bardzo długie','nazwa','2021-02-11 17:48:22','2021-02-11 17:48:22'),(1,95,'Robie bardzo długie','nazwa','2021-02-11 17:48:22','2021-02-11 17:48:22'),(1,96,'Robie bardzo długie','nazwa','2021-02-11 17:48:23','2021-02-11 17:48:23'),(1,97,'9:52','nazwa','2021-02-12 09:53:09','2021-02-12 09:53:09'),(1,98,'9:52','nazwa','2021-02-12 09:53:28','2021-02-12 09:53:28'),(1,138,'test title new2','test content','2021-02-12 10:59:44','2021-02-12 10:59:44'),(1,139,'note to delete','should be deleted','2021-02-12 10:59:44','2021-02-12 10:59:44'),(1,140,'test title new2','test content','2021-02-12 11:00:12','2021-02-12 11:00:12'),(1,141,'note to delete','should be deleted','2021-02-12 11:00:12','2021-02-12 11:00:12'),(1,142,'14:29','nazwa nowa','2021-02-12 14:30:00','2021-02-12 14:30:00'),(2,28,'Notatka z postmana','aktualizacja','2021-02-11 14:32:47','2021-02-11 14:32:47'),(2,98,'edited','nazwa nowa','2021-02-12 10:34:27','2021-02-12 10:34:27'),(2,138,'Updated','this content is updated','2021-02-12 10:59:44','2021-02-12 10:59:44'),(2,140,'Updated','this content is updated','2021-02-12 11:00:12','2021-02-12 11:00:12');
/*!40000 ALTER TABLE `noteversions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-12 16:01:47
