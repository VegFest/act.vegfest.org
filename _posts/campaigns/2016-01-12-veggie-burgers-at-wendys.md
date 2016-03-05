---
layout: campaign_default
permalink: /veggie-burgers-at-wendys/
title: "Wendy's now offering a veggie burger in 3 states"
description: "Wendy's is currently offering a new vegan black bean burger at 24 locations across the US. Find out if there's one near you. Tell Wendy's you want vegetarian options at all their locations."
base-url: https://act.vegfest.org/veggie-burgers-at-wendys/
showprogressbar: false
showmap: true
shareimage: "https://act.vegfest.org/assets/images/veggie-burgers-at-wendys/black-bean-burger.jpg"
topheading: "Wendy's: We want veggie burgers in our town too!"
subheading: "Wendy's is testing veggie burgers at 24 locations in 3 states: Ohio, Utah, South Carolina. That's great, but we want veggie burgers at all locations."
calltoaction:
  heading: "Tell Wendy's you want veggie burgers"
  description: "Wendy's is currently testing vegan black bean burgers across the country.
  If you live near one of these locations, go buy a burger to show your support.
  We need to show Wendy's how much we want vegan options."
  shortDescription: "Sign now to tell Wendy's that we want veggie burgers everywhere."
  formURL: "https://formkeep.com/f/02515915d774"
form:
  first_name: true
  last_name: true
  zip_code: true
  address1: false
  email: false
  submit_text: "Sign the Petition"
  privacy_intro: ""

---

<div class="row" style="padding-left: 10%;padding-right: 10%;padding-bottom: 5%;">
  <div class="col-md-9">
    <h1>Do you live in Ohio, Utah or South Carolina?</h1>
    <p>
    By testing the veggie burger at these states, Wendy's is gauging the interest in vegetarian options. Based on how well the black bean burger sells at these locations, Wendy's may
    then choose to roll out vegetarian options to their other stores. So if you live near one of these
    locations, please go out to your local store and show your support. Check out the map and list of locations below.					</p>
  </div>
  <div class="col-md-3"><img src="/{{site.assets_dir}}{{site.img_dir}}black-bean-burger.jpg" class="img-responsive" alt="Wendy's Menu" style="padding-top:25px"></div>

</div>

<div class="row">
  <div class="col-md-12">
    <div id="map-div"></div>
  </div>			
</div>

<h2>Wendy's locations with the new veggie burger:</h2>

<div class="row" id="location-list">
  <div class="col-sm-4">
    <h2>Ohio</h2>
    <ul>
      {% for item in site.data.ohio %}
        <li>
          <i class="fa fa-map-marker"></i>
          <a href="http://maps.google.com/?q={{item.latitude}},{{item.longitude}}">							
            {{item.address}}, {{item.city}}, {{item.state}}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-sm-4">
    <h2>Utah</h2>
    <ul>
      {% for item in site.data.ut %}
        <li>
          <i class="fa fa-map-marker"></i>
          <a href="http://maps.google.com/?q={{item.latitude}},{{item.longitude}}">							
            {{item.address}}, {{item.city}}, {{item.state}}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
  <div class="col-sm-4">
    <h2>South Carolina</h2>
    <ul>
      {% for item in site.data.sc %}
        <li>
          <i class="fa fa-map-marker"></i>
          <a href="http://maps.google.com/?q={{item.latitude}},{{item.longitude}}">							
            {{item.address}}, {{item.city}}, {{item.state}}
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<div class="row hidden">
  <div class="col-md-2 col-md-offset-3">
    <h2>Want to see this near you?</h2>
    <p>
      Help us tell Wendy's that we want to see this new black bean burger in
      stores near us. Imagine if we all had these nearby!
    </p>
  </div>
  <div class="col-md-3">
    <img src="/{{site.assets_dir}}{{site.img_dir}}black-bean-burger.jpg" class="img-responsive" alt="Wendy's Menu">
  </div>
</div>
</div>


<script type="text/javascript">
var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: .5,
    fillOpacity: 0.8
};

var htmlContent = '';
var even = true;
var count = 0;

$(document).ready(function() {
  loadpoints('/{{site.assets_dir}}geo/wendys.geojson');
  $('#ask-body > form > button').click(function(){fbq('track', 'Lead');})
});
</script>
