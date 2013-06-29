# Creating A DMS Theme #

DMS was designed from the beginning to be a 'better way' to build themes. The reason for this is that while most themes are static code, DMS is dynamic and fluid. This allows designers to build websites and then seamlessly convert them to themes with a few clicks. 

We think this is a revolutionary concept.

Once a theme is created you can then sell it on the PageLines Store or simply give it away to your site visitors as a freebie. 

## Theming Overview and Structure ##

At a high-level, creating a DMS theme is as simple as simply building an awesome website (using a child theme) and adding a configuration file. 

Although it is simple, lets go through the specifics. The basic diagram of DMS theme is below. 
 
<img src="http://docs.pagelines.com/img/theming-overview-graphic.jpg" />

As you can see, DMS themes are just a combinations of a few files that are designed to recreate a site that you've built with a child theme. 

DMS themes are treated very similar to WordPress child themes, only with a few extras to accomodate DMS features, templates and drag+drop configations. 

In practice the file structure of a DMS theme looks something like this: 

<img src="http://docs.pagelines.com/img/theming-file-structure.jpg" />

### Theme Configuration Files ###

DMS uses a unique configuration file system to make it simple and easy to recreate your theme vision on user installs. 

*How it works:* Since DMS design is primarily database driven, this allows to create a site configuration file that adds your templates and options values when imported.

Since config files are so nifty, we've built a special tool that allows you to publish your site config (templates, global and type settings) to a file in your child theme with *one click*.

You'll find this button under 'global options' > 'import/export'. Make sure to check the 'publish to child theme' option and the file will be generated and added to your child theme on click. 
<img src="http://docs.pagelines.com/img/theming-publish-config.jpg" />


### Sections and Section API ###

Next, a large component in DMS themes is creating customized sections. 

Sections are the modular components you create that have specific styles and can be dragged and dropped by users. 

In themes, sections are simply added to the *[theme root]/sections/* folder and use the standard options API. 

Read up on <a href="/developer/section-api">creating sections</a>.

### Adding Styles with Style.less ###

... to do ...

### Adding PHP and Hooks To Your Theme ###

... to do ... 

## Adding Global Theme Options ##

Adding options to themes uses the same option API you'll find elsewhere in DMS. 

It consists of the option engine, some tab configuration information and a special function: pl_add_theme_tab().

Here is an example:
```php

$my_theme_settings = array();
$my_theme_settings['my_theme_key'] = array(
	'pos'	=> 50,					// Tab position (lower means higher)
	'name'	=> 'My Theme Name', 	// Tab name
	'icon'	=> 'icon-pagelines', 	// See 'font awesome'
	'opts'	=> array(				// Option Engine Format...
		array(
			'type' 			=> 'text',
			'title' 		=> 'Enter Something...',
			'key'			=> 'my_theme_option1',
			'label' 		=> 'Some Label',
		),
		
	)
); 

pl_add_theme_tab( $my_theme_settings );

// The values of these settings should then be accessible via pl_setting()
$val = pl_setting('my_theme_option1');

	
```