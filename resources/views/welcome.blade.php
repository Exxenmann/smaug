<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Smaug</title>

    </head>
    <body>

        <app-root>
            <div style="display: block;height: 100%;width: 100%;position: fixed;">
               <div style="position: absolute;top: 0;bottom: 0;margin: auto;height: 100px;width: 100%;">
                    <center>
                        <div style="color:white;"><br/><br/>Loading ...</div>
                    </center>
               </div>
            </div>
        </app-root>

        <?php readfile('angularbuild/scriptinjection.html'); ?>

    </body>
</html>
