<?php
// First start a session. This should be right at the top of your login page.
session_start();
include 'db_config.php';

// Check to see if this run of the script was caused by our login submit button being clicked.
if (isset($_POST['loginSubmit'])) {
    $storedPwd = $_POST['loginPassword'];
    $storedEmail = $_POST['loginEmail'];

    // Create connection
    $conn = new mysqli($db_hostname, $db_username, $db_password, $db_database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // prepare and bind
    $stmt = $conn->prepare("SELECT Pssword FROM Users where Email = ?");
    $stmt->bind_param("s", $storedEmail);
    $stmt->execute();
    $stmt->store_result();
    $stmt->bind_result($pwd);
    $stmt->fetch();
    if($pwd == $storedPwd){
        // $resultStr = "Successfully logged in";
        // is_auth is important here because we will test this to make sure they can view other pages
        // that are needing credentials.
        $_SESSION['auth'] = true;
        $_SESSION['error'] = "";
        $_SESSION['username'] = $_POST['$storedEmail'];
        $stmt->close();
        $conn -> close();
        header('Location: ../index.php');
    }else{
        // $resultStr = "Wrong password";
        $_SESSION['error'] = "error Username or Password!!";
        $stmt->close();
        $conn -> close();
        header('Location: ../login.php');
    }

    // if ($_POST['username'] == "infs" and $_POST['password'] == "3202") {

    //     // is_auth is important here because we will test this to make sure they can view other pages
    //     // that are needing credentials.
    //     $_SESSION['auth'] = true;
    //     $_SESSION['error'] = "";
    //     $_SESSION['username'] = $_POST['username'];

    //     // Once the sessions variables have been set, redirect them to the landing page index page.
    //     header('location: index.php');
    //     exit;

    // } else {
    //     // error message
    //     $_SESSION['error'] = "error Username or Password!!";
    //     header('location: login.php');
    // }
    
} else {
    // error message
    $_SESSION['error'] = "error Username or Password!!";
    header('Location: ../login.php');
} 
?>