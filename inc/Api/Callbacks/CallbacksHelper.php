<?php
/**
 * @package  MBTopbar
 */
namespace Inc\Api\Callbacks;

class CallbacksHelper
{

    function checkboxToggleField( $classes, $checked, $option_name, $field_name, $subfield_name = "" ){

        $sub_name = ($subfield_name == "") ? "": $subfield_name;
        $sub_name_wrap = ($sub_name == "") ? "" : "[" . $sub_name . "]";

        $output = '<div class="' . $classes . '">';
        $output .= "<input type='checkbox' id='${field_name}${sub_name}' name='${option_name}[${field_name}]$sub_name_wrap' value='1'" . ( $checked ? "checked":"" ) . ">";
        $output .= "<label for=${field_name}${sub_name}><div></div></label>";
        $output .= '</span></div>';

        return $output;

    }


	public function sanitizeDashboardValues( $input )
	{
		$output = array();

    $output["wp_logo_link"] = $input["wp_logo_link"];
    $output["custom_homepage"] = isset( $input["custom_homepage"] ) ?: false;

		return $output;
    }

    public function topbarSanitize( $input )
	{

		$output = get_option('mb_topbar_list');


		if ( isset($_POST["remove"]) ) {
			unset($output[$_POST["remove"]]);

			return $output;
		}


		if ( count($output) == 0 || $output == false ) {
			$output[$input['title']] = $input;

			return $output;
		}

		foreach ($output as $key => $value) {
			if ($input['title'] === $key) {
				$output[$key] = $input;
			} else {
				$output[$input['title']] = $input;
			}
		}


		return $output;
	}

}
