<?php
/**
 * @package  MBTopbar
 */
namespace Inc\Modules\Topbar;

use Inc\Base\BaseController;

class DatabaseController extends BaseController
{
    public function getLayoutOptions(){

        $topbar_list_default = array(
			array(
                "title" => "Selection", 
                "path" => "", 
                "link" => "", 
                "color" => "#111111"
			)
        );
        $logo_link_default = $this->plugin_url."assets/front/assets/images/logo.png";
        $logo_link = (@$options["wp_logo_link"] != "") ? $options["wp_logo_link"] : $logo_link_default;
        $topbar_list_array = array();
        $options = get_option( "mb_topbar" );
        $topbar_list = get_option( "mb_topbar_list" );
        if(@$topbar_list){
            foreach ($topbar_list as $key => $value) {
                if(@$value[activate] == 1){
                    $value["path"] = ($value["path"] == "/") ? "" : $value["path"];
                    $topbar_list_array[] = $value;
                }
            }
        }
        $topbar_options = array(
            "home_url" => site_url(),
            "plugin_url" => $this->plugin_url,
            "logo_url" => $logo_link,
            "projects" => ( count($topbar_list_array) > 0 ) ? $topbar_list_array : $topbar_list_default 

        );

        return $topbar_options;

    }
}