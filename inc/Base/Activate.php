<?php
/**
 * @package  MBTopbar
 */
namespace Inc\Base;

class Activate
{
	public static function activate() {
		flush_rewrite_rules();

		$default = array();

		if ( ! get_option( 'mb_topbar' ) ) {
			update_option( 'mb_topbar', $default );
		}

		if ( ! get_option( 'mb_topbar_list' ) ) {
			update_option( 'mb_topbar_list', $default );
		}

		self::addPage();
	}

	public static function addPage() {
        // programmatically create some basic pages, and then set Home and Blog
        // setup a function to check if these pages exist
        function the_slug_exists($post_name) {
            global $wpdb;
            if($wpdb->get_row("SELECT post_name FROM wp_posts WHERE post_name = '" . $post_name . "'", 'ARRAY_A')) {
                return true;
            } else {
                return false;
            }
        }
        // create the blog page
        if (is_admin()){
            $blog_page_title = 'Blog';
            $blog_page_content = 'This is blog page placeholder. Anything you enter here will not appear in the front end, except for search results pages.';
            $blog_page_check = get_page_by_title($blog_page_title);
            $blog_page = array(
                'post_type' => 'page',
                'post_title' => $blog_page_title,
                'post_content' => $blog_page_content,
                'post_status' => 'publish',
                'post_author' => 1,
                'post_slug' => 'blog'
            );
            if(!isset($blog_page_check->ID) && !the_slug_exists('blog')){
                $blog_page_id = wp_insert_post($blog_page);
            }
        }

        // create the home page
        if (is_admin()){
            $home_page_title = 'Home';
            $home_page_content = '';
            $home_page_check = get_page_by_title($home_page_title);
            $home_page = array(
                'post_type' => 'page',
                'post_title' => $home_page_title,
                'post_content' => $home_page_content,
                'post_status' => 'publish',
                'post_author' => 1,
                'post_slug' => 'home'
            );
            if(!isset($home_page_check->ID) && !the_slug_exists('home')){
                $home_page_id = wp_insert_post($home_page);
            }
        }
        if (is_admin()){
            // Set the blog page
            $blog = get_page_by_title( 'Blog' );
            update_option( 'page_for_posts', $blog->ID );

            // Use a static front page
            $front_page = get_page_by_title( 'Home' ); // this is the default page created by WordPress
            update_option( 'page_on_front', $front_page->ID );
            update_option( 'show_on_front', 'page' );
        }
    }
}