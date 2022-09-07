<?php
$secretKey ='6Leite0gAAAAAD_kJPPkeYRmcJD5oGysRFrlJDsP';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception; 
extract($_POST);

    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';

    $mail = new PHPMailer(true);
    if (isset($submit) == 'Submit'){
            $recaptcha = $_POST['g-recaptcha-response'];
            if($recaptcha!==''){

                try {
                    $mail->isSMTP();                                            //Send using SMTP
            
                    $mail->Host       = 'carrumdownsdental.com.au';                     //Set the SMTP server to send through
            
                    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            
                    $mail->Username   = 'no-reply@carrumdownsdental.com.au';                     //SMTP username
            
                    $mail->Password   = '4e4.5+_3Qr{B';                               //SMTP password
            
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            
                    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
            
            
                    $mail->setFrom('no-reply@carrumdownsdental.com.au', 'Carrum Down Home');
            
                    $mail->addAddress('no-reply@carrumdownsdental.com.au', 'New Lead');     //Add a recipient
            
                    $mail->addCC('ankita.nonstop@gmail.com');            
            
                    $mail->addAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);    //Optional name
            
                    $mail->isHTML(true);                                  //Set email format to HTML
            
                    $mail->Subject = 'New form submission from website';
            
                    $mail->Body    = "Name: $name <br> Email: $email <br> Phone : $phone  <br> Message: $msg" ;            
            
                if ($mail->send() == 1) {
            
                    header("Location: https://carrumdownsdental.com.au/thank-you/");
            
                }
            
                } catch (Exception $e) {
            
                // echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
                }
                
    
       } else{
           $error = 'Robot verification failed, please try again.';
       }

}

 ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="jT613v_6huP5m9TPQAwkZI-Iehyg2TBmgOnavXJAeeA" />
    <title>Wisdom Teeth Removal Treatment | Carrum Downs Dental Group</title>
    <meta name="description" content="We have experienced & specialized in wisdom teeth removal dentists in Carrum Downs. Now don't suffer from symptoms of wisdom tooth extraction. Call Us now!" />
    <!-- include bootstrap v4.6.1 css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">


         <!-- recaptcha -->
         <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- include fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link href="https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap" rel="stylesheet">

    <script defer src="https://connect.podium.com/widget.js#API_TOKEN=b8ee9d3e-a23b-46a1-a5b7-b87931927e1f"
        id="podium-widget" data-api-token="b8ee9d3e-a23b-46a1-a5b7-b87931927e1f"></script>
  <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: all 0.5s ease-in;
        }

        body {
            overflow-x: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            font-family: 'Playfair Display', serif;
        }

        i {
            color: #115278;
            font-size: 1.5rem;
        }

        .heading-color {
            color: #115278;
            font-weight: 100;
        }

        .customPara {
            color: #5a5a5a;
            font-size: 1.2rem;
            line-height: 1.8;
            margin-bottom: 1.1rem;
        }

        .customPara strong {
            color: #115278;
        }

        .bluebtn {
            background-color: #115278 !important;
            border-radius: 50rem !important;
            margin: 0 1rem 0.3rem 0 !important;
            padding: 0.5rem 1rem !important;
            font-family: 'Playfair Display', serif;
        }



        main section .bluebtn:hover {
            background-image: linear-gradient(90deg, #115278 51%, #1ebeb6);
        }

        header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1030;
        }

        header #Topbar {
            display: block;
        }

        header #Topbar .topbarContainer {
            border-bottom: 0.5px solid rgba(255, 255, 255, 0.219);
        }

        header #Topbar ul li p,
        header #Topbar ul li i {
            font-size: 0.8rem;
            color: #115278;
        }

        header nav.navbar a.navbar-brand {
            width: 25%;
        }

        header nav.navbar .collapse ul li a.nav-link {
            color: #fff;
            font-family: 'Maven Pro', sans-serif;
        }

        .navbar-light .navbar-nav .nav-link:hover {
            color: #fff
        }


        main section #hero {
            height: 80vh;
            width: 100%;
            background-image: url('./img/kkj.jpg1\ \(1\).jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            clip-path: ellipse(100% 55% at 48% 44%);
        }

        main section #hero #heroText h1 {
            font-size: 3rem;
            color: #fff;
            font-family: 'Playfair Display', serif;
        }

        main section #hero #heroText h4 {
            color: #32cfc8;
            font-size: 2.3rem;
            font-family: 'Playfair Display', serif;
        }

        main section #hero #heroText p {
            font-size: 1.5rem;
            color: #fff;
            font-family: 'Playfair Display', serif;
        }

        .GreySec {
            background-color: #eee;
            border-radius: 1.2rem !important;
        }



        .owl-nav,
        .owl-dots {
            display: none;
        }

        .owl-carousel {
            position: relative;
            top: -3.2rem;
            padding-top: 7rem;
        }

        .border-css {
            border: 3px solid #eee;
            border-radius: 35px;
        }

        .round {
            border: 3px solid #32cfc8;
            border-radius: 20px;
        }

        .sticky {
            top: 12%;
            z-index: 1;
            position: sticky;
        }
        .g-recaptcha {
            overflow: hidden;
        }
        /*#rc-anchor-container { width: 260px;}*/
        
        /*.g-recaptcha iframe{*/
        /*    width: 80%;*/
        /*}*/
        
        #footer {
            background-color: #1ebdb6;

        }

        .fb {
            border-top: 2.5px solid rgba(255, 255, 255, 0.1);
        }

        .lh-base {
            line-height: 1.8rem;
        }

        .dropdown:hover>.dropdown-menu {
            display: block;

        }

        footer #footer img {
            width: 30%;
            position: relative;
            left: 40%;
            right: 40%;

        }

        .payment {
            position: relative;
            margin-top: 8rem;
        }

        #paymentTitle {
            border: 2px solid #eee;
            width: 60%;
            position: absolute;
            top: -5.5rem;
            left: 50%;
            right: 50%;
            transform: translate(-50%, 0);
            background: #fff;
            z-index: 2;
            padding: 1rem;
            border-radius: 1.2rem;

        }

        @media only screen and (max-width: 1199px) {
            header {
                background-color: #fff;
            }

            header #Topbar {
                display: none;
            }

            header nav.nabvar {
                padding: 0;
            }



            header nav button.navbar-toggler {
                justify-content: start;
                border: none;
                color: rgb(25, 118, 210);
            }



        }

        @media only screen and (max-width: 990px) {


            .space {
                margin-top: 2.5rem;
            }

            footer #footer img {
                width: 50%;
                position: relative;
                left: 20%;
                right: 40%;

            }

            header nav.navbar a.navbar-brand {
                width: 50%;

            }

            header nav #navbarSupportedContent {
                background-color: #212529;
                position: fixed;
                top: 0rem;
                left: 0%;
                height: 100vh;
                width: 100%;
                z-index: -1;
                padding: 5rem 3rem;
                align-content: flex-start;
                transition: all .5s ease-in-out;
                font-size: 1.3rem;
                color: #fff;
            }

            header nav #navbarSupportedContent .bluebtn {
                width: 100%;
            }

        }




        @media only screen and (max-width: 600px) {


            header nav button {
                margin-left: 2em;
            }

            main section #hero #heroText {
                margin-top: 3rem;

            }


            main section #hero #heroText h1 {
                font-size: 2rem;

            }

            main section #hero #heroText h4 {
                font-size: 1.8rem;
            }

            main section #hero #heroText p {
                font-size: 1.3rem;
            }

            header nav button {
                margin-left: 0.5rem;
            }

            .bluebtn {
                font-size: 0.6rem;
                padding: 0.3rem 0.7rem !important;

            }

            .bluebtn .fa-phone {
                font-size: 0.6rem;
                padding: 0rem 0rem !important;

            }

            header nav.navbar a.navbar-brand {
            width: 45%;
            
        }


        }
        p.marginB {
            margin-bottom: 0px;
            margin-right: 45px;
        }
    </style>

    <title>Teeth Wisdom</title>


