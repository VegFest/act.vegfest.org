---
title: "Try the New Vegan Black Bean Burger at Wendy's"
description: "Wendy's is testing a new vegan black bean burger at 24 locations across the US. Find out if there's one near you."
---

<html>
	<head>
		<meta property="og:type" content="article">
		<meta property="og:url" content="https://act.vegfest.org/veggie-burgers-at-wendys/">
		<meta property="og:image" content="https://act.vegfest.org/veggie-burgers-at-wendys/black-bean-burger.jpg">
		<meta property="og:site_name" content="Try the New Vegan Wendys Black Bean Burger">
		<meta property="og:site_name" content="{{page.title}}">
		<meta property="og:description" content="{{page.description}}">

		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,800' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" />
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet">
		<link rel="stylesheet" href="../leaflet.css" />
		<link rel="stylesheet" href="../style.css" />

	  <!--[if lte IE 8]>
	     <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.5/leaflet.ie.css" />
	  <![endif]-->

	  <script src="../leaflet.js"></script>
	  <script src="//code.jquery.com/jquery-1.10.1.min.js"></script>
	  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.0/js/bootstrap.min.js"></script>
		<script src="../func.js"></script>
	</head>
	<body>
		<div class="container-fluid" id="top-heading">
			<header class="row" id="campaign-header">  
				<h1>Wendy's: We want veggie burgers in our town too!</h1>
				<p>Wendy's is testing veggie burgers at 24 locations in 3 states: Ohio, Utah, South Carolina. That's great, but we want veggie burgers at all locations.</p>
			</header>

			<section class="row" id="ask">
				<div class="col-sm-4 col-sm-offset-4" id="ask-body">
					<h2>Tell Wendy's you want veggie burgers</h2>					

					<p>Wendy's is currently testing vegan black bean burgers at 24 locations across the country. If you live in Ohio, Utah or South Carolina, go buy a burger to show your support. We need to show Wendy's how much we want vegan options.</p>
					<p><strong>Sign now to tell Wendy's that we want veggie burgers everywhere.</strong></p>

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

						<button type="submit" class="btn btn-lg btn-primary">Sign the Petition</button>					
					</form>

					<div class="privacy">
						We respect your privacy: <a href="/privacypolicy">Privacy Policy</a>
					</div>
				</div>
			</section>

			<div class="row">
				<div class="col-md-12">
					<div id="map-div"></div>
				</div>			
				<div class="hidden">
					<h2>Go get the new veggie burger!</h2>
					<p>
						Do you live near a Wendy's that is testing the burger? Find out below!
						Go visit your local Wendy's and support this initiative. Buy a tasty new
						burger!
					</p>
					<p>
						If the black bean burger does well at these locations, Wendy's may
						roll it out to other stores. If you live near one of these
						locations, please go support it.
					</p>
				</div>
			</div>

			<div class="row">
				<div class="col-md-4">
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
				<div class="col-md-4">
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
				<div class="col-md-4">
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
		      <img src="black-bean-burger.jpg" class="img-responsive" alt="Wendy's Menu">
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
