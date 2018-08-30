<?php

    $to = "narcismorar@gmail.com";
    $from = $_REQUEST['name'];
    $subject = $_REQUEST['subject'];
    $name = $_REQUEST['name'];
    $headers = "From: $from";

    $fields = array();
    $fields{"fullname"} = "Name";
    $fields{"email"} = "Email";
    $fields{"message"} = "Message";

    $subject="Contact";
    $body = "Here is what was sent:\n\n"; foreach($fields as $a => $b){   $body .= sprintf("%20s: %s\n",$b,$_REQUEST[$a]); }

    $send = mail($to, $subject, $body, $headers);

?>
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="refresh" content="0; url=https://narcismorar.github.io/az/">
        <script type="text/javascript">
            window.location.href = "https://narcismorar.github.io/az/"
        </script>
        <title>Page Redirection</title>
    </head>
    <body background="#000000">
        <!-- Note: don't tell people to `click` the link, just tell them that it is a link. -->
        If you are not redirected automatically, follow this <a href='https://narcismorar.github.io/az/'>link to example</a>.
    </body>
</html>
