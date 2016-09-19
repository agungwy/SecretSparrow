<?php
    require_once "uq/auth.php";
    auth_require();
?>
<html>

	<head>
		<!-- HTML Style -->
		<link rel="stylesheet" type="text/css" href="assets-stat/style.css">
		<!-- <link rel="stylesheet" href="bootstrap/css/bootstrap.css"> -->

		<!-- HELPERS -->
		<link rel="stylesheet" type="text/css" href="assets-stat/helpers/boilerplate.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/helpers/spacing.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/helpers/typography.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/helpers/colors.css">
		 
		<!-- ELEMENTS -->
		<link rel="stylesheet" type="text/css" href="assets-stat/elements/badges.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/elements/buttons.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/elements/content-box.css">
		<link rel="stylesheet" type="text/css" href="assets-stat/elements/tables.css">
		 
		<!-- JS Core -->
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<!-- <script src="bootstrap/js/bootstrap.js"></script> -->
		<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
		<script type="text/javascript" src="assets-stat/barChart.js"></script>

		<title>SecretSparrow Dashboard</title>

		<!-- For Navigation Transition -->
		<script>
			$(document).ready(function(){
			  // Add smooth scrolling to all links
			  $("a").on('click', function(event) {
			    // Make sure this.hash has a value before overriding default behavior
			    if (this.hash !== "") {
			    // Prevent default anchor click behavior
			    event.preventDefault();
			    // Store hash
			    var hash = this.hash;
			    // Using jQuery's animate() method to add smooth page scroll
			    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			    $('html, body').animate({
			      scrollTop: $(hash).offset().top
			    }, 800, function(){
			    // Add hash (#) to URL when done scrolling (default click behavior)
			    window.location.hash = hash;
			    });
			    } // End if
			  	});
			});
		</script>

		<title>SecretSparrow Dashboard</title>

	</head>

	<body>

		<div class="container">
			<!-- Navigation Bar -->
			<div class="navbar">
				<br><br><br><br><br><br>
				<center>
					<h2><b>Welcome!</b></h3>
					<br>
					<h2>SecretSparrow Dashboard</h4>
				</center>
				<!-- Menu Items -->
				<div class="menulist">
					<div class="menulistinner">
						<hr>
						<a href="#daily"><h3 id="menuitem"><b>Today's Summary</b></h3></a>
						<hr>
						<hr>
						<a href="#sub"><h3 id="menuitem"><b>View Subscribers</b></h3></a>
						<hr>
						<br><br><br><br><br>
						<br><br><br><br><br>
						<br><br><br><br><br>
						<hr>
						<a href="/logout"><h3 id="menuitem">Logout</h3></a>
						<hr>
					</div>
				</div>
			</div>

			<!-- Daily Summary -->
			<div class="daily" id="daily">

				<div class="dailytop">

					<div class="dailytopleft">
						<h3 class="sectionTitle"><b>Today's Summary:</b></h3>
						<div style="margin-left:10%; margin-top: 30px;">
							<a href="#" class="chart-button" id="subscriber-op" style="color:#ED5356; margin-left:10%;">
							<h4><u>Subscribers</u></h4>
							</a>
							<a href="#" class="chart-button" id="visitor-op" style="color:#ED5356; margin-top:10px;"> 
							<h4><u>Visitors</u></h4>
							</a>
						</div>
					</div>

					<div class="dailytopcenter">
						<div class="piechartdiv">
							<!-- Store Pie Chart Here -->
							<div id="columnchart_material" style="width: 100%; height: 100%;"></div>
						</div>
					</div>

					
				</div>
			</div>


			<!-- View Subscriptions -->
			<div class="sub" id="sub">
				<div class="subtop">
					<div class="subtopleft">
						<h2 class="sectionTitleSub"><b>View Subscribers:</b></h2>
					</div>
					<div class="subtopright">
						<select id="select">
						  <option value="subscriber">Subscriber</option>
						  <option value="visitor">Visitor</option>
						  
						</select>
					</div>

				</div>


				<div class="submid">
					<div class="submidtable">
						<!-- Subscriptions Table Here -->
						<table class="tg">
							<!-- <tr>
								<th class="tg-sd1">Number</th>
								<th class="tg-sd2">Date Subscribed</th>
								<th class="tg-sd3">Full Name</th>
								<th class="tg-sd4">E-mail</th>
							</tr> -->
							
						</table>
					</div>
				</div>

				<div class="subbottom">
					<h3 id="totalsubscription">Total Subscribers: value</h3>
					<!-- <button type="button" class="btn btn-default" id="email"><strong>E-mail Subscribers</strong></button> -->
				</div>

			</div>


		</div>

	</body>

</html>