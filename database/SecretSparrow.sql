-- phpMyAdmin SQL Dump
-- version 4.6.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 12, 2016 at 05:44 AM
-- Server version: 5.6.28
-- PHP Version: 5.5.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `SecretSparrow`
--
CREATE DATABASE IF NOT EXISTS `SecretSparrow` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `SecretSparrow`;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_name`) VALUES
('Arts'),
('Cars'),
('Fashion'),
('Finance'),
('Food'),
('Leisure'),
('Sports'),
('Technology'),
('Travel');

-- --------------------------------------------------------

--
-- Table structure for table `category_users`
--

CREATE TABLE `category_users` (
  `category_name` varchar(25) NOT NULL,
  `user_id` varchar(255) CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category_users`
--

INSERT INTO `category_users` (`category_name`, `user_id`) VALUES
('Cars', 'agungwy@gmail.com57d6370b977116.22328267'),
('Fashion', 'agungwy@gmail.com57d6370b977116.22328267'),
('Food', 'agungwy@gmail.com57d6370b977116.22328267'),
('Leisure', 'agungwy@gmail.com57d6370b977116.22328267'),
('Arts', 'kodok@gmail.com57d63a568c5567.51738472'),
('Fashion', 'kodok@gmail.com57d63a568c5567.51738472'),
('Food', 'kodok@gmail.com57d63a568c5567.51738472');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `access_token` varchar(40) NOT NULL,
  `client_id` varchar(80) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `expires` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `scope` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`access_token`, `client_id`, `user_id`, `expires`, `scope`) VALUES
