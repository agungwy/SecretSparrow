<!-- 
Content Created By: Jonathan Chan
Date: 02/06/16
-->
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="author" content="Team Sick"/>
  <meta name="viewport" content="width=device-width,minimum-scale=1"/>
  <meta name="theme-color" content="#EA2663"/>
  <title>Secret Sparrow</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/fonts.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
</head>
<body>
<main class="content">
	<div class="site-logo">
		<img src="images/logo.png" alt="Secret Sparrow">
	</div>
	<div class="login-buttons">
		<a class="ss-button ss-red" id="loginTrigger">Login</a>
		<a href="#" class="ss-button ss-red">Register</a>
	</div>
</main>

<div class="black-overlay">
</div>

<div class="added">
    <a class="closeButton"></a>
    <form action="db/check_login.php" method="post">
        <div class="form-group">
            <div class="row">
                <h2>Enter Login Details</h2>
            </div>
            <div class="row">
                    <input type="email" name="loginEmail" placeholder="Email Address" required/>
            </div>
            <div class="row">
                    <input type="password" name="loginPassword" placeholder="Password" required/>
            </div>
            <button class="ss-button ss-red" type="submit" name="loginSubmit">Login</button>
        </div>
    </form>
    
</div>
<script src="js/jquery-2.2.2.min.js" type="text/javascript"></script>
<script src="js/login.js" type="text/javascript"></script>
</body>
</html>