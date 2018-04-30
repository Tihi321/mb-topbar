<?php 
/**
 * @package  MBTopbar
 */
namespace Inc\Pages\Settings;

use Inc\Api\SettingsApi;
use Inc\Base\BaseController;
use Inc\Api\Callbacks\CallbacksHelper;
use Inc\Api\Callbacks\DashboardCallbacks;
use Inc\Api\Callbacks\TemplatesController;

class Dashboard extends BaseController
{
	public $settings,$callbacks,$callbacks_mngr,$callbacks_hand,$callbacks_helper;

	public $pages = array();

	public function register() 
	{
		$this->settings = new SettingsApi();

		$this->callbacks = new TemplatesController();

		$this->callbacks_mngr = new DashboardCallbacks();
		$this->callbacks_mngr->register();

		$this->callbacks_helper = new CallbacksHelper();



		$this->setPages();

		$this->setSettings();
		$this->setSections();
		$this->setFields();

		$this->settings->addPages( $this->pages )->withSubPage( 'Dashboard' )->register();
	}

	public function setPages() 
	{
		$this->pages = array(
			array(
				'page_title' => 'MB Topbar', 
				'menu_title' => 'MB Topbar', 
				'capability' => 'manage_options', 
				'menu_slug' => 'mb_topbar', 
				'callback' => array( $this->callbacks, 'adminDashboard' ), 
				'icon_url' => "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS40MTQyMTsiPjxwYXRoIGQ9Ik00NDYuMzQxLDBjMTcuOTk1LDAgMzMuNDQxLDYuNDQ0IDQ2LjMzMSwxOS4zMzZjMTIuODg5LDEyLjg5MiAxOS4zMjYsMjguMzI4IDE5LjMyNyw0Ni4zMjlsMCwzODAuNjY3YzAsMTcuOTk1IC02LjQzOCwzMy40NDIgLTE5LjMzMSw0Ni4zM2MtMTIuODg5LDEyLjg5IC0yOC4zNCwxOS4zMzggLTQ2LjMzMiwxOS4zMzhsLTM4MC42NjUsMGMtMTcuOTk4LDAgLTMzLjQ0MywtNi40NDggLTQ2LjMzNiwtMTkuMzM4Yy0xMi44OTEsLTEyLjg4OCAtMTkuMzM0LC0yOC4zMzUgLTE5LjMzNCwtNDYuMzNsMCwtMzgwLjY2N2MwLC0xNy45OTcgNi40NDQsLTMzLjQ0MSAxOS4zMzQsLTQ2LjMyOWMxMi44OTMsLTEyLjg5IDI4LjMzNCwtMTkuMzM2IDQ2LjMzNiwtMTkuMzM2bDM4MC42NywwWm03LjY2OSw0MzIuNjcybDAsLTI1MC4wMDhsLTM5Ny4wMDYsLTAuMDAxbDAsMjUwLjAwN2MwLDUuNzc0IDEuOTQ0LDEwLjYxMyA1LjgzNSwxNC40OTZjMy44ODYsMy44ODggOC43MjMsNS44MzMgMTQuNSw1LjgzM2wzNTYuMzI3LDBjNS41NjIsMCAxMC4zMzIsLTEuOTQ1IDE0LjM0LC01LjgzM2MzLjk5NiwtMy44OTEgNi4wMDIsLTguNzIyIDYuMDAyLC0xNC40OTZsMCwwLjAwMmwwLjAwMiwwWm0tMzI0Ljg3NiwtMzg3LjM2NmwtNTEuNTM1LDBjLTE0LjIyMiwwIC0yNS43NjgsMTEuNTQ2IC0yNS43NjgsMjUuNzY4bDAsNTEuNTM1YzAsMTQuMjIxIDExLjU0NiwyNS43NjcgMjUuNzY4LDI1Ljc2N2w1MS41MzUsMGMxNC4yMjIsMCAyNS43NjgsLTExLjU0NiAyNS43NjgsLTI1Ljc2N2wwLC01MS41MzVjMCwtMTQuMjIyIC0xMS41NDYsLTI1Ljc2OCAtMjUuNzY4LC0yNS43NjhaIiBzdHlsZT0iZmlsbC1ydWxlOm5vbnplcm87Ii8+PC9zdmc+", 
				'position' => 110
			)
		);
	}

	public function setSettings()
	{
		$args = array(
			array(
				'option_group' => 'mb_topbar_settings',
				'option_name' => 'mb_topbar',
				'callback' => array( $this->callbacks_helper, 'sanitizeDashboardValues' )
			)
		);

		$this->settings->setSettings( $args );
	}

	public function setSections()
	{
		$args = array(
			array(
				'id' => 'alecaddd_admin_index',
				'title' => '',
				'callback' => array( $this->callbacks_mngr, 'adminSectionManager' ),
				'page' => 'mb_topbar'
			)
		);

		$this->settings->setSections( $args );
	}

	public function setFields()
	{
		$args = array();

		$args[] = array(
			'id' => "wp_logo_link",
			'title' => "Logo",
			'callback' => array( $this->callbacks_mngr, 'textField' ),
			'page' => 'mb_topbar',
			'section' => 'alecaddd_admin_index',
			'args' => array(
				'option_name' => 'mb_topbar',
				'label_for' => "wp_logo_link",
				"placeholder" => "link to logo"
			)
		);

		$this->settings->setFields( $args );
	}

}