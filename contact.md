---
layout: page
title: Contact
header: Contact SDCR
tagline: Have a question?
group: navigation
---
{% include JB/setup %}

<!--
Google Map embed:

Original object:
<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=san%20diego%20city%20college&key=AIzaSyC-c-4P3FhPrpP08DmDmrwjG44DUE3v_LU"></iframe>

Fluid Map Maintaining:
http://codepen.io/bradfrost/full/vwInb

Uncle Dave's Ol' Padded Box:
http://daverupert.com/2012/04/uncle-daves-ol-padded-box/
-->


<link href="style.css" ref="stylesheet" type="test/css" media="all">

<div class="container-fluid">
    <div class="col-md-1">
        <p> SDCR
        </p>
    </div>
    
<div class="container-fluid">
    <div class="col-md-3">
        <p> 1313 Park Blvd <br>San Diego, CA 92101<br>Jason@sdcityrobotics.org<br>Tel: (858) 376-3727
        </p>
</div>

<div class="container-fluid">
    <div class="col-md-2">
        <p> Social media images and links go here, Social media images and links go here, 
        </p>
</div>
   
    <div class="col-md-6">
    <form action="MAILTO:jejuarez88@gmail.com" method="post" enctype="text/plain">
<input type="text" name="name" value="Name"><br>
<input type="text" name="mail" value="Email"><br>
<input id="subject" type="text" name="subject" value="Subject"><br>
<textarea id="message" name="message" placeholder="Message"></textarea><br>
<input type="submit" value="Send">
<input type="reset" value="Reset">
    </form>
    </div>
</div>


<div id="map-container" style="margin-top: 30px; padding-top: 33.33%; position: relative; border: 1px solid #e7e7e7; box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);">
    <iframe id="map" src="https://www.google.com/maps/embed/v1/place?q=san%20diego%20city%20college&key=AIzaSyC-c-4P3FhPrpP08DmDmrwjG44DUE3v_LU" style="bottom: 0; height: 100%; left: 0; position: absolute; right: 0; top: 0; width: 100%; border: 0;"></iframe> 
</div>

