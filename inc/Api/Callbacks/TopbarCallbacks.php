<?php 
/**
 * @package  MBTopbar
 */
namespace Inc\Api\Callbacks;

use Inc\Api\Callbacks\CallbacksHelper;

class TopbarCallbacks
{
	
	public $callbacks_helper;

	public function bannersSectionManager()
	{
		echo '';
	}

	function register()
	{

		$this->callbacks_helper = new CallbacksHelper();
		
	}


	public function checkColor( $value ) { 
		
		if ( preg_match( '/^#[a-f0-9]{6}$/i', $value ) ) { // if user insert a HEX color with #     
			return true;
		}
		
		return false;
	}

	public function textField( $args )
	{
		$name = $args['label_for'];
		$option_name = $args['option_name'];
		$required = ($args['required'] == "yes")?"required":"";
		$value = '';

		if ( isset($_POST["edit_post"]) ) {
			$input = get_option( $option_name );
			$value = $input[$_POST["edit_post"]][$name];
		}

		echo '<input type="text" class="regular-text" id="' . $name . '" name="' . $option_name . '[' . $name . ']" value="' . $value . '" placeholder="' . $args['placeholder'] . '" ' . $required . '>';
	}

	public function colorField( $args )
	{
		$name = $args['label_for'];
		$option_name = $args['option_name'];
		$options = get_option( $option_name );
		$value = "";

		if ( isset($_POST["edit_post"]) ) {
			$input = get_option( $option_name );
			$value = $input[$_POST["edit_post"]][$name];
		}


		$output = '<div class="color-field-wrapper">';
		$output .= '<input type="text" class="cpa-color-picker" id="' . $name . '" name="' . $option_name . '[' . $name . ']" value="' . $value . '">';
		$output .= '</div>';

		echo $output;
	}

	public function checkboxField( $args )
	{
		$name = $args['label_for'];
		$classes = $args['class'];
		$option_name = $args['option_name'];
		$checked = false;

		if ( isset($_POST["edit_post"]) ) {
			$checkbox = get_option( $option_name );
			$checked = isset($checkbox[$_POST["edit_post"]][$name]) ?: false;
		}

		echo $this->callbacks_helper->checkboxToggleField($classes, $checked, $option_name, $name );

	}



	public function cptTable($options_list){

		echo '<table class="cpt-table"><tr><th class="name">Menu Name</th><th class="text-center small">Color</th><th class="text-center small">Active</th><th class="text-center btns">Options</th></tr>';

		foreach ($options_list as $option) {
			$active = isset($option['activate']) ? "yes" : "no";
			$color = isset($option['color']) ?$option['color'] : "#fff";

			echo "<tr><td class='name'>{$option['title']}</td><td class=\"text-center small\" style=\"background-color:{$color};\"></td><td class=\"text-center small {$active}\">{$active}</td><td class=\"text-center btns\">";

			echo '<form method="post" action="" class="inline-block">';
			echo '<input type="hidden" name="edit_post" value="' . $option['title'] . '">';
			submit_button( 'Edit', 'primary small', 'submit', false);
			echo '</form> ';

			echo '<form method="post" action="options.php" class="inline-block">';
			settings_fields( 'mb_topbar_list_settings' );
			echo '<input type="hidden" name="remove" value="' . $option['title'] . '">';
			submit_button( 'Remove', 'delete small', 'submit', false, array(
				'onclick' => 'return confirm("Are you sure you want to delete this Custom Post Type? The data associated with it will not be deleted.");'
			));
			echo '</form></td></tr>';
		}

		echo '</table>';
	}


}