<?php
// Inialize session
session_start();
// Test the session to see if is_auth flag was set (meaning they logged in successfully)
if ($_SESSION['auth'] != true) {
    header("location: login.php");
    exit;
}
?>
<!--
Copyright 2016 Google Inc. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<!-- 
Content Created By: Jonathan Chan
Date: 02/06/16

Side-Nav created by Paul Lewis and Surma
https://github.com/GoogleChrome/ui-element-samples
-->
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="side-nav-author" content="Paul Lewis and Surma" />
  <meta name="author" content="Team Sick"/>
  <meta name="viewport" content="width=device-width,minimum-scale=1"/>
  <meta name="theme-color" content="#EA2663"/>
  <title>Secret Sparrow</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/fonts.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
</head>
<body>
  <div class="header">
    <button class="js-menu-show header__menu-toggle material-icons">menu</button>
    <button class="js-menu-show header__sparrow material-icons">star</button>
    <button class="js-menu-show header__search-toggle material-icons">search</button>
  </div>

  <aside class="js-side-nav side-nav">
    <nav class="js-side-nav-container side-nav__container">
      <button class="js-menu-hide side-nav__hide material-icons">close</button>
      <header class="side-nav__header">
        <img class="profile-pic" src="images/128.jpg" alt="profile photo"/>
        <h3 class="ss-heading">name</h3>
        <h3 class="points">1,765 points</h3>
        <button class="side-nav__edit-profile ss-button" type="button"><a href="#">EDIT PROFILE</a></button>
      </header>
      <div class="side-nav__content">
        <h3 class="ss-heading">companies i work for</h3>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
      </div>
      <div class="side-nav__footer">
        <button class="ss-heading ss-button ss-red ss-logout-btn" type="button"><a href="db/logout.php">sign out</a></button>
      </div>
    </nav>
  </aside>
  <script src="side-nav.js"></script>

  <!-- Main Content -->
  <main class="content">
    <section class="userStats">
      <h2 class="ss-heading nice-padding">welcome <? echo $_SESSION['name']; ?> tsabita</h2>
      <div>

      </div>
      <h3 class="ss-heading nice-padding">you are a <? echo $_SESSION['rank']; ?>newbie</h3>
      <h3 class="ss-heading nice-padding"><? echo $_SESSION['pointsToLevel']; ?>500 more to level up</h3>
    </section>
    <section class="companyList">
      <div class="">
        <h3 class="ss-heading">companies i work for</h3>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
        <img class="profile-pic" src="images/128.jpg" alt=""></img>
      </div>
      <button class="ss-button ss-heading ss-red">find more companies</button>
    </section>
  </main>
  
</body>
</html>
