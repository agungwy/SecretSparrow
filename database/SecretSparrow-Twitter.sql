-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: Sep 03, 2016 at 11:25 AM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--
CREATE DATABASE IF NOT EXISTS `users` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `users`;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint(20) unsigned NOT NULL,
  `queue` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sent_following_request`
--

DROP TABLE IF EXISTS `sent_following_request`;
CREATE TABLE IF NOT EXISTS `sent_following_request` (
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
('51726313', 'danieldeem', 'Daniel Manurung', '2016-09-02 06:45:53', '2016-09-01 20:20:45', 0, '51726313', 595, 696, 'http://pbs.twimg.com/profile_images/546728383770419200/tjurXSeU_normal.jpeg', 'https://pbs.twimg.com/profile_images/546728383770419200/tjurXSeU_normal.jpeg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('70627004', 'acc_puspitaPA', 'Puspita Parahita A.', '2016-09-02 06:45:55', '2016-09-01 20:20:45', 0, '70627004', 180, 171, 'http://pbs.twimg.com/profile_images/605621717772304384/2G7b1o36_normal.jpg', 'https://pbs.twimg.com/profile_images/605621717772304384/2G7b1o36_normal.jpg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136'),
('85794403', 'yanuwicaksana', 'Wicaksana Y.', '2016-09-02 06:45:57', '2016-09-01 20:20:45', 0, '85794403', 166, 181, 'http://pbs.twimg.com/profile_images/378800000506455931/0b478793d7c3efb171b72f876fdf1fde_normal.jpeg', 'https://pbs.twimg.com/profile_images/378800000506455931/0b478793d7c3efb171b72f876fdf1fde_normal.jpeg', 'williamhenry_94', 'william.hidayat@gmail.com57c661e844ab59.64491136');

-- --------------------------------------------------------

--
-- Table structure for table `twitter_accounts`
--

DROP TABLE IF EXISTS `twitter_accounts`;
CREATE TABLE IF NOT EXISTS `twitter_accounts` (
  `access_token` varchar(200) NOT NULL,
  `access_token_secret` varchar(200) NOT NULL,
  `handle` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `twitter_accounts`
--

INSERT INTO `twitter_accounts` (`access_token`, `access_token_secret`, `handle`) VALUES
('83309209-8FEr7Etkmy8h0DDDHvG9rJbUtUvYFSvNvjajwHq7M', 'gUQFmL51RcNE9iXM59epWT1jGirAveIdhsSSs5G0nlG7G', 'WilliamHenry_94');

-- --------------------------------------------------------

--
-- Table structure for table `twitter_auth`
--

DROP TABLE IF EXISTS `twitter_auth`;
CREATE TABLE IF NOT EXISTS `twitter_auth` (
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
('WilliamHenry_9457c59236018da1.16531072', 'William Henry', 'WilliamHenry_94', '83309209', 'http://pbs.twimg.com/profile_images/3625226207/411215a43434afbe3111a51822758bb4.jpeg', '2016-08-30 04:03:34', '2016-08-30 04:03:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_reserved_at_index` (`queue`,`reserved_at`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

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