('0343a117b357b9189576790e251d86d0f65380c1', 'testclient', 'kodok@gmail.com57d63a568c5567.51738472', '2016-09-12 06:17:10', NULL),
('0615c58492a1a32006dd7c6596d6a7392f9cc006', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:20:54', 'crowdies'),
('0aac8af311e05e52b7eb1063f45134010a826b41', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-11 17:37:16', 'crowdies'),
('0c55558e9ec728a6d4a325491b651dd19739def0', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:51:28', 'crowdies'),
('10916ebd6637aab0b78454331bd77203caacb97b', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:31:03', 'crowdies'),
('14c38801eb20b48c13b6034d30616bd513100f4b', 'testclient', 'kodok@gmail.com57d576933a2996.91551654', '2016-09-11 16:21:55', NULL),
('1ce71f2bb7da5e47bcf41a83b03a34d99054e4ae', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:56:26', 'crowdies'),
('1f95e3144d70c606b06eb0d494e2c018d912f107', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:50:57', 'crowdies'),
('205b271a68845cfc0650743799a182e34f956456', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-12 05:15:43', 'crowdies'),
('24ac6795252277e0dc14bbc8e4c4e80de75be110', 'testclient', 'kodok@gmail.com57d63a568c5567.51738472', '2016-09-12 06:26:29', 'bo'),
('254ae4646c7b4dada7db786722f86124c4e3f4e0', 'testclient', 'kodok@gmail.com57d638fd2924c8.04860968', '2016-09-12 06:11:25', NULL),
('2c414a271494c166798bced9f62be63527dfa733', 'testclient', 'bshaffer', '2016-09-09 01:12:24', NULL),
('2e04ce6bce907cd660dc75aefe4a65356bab9d48', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:12:27', NULL),
('33f17fb3acbe981c13baf55ade15355f2bd6cd0e', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 08:03:42', 'crowdies'),
('381e7ce0442652aa135bcd538149275049844502', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:47:14', 'crowdies'),
('3c72533818e1d6b0290d0c8264c89cd915ef75fd', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:28:49', 'crowdies'),
('44bcfb7ac8a4a2febad5bf08227cfafbb039b1fc', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:28:27', 'crowdies'),
('4decd6816709682db0b0362cb4772b467ce63973', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-09 18:11:53', NULL),
('537b326ae6662868c92aec0a11b027cdb24b3a79', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 05:54:22', 'crowdies'),
('5bca2d23126207a91725c876f3560c3ed847b00f', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:32:12', 'crowdies'),
('63aa5e5ea7c6308a051ce46d48dfd103ce753b06', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-10 06:01:53', 'bo'),
('65ae8c7f9f7dba719a5d5fcfa0c052253aea9c41', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-11 05:53:52', 'bo'),
('690f00859f912d0268a7bb44e4af0a30c243cabe', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-12 05:14:23', 'crowdies'),
('6c64aa0559e91e0ea71dc1e9ae3119e3c1fd16c3', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-12 05:05:37', 'crowdies'),
('6ee4d7b004cebcf6206e6f020a28067f2277e5b3', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:53:10', 'crowdies'),
('6f0152a747c9174bebad3894dd728b4a74eab52e', 'testclient', 'ian@short.com57d57b6319f331.59103552', '2016-09-11 16:42:27', NULL),
('6f377345003183cd28d245cb49f3df1ce9abbabd', 'testclient', 'agungwy@gmail.com57d576eda752e6.94670453', '2016-09-11 16:23:26', NULL),
('6f5cd3509cc89bf0fa468e508594a339952ba298', 'testclient', 'bshaffer', '2016-09-09 03:09:06', NULL),
('77a8df417d64a8050b841aec03711fe4da9a5e95', 'testclient', 'agungwy@gmail.com57d5772bb966c8.46800166', '2016-09-11 16:24:28', NULL),
('7ce3c83d1818990255e6f6b3b02cf419732e3717', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:19:19', 'crowdies'),
('813e01b0a41dc622d625cdf1b6f0640f40e705cd', 'testclient', 'ian@short.com57d57960d62be2.40868661', '2016-09-11 16:33:53', NULL),
('8b7698ce7b553bfcb35f92fda43803f64511ea00', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 07:58:45', 'crowdies'),
('8fd8ec4811857ad1b012aed56d9b4bb1b620d27c', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:14:39', NULL),
('91e5d854c43f8bcce96e5a03c994a83ec04ceb46', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:52:52', 'crowdies'),
('93d6e5542b9651426fe308f6edd63b9c3325d94c', 'testclient', 'kodok@gmail.com57d63947021057.39205738', '2016-09-12 06:12:39', NULL),
('95c32c7a8a0928e96f85aef9bda5374783bc4c83', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:52:30', 'crowdies'),
('97d8fd35e770a1b2f3c7837d9df855232d7472c2', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-10 17:12:25', 'crowdies'),
('a15f62fc820dcb9d322dcdab4322f442e1c6f0dd', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:29:23', 'crowdies'),
('a8e032e4e1032733e707d06a0b911633ab8bdd91', 'testclient', 'agungwy@gmail.com57d432250fc025.61987160', '2016-09-11 14:26:27', 'bo'),
('af8512c72b5f97a4273ec2d42cb545b411859f8d', 'testclient', 'kodok@gmail.com57d639ad806927.84666470', '2016-09-12 06:14:21', NULL),
('afb3b0e8f6cc98bda99e37fbc9ae1a6cd2f27270', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 15:45:43', 'crowdies'),
('b1b4ea86ac01902e1ad5104c511decfbc3fa3374', 'testclient', 'bshaffer', '2016-09-09 01:12:57', NULL),
('b7e0b8333053e023aefd7328f7bd1c8305e20d82', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:15:05', 'bo'),
('b87b59eb5e8fe7acada4ff020087c6026d8aeec8', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:28:38', 'crowdies'),
('bd08d5748a397fc0fddcbc9b806dd25a52711632', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 04:26:51', NULL),
('c0d2ed1703672e5de7db775cb190afae82f37045', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-09 18:12:15', 'bo'),
('c23ee5b842b493f25cb5c30b95d11eadda5a1c6f', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 08:00:22', 'crowdies'),
('cb48acb7f328f7e4f7445cff31b88d7ac2dd53a8', 'testclient', 'arzelord@gmail.com57d57548953001.35135251', '2016-09-11 16:16:25', NULL),
('d03979beaaf5a7f66079016cc71f1da14858b839', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-12 05:02:43', 'crowdies'),
('d3b8b807fc90f726f66fef2b0d91ba30f2d81ad8', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-11 16:46:45', NULL),
('d58a2fed9821e99acfccc1bd51fa190b637b8618', 'testclient', 'agungwy@gmail.com57d6370b977116.22328267', '2016-09-12 06:31:08', 'crowdies'),
('dab93b9d4045a7d2b4639f4b068b4cabb954dcf9', 'testclient', 'agungwy@gmail.com57d432250fc025.61987160', '2016-09-11 15:20:13', 'bo'),
('dbbe88ae7f974225a26090e996cafc188eb63ca2', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-11 05:55:08', 'crowdies'),
('dc3c95a59c6227909a431d1b069c2c20684afcfa', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:15:30', 'crowdies'),
('dd3fe64ca1e019ca4f8093cf616ed2c08a9e9894', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:51:43', 'crowdies'),
('dd658bef747825985f031049f2be512ad6adb21b', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:48:43', 'crowdies'),
('e7daa3d6f7d69e9cdf7ae3ed9ded5b769db719a8', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:52:08', 'crowdies'),
('ea85204f32427172e974a26e4234d00cd69af7f2', 'testclient', 'kodok@gmail.com57d57c21a78501.60529217', '2016-09-11 16:45:38', NULL),
('ead811b2430b426fa31e23ad0a8227e747351312', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-09 17:46:26', 'crowdies'),
('f150ee72a650e8c017cb706504e2ebf700cb4754', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-10 06:02:59', 'crowdies'),
('f1bbb36bcdaa7e0ccfa4f6b24868272e0c339f78', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-12 06:29:34', 'bo'),
('f229bbe3dc5880be52a204bc1964cfd9d25e6c60', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-11 17:17:46', 'crowdies'),
('f368de203e1f659d1e2d9c7d540373f85b3011f4', 'testclient', 'ian@short.com57d57901f01a26.81147645', '2016-09-11 16:32:18', NULL),
('f3c5f28aa5d05835789cf15e7c0c38cf60ed7594', 'testclient', 'ian@short.com57d57ad501a3e0.37786986', '2016-09-11 16:40:05', NULL),
('f803e244db753ff6fbcef922a5f4d045ecf9c2ad', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-11 17:21:45', 'crowdies'),
('f9064d23089023bd36c468419f136a0f0533510b', 'testclient', 'agungwy@gmail.com57d6370b977116.22328267', '2016-09-12 06:03:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `client_id` varchar(80) NOT NULL,
  `client_secret` varchar(80) NOT NULL,
  `redirect_uri` varchar(2000) NOT NULL,
  `grant_types` varchar(80) DEFAULT NULL,
  `scope` varchar(100) DEFAULT NULL,
  `user_id` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`client_id`, `client_secret`, `redirect_uri`, `grant_types`, `scope`, `user_id`) VALUES
('testclient', 'testpass', 'http://fake/', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `refresh_token` varchar(40) NOT NULL,
  `client_id` varchar(80) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `expires` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `scope` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_refresh_tokens`
--

INSERT INTO `oauth_refresh_tokens` (`refresh_token`, `client_id`, `user_id`, `expires`, `scope`) VALUES
('02034b17baaa5e363064f4ac5cfe563b47c975be', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-26 04:15:43', 'crowdies'),
('0ad4c8bbe6ddb0ee134f8ab7f9a8a48e5f03e8df', 'testclient', 'agungwy@gmail.com57d432250fc025.61987160', '2016-09-25 14:20:13', 'bo'),
('0aead27191e3240c78ebcaab04f8115e135f069d', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 06:58:45', 'crowdies'),
('0e7381936837011fa38c84143392a8df2f2d9497', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:51:28', 'crowdies'),
('1487e14025d5cd7bb0b731a370e0e31b53b5cae7', 'testclient', 'ian@short.com57d57901f01a26.81147645', '2016-09-25 15:32:18', NULL),
('1944144217a2ea0fc07ccc5f1ffe445bf71a7110', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:15:05', 'bo'),
('1ac2bdb3ebf0750e9bb6b4abacd1b73e73c6069f', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 04:55:08', 'crowdies'),
('211f0fd090cf247ee67235661afec39ac5c87e3f', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:52:52', 'crowdies'),
('24734caee7730eb25b1b46df540fe15277af3561', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-25 16:37:16', 'crowdies'),
('2a5f02caceaff17c558a9bd2214e8a5f97b1128f', 'testclient', 'kodok@gmail.com57d639ad806927.84666470', '2016-09-26 05:14:21', NULL),
('2a6ab4c66146ed4fe5e7052c5a2b895312bc7a39', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-25 16:21:45', 'crowdies'),
('3ce16bd53eb756316d962ea975d8cbe5333e50b6', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:15:30', 'crowdies'),
('3eb630f674928dde2222d08c26f356caf8bcbe23', 'testclient', 'agungwy@gmail.com57d432250fc025.61987160', '2016-09-25 13:26:27', 'bo'),
('43a4cc962f503c6bad86afa47c75c5a4f6cc4d77', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 14:45:43', 'crowdies'),
('43eb9f3a13caa46abcf151d4ef0adba18b2bf5cf', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:14:39', NULL),
('47a2a01a9898a8af53aa9654b22b318c5c0dbef7', 'testclient', 'agungwy@gmail.com57d6370b977116.22328267', '2016-09-26 05:03:08', NULL),
('484c27a569f7e9314212ed0a28f54127c6237624', 'testclient', 'bshaffer', '2016-09-23 02:09:06', NULL),
('4bda65d695846d74b42ea4063940fb3c119a4713', 'testclient', 'ian@short.com57d57ad501a3e0.37786986', '2016-09-25 15:40:05', NULL),
('4fff8bf05d4129b0b6f4bf54b27a572298f70c2b', 'testclient', 'kodok@gmail.com57d63a568c5567.51738472', '2016-09-26 05:17:10', NULL),
('53f9cde101ee2118247782099cc03a3ac13eea6c', 'testclient', 'ian@short.com57d57960d62be2.40868661', '2016-09-25 15:33:53', NULL),
('549e82c8883aa8e84931af08b536a64daabef099', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 03:26:51', NULL),
('57d6156339215ea456a916df918f64687448c2fe', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:20:54', 'crowdies'),
('60167aa8bd64271d333be8d1a4d65691e6cc7e68', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:52:30', 'crowdies'),
('63f042cd40d762929cbbba9080df4fe83522bfad', 'testclient', 'agungwy@gmail.com57d576eda752e6.94670453', '2016-09-25 15:23:26', NULL),
('647f7d5b4d137e73fe2e2f19944d0ba8952da8b4', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:51:43', 'crowdies'),
('65ba9b7e34990b7e083d42cf0cc7ad81717ff1cd', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-25 15:46:45', NULL),
('67b3f750d31d769f73c9189aba5f7f44704c4940', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-23 17:11:53', NULL),
('68d0d25d2a986fae2a2fa6a74e3466e38f5ec40f', 'testclient', 'agungwy@gmail.com57d6370b977116.22328267', '2016-09-26 05:31:08', 'crowdies'),
('6dd3fdb505f74cab157b625e6891d932f0759589', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:28:38', 'crowdies'),
('776fcf9097e440e2ead4c2f629d359630d40087b', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:28:27', 'crowdies'),
('78263cb93c43eb4e7ec35fb0deb1d2fa920ebfb9', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-24 05:02:59', 'crowdies'),
('7c96669a155fce8e23ffb36812afa5d61d795617', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-25 16:17:46', 'crowdies'),
('7dc27b87178a2ac0b11cebd53a95e42d7f927d47', 'testclient', 'ian@short.com57d57b6319f331.59103552', '2016-09-25 15:42:27', NULL),
('895ff44f122b83109c4aadaec3126b75e2395a5e', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:46:26', 'crowdies'),
('8a898b1d9d4038687fda378066e0103351eacf72', 'testclient', 'bshaffer', '2016-09-23 00:12:24', NULL),
('8cf9e8d8ae1b87b78089660d6c3f3fa0968cd263', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-25 04:53:52', 'bo'),
('96865c2b823ff419376459e3d098fdae3df805ca', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:50:57', 'crowdies'),
('9869b453142d96679497229872e550b41783ad28', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-23 17:12:15', 'bo'),
('9a44993a531421eef391e38323ba1bac18a1966f', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:48:43', 'crowdies'),
('9febd28bd7fd3fc2a871a268a0f11467b6484f8f', 'testclient', 'kodok@gmail.com57d57c21a78501.60529217', '2016-09-25 15:45:38', NULL),
('a05f86e8941286f73519c7cb545385c038452fbf', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 07:00:22', 'crowdies'),
('a1da70a14151d5eef276d8bd24b401376a7c6840', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 04:54:22', 'crowdies'),
('a723d4909c896e04a4d0ab1515afebedbfc75c3b', 'testclient', 'kodok@gmail.com57d63947021057.39205738', '2016-09-26 05:12:39', NULL),
('a8d59190afffd232fc42341d76e1a246c30a552b', 'testclient', 'bshaffer', '2016-09-23 00:12:57', NULL),
('aa06a14dc5cf88dbb42a850bf5e1006c3bef2034', 'testclient', 'kodok@gmail.com57d576933a2996.91551654', '2016-09-25 15:21:55', NULL),
('afe742fe462f36c7e9e98ff0419ecaae3a38972a', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:56:26', 'crowdies'),
('b2ec94f525d23c7fb3572505bad626e5bae58fef', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:53:10', 'crowdies'),
('b3464a9461e03af46a3fb50b8b697ba10e831fd9', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:29:23', 'crowdies'),
('b5ff4f69b77471825f915793b6df7b340ca2d0aa', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-26 04:05:37', 'crowdies'),
('b9e5ee3c6d4d75b3b5b2546b8159f52ad83c14b1', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:31:03', 'crowdies'),
('bb27ca5c82f388889a9b39ea9a314a6aecfad4d1', 'testclient', 'arzelord@gmail.com57d57548953001.35135251', '2016-09-25 15:16:25', NULL),
('bbb8d5f3cc63f215853285444f664f022dcadff4', 'testclient', 'kodok@gmail.com57d63a568c5567.51738472', '2016-09-26 05:26:29', 'bo'),
('bcab5f38d3be9ab758b5d42ff8332da58d265f91', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-26 04:02:43', 'crowdies'),
('bdd7bb8443350c2b21e97ec1a9a53c19ada025b2', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:52:08', 'crowdies'),
('c245788ea12a1c986a93d95f3bc93f6149ec38b7', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-25 07:03:42', 'crowdies'),
('ca6f40ffe3d80d413424c6b4f15089727ed62f2a', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:28:49', 'crowdies'),
('cbc521119b8bdbdb72e8b0ebc59f2eba187b19d6', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:12:27', NULL),
('cea61089fc39f41b0618eb44f9cecbe10d6d9f09', 'testclient', 'kodok@gmail.com57d638fd2924c8.04860968', '2016-09-26 05:11:25', NULL),
('d580e0a1412f7cfac2106e3a185cf2d8f0375335', 'testclient', 'bshaffer@gmail.com57d378aa784614.03958496', '2016-09-24 05:01:53', 'bo'),
('d94e79673542bcd832964b0e0761e56c173f3b81', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:32:12', 'crowdies'),
('e44888b72d686a16a8c40936fbe43cf98f470589', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-26 05:29:34', 'bo'),
('e60324790d1462a5f6a63e6f203b83f2a4761c02', 'testclient', 'agungwy@gmail.com57d5772bb966c8.46800166', '2016-09-25 15:24:28', NULL),
('e98d983b3f8c7518be3806696a123e527be04bc6', 'testclient', 'agungwy@gmail.com57d57c64ac1895.24310076', '2016-09-26 04:14:23', 'crowdies'),
('fa9343af6151a0081f22974adfb759efa89efb91', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:47:14', 'crowdies'),
('ff0863f153c96b6d97f94a6d20a1b5cb94c3a3cf', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-23 16:19:19', 'crowdies'),
('ff3237ce5e47ad6990ddf98218e836b7be7dd272', 'testclient', 'william.hidayat@gmail.com57d2b3bb031944.08580997', '2016-09-24 16:12:25', 'crowdies');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_scopes`
--

CREATE TABLE `oauth_scopes` (
  `scope` text,
  `is_default` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_users`
--

CREATE TABLE `oauth_users` (
  `user_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(2000) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_users`
--

INSERT INTO `oauth_users` (`user_id`, `username`, `password`, `name`, `role`, `created_at`, `updated_at`) VALUES
('agungwy@gmail.com57d6370b977116.22328267', 'agungwy@gmail.com', '$2y$10$KQXQU31wfdPzgP6d7BNPB.U.L7fxNzMr8OaBVO7qX4u1RoRLz.MJ.', 'Agung Wirayogi', 'crowdies', '2016-09-12 05:03:13', '2016-09-12 05:03:13'),
('arzelord@gmail.com57d57548953001.35135251', 'arzelord@gmail.com', '$2y$10$cki9iOH.2DfoyQc32s.Qi.GsAf5j0EybzgZ7lmkjACUbFkiWgA.k.', 'arzelord', NULL, '2016-09-11 15:16:24', '2016-09-11 15:16:24'),
('hakeemrdaud@gmail.com57d4e7eb75ce72.14291853', 'hakeemrdaud@gmail.com', '$2y$10$8DIamARCl8VzSJO9JMYj0uHfM.qyJmRBxzpCl1JfsBe9KQ5/L0hwO', 'Hakeem Daud', NULL, '2016-09-11 05:13:15', '2016-09-11 05:13:15'),
('ian@short.com57d57b6319f331.59103552', 'ian@short.com', '$2y$10$MnLvf7XO5WMaAs7Lq8v0ROrg1EJWRu.r/kvu9szcvwLJqwJjORgNK', 'ian', NULL, '2016-09-11 15:42:27', '2016-09-11 15:42:27'),
('kodok@gmail.com57d63a568c5567.51738472', 'kodok@gmail.com', '$2y$10$4cqWSpHNQAfpMtbs/2tvvuqco8GbUsdwjcslWuAftvbiijsLem81u', 'kodok@gmail.com', 'business owner', '2016-09-12 05:17:21', '2016-09-12 05:17:21'),
('william.hidayat@gmail.com57d2b3bb031944.08580997', 'william.hidayat@gmail.com', '$2y$10$MlijF78GFZfo8DwNkFHduOLrltBG1II7SI91yVK9Xy2Ix92SQfm0K', 'william henry', 'business owner', '2016-09-11 14:49:44', '2016-09-11 14:49:44');

-- --------------------------------------------------------

--
-- Table structure for table `sent_following_request`
--

CREATE TABLE `sent_following_request` (
  `twitter_id` varchar(100) NOT NULL,
  `screen_name` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `followed_back` tinyint(1) NOT NULL,
  `twitter_id_str` varchar(100) NOT NULL,
  `friends_count` int(11) NOT NULL,
  `followers_count` int(11) NOT NULL,
  `profile_image_url` varchar(255) NOT NULL,
  `profile_image_url_https` varchar(255) NOT NULL,
  `handle` varchar(255) NOT NULL,
  `crowdies_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sent_following_request`
--

INSERT INTO `sent_following_request` (`twitter_id`, `screen_name`, `name`, `created_at`, `updated_at`, `followed_back`, `twitter_id_str`, `friends_count`, `followers_count`, `profile_image_url`, `profile_image_url_https`, `handle`, `crowdies_id`) VALUES
('51726313', 'danieldeem', 'Daniel Manurung', '2016-09-02 06:45:53', '2016-09-08 04:23:19', 1, '51726313', 595, 696, 'http://pbs.twimg.com/profile_images/546728383770419200/tjurXSeU_normal.jpeg', 'https://pbs.twimg.com/profile_images/546728383770419200/tjurXSeU_normal.jpeg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('70627004', 'acc_puspitaPA', 'Puspita Parahita A.', '2016-09-02 06:45:55', '2016-09-01 20:20:45', 0, '70627004', 180, 171, 'http://pbs.twimg.com/profile_images/605621717772304384/2G7b1o36_normal.jpg', 'https://pbs.twimg.com/profile_images/605621717772304384/2G7b1o36_normal.jpg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('766501818553819136', 'williamhenrytan', 'william henry', '2016-09-07 02:55:36', '2016-09-07 02:55:36', 1, '766501818553819136', 1, 1, 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png', 'https://abs.twimg.com/sticky/default_profile_images/default_profile_5_normal.png', 'WilliamHenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('83309209', 'WilliamHenry_94', 'William Henry', '2016-09-07 23:48:42', '2016-09-07 23:48:42', 1, '83309209', 230, 122, 'http://pbs.twimg.com/profile_images/3625226207/411215a43434afbe3111a51822758bb4_normal.jpeg', 'https://pbs.twimg.com/profile_images/3625226207/411215a43434afbe3111a51822758bb4_normal.jpeg', 'williamhenrytan', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('85794403', 'yanuwicaksana', 'Wicaksana Y.', '2016-09-02 06:45:57', '2016-09-01 20:20:45', 0, '85794403', 166, 181, 'http://pbs.twimg.com/profile_images/378800000506455931/0b478793d7c3efb171b72f876fdf1fde_normal.jpeg', 'https://pbs.twimg.com/profile_images/378800000506455931/0b478793d7c3efb171b72f876fdf1fde_normal.jpeg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('89961966', 'Agungwy', 'Agung Wirayogi', '2016-09-07 01:37:05', '2016-09-07 01:37:05', 1, '89961966', 173, 191, 'http://pbs.twimg.com/profile_images/378800000118607932/032c68880b391417f225f28857e5aa9d_normal.jpeg', 'https://pbs.twimg.com/profile_images/378800000118607932/032c68880b391417f225f28857e5aa9d_normal.jpeg', 'WilliamHenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136');

-- --------------------------------------------------------

--
-- Table structure for table `twitter_accounts`
--

CREATE TABLE `twitter_accounts` (
  `access_token` varchar(200) NOT NULL,
  `access_token_secret` varchar(200) NOT NULL,
  `handle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `twitter_accounts`
--

INSERT INTO `twitter_accounts` (`access_token`, `access_token_secret`, `handle`) VALUES
('89961966-WUYCXD4yS74zctX3Am85wPckWcfS2TFMzmEKaXflU', 'yENbvabzRb5byBiJ70XrBtzJ8uJ7mpflYaN2mk5n5jU3B', 'Agungwy'),
('766501818553819136-auMUIqod0Ic3R4uxknM4peUiT9SxWER', 'PrHJwkisGHS7CiGj4tF4yd4Dkxn0bvbuMcNpOv9PijQ8Y', 'williamhenrytan'),
('83309209-8FEr7Etkmy8h0DDDHvG9rJbUtUvYFSvNvjajwHq7M', 'gUQFmL51RcNE9iXM59epWT1jGirAveIdhsSSs5G0nlG7G', 'WilliamHenry_94');

-- --------------------------------------------------------

--
-- Table structure for table `twitter_auth`
--

CREATE TABLE `twitter_auth` (
  `user_id` varchar(100) CHARACTER SET latin1 NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `handle` varchar(255) CHARACTER SET latin1 NOT NULL,
  `twitter_id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `twitter_auth`
--

INSERT INTO `twitter_auth` (`user_id`, `name`, `handle`, `twitter_id`, `avatar`, `created_at`, `updated_at`) VALUES
('Agungwy57d23bf1cd9d35.51935449', 'Agung Wirayogi', 'Agungwy', '89961966', 'http://pbs.twimg.com/profile_images/378800000118607932/032c68880b391417f225f28857e5aa9d.jpeg', '2016-09-09 04:34:57', '2016-09-09 04:34:57'),
('hakeemrd57d242bcbc3203.30290889', 'Hakeem Daud', 'hakeemrd', '1615069663', 'http://abs.twimg.com/sticky/default_profile_images/default_profile_4.png', '2016-09-09 05:03:56', '2016-09-09 05:03:56'),
('williamhenrytan57d0a59ec21ea8.32188811', 'william henry', 'williamhenrytan', '766501818553819136', 'http://abs.twimg.com/sticky/default_profile_images/default_profile_5.png', '2016-09-07 23:41:18', '2016-09-07 23:41:18'),
('WilliamHenry_9457c59236018da1.16531072', 'William Henry', 'WilliamHenry_94', '83309209', 'http://pbs.twimg.com/profile_images/3625226207/411215a43434afbe3111a51822758bb4.jpeg', '2016-08-30 04:03:34', '2016-08-30 04:03:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_name`);

--
-- Indexes for table `category_users`
--
ALTER TABLE `category_users`
  ADD PRIMARY KEY (`category_name`,`user_id`),
  ADD KEY `fk_category_users` (`user_id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`access_token`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`refresh_token`);

--
-- Indexes for table `oauth_users`
--
ALTER TABLE `oauth_users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`username`);

--
-- Indexes for table `sent_following_request`
--
ALTER TABLE `sent_following_request`
  ADD PRIMARY KEY (`twitter_id`,`handle`,`crowdies_id`),
  ADD KEY `fk_following_twitter` (`handle`);

--
-- Indexes for table `twitter_accounts`
--
ALTER TABLE `twitter_accounts`
  ADD PRIMARY KEY (`handle`);

--
-- Indexes for table `twitter_auth`
--
ALTER TABLE `twitter_auth`
  ADD PRIMARY KEY (`user_id`,`handle`),
  ADD UNIQUE KEY `twitter_auth_handle_unique` (`handle`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category_users`
--
ALTER TABLE `category_users`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`category_name`) REFERENCES `category` (`category_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_category_users` FOREIGN KEY (`user_id`) REFERENCES `oauth_users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sent_following_request`
--
ALTER TABLE `sent_following_request`
  ADD CONSTRAINT `fk_following_twitter` FOREIGN KEY (`handle`) REFERENCES `twitter_accounts` (`handle`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `twitter_accounts`
--
ALTER TABLE `twitter_accounts`
  ADD CONSTRAINT `fk_twitter_auth_accounts` FOREIGN KEY (`handle`) REFERENCES `twitter_auth` (`handle`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
