#<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container1">
        <div class="header">Sign In</div>
        <form action="" name="f1" class="formf1">
            <p class="first_name">First Name</p>
            <input type="text" name="fname" placeholder="type here..." class="f_name_class">
            <p class="second_name">Second Name</p>
            <input type="text" name="sname" placeholder="type here..." class="s_name_class">
            <p class="email_add">Email address</p>
            <input type="email" name="emailA" placeholder="type here..." class="email_class">
            <br>
            <input type="radio" name="radm" checked class="rad_m">man
            <input type="radio" name="radm" class="rad_w">woman
            <br>
            <p class="position">Position</p>
            <select name="selN" id="" class="select_class">
                <option value="Choose">Choose</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="QC/QA">QC/QA</option>
            </select>
            <input type="checkbox" name="check" class="clickTerms"> I agree all statements in Terms servise
        </form>
        <hr>
        <input type="button" value="Sign In" class="sign_button" disabled>
    </div>

    <div class="container2">
        <form action="" name="f2">
            <div class="box_header"></div>
            <div class="information">
                <div class="foto_name">
                    <img src="img1.png" alt="" class="img_man">
                    <img src="img2.png" alt="" class="img_wman">
                    <div class="inform">

                        <input type="text" name="className" class="className">
                        <input type="text" name="classEmail" class="classEmail">
                        <input type="text" name="classChoose" class="classChoose">
                    </div>
                    <hr width="450px">
                    <input type="button" value="Sign Out" class="sign_out">
                </div>
            </div>
            <div class="box_footer">
                <i class="fab fa-facebook-f fa-2x"></i>
                <i class="fab fa-github fa-2x"></i>
                <i class="fab fa-linkedin-in fa-2x"></i>

            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
