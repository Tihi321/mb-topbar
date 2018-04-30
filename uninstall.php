<?php

/**
 * Trigger this file on Plugin uninstall
 *
 * @package  MBTopbar
 */

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	die;
}

// Access the database via SQL
global $wpdb;
$wpdb->query( "DELETE FROM wp_options WHERE option_name = 'mb_topbar'" );
$wpdb->query( "DELETE FROM wp_options WHERE option_name = 'mb_topbar_list'" );