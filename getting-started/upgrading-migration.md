<div class="row-fluid">
	<div class="span12">
		<ul class="breadcrumb">
  			<li><a href="http://docs.pagelines.com/">Docs</a> <span class="divider">/</span></li>
  			<li><a href="http://docs.pagelines.com/getting-started">Getting Started</a> <span class="divider">/</span></li>
  			<li class="active">Upgrading & Migration</li>
		</ul>
	</div>
</div>

# Upgrading & Migration #

<p>Follow the below instructions, if you plan on upgrading from PageLines Framework or migrating from a 
legacy PageLines product or third party theme.</p>

<h3>Migrating from Legacy Products</h3>

<p>Unfortunately, there is no automatic upgrade path for users of Platform or Platform Pro (or legacy themes), 
instead you will need to migrate to PageLines DMS. This means that you will need to recreate your site's design 
using the available tools and features within PageLines DMS.</p>

<p>The average site transition can take from five minutes to a few hours, depending on the volume of customization 
applied to your website. However, there are a few things you should be aware of when upgrading to make 
your transition as easy as possible.</p>

<div class="bs-callout bs-callout-info" id="callout-less-compilation">
  <h4>Database & CSS Changes</h4>
  <p>Your WordPress content, such as your categories, menus, pages, posts and tags will remain untouched upon installing 
  and activating PageLines DMS.</p>
  <p>Whilst developing PageLines DMS, it is very difficult to prevent some CSS changes from occurring. This means 
  that you may need to review your custom CSS and make some adjustments where required, to correct your custom CSS 
  rules and align them with the new elements inside Pagelines DMS.</p>
</div>

<h3>Migrating from PageLines Framework</h3>

<p>Like Platform Pro, there isn't an upgrade path and you will need to migrate. However, we have included a 
compatibility option which is located from <strong>DMS Toolbar → Global Options ↠ Advanced → Framework V2 Upgrade</strong>.</p>

<p>Using this option enables PageLines Framework backend interface and options. Not all PageLines Framework options work 
in DMS due to specificity; but it allows you to reference your old settings as you are rebuilding your site using 
the DMS system.</p>

<div class="bs-callout bs-callout-info" id="callout-less-compilation">
  <h4>CSS Changes</h4>
  <p>Migration from PageLines Framework, may require you to review your custom CSS and make adjustments, correcting your custom CSS 
  rules and align them with the new elements inside Pagelines DMS.</p>
</div>

<h3>Migration Steps</h3>

<p>The following steps can be used for Platform Pro (legacy Products), third party themes and PageLines Framework.</p>

<ul>
  <li>Back up your database.</li>
  <li>Copy any custom CSS, functions and any other code you may have added into a code editor.</li>
  <li>Move all of your widgets to the <strong>Inactive</strong> area at the bottom <strong>Appearance → Widgets</strong>.</li>
  <li>Follow these instructions on how to <a href="#installation">install PageLines DMS</a>.</li>
  <li>Re-establish your WordPress menus <strong>Appearance → Menus</strong> and click <strong>Save</strong>.</li>
  <li>Move all of your widgets back to the desired locations <strong>Appearance → Widgets</strong>.</li>
  <li>Visit each tab of the DMS Toolbar and adjust the settings to your liking, including your <a href="#adding_your_license">License key</a>.</li>
  <li>Paste your custom CSS, functions, etc, that you copied earlier back into your site.</li>
  <li>There are three ways to do this, for more information see our <a href="#how_to_customize">How to Customize</a> article.</li>
</ul>

<div class="bs-callout bs-callout-danger" id="callout-less-compilation">
  <h4>PageLines Section Plugin</h4>
  <p>We advise users migrating from PageLines Framework to DMS, to uninstall the PageLines Section plugin, 
  as this may cause issues with DMS such as section styles not loading correctly.</p>
</div>


<div class="row-fluid">
	<div class="span12">
		<ul class="pager">
			<li class="pull-left"><a href="http://docs.pagelines.com/getting-started/activation">&larr; Activation</a></li>
  			<li class="pull-right"><a href="http://docs.pagelines.com/getting-started/dashboard-account">Dashboard & Your Account &rarr;</i></a></li>
		</ul>
	</div>
</div>

