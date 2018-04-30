<?php 
/**
 * @package  MBTopbar
 */
namespace Inc\Pages\Settings;

use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use Inc\Api\Callbacks\CallbacksHelper;
use Inc\Api\Callbacks\TopbarCallbacks;
use Inc\Api\Callbacks\TemplatesController;

/**
* 
*/
class TopbarController extends BaseController
{
	public $settings,$callbacks,$callbacks_helper,$topbar_callback;

	public $subpages = array();

	public $custom_post_types = array();

	public function register()
	{

		$this->settings = new SettingsApi();

		$this->callbacks = new TemplatesController();

		$this->topbar_callback = new TopbarCallbacks();
		$this->topbar_callback->register();

		$this->callbacks_helper = new CallbacksHelper();

		$this->setSubpages();

		$this->setSettings();

		$this->setSections();

		$this->setFields();

		$this->settings->addSubPages( $this->subpages )->register();
	}

	public function setSubpages()
	{
		$this->subpages = array(
			array(
				'parent_slug' => 'mb_topbar', 
				'page_title' => '', 
				'menu_title' => 'Showcase', 
				'capability' => 'manage_options', 
				'menu_slug' => 'mb_topbar_list_page', 
				'callback' => array( $this->callbacks, 'topbarTemplate' )
			)
		);
	}

	public function setSettings()
	{
		$args = array(
			array(
				'option_group' => 'mb_topbar_list_settings',
				'option_name' => 'mb_topbar_list',
				'callback' => array( $this->callbacks_helper, 'topbarSanitize' )
			)
		);

		$this->settings->setSettings( $args );
	}

	public function setSections()
	{
		$args = array(
			array(
				'id' => 'mb_topbar_list_page_index',
				'title' => '',
				'callback' => array( $this->topbar_callback, 'bannersSectionManager' ),
				'page' => 'mb_topbar_list_page'
			)
		);

		$this->settings->setSections( $args );
	}

	public function setFields()
	{
		$args = array(
			array(
				'id' => 'activate',
				'title' => 'Activate',
				'callback' => array( $this->topbar_callback, 'checkboxField' ),
				'page' => 'mb_topbar_list_page',
				'section' => 'mb_topbar_list_page_index',
				'args' => array(
					'option_name' => 'mb_topbar_list',
					'label_for' => 'activate',
					'class' => 'ui-toggle'
				)
			),

			array(
				'id' => 'title',
				'title' => 'Menu Name',
				'callback' => array( $this->topbar_callback, 'textField' ),
				'page' => 'mb_topbar_list_page',
				'section' => 'mb_topbar_list_page_index',
				'args' => array(
					'option_name' => 'mb_topbar_list',
					'label_for' => 'title',
					'placeholder' => '',
					'required' => 'yes',
				)
			),

			array(
				'id' => 'path',
				'title' => 'Slug',
				'callback' => array( $this->topbar_callback, 'textField' ),
				'page' => 'mb_topbar_list_page',
				'section' => 'mb_topbar_list_page_index',
				'args' => array(
					'option_name' => 'mb_topbar_list',
					'label_for' => 'path',
					'placeholder' => '/ == homepage',
					'required' => 'yes',
				)
			),

			array(
				'id' => 'link',
				'title' => 'Showcase Website',
				'callback' => array( $this->topbar_callback, 'textField' ),
				'page' => 'mb_topbar_list_page',
				'section' => 'mb_topbar_list_page_index',
				'args' => array(
					'option_name' => 'mb_topbar_list',
					'label_for' => 'link',
					'placeholder' => 'link',
					'required' => 'yes',
				)
			),
			array(
				'id' => "color",
				'title' => "Topbar Color",
				'callback' => array( $this->topbar_callback, 'colorField' ),
				'page' => 'mb_topbar_list_page',
				'section' => 'mb_topbar_list_page_index',
				'args' => array(
					'option_name' => 'mb_topbar_list',
					'label_for' => "color",
				)
			),
			
		);

		$this->settings->setFields( $args );
	}

}