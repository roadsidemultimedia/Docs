# Creating A DMS Theme #

DMS was designed from the beginning to be a 'better way' to build themes. The reason for this is that while most themes are static code, DMS is dynamic and fluid. This allows designers to build websites and then seamlessly convert them to themes with a few clicks. 

We think this is a revolutionary concept.

Once a theme is created you can then sell it on the PageLines Store or simply give it away to your site visitors as a freebie. 

## Theming Overview and Structure ##

At a high-level, creating a DMS theme is as simple as simply building an awesome website (using a child theme) and adding a configuration file. 

Although it is simple, lets go through the specifics. The basic diagram of DMS theme is below. 
 
<img src="http://docs.pagelines.com/img/theming-overview-graphic.jpg" />

As you can see, DMS themes are just a combinations of a few files that are designed to recreate a site that you've built on someone else's. 

DMS themes are treated very similar to WordPress child themes, only with a few extras to accomodate DMS features, templates and drag+drop configations. 

In practice the file structure of a DMS theme looks something like this: 

<img src="http://docs.pagelines.com/img/theming-file-structure.jpg" />

### Sections and Section API ###

Next, a large component in DMS themes is creating customized sections. 

Sections are the modular components you create that have specific styles and can be dragged and dropped by users. 

In themes, sections are simply added to the [theme root]/sections/ folder and use the standard options API. 

Read up on <a href="/developer/section-api">creating sections</a>.

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
	
```