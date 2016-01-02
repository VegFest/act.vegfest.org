---
title: "Try the New Vegan Black Bean Burger at Wendys"
description: "Wendys is testing a new vegan black bean burger at 24 locations across the US. Find out if there's one near you."
---

<html>
	<head>
		<meta property="og:title" content="{{page.title}}">
		<meta property="og:type" content="article">
		<meta property="og:url" content="https://act.vegfest.org/veggie-burgers-at-wendys/">
		<meta property="og:image" content="https://act.vegfest.org/veggie-burgers-at-wendys/black-bean-burger.jpg">
		<meta property="og:site_name" content="Try the New Vegan Wendys Black Bean Burger">
		<meta property="og:description" content="{{page.description}}">

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="../style.css" />
	  <link rel="stylesheet" href="../leaflet.css" />
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">

	  <!--[if lte IE 8]>
	     <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.5/leaflet.ie.css" />
	  <![endif]-->

	  <script src="../leaflet.js"></script>
	  <script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
	  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
		<script src="../func.js"></script>
	</head>
	<body>
		<div class="container-fluid">

			<div class="row">
				<div id="campaign-header" class="col-md-12">
					<h1>{{page.title}}</h1>					
					<p>Great green globs of greasy grimy gopher guts.</p>
				</div>
			</div>

			<div class="row" id="ask">
				<div class="col-sm-4 col-sm-offset-4" id="ask-body">
					<h2>Sign our Petition!</h2>

					<p>We're great! Hooray. Sign our thing.</p>

					<form accept-charset="UTF-8" action="https://formkeep.com/f/02515915d774" method="POST" class="form">
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

						<button type="submit" class="btn btn-primary">Sign the Petition</button>					
					</form>

					<div class="privacy">
						We respect your privacy: <a href="/privacypolicy">Privacy Policy</a>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-8">
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

			<div class="row">
				<div class="col-md-12">
					<div id="map-div"></div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
		      <h2 style="color:#2981ca;">Locations:</h2>

				  <ul>
				    {% for item in site.data.wendys %}
				        <li>
				          <h2><i class="fa fa-map-marker"></i> <span class="address">{{item.address}}, {{item.city}}, {{item.state}} (<a href="http://maps.google.com/?q={{item.address}}%20{{item.city}}%20{{item.state}}%20{{item.zip}}">google maps</a>)</span></h2>
				        </li>
				    {% endfor %}
					</ul>
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
				loadpoints('wendys.geojson');
			});
		</script>

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', '{{site.google_analytics_token}}', 'auto');
			ga('send', 'pageview');
		</script>
  </body>
</html>
