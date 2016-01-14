---
title: "Wendy's now offering a veggie burger in 3 states"
description: "Wendy's is currently offering a new vegan black bean burger at 24 locations across the US. Find out if there's one near you. Tell Wendy's you want vegetarian options at all their locations."
base-url: https://act.vegfest.org/veggie-burgers-at-wendys/
---

<html>
	<head>
		<title>{{page.title}}</title>

		<meta property="og:type" content="article">
		<meta property="og:url" content="{{page.base-url}}">
		<meta property="og:image" content="{{page.base-url}}black-bean-burger.jpg">
		<meta property="og:title" content="{{page.title}}">
		<meta property="og:site_name" content="{{page.title}}">
		<meta property="og:description" content="{{page.description}}">

		<meta name="twitter:card" content="summary_large_image">				
		<meta name="twitter:title" content="{{page.title}}">
		<meta name="twitter:description" content="{{page.description}}">
		<meta name="twitter:image" content="{{page.base-url}}black-bean-burger.jpg">

		<meta name="viewport" content="width=device-width, initial-scale=1">

		<link rel="stylesheet" href="/assets/stylesheets/bootstrap-3.1.0.min.css">
		<link rel="stylesheet" href="/assets/stylesheets/font-awesome-4.0.3.min.css">
		<link rel="stylesheet" href="/assets/stylesheets/opensans.css">
		<link rel="stylesheet" href="/assets/stylesheets/leaflet.css">
		<link rel="stylesheet" href="/assets/stylesheets/style.css">

		<script src="/assets/javascripts/jquery-1.10.1.min.js"></script>
		<script src="/assets/javascripts/bootstrap-3.1.0.min.js"></script>
		<script src="/assets/javascripts/bootstrap-progressbar-0.9.0.min.js"></script>
		<script src="/assets/javascripts/leaflet.js"></script>
		<script src="/assets/javascripts/func.js"></script>

	  <!--[if lte IE 8]>
	     <link rel="stylesheet" href="//cdn.leafletjs.com/leaflet-0.5/leaflet.ie.css" />
	  <![endif]-->

		<!-- Facebook Pixel Code -->
		<script>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','//connect.facebook.net/en_US/fbevents.js');

		fbq('init', '546938808800014');
		fbq('track', "PageView");</script>
		<noscript><img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=546938808800014&ev=PageView&noscript=1"
		/></noscript>
		<!-- End Facebook Pixel Code -->

	</head>
	<body>
		<div class="container-fluid" id="top-heading">
			<header class="row" id="campaign-header">  
				<h1>Wendy's: We want veggie burgers in our town too!</h1>
				<p>Wendy's is testing veggie burgers at 24 locations in 3 states: Ohio, Utah, South Carolina. That's great, but we want veggie burgers at all locations.</p>
			</header>

			<section class="row green-veg-pattern-background" id="ask">
				<div class="col-sm-4 col-sm-offset-4" id="ask-body">
					<h2>Tell Wendy's you want veggie burgers</h2>					

					<p>Wendy's is currently testing vegan black bean burgers across the country.
					If you live near one of these locations, go buy a burger to show your support.
					We need to show Wendy's how much we want vegan options.</p>
					<p>
					<div id="signature-progress" class="progress" style="display:none;">
					    <div class="progress-bar progress-bar-danger four-sec-ease-in-out" role="progressbar" data-transitiongoal="80"><span id="petition-count">4,003</span> signatures out of <span id="petition-goal">5,000</span> goal</div>
					</div>
					</p>

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
							<input type="text" id="zip_code" class="form-control" name="zip_code" placeholder="Zip Code" required>
						</div>

						<button type="submit" class="btn btn-lg btn-primary">Sign the Petition</button>					
					</form>

					<div class="privacy">
						We will contact you with news & updates.
					</div>
				</div>
			</section>

			<div class="row" style="padding-left: 10%;padding-right: 10%;padding-bottom: 5%;">
				<div class="col-md-9">
					<h1>Do you live in Ohio, Utah or South Carolina?</h1>
					<p>
					By testing the veggie burger at these states, Wendy's is gauging the interest in vegetarian options. Based on how well the black bean burger sells at these locations, Wendy's may
					then choose to roll out vegetarian options to their other stores. So if you live near one of these
					locations, please go out to your local store and show your support. Check out the map and list of locations below.					</p>
				</div>
				<div class="col-md-3"><img src="black-bean-burger.jpg" class="img-responsive" alt="Wendy's Menu" style="padding-top:25px"></div>

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
		      <img src="black-bean-burger.jpg" class="img-responsive" alt="Wendy's Menu">
		    </div>
		  </div>
		</div>

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			ga('create', '{{site.google_analytics_token}}', 'auto');
			ga('send', 'pageview');
		</script>

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
				$('#ask-body > form > button').click(function(){fbq('track', 'Lead');})
			});


		</script>






		<footer class="hidden-xs hidden-sm yellow-veg-pattern-background">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-2">
						<img src="/assets/images/VegFest-logo-black-sm.png" class="img-responsive" style="padding-top:10px;" />
					</div>

					<div class="pull-right">
						<a
							href="https://www.facebook.com/sharer/sharer.php?u={{page.base-url}}"
							class="btn btn-secondary btn-lg"
							role="button" >

							<i class="fa fa-facebook"></i>
							Share on Facebook
						</a>

						<a
							href="https://twitter.com/intent/tweet?&text={{page.base-url}}"
							class="btn btn-secondary btn-lg"
							role="button" >

							<i class="fa fa-twitter"></i>
							Share on Twitter
						</a>
					</div>
				</div>
			</div>
		</footer>
		<br><br><br><br>



		<script>
		$(document).ready(function() {
				/* get the current number of signatures and update the html of the page */
				$.getJSON( "https://signature-data-backend.herokuapp.com", function( data ) {
					$('#petition-count').html(data.totalCount);
				});

				/* show the progress bar when someone scrolls */
				$(window).scroll( function () {
					$('#signature-progress').show()
					$('.progress .progress-bar').progressbar();
					});



		});
		</script>
	</body>
</html>
