# DMS Option Engine #

## About the Option Engine ##

DMS offers a very straight forward way to create options for extensions, the option engine. 

The option engine consists of a php array format that the system uses to parse and handle the options in a variety of ways. This allows us to abstract the complexities of option handling and give you a simple consistent code interface for adding your options. 

## Adding Options To Sections ##

Adding options to sections is as simple as returning the option array from the 'section_opts()' method/function of the section class. 

An example of that is as follows: 
```php

// Standard Section Class Definition
class SomeSection extends PageLinesSection {

	// Section Options Method
	function section_opts(){
		$opts = array(
			array(
				'type' 			=> 'select',
				'title' 		=> 'Select Format',
				'key'			=> 'icallout_format',
				'label' 		=> 'Callout Format',
				'opts'=> array(
					'top'			=> array( 'name' => 'Text on top of button' ),
					'inline'	 	=> array( 'name' => 'Text/Button Inline' )
				),
			)
		); 
		
		return $opts;
	}

}
```

More info on this can be found in documentation on creating sections.

## Adding Options To Themes ##

## Basic Option Attributes ##

The basic option format for simple option types like text fields is as follows. Different option types will have additional parameters you can set depending on your preference.

```php
$opts = array(); 

// Select Type Option Format
$opts[] = array(
			'type' 			=> 'text', // Option Type 
			'title' 		=> __('Super Cool Option', 'pagelines'), 	// (localized, & same as 'label' if omitted)
			'key'			=> 'some_key', // (used to get the value of the option (e.g. $this->opt('some_key')))
			'label' 		=> __('Select Cool Option', 'pagelines'), // (localized)
			'help' 			=> __('Help text goes here. How nice of you!', 'pagelines'), // (localized)
			'ref'			=> __( 'This creates a help field with a toggle.', 'pagelines' )
		);
	
```

NOTE: 
For all option types below, basic option attributes are supported but not shown.

## Basic Select Option Format ##

Selection option types have to create an array of options for users. 
Therefore, they make use of an 'opts' array with an index for each individual option.

```php
$opts[] = array(
			'type' 			=> 'select', 
			
			'opts'=> array(
				'val1'			=> array( 'name' => 'Select Option Name' ),
				'val2'	 		=> array( 'name' => 'Select Option Name' )
			),
		);
	
```

### Count Select Option Format ###
This option type can be used to create an iterated number of options. This makes it so you dont have to enter these numbers manually. 
```php
$opts[] = array(
			'type' 			=> 'count_select', 	// Option Type (select, text, textarea, etc.. ),
			'count_start'	=> 1,				// Starting Count Number
			'count_number'	=> 100,				// Ending Count Number
			'suffix'		=> '%'				// Added to the end of the value
		);
	
```

### Image Upload Options ###
Image upload options are easy! Just use the following attributes... 
```php
$opts[] = array(
			'type' 			=> 'image_upload', 	// Option Type (select, text, textarea, etc.. ),
			'imgsize' 			=> 	'16',		// The image preview 'max' size
		);
	
```

