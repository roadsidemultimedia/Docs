<div class="row-fluid">
  <div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/tutorials">Tutorials</a> <span class="divider">/</span></li>
  			<li class="active">Creating a Branding Area</li>
		</ul>
	</div>
</div>

# Creating a Branding Area #

Once you have DMS installed, once of the first things you will want to do is branding your website. Usually, these areas consist of a logo image on one side and a navigation menu and social media links on the other. In this tutorials, we will show you how to create your branding header area using nothing more than:

* 2 Column Section
* MediaBox Section with some basic HTML
* NavBar section
* TextBox Section with some basic HTML
* Some basic LESS CSS

## The Setup ##

To setup our Branding area, the first thing we want to do is enable the Visual Editor. Once active, from the DMS Toolbar click on **Add Sections**, then drag and drop the **2 Column** layout section into your header section area. 

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-2column.jpg)

Now we will change the width of the two columns, so that our naviation has more room, to this simply click on the **decrease/increase** options. For this tutorial, we will be setting the width of the left column to `4/12` and the right column to `8/12`.

![](https://raw.github.com/pagelines/Docs/master/gh-pages-template/public/img/branding-column-width.jpg)


## Adding Logo ##

For the logo image, we will be utilizing the MediaBox section. Goto **Add Sections** via the Toolbar then drag and drop the **MediaBox** section into the left hand column of the **2column** section we added above.

* Once added, click on the **Edit** icon, this will bring up the **MediaBox** options.
* In the **Text and Embed HTML** field, add the following HTML:

~~~ .html
<a class="logo" href="http://www.my-website.com/"><img src="Path To My Image" alt="My Logo"></a>
~~~

You will need to add your websites URL as well as the URL for your logo image, we have included a `logo` class, just incase you wish to add some additional styling.

* You can go through the additional **MediaBox** options to add animations, once finished, click the Publish button and refresh.
* Your logo image should now be present.

## Social Media Links ##

To integrate social media networks, we are going to utilize Font Awesome and stack icons using HTML. Click the **Edit** icon on the **TextBox** section and add the following code to add Facebook, Twitter, LinkedIn and YouTube.

BELOW CODE NOT COMPLETE

~~~ .html
<a href="#" style="color: #3B5998"><span class="icon-stack icon-2x"><i class="icon-stop icon-stack-base"></i><i class="icon-facebook icon-light"></i></span></a>
<a href="#" style="color: #00aced"><span class="icon-stack icon-2x"><i class="icon-stop icon-stack-base"></i><i class="icon-twitter icon-light"></i></span></a>
<a href="#" style="color: #0181B2"><span class="icon-stack icon-2x"><i class="icon-stop icon-stack-base"></i><i class="icon-linkedin icon-light"></i></span></a>
<a href="#" style="color: #CD332D"><span class="icon-stack icon-2x"><i class="icon-stop icon-stack-base"></i><i class="icon-youtube icon-light"></i></span></a>
~~~

You can do this for any social media networks such as GitHub, Google+ and Pinterest. For a full list of social media icons, see our branding icons section in our [Font Awesome page](http://docs.pagelines.com/tutorials/font-awesome).

COMPLETE INSTRUCTIONS

## Add Navigation ##

ADD INSTRUCTIONS FOR ADDING NAVBAR!
