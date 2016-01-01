---
title: "Try the New Vegan Black Bean Burger at Wendys"
description: "Wendys is testing a new vegan black bean burger at 24 locations across the US. Find out if there's one near you."
---

<html>
<head>
	<meta property="og:title" content="{{page.title}}">
	<meta property="og:type" content="website">
	<meta property="og:url" content="http://act.vegfest.org/veggie-burgers-at-wendys">
	<meta property="og:image" content="http://act.vegfest.org/veggie-burgers-at-wendys/black-bean-burger.jpg">
	<meta property="og:site_name" content="Try the New Vegan Wendys Black Bean Burger">
	<meta property="og:description" content="{{page.description}}">

  <link rel="stylesheet" href="../leaflet.css" />
	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

  <!--[if lte IE 8]>
     <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.5/leaflet.ie.css" />
  <![endif]-->
  <style type="text/css">
    body {
      padding: 0;
      margin: 0;
	    }

    html, body {
    	height: 100%;
    }
		a, a:link, a:visited, a:hover {color: #428BCA}
    	#map-div {
      height: 50%;
    }
    li {
    	list-style-type: none;
    }
    .address {
    	font-style: italic;
    	color: #555;
    	font-size: 80%;
    }
    .phone {

    }
    .desc {

    }
    .listing-item {
    	padding: 20px;
    	min-height: 200px;
    }
    .listing-alt-bg {
    	background: #f5f5f5;
    }
		.fadeout {
    position: relative;
    bottom: 4em;
    height: 4em;
    background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: -moz-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: -o-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    background-image: -ms-linear-gradient(
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
    );
}

  </style>

  <script src="../leaflet.js"></script>
  <script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
	<script src="../func.js"></script>
</head>
<body>
  <div class="row">
  	<div class="col-md-12" style="background: #2981ca; width:100%; padding: 20px 0 40px 10%">
  		<h1 style="color:#e9f2f9; text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);">{{page.title}}</h1>
  	</div>
	</div>

	<div id="map-div"></div>

	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<form accept-charset="UTF-8" action="https://formkeep.com/f/02515915d774" method="POST" class="form-inline">
					<input type="hidden" name="utf8" value="✓">

					<div class="form-group">
						<label class="sr-only" for="first_name">First Name</label>
						<input type="text" id="first_name" class="form-control" name="first_name" placeholder="First Name" required>
					</div>

					<div class="form-group">
						<label class="sr-only" for="last_name">Last Name</label>
						<input type="text" id="last_name" class="form-control" name="last_name" placeholder="Last Name" required>
					</div>

					<div class="form-group">
						<label class="sr-only" for="email">Your Email</label>
						<input type="email" id="email" class="form-control" name="email" placeholder="Your Email" required>
					</div>

					<div class="form-group">
						<label class="sr-only" for="zip_code">Zip Code</label>
						<input type="number" id="zip_code" class="form-control" name="zip_code" placeholder="Zip Code" required>
				 	</div>
					
				 <button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
		<div class="row">
	    <div class="col-md-8">
	      <h1>Wendys is testing a new vegan black bean burger at {{site.data.wendys | size}} locations across the US.</h1>
	      <h2>
	        If the black bean burger does well at these locations, Wendys may roll it out to other stores. If you live near one of these locations, please go support it.
	      </h2>
	    </div>
	    <div class="col-md-4">
	      <img src="black-bean-burger.jpg" class="img-responsive" alt="" style="padding-top:20px;" />
	    </div>
	  </div>
	      <h2 style="color:#2981ca;">Locations:</h2>
	  <ul>
	    {% for item in site.data.wendys %}
	        <li>
	          <h2><i class="fa fa-map-marker"></i> <span class="address">{{item.address}}, {{item.city}}, {{item.state}} (<a href="http://maps.google.com/?q={{item.address}}%20{{item.city}}%20{{item.state}}%20{{item.zip}}">google maps</a>)</span></h2>
	        </li>
	    {% endfor %}
		</ul>
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
	loadpoints('wendys.geojson');
});
</script>



			<script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-1111502-19', 'auto');
				ga('send', 'pageview');

			</script>
    </body>
</html>
