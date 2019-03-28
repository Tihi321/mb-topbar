<?php
/**
 * @package  MBTopbar
 */
namespace Inc\Api\Callbacks;

use Inc\Base\BaseController;
use Inc\Api\Callbacks\CallbacksHelper;

class DashboardCallbacks extends BaseController
{


	public function adminSectionManager()
	{
		echo '';
	}

	function register()
	{
    $this->callbacks_helper = new CallbacksHelper();
	}


	public function dashboardCallbckFields( $args ) {
		$name = $args['label_for'];
		$option_name = $args['option_name'];
	}

	public function textField( $args )
	{
		$name = $args['label_for'];
		$option_name = $args['option_name'];
		$options = get_option( $option_name );
		$value = isset( $options[$name] ) ? $options[$name] : "" ;


		echo '<input type="text" class="regular-text" id="' . $name . '" name="' . $option_name . '[' . $name . ']" value="' . $value . '" placeholder="' . $args['placeholder'] . '">';
  }

  public function checkboxField( $args )
	{
		$name = $args['label_for'];
		$classes = $args['class'];
		$option_name = $args['option_name'];

    $checkbox = get_option( $option_name );
    $checked = ! empty($checkbox[$name]) ?: false;

		echo $this->callbacks_helper->checkboxToggleField($classes, $checked, $option_name, $name );

	}

}
