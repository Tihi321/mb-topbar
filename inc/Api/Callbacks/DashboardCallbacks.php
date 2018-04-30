<?php 
/**
 * @package  MBTopbar
 */
namespace Inc\Api\Callbacks;

use Inc\Base\BaseController;

class DashboardCallbacks extends BaseController
{


	public function adminSectionManager()
	{
		echo '';
	}

	function register()
	{
		
	}


	public function dashboardCallbckFields( $args ) {
		$name = $args['label_for'];
		$option_name = $args['option_name'];

		echo "koma";
	}

	public function textField( $args )
	{
		$name = $args['label_for'];
		$option_name = $args['option_name'];
		$options = get_option( $option_name );
		$value = @$options[$name] ? $options[$name] : "" ;


		echo '<input type="text" class="regular-text" id="' . $name . '" name="' . $option_name . '[' . $name . ']" value="' . $value . '" placeholder="' . $args['placeholder'] . '">';
	}

}