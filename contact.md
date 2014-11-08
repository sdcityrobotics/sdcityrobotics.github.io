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
<div id="wrapper">
     <div id = "contact1">IMAGE GOES HERE, IMAGE GOES HERE, IMAGE GOES HERE,
     </div>
     <div id = "contact2">IMAGE GOES HERE, IMAGE GOES HERE, IMAGE GOES HERE,
     </div>
     <div id = "contact3">IMAGE GOES HERE, IMAGE GOES HERE, IMAGE GOES HERE,
     </div>
</div>
<form action="" method="post" class="STYLE-NAME">
    <h1>Contact Form 
        <span>Please fill all the texts in the fields.</span>
    </h1>
    <label>
        <span>Your Name :</span>
        <input id="name" type="text" name="name" placeholder="Your Full Name" />
    </label>
    
    <label>
        <span>Your Email :</span>
        <input id="email" type="email" name="email" placeholder="Valid Email Address" />
    </label>
    
    <label>
        <span>Message :</span>
        <textarea id="message" name="message" placeholder="Your Message to Us"></textarea>
    </label> 
     <label>
        <span>Subject :</span><select name="selection">
        <option value="Job Inquiry">Job Inquiry</option>
        <option value="General Question">General Question</option>
        </select>
    </label>    
     <label>
        <span>&nbsp;</span> 
        <input type="button" class="button" value="Send" /> 
    </label>    
</form>

<div id="map-container" style="margin-top: 30px; padding-top: 33.33%; position: relative; border: 1px solid #e7e7e7; box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);">
    <iframe id="map" src="https://www.google.com/maps/embed/v1/place?q=san%20diego%20city%20college&key=AIzaSyC-c-4P3FhPrpP08DmDmrwjG44DUE3v_LU" style="bottom: 0; height: 100%; left: 0; position: absolute; right: 0; top: 0; width: 100%; border: 0;"></iframe> 
</div>

