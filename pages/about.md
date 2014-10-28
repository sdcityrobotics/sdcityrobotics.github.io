---
layout: page
title: About SDCR
tagline: Who are we?
author: Nils Olsson
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

<div id="map-container">
  <iframe id="map" src="https://www.google.com/maps/embed/v1/place?q=san%20diego%20city%20college&key=AIzaSyC-c-4P3FhPrpP08DmDmrwjG44DUE3v_LU"></iframe> 
</div>
<style>
  #map-container {
    background-size: cover;
    height: 0;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 */
    
  #map {
    height 100%;
    width 100%;
    frameborder: 0;
    border: 0;
  }
</style>