</head>

<body>

    <!-- header -->

    <header>
        <div class="container-fluid" id="Topbar">
            <div class="row">
                <div class="col-md-10 col-11 mx-auto topbarContainer">
                    <div class="row py-1">
                        <div class="col-10 d-flex align-items-center p-0 m-0">
                            <ul class="d-flex mb-0 list-unstyled mt-3">
                                <li class="d-flex align-items-center ml-2"><i class="fa-solid fa-clock"></i>
                                    <p class="ml-1 d-flex mb-0"><span class="text-white">Mon - Sat</span><span
                                            class="d-block ml-2 text-secondary">9AM -
                                            6PM
                                            (Sunday Close)</span></p>
                                </li>
                                <li class="d-flex align-items-center ml-2"><i class="fa-solid fa-location-pin"></i>
                                    <p class="ml-1 d-flex mb-0"><span class="text-white">Address</span><span
                                            class="d-block ml-2 text-secondary">1095
                                            Frankston-Dandenong Rd, Carrum Downs VIC 3201</span></p>
                                </li>
                                <li class="d-flex align-items-center ml-2"><i class="fa-solid fa-phone"></i>
                                    <p class="ml-1 d-flex mb-0"><span class="text-white">Call Today</span><a
                                            class="d-block ml-2 text-secondary" href="tel:03-9782 1200">03-9782 1200</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="col-2 d-flex justify-content-end">
                            <ul class="d-flex list-unstyled mb-0 mt-3">
                                <li class="mr-3"><a href="https://www.facebook.com/CarrumDownsDental" target="_blank"><i
                                            class="fa-brands fa-facebook"></i></a></li>
                                <li class="mr-3"><a href="https://twitter.com/CarrumDownsGrp/" target="_blank"><i
                                            class="fa-brands fa-twitter"></i></a></li>
                                <li class="mr-3"><a href="https://www.instagram.com/cddentalgroup/" target="_blank"><i
                                            class="fa-brands fa-instagram"></i></a></li>
                                <li class="mr-3"><a href="https://in.pinterest.com/CarrumDownsGrp/" target="_blank"><i
                                            class="fa-brands fa-pinterest"></i></a></li>
                                <li><a href="https://www.youtube.com/channel/UCqG1nDBsBULhWGi00Twe7rg"
                                        target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row m-0 p-0 mx-sm-0">
            <div class="col-md-10 col-12 mx-auto p-0">
                <nav class="navbar navbar-expand-lg bg-transparent navbar-light px-0 ">
                    <button class="navbar-toggler p-0 " type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>

                    </button>
                    <a href="/" class="navbar-brand mr-auto ml-2">
                        <img src="./img/CD_logo_lanscape (1).png" alt="carrum downs dental logo" class="img-fluid">
                    </a>

                    <button class="bluebtn btn d-lg-none d-block ml-1"><a href="/book-now/"
                            class="text-white text-decoration-none text-b font-weight-bold ">BOOK Now</a></button>
                    <button class="bluebtn btn d-lg-none d-block m-0"><a href="tel:03-9782 1200"
                            class="text-white text-decoration-none text-b font-weight-bold m-0"><i
                                class="fa-solid fa-phone text-white"></i></a></button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-link"><a href="/" class="nav-link">Home</a></li>
                            <li class="nav-link dropdown"><a href="/about-us/" class="nav-link dropdown-toggle"
                                    role="button" data-toggle="dropdown" aria-haspopup="false"
                                    aria-expanded="false">About Us</a>
                                <ul class="dropdown-menu border-0 shadow-lg">
                                    <li class="nav-item"><a href="/refferal-program/" class="dropdown-item ">Patient
                                            Refferral Program</a></li>
                                    <li class="nav-item"><a href="/payment-plan/" class="dropdown-item ">Payment
                                            Plan</a>
                                    </li>
                                    <li class="nav-item"><a href="/new-technologies/" class="dropdown-item ">New
                                            Tecnology</a></li>
                                </ul>
                            </li>




                            <li class="nav-link dropdown"><a href="/service/" class="nav-link dropdown-toggle"
                                    role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">Services</a>
                                <ul class="dropdown-menu border-0 shadow-lg">
                                    <li class="nav-item"><a href="/service/wisdom-teeth-removal/"
                                            class="dropdown-item ">Wisdom Teeth
                                            Removal</a></li>
                                    <li class="nav-item"><a href="/service/child-benefit/" class="dropdown-item ">Child
                                            Benefit</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/dental-implants/"
                                            class="dropdown-item ">Dental Implants</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/dentures/" class="dropdown-item ">Denture</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/teeth-whitening/"
                                            class="dropdown-item ">Teeth Whitening</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/crowns-and-bridge/"
                                            class="dropdown-item ">Crown and
                                            Bridges</a></li>
                                    <li class="nav-item"><a href="/service/veneers/" class="dropdown-item ">Veneers</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/teeth-aligners/"
                                            class="dropdown-item ">Invisalign</a></li>
                                    <li class="nav-item"><a href="/service/root-canal/" class="dropdown-item ">Root
                                            Canal</a></li>
                                    <li class="nav-item"><a href="/service/teeth-cleaning/" class="dropdown-item ">Teeth
                                            Cleaning</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/dental-emergency/"
                                            class="dropdown-item ">Dental Emergency
                                            Cleaning</a></li>
                                    <li class="nav-item"><a href="/service/tooth-fillings/" class="dropdown-item ">Tooth
                                            Fillings</a>
                                    </li>
                                    <li class="nav-item"><a href="/service/smile-design/" class="dropdown-item ">Smile Design</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-link"><a href="/blog/" class="nav-link">Blog</a></li>
                            <li class="nav-link"><a href="/contact-us/" class="nav-link">Contact Us</a></li>
                            <li class="nav-link"><a href="/how-we-can-reduce-the-spread-of-corona-virus-together/"
                                    class="nav-link">Covid 19</a></li>
                        </ul>
                        <button class="bluebtn btn d-lg-block d-block"><a href="/book-now/"
                                class="text-white text-decoration-none text-b font-weight-bold ">BOOK NOW</a></button>
                        <button class="bluebtn btn d-lg-block d-block"><a href="tel:03-9782 1200"
                                class="text-white text-decoration-none text-b font-weight-bold ">03-9782
                                1200</a></button>


                    </div>
                </nav>
            </div>
        </div>

    </header>

    <main>
        <!-- banner -->

        <section>
            <div class="container-fluid p-0" id="hero">
                <div class="row  m-0 p-0" style="height: inherit;">
                    <div class="col-md-10 col-11 mx-auto" style="height: inherit;">
                        <div class="row" style="height: inherit;">
                            <div class="col-lg-8 col-11 mx-auto d-flex align-items-center" style="height: inherit;">
                                <div id="heroText">
                                    <h1>Wisdom Teeth Removal in Carrum Downs</h1>
                                    <nav aria-label="breadcrumb bg-transparent">
                                        <ol class="breadcrumb bg-transparent">
                                            <li class="breadcrumb-item"><a href="/service/"
                                                    class="text-white text-decoration-none">SERVICES</a></li>
                                            <li class="breadcrumb-item active text-white" aria-current="page">WISDOM
                                                TEETH REMOVAL IN CARRUM DOWNS</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <div class="col-lg-4 col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="py-5 sec ">
            <div class="row m-0 p-0" style="height: inherit;">
                <div class="col-md-10 col-11 mx-auto">
                    <div class="row" style="height: inherit;">
                        <div class="col-lg-8 col-12 px-lg-5">
                            <!-- text -->
                            <section>
                                <div class="container-fluid p-0">
                                    <h2 class="heading-color">Wisdom Tooth and Other Surgical Extractions</h2>
                                    <p class="customPara"><strong>“Come along for an opinion. Most complex extractions
                                            can be managed successfully on site, without the need of a hospital
                                            visit.”</strong></p>
                                    <p class="customPara">Carrum Downs Dental Group’s general dentists are specialised
                                        in Wisdom tooth, Impacted and Surgical extractions.We can remove your wisdom
                                        teeth in a caring way to relieve you of the pain and aches.</p>
                                    <p class="customPara">We only recommend the removal of wisdom teeth if they are
                                        impacted or infected.
                                        The extraction is straightforward if the Wisdom tooth is straight and is not
                                        impacted and the <strong>costs for this will be from $200*</strong>.</p>
                                    <p class="customPara">A minor surgery (including sectioning the bones) will be
                                        required for Impacted
                                        and horizontally growing tooth. The cost for this extraction <strong>starts from
                                            $300*</strong> and depends on the Impaction.</p>
                                    <p class="customPara">In a very few circumstances, it may be too difficult to remove
                                        the tooth at our
                                        practice and in these cases we may refer patients to a specialist oral surgeon
                                        who is skilled in dealing with most complex cases. You can <strong>email us your
                                            OPG/X-Ray</strong> and we can advise you if we can remove it and can also
                                        provide you with the approximate cost</p>
                                </div>
                            </section>

                            <!-- carousel -->
                            <section>
                                <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                                        </li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="./img/wisdom-tooth-x-ray.6285ae585f46bb066dad.jpg"
                                                class="d-block w-100" alt="wisdom-tooth-x-ray">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./img/wisdom-tooth-x-ray.6285ae585f46bb066dad.jpg"
                                                class="d-block w-100" alt="wisdom-tooth-x-ray">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./img/new-wisdom-tooth-x-ray.c37e3cfd9f1b7344fbb6.jpg"
                                                class="d-block w-100" alt="new-wisdom-tooth-x-ray">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./img/wisdom-tooth-improper-positioning.ef0e51dea6d8d1023f32.jpg"
                                                class="d-block w-100" alt="wisdom-tooth-improper-positioning">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button"
                                        data-target="#carouselExampleIndicators" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button"
                                        data-target="#carouselExampleIndicators" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </button>
                                </div>

                                <div class="my-4 d-sm-flex">
                                    <button class="bluebtn btn"><a href="/book-now/"
                                            class="text-white text-decoration-none text-b font-weight-bold">BOOK AN
                                            APPOINMENT</a></button>
                                    <button class="bluebtn btn"><a href="tel:03-9782%201200"
                                            class="text-white text-decoration-none text-b font-weight-bold">CALL
                                            Now</a></button>
                                </div>

                            </section>

                            <!-- greybox -->

                            <section class="GreySec rounded" style="margin-top: 3.5rem;">
                                <div class="container-fluid ">
                                    <div class="p-md-5 p-3">
                                        <div>
                                            <h2 style="color: #115278; ">Symptoms requiring Wisdom tooth extraction.
                                            </h2>
                                            <div class="box">
                                                <ul class="list-unstyled">
                                                    <li class="mb-3">
                                                        <i class="fa-regular fa-circle-check"
                                                            style="color:#1ebeb6;"></i>
                                                        The Wisdom teeth dint
                                                        fully erupt
                                                        and is causing Impaction or overcrowding.
                                                    </li>
                                                    <li class="mb-3">
                                                        <i class="fa-regular fa-circle-check"
                                                            style="color:#1ebeb6;"></i>
                                                        Chronic pain in your gums
                                                        around the wisdom tooth. The pain is caused because of food and
                                                        bacteria getting trapped in between impacted teeth.
                                                    </li>
                                                    <li class="mb-3">
                                                        <i class="fa-regular fa-circle-check"
                                                            style="color:#1ebeb6;"></i>
                                                        Wisdom teeth did not come
                                                        out straight and cause your teeth to shift and move over time.
                                                    </li>
                                                    <li class="mb-3">
                                                        <i class="fa-regular fa-circle-check"
                                                            style="color:#1ebeb6;"></i>
                                                        Wisdom teeth causing
                                                        decay of the adjacent tooth. Due to the location of the Wisdom
                                                        tooth
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 style="color: #115278; ">What happens during your Wisdom tooth
                                                extraction?</h2>
                                            <div>
                                                <p class="customPara">Prior to the surgery your dentist will discuss
                                                    with
                                                    you the procedure and will let you know what to expect during and
                                                    after
                                                    the procedure. A local anaesthetic will be given to numb the area
                                                    around
                                                    the wisdom tooth so you do not feel any pain. To remove the wisdom
                                                    tooth, your dentist will remove the gum tissue or bone over your
                                                    tooth.
                                                    The wisdom tooth is either extracted or cut in to small pieces to
                                                    make
                                                    way for easier removal. Stitches may be required after the
                                                    extraction.
                                                    The dentist will advise if all of the wisdom teeth can be removed in
                                                    a
                                                    single or multiple sitting.</p>
                                                <p class="customPara">If you are Anxious about getting the dental
                                                    treatment
                                                    done, we can also provide Laughing Gas or Happy Gas sedation to help
                                                    reduce your pain and anxiety during the treatment.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>

                            <!-- payment option  -->

                            <section class="payment">
                                <div>
                                    <h2 class="text-center" id="paymentTitle">
                                        Payment Options</h2>
                                </div>


                                <div class="owl-carousel owl-theme border-css pb-4 px-3">
                                    <div class="item">
                                        <img src="./img/westfund.a968b6e041b44af5120d.png" alt="Wefund">
                                    </div>
                                    <div class="item">
                                        <img src="./img/afterpay-logo-png-black-transparent.f5dc28503db21b049d88.png"
                                            alt="Afterpay">
                                    </div>
                                    <div class="item">
                                        <img src="./img/Bupa-Logo.jpg.06ca4c8e5ed4c7040d1e.png" class="img-fluid"
                                            alt="Bupa">
                                    </div>
                                    <div class="item">
                                        <img src="./img/cbhs-logo.46410d15003d70750762.png" class="img-fluid"
                                            alt="Cbhs">
                                    </div>
                                    <div class="item">
                                        <img src="./img/EFTPOS_Logo.svg.3c1e793ee8b82b9ee063.png" class="img-fluid"
                                            alt="efrpos">
                                    </div>
                                    <div class="item">
                                        <img src="./img/HCFMoreForTeeth.jpeg.e21ffcf90dd096ca1026.png" class="img-fluid"
                                            alt="Hcf">
                                    </div>
                                    <div class="item">
                                        <img src="/img/hicaps.7122e8abf9c8cf6b1ddd.png" class="img-fluid" alt="hicaps">
                                    </div>
                                    <div class="item">
                                        <img src="/img/medibank-logo.33483052844f0d062d96.png" class="img-fluid"
                                            alt="medibanks">
                                    </div>
                                    <div class="item">
                                        <img src="/img/Medicare-Hours.jpg.3db40415ee1b112483ea.png" class="img-fluid"
                                            alt="medicare">
                                    </div>
                                    <div class="item">
                                        <img src="/img/my-smile-plan.ebe9e5272227dabc110f.png" class="img-fluid"
                                            alt="my smile plan">
                                    </div>
                                    <div class="item">
                                        <img src="/img/Smile.30cd6fd9f5d41702f35e.png" class="img-fluid"
                                            alt="Smile - Logo">
                                    </div>
                                </div>




                            </section>

                            <!-- FAQ -->

                            <section class="mt-md-5 ">
                                <div class="container-fluid p-0">
                                    <h2 class="text-center pb-2" style="color: #115278;">Frequently Asked Questions
                                        (FAQs)</h2>
                                    <div class="mt-3">
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header p-0" id="headingOne">
                                                    <h3 class="mb-0" style="color: #115278;">
                                                        <button
                                                            class="btn btn-block text-left text-decoration-none collapsed border-0"
                                                            type="button" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne"
                                                            style="font-size: 20.8px; color: #115278;">
                                                            Why are wisdom teeth removed?
                                                        </button>
                                                    </h3>
                                                </div>

                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p class="customPara">A wisdom tooth can be removed for various
                                                            reasons, such as a wisdom tooth that failed to erupt fully,
                                                            chronic pain on the gums around the wisdom tooth, a tooth
                                                            that didn’t come out straight or a wisdom tooth causing
                                                            decay to the adjacent teeth.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header p-0" id="headingTwo">
                                                    <h3 class="mb-0">
                                                        <button
                                                            class="btn  btn-block text-left text-decoration-none collapsed"
                                                            type="button" data-toggle="collapse"
                                                            data-target="#collapseTwo" aria-expanded="false"
                                                            aria-controls="collapseTwo"
                                                            style="font-size: 20.8px; color: #115278;">
                                                            Does Medicare cover wisdom teeth removal?
                                                        </button>
                                                    </h3>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p class="customPara">Yes, wisdom teeth removal is covered under
                                                            Medicare for eligible Kids under the CDBS Program.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header p-0" id="headingThree">
                                                    <h3 class="mb-0">
                                                        <button
                                                            class="btn btn-block text-left text-decoration-none collapsed"
                                                            type="button" data-toggle="collapse"
                                                            data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                            style="font-size: 20.8px; color: #115278;">
                                                            What to eat after wisdom teeth removal?
                                                        </button>
                                                    </h3>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p class="customPara">Following wisdom teeth removal, you should
                                                            eat soft foods and liquids such as yoghurt, mashed potatoes,
                                                            pudding and smoothies. Cold foods like ice cream can offer
                                                            relief.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header p-0" id="headingThree">
                                                    <h3 class="mb-0">
                                                        <button
                                                            class="btn  btn-block text-left text-decoration-none collapsed"
                                                            type="button" data-toggle="collapse"
                                                            data-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree"
                                                            style="font-size: 20.8px; color: #115278;">
                                                            How long are you swollen after wisdom teeth removal?
                                                        </button>
                                                    </h3>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                                    data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <p class="customPara">Typically, your mouth and cheeks may have
                                                            a swelling that lasts 1 to 2 days and stiffness that could
                                                            last for up to a week.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="mt-md-5 mt-4">
                                <div class="container-fluid p-0">
                                    <img src="./img/InterestFree.849f033db84644a0d54b.jpg" alt="interest free"
                                        class="img-fluid">
                                </div>
                            </section>

                            <section class="GreySec mt-md-5 mt-4">
                                <div class="container-fluid p-md-5 p-3 text-center">
                                    <h4 style="color: #115278;" class="pb-3">Book an appointment with Carrum Downs
                                        Dental (Dandenong-Frankston Rd) on 03-9782
                                        1200 for your wisdom tooth extraction.</h4>
                                    <button class="btn bluebtn"><a href="/book-now/"
                                            class="font-weight-bold text-white"> BOOK NOW</a></button>
                                </div>
                            </section>

                            <section class="mt-md-5 mt-4">
                                <div class="container-fluid p-0">
                                    <h2 class="text-center" style="color: #115278;">Recent Posts</h2>
                                    <div id="postContainer">
                                        <div class="row">

                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div class="col-lg-4 col-12 px-4">

                            <section>
                                <div class="container-fluid p-0 space">
                                <form class="border-css  px-4" role="form" method="post" enctype="multipart/form-data">

                                         <h2 class="text-center border-bottom pt-3 pb-3" style="color: #115278;">
                                            Contact
                                            Us</h2>
                                            <div class="form-group">

                                                <input type="text" class="form-control my-3" id="exampleFormControlInput1"

                                                    placeholder="Name" name="name" require>

                                                <input type="number" class="form-control my-3" id="exampleFormControlInput1"

                                                    placeholder="Phone Number" name="phone" require>

                                                <input type="email" class="form-control my-3" id="exampleFormControlInput1"

                                                    placeholder="Email Address" name="email" require>

                                                <input type="file" name="file" class="form-control-file my-3"

                                                    id="file">

                                                <textarea class="form-control my-3" id="exampleFormControlTextarea1" name="msg"

                                                    rows="3"></textarea>
                                                    
                                                        <!-- Google reCAPTCHA box -->
                                                        <div class="g-recaptcha" data-sitekey="6Leite0gAAAAAD2dM7Jn91Kt12w5_OACqdCSHC6V" width: "260px" style="width: 260px"></div>
                                                        <p class="text-danger"><?php echo $error;?></p>
                                                

                                                <input type="submit" name="submit" class="btn bluebtn  text-white" type="submit" value="SEND">

                                            </div>

                                            </form>
                                   
                                </div>
                            </section>

                            <section>
                                <div class="container-fluid p-0 my-5 ">
                                    <div class=" col-lg-12 border-css round  px-4">
                                        <h4 class="text-center border-bottom border-info pt-5 pb-3 "
                                            style="color: #115278;">Contact Details</h4>

                                        <div class="contact pt-4 pb-5 px-3" style="color: #115278;">
                                            <h5>Clinic</h5>
                                            <p>1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201</p>

                                            <h5>Email</h5>
                                            <p><a href="mailto:carrumdownsdental@gmail.com"
                                                    class="text-decoration-none text-dark">carrumdownsdental@gmail.com</a>
                                            </p>

                                            <h5>Phone</h5>
                                            <p><a href="tel:03-9782 1200" class="text-decoration-none text-dark">
                                                    03-9782 1200</a></p>

                                            <h5>Opening hours</h5>
                                            <p>Mon - Sat 09am - 6pm
                                                Sunday CLOSED</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section class="sticky-top" style="top: 18%;">
                                <div class="container-fluid p-0">
                                    <div class="p-0">
                                        <h4 class="text-center  p-4 m-0"
                                            style="color: #fff; background-color: #115278; border-radius: 20px 20px 0px 0px;">
                                            Services</h4>
                                        <ul class="list-unstyled p-5 align-content-center align-items-center m-0"
                                            style="background-color: #dce5eb; border-radius: 0px 0px 20px 20px;">

                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/child-benefit/"
                                                    class="text-dark text-decoration-none">Child Benefits</a>
                                            </li>
                                            <li class="p-3 ">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/dentures/"
                                                    class="text-dark text-decoration-none">Dental Implant</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/dentures/"
                                                    class="text-dark text-decoration-none">Denture</a>


                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/teeth-whitening/"
                                                    class="text-dark text-decoration-none">Teeth Whitening</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/crowns-and-bridge/"
                                                    class="text-dark text-decoration-none">Crowns And Bridge</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/veneers/"
                                                    class="text-dark text-decoration-none">Veneers</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/teeth-aligners/"
                                                    class="text-dark text-decoration-none">Invisalign</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/root-canal/"
                                                    class="text-dark text-decoration-none">Root Canal</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/teeth-cleaning/"
                                                    class="text-dark text-decoration-none">Teeth Cleaning</a>

                                            </li>
                                            <li class="p-3">
                                                <i class="fa-regular fa-circle-check" style="color:#1ebeb6;"></i>
                                                <a href="/service/tooth-fillings/"
                                                    class="text-dark text-decoration-none">Tooth Fillings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
    </main>

    <footer>
        <section class="p-0">
            <div class="container-fluid p-0" id="footer">
                <div class="row m-0 p-0">
                    <div class="col-md-10 col-11 mx-auto px-0 m-0" style="height: inherit;">
                        <div class="container  p-4 ">
                            <img src="./img/logo.41c36669abaabe0da02e933cc5b21960.svg" alt="logo">
                        </div>

                        <div class=" p-0  py-4 fb">
                            <div class="d-lg-flex d-md-block">
                                <div class="col-lg-4 col-md-12 col-12  pr-3">
                                    <h3 style="color: #115278;" class="">About Us</h3>
                                    <p class="text-white lh-base">At Carrum Downs Dental in Frankston-Dandenong Road we
                                        are committed to apply our dental knowledge and skills in a caring and gentle
                                        way, you will feel at ease while we work on your smile. You will definitely
                                        appreciate the warm and friendly manner in which we treat patients. Learn more
                                        about our <a href="/about-us/" style="color: #115278;">dentist in Carum
                                            Downs.</a> </p>
                                </div>

                                <div class="col-lg-2 col-12 ">
                                    <h3 style="color: #115278;" class="pb-2 m-0">Quick Links</h3>
                                    <div class="list-group text-white">
                                        <a href="/" class="list-group text-decoration-none text-white pb-1"
                                            aria-current="true">
                                            Home
                                        </a>
                                        <a href="/about-us/"
                                            class="list-group text-decoration-none text-white ">About Us</a>
                                        <a href="/service/"
                                            class=" list-group text-decoration-none text-white ">Services</a>
                                        <a href="/blog/"
                                            class=" list-group text-decoration-none text-white ">Blog</a>
                                        <a href="/contact-us/"
                                            class=" list-group text-decoration-none text-white ">Contact Us</a>
                                        <a href="/privacy-policy/"
                                            class=" list-group text-decoration-none text-white ">Privacy Policy</a>
                                        <a href="/terms-and-conditions/"
                                            class=" list-group text-decoration-none text-white ">Terms &
                                            Conditions</a>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 text-white px-3">
                                    <h3 style="color: #115278;">Opening Hours</h3>


                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Monday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Tuesday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Wednesday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Thursday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Friday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Saturday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <p class="marginB">Sunday</p>
                                        <p class="marginB">9:00am - 6:00pm</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-12 ">
                                    <h3 style="color: #115278;" class="pb-4">Contact Us</h3>

                                    <div class="d-flex justify-content-between">
                                        <i class="fa-solid fa-house py-2"></i>
                                        <p class="pl-3 text-white mb-0">1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201
                                        </p>
                                    </div>

                                    <div class="d-flex py-3">
                                        <i class="fa-solid fa-phone"></i>
                                        <a href="tel:03-9782 1200" class="px-3 text-decoration-none text-white mb-0">03-9782
                                            1200</a>
                                    </div>

                                    <div class="d-flex ">
                                        <i class="fa-solid fa-envelope py-2"></i>
                                        <a href="mailto:carrumdownsdental@gmail.com"
                                            class="px-3 text-decoration-none text-white mb-0">carrumdownsdental@gmail.com</a>
                                    </div>


                                </div>
                            </div>


                        </div>

                        <div class="container  fb pt-4">
                            <div class="links text-center">
                                <a href="/get-painless-dental-treatment-at-skye/"
                                    class="text-decoration-none font-weight-bold px-2" style="color: #115278;">Skype</a>
                                <a href="/get-the-best-dental-care-at-sandhurst/"
                                    class="text-decoration-none font-weight-bold px-2"
                                    style="color: #115278;">Sandhurst</a>
                                <a href="/affordable-dental-services-at-patterson-lakes/ "
                                    class="text-decoration-none font-weight-bold px-2" style="color: #115278;">Patterson
                                    Lakes</a>
                                <a href="/we-are-your-go-to-dentist-in-cranbourne-west/ "
                                    class="text-decoration-none font-weight-bold px-2"
                                    style="color: #115278;">Cranbourne West</a>
                                <a href="/looking-for-a-dentist-in-frankston-north/ "
                                    class="text-decoration-none font-weight-bold px-2" style="color: #115278;">Frankston
                                    North</a>
                                <a href="/find-the-best-dentist-in-seaford/ "
                                    class="text-decoration-none font-weight-bold px-2"
                                    style="color: #115278;">Seaford</a>
                                <a href="/get-all-your-dental-needs-handled-in-lyndhurst/ "
                                    class="text-decoration-none font-weight-bold px-2"
                                    style="color: #115278;">Lyndhurst</a>
                                <a href="/affordable-dental-services-at-langwarrin/ "
                                    class="text-decoration-none font-weight-bold px-2"
                                    style="color: #115278;">Langwarrin</a>
                            </div>
                            <div class="links text-center pt-3">
                                <a href=""><i class="px-2 fa-brands fa-facebook"></i></a>
                                <a href=""><i class="px-2 fa-brands fa-twitter"></i></a>
                                <a href=""><i class="px-2 fa-brands fa-instagram"></i></a>
                                <a href=""><i class="px-2 fa-brands fa-pinterest"></i></a>
                                <a href=""><i class="px-2 fa-brands fa-youtube"></i></a>
                            </div>
                        </div>

                        <div class="container text-center text-white fb pt-2">
                            <p>Copyright 2022 &copy; | carrumdownsdental.com.au</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>


    <script data-he-id="62595" data-alignment="left" data-he-fixed="true" data-background-color="#003a4c"
        src="https://healthengine.com.au/webplugin/appointments.js"></script>

    <!-- include jquery v3.5.1, popper v1.16.1, and bootstrap v4.6.1 -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
        </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous">
        </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script>
        $(document).ready(function () {
            $(window).scroll(function () {
                if (window.scrollY > 50) {
                    $('#Topbar').addClass('d-none');
                    $('#Topbar').removeClass('d-lg-block');
                    $('header').addClass('bg-white shadow');
                    $('.nav-link').removeClass('text-white') && $('.nav-link').addClass('text-dark');

                } else if (window.scrollY < 50) {
                    $('#Topbar').addClass('d-lg-block d-none');
                    $('header').removeClass('bg-white shadow');
                    $('.nav-link').addClass('text-white') && $('.nav-link').removeClass('text-dark');
                }
            });



            // wordpress blog fetch

            const api = "https://carrumdownsdental.com.au/wp-json/wp/v2/posts?_embed=true";

            const fetchApi = async () => {
                await fetch(api).then(res => res.json()).then(data => data.slice(0, 2).map(item => {
                    document.querySelector('#postContainer .row').insertAdjacentHTML(
                        'afterbegin', `<div class="col-md-6 col-12">
                        <div class="card shadow border-0 ">
                        <img src=${item._embedded['wp:featuredmedia'][0].source_url} alt=${item._embedded['wp:featuredmedia'][0].alt_text} class="card-img-top" />
                        <div class="card-body py-sm-4">
                            <h4><a href={/${item.slug}/ class="text-decoration-none" style="color: #115278;"}>${item.title.rendered} </a></h4>
                            <p class="customPara card-text">${item.excerpt.rendered}</p>
                            </div>
                        </div>
                        </div>`)
                }))
            }

            fetchApi()

            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 50,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                        loop: true,
                        nav: true,
                    },
                    600: {
                        items: 2,
                        loop: true,
                        nav: false,
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true
                    }
                }
            })

        });
    </script>

</body>

</html>