---
---

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{headingOne}}</title>

    <link rel="stylesheet" href="/assets/stylesheets/bootstrap-3.1.0.min.css">
    <link rel="stylesheet" href="/assets/stylesheets/font-awesome-4.0.3.min.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">

    <script src="/assets/{{site.js_dir}}jquery-1.10.1.min.js"></script>
    <script src="/assets/{{site.js_dir}}bootstrap-3.1.0.min.js"></script>
  </head>
  <body class="red-veg-pattern-background">
    <div class="container-fluid" id="top-heading">
      <header class="row" id="campaign-header">
	      <div class="col-md-8 col-md-offset-2" style="background: linear-gradient(to bottom,#fff 0,#eaeaea 100%);border-radius: 5px;-webkit-box-shadow: 0 1px 9px 0 rgba(0,0,0,0.7);box-shadow: 0 1px 9px 0 rgba(0,0,0,0.7);padding:5%; margin-top  :2%;">
	        <h1>{{page.heading}}</h1>
	        <h2>{{page.subheading}}</h2>
	        <p>
	          {{page.body}}
	        </p>
	        <p class="text-center">
	          <a href="https://www.facebook.com/sharer/sharer.php?u={{page.base-url}}" class="btn btn-lg btn-secondary" type="button" name="button"><i class="fa fa-facebook"></i> Share on Facebook</a>
	          <a href="https://twitter.com/intent/tweet?&text={{page.base-url}}" class="btn btn-lg btn-secondary" type="button" name="button"><i class="fa fa-twitter"></i> Share on Twitter</a>
	        </p>
	      </div>
      </header>
    </div>
  </body>
</html>
