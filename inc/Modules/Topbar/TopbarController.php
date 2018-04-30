<?php
/**
 * @package  MBTopbar
 */
namespace Inc\Modules\Topbar;


use Inc\Modules\Topbar\TopbarBuilder;
use Inc\Base\BaseController;
use Inc\Modules\Base\ModulesController;

class TopbarController extends BaseController
{
    private $layout_builder,$code;
    

    function register(){
        
        $this->layout_builder = new TopbarBuilder();
        $this->layout_builder->register();
        $this->code = $this->layout_builder->getTopbarBuilderCode();

        
        if($GLOBALS['pagenow'] !== 'wp-login.php' && !is_admin()) {
            $this->registerRouteApi();
            $this->injectTopbarCode();
        }
    }

    function registerRouteApi(){
        add_action( 'rest_api_init', function () {
            register_rest_route( 'mbwp-topbar/v1', '/api', array(
                'methods' => 'GET',
                'callback' => array($this,'routeApiCallback'),
            ));
        });
    }

    function routeApiCallback() {
        return $this->code;
    }


    function injectTopbarCode(){
        ob_start();

        add_action('shutdown', function() {
            $final = '';
            
            // We'll need to get the number of ob levels we're in, so that we can iterate over each, collecting
            // that buffer's output into the final output.
            $levels = ob_get_level();

            for ($i = 0; $i < $levels; $i++) {
                $final .= ob_get_clean();
            }
            
            // Apply any filters to the final output
            echo apply_filters('final_output', $final);
        }, 0);

        add_filter('final_output', function($output) {
        
            // remove elements from output and add react element after body tag 

            $inject = '<div id="react-topbar"></div>';
            $inject .= "<script type='text/javascript' src='" . $this->plugin_url . "assets/front/js/bundle.js'></script>";
            
            $output = preg_replace('/(<(body)\b[^>]*>).*?(<\/\2>)/s', "$1" . $inject . "$3", $output);


            return $output;
        });
    }
}